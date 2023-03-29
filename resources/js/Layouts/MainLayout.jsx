/* import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";

function MainLayout({ children, page }) {
    {
        console.log(page);
    }
    return (
        <>
            <Header />

            {children}
            <Footer />
        </>
    );
}

export default MainLayout; */

import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function Layout({ children }) {
    return (
        <main>
            <Header />
            <main>{children}</main>
            <Footer />
        </main>
    );
}
