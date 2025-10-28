import * as React from "react"
import { Grid, Typography } from "@mui/material"
import { ArticleInfo, TagsChips, Image, ShareSocialMedia, ContacUs, Seo } from "../components"
import { graphql } from "gatsby"
import { fronmatter, MarkdownRemark } from "../commons/types/types"


type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const BlogPostTemplate = ({ data }: Props) => {
  const { title, date, tags } = data.markdownRemark.frontmatter
  const { slug, readingTime } = data.markdownRemark.fields


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


      <ArticleInfo author={author} postDate={formattedDate} readingTime={readingTime ?? 0} />

      <section
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html ?? "" }}
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
    frontmatter: fronmatter
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
  }`;
export default BlogPostTemplate
