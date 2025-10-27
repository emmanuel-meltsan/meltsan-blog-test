import * as React from "react"
import { graphql } from "gatsby"
import { Grid, Typography } from "@mui/material"
import { ArticleInfo, TagsChips, Image, ShareSocialMedia, ContacUs, Seo } from "../components"


type BlogPostData = {
  markdownRemark: {
    html: string
    fields: {
      slug: string
      readingTime: number
    }
    frontmatter: {
      title: string
      date: string
      tags: string[]
    }
  }
}

type Props = {
  data: BlogPostData
}

const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const { markdownRemark } = data
  const { title, date, tags } = markdownRemark.frontmatter
  const { slug, readingTime } = markdownRemark.fields

  const formattedDate = new Date(date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const author = "EQUIPO MELTSAN";

  return (
    <div>

      <Grid container alignItems="center" justifyContent="center">
        <Grid>
          <Typography variant="h3">{title}</Typography>
        </Grid>
      </Grid>


      <ArticleInfo author={author} postDate={formattedDate} readingTime={readingTime} />

      <section
        dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        itemProp="articleBody"
      />
      <ShareSocialMedia url={`https://meltsan.com${slug}`} title={title} hashtags={tags} />


      <hr />
      <footer>
        <ContacUs />
      </footer>

    </div>
  )
}

type postData = {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
    }
    excerpt: string
  }
}

export const Head = ({ data: { markdownRemark: post } }: { data: postData }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
        readingTime
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
      }
    }
  }
`

export default BlogPostTemplate
