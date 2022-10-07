import { Container, Grid, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            style={{
                flex: 1,
                backgroundColor: "#2d3341",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    paddingTop: 4,
                    opacity: 0.75,
                }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6">Open source</Typography>
                        <Typography variant="body1">
                            opsway is an open source project. You can find the source code on{" "}
                            <a href="" style={{ color: "#fff" }}>
                                GitHub
                            </a>
                            .
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6">Company</Typography>
                        <Typography variant="body1">About</Typography>
                        <Typography variant="body1">Blog</Typography>
                        <Typography variant="body1">Contact</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6">Resources</Typography>
                        <Typography variant="body1">Documentation</Typography>
                        <Typography variant="body1">Status</Typography>
                        <Typography variant="body1">Terms of Service</Typography>
                        <Typography variant="body1">Privacy Policy</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h6">Community</Typography>
                        <Typography variant="body1">GitHub</Typography>
                        <Typography variant="body1">Twitter</Typography>
                        <Typography variant="body1">Discord</Typography>
                    </Grid>
                </Grid>

                <Typography
                    variant="body1"
                    sx={{
                        opacity: 0.5,
                    }}
                >
                    Copyright © {year} opsway. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
