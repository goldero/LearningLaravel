import React from "react";
import { usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import NavBar from "./NavBar";

function Header() {
    const { auth } = usePage().props;
    return (
        <header className="sticky top-0 mb-2">
            <NavBar />
        </header>
    );
}

export default Header;
