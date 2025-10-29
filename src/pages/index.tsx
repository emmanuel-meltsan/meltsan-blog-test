import * as React from "react";
import { graphql } from "gatsby"
import { Grid } from "@mui/material"
import { MarkdownRemark } from "../commons/types/types";
import { BlogGallery, Banner } from "../components";

type Props = {
  data: {
    allMarkdownRemark: {
      nodes: MarkdownRemark[]
    }
  }
};

const Allpost = ({ data }: Props) => {
  const posts = data.allMarkdownRemark.nodes;

  return (

    <Grid sx={{ width: "85%", margin: "0 auto", }} container spacing={3} direction="row">

      <Banner />
      <BlogGallery posts={posts} />
    </Grid>
  )
}


export default Allpost;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          tags 
          
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 450,height: 200 , layout: CONSTRAINED)
          }
        }          
        }
      }
    }
  }
`
