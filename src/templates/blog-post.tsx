import * as React from "react"
import { Box, Chip, Grid, Typography } from "@mui/material"
import { ArticleInfo, ShareSocialMedia, ContacUs, Seo, BackButton, TableOfContents } from "../components"
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
    <Grid container spacing={4}>
      <Grid size={7} sx={{ mt: 5, marginLeft: "auto" }}>
        <Box mb={3}>
          <BackButton />

        </Box>
        <Box sx={{ margin: 1 }}>
          {tags?.map(tag => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{ mr: 1.8, mb: 0.2 }}
            />
          ))}
        </Box>

        <Grid container alignItems="center" justifyContent="center" sx={{ mb: 2 }}>
          <Grid>
            <Typography variant="h4" fontWeight={600}>{title}</Typography>
          </Grid>
        </Grid>
        <Grid mb={2}>
          <ArticleInfo author={author} postDate={formattedDate} readingTime={readingTime ?? 0} />

        </Grid>

        <section
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html ?? "" }}
          itemProp="articleBody"
          style={{ textAlign: "justify" }}

        />
        <ShareSocialMedia url={`https://meltsan.com${slug}`} title={title} hashtags={tags} />

        <footer>
          <ContacUs />
        </footer>

      </Grid>
      <Grid size={3} marginTop={11}>
        <TableOfContents tableOfContents={data.markdownRemark.tableOfContents} />
      </Grid>
    </Grid >


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
      tableOfContents(maxDepth: 2)  
    }
  }`;
export default BlogPostTemplate
