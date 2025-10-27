import * as React from "react";
import BlogPostTemplate from "../templates/blog-post/blog-post";
import { graphql, Link } from "gatsby"
import { Box, Card, CardContent, Grid, Typography, Chip } from "@mui/material"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type BlogPostNode = {
    fields: {
        slug: string
    }
    frontmatter: {
        title: string
        description?: string
        tags?: string[]
        featuredImage?: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData
            }
        }

    }
    excerpt: string
}

type BlogGalleryProps = {
    data: {
        allMarkdownRemark: {
            nodes: BlogPostNode[]
        }
    }
}

const Allpost = ({ data }: BlogGalleryProps) => {
    const posts = data.allMarkdownRemark.nodes

    return (

        <Grid sx={{ width: "85%", margin: "0 auto", }} container spacing={3} direction="row">
            {posts.map(post => (
                <Grid size={4} key={post.fields.slug}>
                    <Card elevation={1} sx={{ padding: 2, height: '100%' }}>
                        <CardContent sx={{ width: "100%", alignItems: "center" }}>
                            {post.frontmatter.featuredImage && (
                                <GatsbyImage
                                    image={getImage(post.frontmatter.featuredImage)!}
                                    alt={post.frontmatter.title}
                                    style={{ borderRadius: 8, marginBottom: 16 }}
                                />
                            )}

                            <Typography
                                variant="h6"
                                component={Link}
                                to={post.fields.slug}
                                sx={{ textDecoration: "none", color: "inherit" }}
                            >
                                {post.frontmatter.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" paragraph>
                                {post.frontmatter.description || post.excerpt}
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                                {post.frontmatter.tags?.map(tag => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        size="small"
                                        sx={{ mr: 0.5, mb: 0.5 }}
                                    />
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
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
            gatsbyImageData(width: 450,height: 300 , layout: CONSTRAINED)
          }
        }


          
          
        }
      }
    }
  }
`
