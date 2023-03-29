import React from "react";
import { usePage } from "@inertiajs/react";

function Header() {
    const { auth } = usePage().props;
    return (
        <header className="bg-pink-500">
            <p>You are logged in as: {auth.user.name}</p>
        </header>
    );
}

export default Header;
