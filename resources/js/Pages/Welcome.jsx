import React from "react";
import Foto from "../../assets/images/Foto-prof.jpeg";
import { Stack } from "@mui/material";
import IconReact from "../../assets/images/React-icon.png";
import Lang from "lang.js";

function Welcome() {
    return (
        <main className="bg-gradient-to-b from-cyan-300 to-blue-400 h-screen flex justify-center items-center text-center">
            <article className="max-w-xl">
                <span className="font-bold text-3xl">David Goldero</span>
                <img
                    className="max-w-xs m-5 rounded-full"
                    src={Foto}
                    alt="foto uwu"
                />
                <p className="pb-2 text-xl">Frontend developer</p>
                <Stack
                    direction="row"
                    spacing={1}
                    justifyContent={"space-between"}
                >
                    <img className="w-10" src={IconReact} alt="ReactJS" />
                    <img className="w-10" src={IconReact} alt="ReactJS" />
                    <img className="w-10" src={IconReact} alt="ReactJS" />
                    <img className="w-10" src={IconReact} alt="ReactJS" />
                    <img className="w-10" src={IconReact} alt="ReactJS" />
                    <img className="w-10" src={IconReact} alt="ReactJS" />
                </Stack>
                {/* Aquí van las tecnologías que conozco */}
            </article>
        </main>
    );
}

export default Welcome;
