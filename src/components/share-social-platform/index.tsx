import React, { useState } from "react";
import { Box, IconButton, Tooltip, Typography, Button, Snackbar } from "@mui/material";
import { Twitter, Facebook, LinkedIn, ShareRounded } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";

type ShareProps = {
    url: string;
    title?: string;
    hashtags?: string[];
};

const ShareSocialMedia = ({ url, title = "", hashtags = [] }: ShareProps) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setOpenSnackbar(true);
    };

    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
    )}&text=${encodeURIComponent(title)}&hashtags=${hashtags.join(",")}`;

    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
    )}&title=${encodeURIComponent(title)}`;

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    const socials = [
        { name: "Twitter", url: twitterUrl, icon: <Twitter /> },
        { name: "LinkedIn", url: linkedinUrl, icon: <LinkedIn /> },
        { name: "Facebook", url: facebookUrl, icon: <Facebook /> },
        { name: "Instagram", icon: <InstagramIcon />, onClick: handleCopy }, // Instagram copia el link
    ];

    return (
        <>
            <Box display="flex" gap={1} alignItems="center">
                <Typography>Compartir</Typography>

                {socials.map((social) => (
                    <Tooltip key={social.name} title={`Compartir en ${social.name}`}>
                        <IconButton
                            component={social.url ? "a" : "button"}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={social.onClick}
                            color="primary"
                        >
                            {social.icon}
                        </IconButton>
                    </Tooltip>
                ))}

                {/* Botón Copiar extra si quieres */}
                <Button
                    variant="outlined"
                    startIcon={<ShareRounded />}
                    onClick={handleCopy}
                >
                    Copiar enlace
                </Button>
            </Box>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                message="Enlace copiado al portapapeles"
            />
        </>
    );
};

export default ShareSocialMedia;
