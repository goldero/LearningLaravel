import React from "react";
import { usePage } from "@inertiajs/react";
import { Button } from "@mui/material";
import NavBar from "./NavBar";

function Header() {
    const { auth } = usePage().props;
    return (
        <header>
            <NavBar />
        </header>
    );
}

export default Header;
