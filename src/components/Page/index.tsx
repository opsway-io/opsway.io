import React, { FunctionComponent } from "react";
import { Container, ThemeProvider } from "@mui/material";
import { theme } from "@site/src/theme/dark";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Spacer from "../Spacer";
import BrowserOnly from "@docusaurus/BrowserOnly";

interface PageProps {
    children: React.ReactNode | React.ReactNode[];
}

const Page: FunctionComponent<PageProps> = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserOnly>{() => <Navbar />}</BrowserOnly>

            <Spacer />

            <Container maxWidth="xl">{props.children}</Container>

            <Spacer />

            <Footer />
        </ThemeProvider>
    );
};

export default Page;
