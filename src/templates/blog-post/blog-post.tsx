import * as React from "react"
import { ArticleInfo, TagsChips, Image, ShareSocialMedia } from "../../components";
import { Grid, Typography } from "@mui/material";

const BlogPostTemplate = () => {

    return (

        <div style={{ borderColor: "red" }}>

            <Grid container alignItems={'center'} justifyContent={'center'}>
                <Grid>
                    <Typography variant="h3">
                        Guía Práctica: Implementación de Procesos KYC Eficientes
                    </Typography>
                </Grid>
            </Grid>
            <TagsChips tags={["Guías Prácticas", "KYC", "Verificación", "Onboarding", "Due Diligence"]} />
            <ArticleInfo author="Equipo MELTSAN" postDate="2025-12-23" readingTime={12} />
            <Image path={"/images/aml-infographic.jpg"} />

            <ShareSocialMedia
                url="https://miweb.com/post/123"
                title="Mira este post increíble"
                hashtags={["Blog", "React", "Tutorial"]}
            />

        </div>
    );

}
export default BlogPostTemplate;