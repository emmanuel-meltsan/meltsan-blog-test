import * as React from "react"
import { ArticleInfo } from "../../components";
import { red } from "@mui/material/colors";
import { Grid, Typography } from "@mui/material";


const BlogPostTemplate = () => {

    return (

        <div style={{ width: "min(800px, 100%)", borderBlockColor: "red" }}>

            <Grid container alignItems={'center'} justifyContent={'center'}>
                <Grid>
                    <Typography component='p' variant="h2">
                        Guía Práctica: Implementación de Procesos KYC Eficientes
                    </Typography>
                </Grid>
            </Grid>

            <ArticleInfo author="Equipo MELTSAN" postDate="2025-12-23" readingTime={12}>
            </ArticleInfo>
        </div>
    );

}
export default BlogPostTemplate;