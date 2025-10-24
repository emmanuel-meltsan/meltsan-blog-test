import * as React from "react"
import { ArticleInfo, TagsChips, Image, ShareSocialMedia, ContacUs } from "../../components";
import { Grid, Typography } from "@mui/material";
import { graphql } from "gatsby";

type BlogPostData = {
  markdownRemark: {
    html: string;
    fields: { slug: string };
    frontmatter: {
      title: string;
      author: string;
      date: string;
      tags: string[];
      readingTime: number;
      image: string;
    };
  };
};

type Props = {
  data: BlogPostData;
};

const BlogPostTemplate = ({ data }: Props) => {
  const { markdownRemark } = data
  const { title, date, author, tags, readingTime, image } = markdownRemark.frontmatter

  const actualPostdate = new Date(Date.now())
  const formattedDate = actualPostdate.toLocaleDateString("es-MX", {
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

      <TagsChips tags={tags} />
      <ArticleInfo author={author} postDate={formattedDate} readingTime={readingTime} />
      <Image path={image} />

      <ShareSocialMedia
        url={`https://meltsan.com${markdownRemark.fields.slug}`}
        title={title}
        hashtags={tags}
      />
      <section
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        itemProp="articleBody"
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
      fields { slug }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        tags
        readingTime
        image
      }
    }
  }
`

export default BlogPostTemplate
