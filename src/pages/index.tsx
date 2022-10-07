import React from "react";
import Page from "@site/src/components/Page";
import { Avatar, Box, Divider, Fade, Grid, Stack, Typography } from "@mui/material";
import { display } from "@mui/system";
import { IoIosHeart, IoMdAlert, IoMdHeart, IoMdPulse } from "react-icons/io";
import Spacer from "../components/Spacer";

export default function Home() {
    return (
        <Page>
            <Box>
                <Fade in timeout={250}>
                    <Grid container direction="row" margin="auto">
                        <Grid item xs={7} textAlign="left">
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
                            <Typography variant="h4">
                                Real-time monitoring and incident management platform for you websites and services.
                            </Typography>
                        </Grid>

                        <Grid item xs={5} textAlign="center">
                            <Typography
                                sx={{
                                    fontSize: 168,
                                }}
                            >
                                🚀
                            </Typography>
                        </Grid>
                    </Grid>
                </Fade>
            </Box>

            <Spacer />

            <Fade in timeout={250} style={{ transitionDelay: `100ms` }}>
                <Stack sx={{ marginTop: 8 }} spacing={2}>
                    <Typography variant="h5">What can you do with opsway?</Typography>

                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        sx={{
                            padding: 0,
                        }}
                    >
                        <Grid item xs={12} md={3} textAlign="left">
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar sx={{ backgroundColor: (t) => t.palette.success.main }}>
                                        <IoMdPulse />
                                    </Avatar>
                                    <Typography variant="h6">Real-time monitoring</Typography>
                                </Stack>

                                <Typography>
                                    We monitor your websites and services in real-time and alert you when something goes
                                    wrong.
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar sx={{ backgroundColor: (t) => t.palette.warning.main }}>
                                        <IoMdAlert />
                                    </Avatar>
                                    <Typography variant="h6">Incident management</Typography>
                                </Stack>

                                <Typography>
                                    We help you to manage incidents and keep your team up-to-date with the latest
                                    status.
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar sx={{ backgroundColor: (t) => t.palette.info.main }}>
                                        <IoMdPulse />
                                    </Avatar>
                                    <Typography variant="h6">On-call</Typography>
                                </Stack>

                                <Typography>
                                    We help you to manage on-call schedules and notify your team when they need to take
                                    action.
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} md={3} textAlign="left">
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar sx={{ backgroundColor: (t) => t.palette.text.primary }}>
                                        <IoMdPulse />
                                    </Avatar>
                                    <Typography variant="h6">Status pages</Typography>
                                </Stack>

                                <Typography>
                                    We help you to keep your customers up-to-date with the latest status of your
                                    services and maintenance windows.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Fade>

            {/* <Fade in timeout={250} style={{ transitionDelay: `200ms` }}>
                <Stack sx={{ marginTop: 8 }} spacing={2}>
                    <Typography variant="h5" display="flex" alignItems="center">
                        Integrates with services you already love{" "}
                        <IoIosHeart
                            style={{
                                marginLeft: 8,
                                color: "#ea7663",
                            }}
                        />
                    </Typography>

                    <Grid container gap={4}>
                        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" />
                        <Avatar src="https://sparkcdnwus2.azureedge.net/sparkimageassets/XPDC2RH70K22MN-08afd558-a61c-4a63-9171-d3f199738e9f" />
                        <Avatar src="https://cdn.worldvectorlogo.com/logos/grafana.svg" />
                        <Avatar src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" />
                        <Avatar src="https://cdn.worldvectorlogo.com/logos/microsoft-teams.svg" />
                    </Grid>
                </Stack>
            </Fade> */}
        </Page>
    );
}
