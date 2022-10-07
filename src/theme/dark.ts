import { alpha, createTheme } from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows";

const shadows = new Array(25).fill("none") as Shadows;
// shadows[1] = "0px 0px 6px -2px rgba(0,0,0,0.2)";
// shadows[2] = "0px 0px 6px 0px rgba(0,0,0,0.2)";

const theme = createTheme({
    shape: {
        borderRadius: 4,
    },
    shadows: shadows,
    palette: {
        mode: "dark",
        primary: {
            main: "#eee",
            contrastText: "#333",
        },
        secondary: {
            main: "#4F759B",
            contrastText: "#fff",
        },
        text: {
            primary: "#ddd",
            secondary: "#ccc",
        },
        info: {
            main: "#4F759B",
            contrastText: "#fff",
        },
        warning: {
            main: "#F4AC45",
            contrastText: "#121826",
        },
        error: {
            main: "#ea7663",
            contrastText: "#fff",
        },
        success: {
            main: "#84be79",
            contrastText: "#fff",
        },
        background: {
            default: "#222837",
            paper: "#222837",
        },
    },
    typography: {
        fontFamily: "Inter",
        button: {
            textTransform: "none",
        },
        h1: {
            fontWeight: 500,
        },
        h2: {
            fontWeight: 500,
        },
        h3: {
            fontWeight: 500,
        },
        h4: {
            fontWeight: 500,
        },
        h5: {
            fontWeight: 500,
        },
        h6: {
            fontWeight: 500,
        },
        body1: {
            fontSize: "0.9rem",
        },
        body2: {
            fontSize: "1rem",
        },
    },
    transitions: {
        duration: {
            standard: 100,
            enteringScreen: 100,
            leavingScreen: 100,
            short: 75,
            shorter: 50,
            shortest: 25,
        },
    },
});

theme.components = {
    MuiAvatar: {
        defaultProps: {
            variant: "rounded",
        },
    },
    MuiMenu: {
        styleOverrides: {
            paper: {
                backgroundColor: theme.palette.background.paper,
            },
        },
    },
    MuiPaper: {
        defaultProps: {
            elevation: 0,
        },
    },
    MuiCard: {
        defaultProps: {
            elevation: 1,
        },
    },
    MuiCardHeader: {
        styleOverrides: {
            root: {
                paddingBottom: 0,
            },
            title: {
                fontSize: theme.typography.h6.fontSize,
            },
            subheader: {
                color: alpha(theme.palette.text.primary, 0.75),
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: theme.shape.borderRadius,
            },
        },
    },
    MuiRadio: {
        defaultProps: {
            color: "info",
        },
    },
    MuiSkeleton: {
        defaultProps: {
            animation: "pulse",
        },
    },
    MuiInputBase: {
        defaultProps: {
            size: "small",
        },
        styleOverrides: {
            root: {
                background: theme.palette.background.default,
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                "&:-webkit-autofill": {
                    WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`,
                    WebkitTextFillColor: theme.components?.MuiInputBase?.defaultProps?.color,
                    borderRadius: "initial",
                },
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                borderRadius: theme.shape.borderRadius,
            },
        },
    },
    MuiButton: {
        defaultProps: {
            disableElevation: true,
        },
    },
    MuiButtonBase: {
        defaultProps: {
            disableRipple: true,
            disableTouchRipple: true,
        },
        styleOverrides: {
            root: {
                "&:focus": {
                    "::before": {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        content: "''",
                        width: "100%",
                        height: "100%",
                        background: "currentColor",
                        opacity: 0.1,
                        borderRadius: "inherit",
                    },
                },
            },
        },
    },
};

export { theme };
