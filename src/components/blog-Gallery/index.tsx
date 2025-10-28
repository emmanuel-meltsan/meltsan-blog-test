import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Card, CardContent, Grid, Typography, Chip } from "@mui/material"
import { MarkdownRemark } from "../../commons/types/types";

type Props = {

    posts: MarkdownRemark[]
}

const BlogGallery = ({ posts }: Props) => {

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
                                    style={{ borderRadius: 4, marginBottom: 4 }}
                                />
                            )}
                            <Typography
                                variant="h6"
                                component={Link}
                                to={post.fields.slug}
                                sx={{ textDecoration: "none", color: "inherit", justifyContent: "center" }}
                            >
                                {
                                    post.frontmatter.title.length > 60
                                        ? `${post.frontmatter.title.slice(0, 60)}...`
                                        : post.frontmatter.title
                                }
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {
                                    post.frontmatter.description.length > 150
                                        ? `${post.frontmatter.description.slice(0, 150)}...`
                                        : post.frontmatter.description
                                }
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                                {post.frontmatter.tags?.slice(0, 4).map(tag => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        size="small"
                                        sx={{ mr: 1.8, mb: 0.2 }}
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

export default BlogGallery;

