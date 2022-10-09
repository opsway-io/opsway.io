import React from "react";
import Page from "@site/src/components/Page";
import { Avatar, Box, Button, Card, CardContent, Fade, Grid, Stack, Typography } from "@mui/material";
import { IoMdAlert, IoMdPulse } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import Spacer from "../components/Spacer";
import { NavLink } from "react-router-dom";
export default function Home() {
    return (
        <Page>
            <Box>
                <Fade in timeout={250}>
                    <Grid container direction="row" margin="auto">
                        <Grid item xs={12} md={7} textAlign="left">
                            <Typography
                                sx={{
                                    fontSize: 64,
                                    lineHeight: 1.2,
                                    fontWeight: 700,
                                    display: "inline",
                                    color: (t) => t.palette.success.main,
                                }}
                            >
                                Open Source
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 64,
                                    lineHeight: 1.2,
                                    fontWeight: 700,
                                    marginBottom: 4,
                                }}
                            >
                                Operations Platform
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    marginBottom: 4,
                                }}
                            >
                                Real-time monitoring and incident management platform for you websites and services.
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" color="success" size="large" component="a" href="/login">
                                    Get Started for free
                                </Button>
                                <Button variant="outlined" color="primary" size="large" component={NavLink} to="/docs">
                                    Documentation
                                </Button>
                            </Stack>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={5}
                            sx={{
                                display: {
                                    xs: "none",
                                    md: "flex",
                                },
                                justifyContent: "center",
                                alignItems: "center",
                                animation: "shake 0.5s",
                                animationIterationCount: "infinite",
                            }}
                        >
                                <img src="/img/rocket.svg" height={250} />
                        </Grid>
                    </Grid>
                </Fade>
            </Box>

            <Spacer />

            <Fade in timeout={250} style={{ transitionDelay: `100ms` }}>
                <Stack>
                    <Typography
                        variant="h4"
                        sx={{
                            marginBottom: 4,
                        }}
                    >
                        What can you do with opsway?
                    </Typography>

                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        sx={{
                            padding: 0,
                        }}
                    >
                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Avatar sx={{ backgroundColor: (t) => t.palette.success.main }}>
                                                <IoMdPulse />
                                            </Avatar>
                                            <Typography variant="h6">Real-time monitoring</Typography>
                                        </Stack>

                                        <Typography>
                                            We monitor your websites and services in real-time and alert you when
                                            something goes wrong.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Avatar sx={{ backgroundColor: (t) => t.palette.warning.main }}>
                                                <IoMdAlert />
                                            </Avatar>
                                            <Typography variant="h6">Incident management</Typography>
                                        </Stack>

                                        <Typography>
                                            We help you to manage incidents and keep your team up-to-date with the
                                            latest status.
                                        </Typography>
                                    </Stack>{" "}
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Avatar sx={{ backgroundColor: (t) => t.palette.info.main }}>
                                                <ImPhone />
                                            </Avatar>
                                            <Typography variant="h6">On-call</Typography>
                                        </Stack>

                                        <Typography>
                                            We help you to manage on-call schedules and notify your team when they need
                                            to take action.
                                        </Typography>
                                    </Stack>{" "}
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <Avatar sx={{ backgroundColor: (t) => t.palette.text.primary }}>
                                                <CgWebsite />
                                            </Avatar>
                                            <Typography variant="h6">Status page</Typography>
                                        </Stack>

                                        <Typography>
                                            We help you to keep your customers up-to-date with the latest status.
                                        </Typography>
                                    </Stack>{" "}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Fade>

            <Spacer />

            <Fade in timeout={250} style={{ transitionDelay: `200ms` }}>
                <Stack>
                    <Typography variant="h4">Integrates with your workflow</Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            marginBottom: 4,
                        }}
                    >
                        We integrate with the open source and developer tools you already use.
                    </Typography>

                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        sx={{
                            padding: 0,
                        }}
                    >
                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <img
                                                height={42}
                                                src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                                            />
                                            <Typography variant="h6">GitHub</Typography>
                                        </Stack>

                                        <Typography>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, qui!
                                            Sunt, suscipit tempore.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <img
                                                height={42}
                                                src="https://cdn.worldvectorlogo.com/logos/prometheus.svg"
                                            />
                                            <Typography variant="h6">Prometheus</Typography>
                                        </Stack>

                                        <Typography>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, qui!
                                            Sunt, suscipit tempore.{" "}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <img
                                                height={42}
                                                src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
                                            />
                                            <Typography variant="h6">Slack</Typography>
                                        </Stack>

                                        <Typography>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, qui!
                                            Sunt, suscipit tempore.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <img
                                                height={42}
                                                src="https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg"
                                            />
                                            <Typography variant="h6">Microsoft Teams</Typography>
                                        </Stack>

                                        <Typography>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, qui!
                                            Sunt, suscipit tempore.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <img height={42} src="https://cdn.worldvectorlogo.com/logos/discord.svg" />
                                            <Typography variant="h6">Discord</Typography>
                                        </Stack>

                                        <Typography>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, qui!
                                            Sunt, suscipit tempore.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Card>
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={2} alignItems="center">
                                            <img height={42} src="https://cdn.worldvectorlogo.com/logos/webhooks.svg" />
                                            <Typography variant="h6">Webhooks</Typography>
                                        </Stack>

                                        <Typography>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, qui!
                                            Sunt, suscipit tempore.
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>
            </Fade>
        </Page>
    );
}
