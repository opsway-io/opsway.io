import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import { IoIosArrowForward, IoIosMenu } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    return (
        <Box>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: "none", md: "initial" } }}>
                        <NavLink to="/">
                            <img
                                src="img/logo_wide.svg"
                                alt="logo"
                                style={{ height: 24, marginRight: 32, marginBottom: -8 }}
                            />
                        </NavLink>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" onClick={handleOpenNavMenu}>
                            <IoIosMenu />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuItem component={NavLink} to="/product">
                                <Typography textAlign="center">Product</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, justifyContent: "center", display: { xs: "flex", md: "none" } }}>
                        <NavLink to="/">
                            <img src="img/logo_wide.svg" alt="logo" style={{ height: 18, marginBottom: -4 }} />
                        </NavLink>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex", gap: 16, opacity: 0.75 },
                            ".active": {
                                backgroundColor: (t) => t.palette.action.selected,
                                color: (t) => t.palette.success.main,
                            },
                        }}
                    >
                        <Button component={NavLink} to="/" exact>
                            Overview
                        </Button>
                        <Button component={NavLink} to="/monitoring" exact>
                            Monitoring
                        </Button>
                        <Button component={NavLink} to="/incident-management" exact>
                            Incident Management
                        </Button>
                        <Button component={NavLink} to="/pricing" exact>
                            Pricing
                        </Button>
                        <Button component={NavLink} to="/docs" exact>
                            Documentation
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                        <Tooltip title="Open settings">
                            <Button component={"a"} href="/login" variant="outlined" endIcon={<IoIosArrowForward />}>
                                Dashboard
                            </Button>
                        </Tooltip>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: "block", md: "none" } }}>
                        <IconButton size="large" component={"a"} href="/login">
                            <MdDashboard />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            <Divider
                sx={{
                    opacity: 0.1,
                }}
            />
        </Box>
    );
};
export default Navbar;
