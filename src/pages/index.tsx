import * as React from "react";
import BlogPostTemplate from "../templates/blog-post/blog-post";
import { graphql, Link } from "gatsby"
import { Box, Card, CardContent, Grid, Typography, Chip } from "@mui/material"

type BlogPostNode = {
    fields: {
        slug: string
    }
    frontmatter: {
        title: string
        description?: string
        tags?: string[]
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
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={3}>
                {posts.map(post => (
                    <Grid size={12} key={post.fields.slug}>
                        <Card sx={{ height: "100%" }}>
                            <CardContent>
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
        </Box>
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
        }
      }
    }
  }
`
