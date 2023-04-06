import "./bootstrap";
import { Suspense } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../css/app.css";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import MainLayout from "./Layouts/MainLayout";
import { CssBaseline } from "@mui/material";
// import i18n (needs to be bundled ;))
import "./i18n";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];
        page.default.layout =
            page.default.layout || ((page) => <MainLayout children={page} />);
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <>
                <Suspense fallback="loading">
                    <CssBaseline />
                    <App {...props} />
                </Suspense>
            </>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
