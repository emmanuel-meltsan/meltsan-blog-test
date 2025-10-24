import * as React from "react"
import { graphql } from "gatsby"
import { Grid, Typography } from "@mui/material"
import { ArticleInfo, TagsChips, Image, ShareSocialMedia, ContacUs } from "../components"

type BlogPostData = {
  markdownRemark: {
    html: string
    fields: {
      slug: string
      readingTime: number
    }
    frontmatter: {
      title: string
      author: string
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
  const { title, date, author, tags } = markdownRemark.frontmatter
  const { slug, readingTime } = markdownRemark.fields

  const formattedDate = new Date(date).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

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
      <ShareSocialMedia
        url={`https://meltsan.com${"slug"}`}
        title={title}
        hashtags={tags}
      />

      <hr />
      <ContacUs />
    </div>
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
        author
        tags
      }
    }
  }
`

export default BlogPostTemplate
