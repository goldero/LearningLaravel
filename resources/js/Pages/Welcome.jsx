import React from "react";
import Foto from "../../assets/images/Foto-prof.jpeg";

function Welcome() {
    return (
        <main className="h-screen flex justify-center items-center text-center">
            <article className="max-w-xl">
                <h1>David Goldero</h1>
                <img
                    className="object-scale-down max-w-xs  rounded-full m-3"
                    src={Foto}
                    alt="foto uwu"
                />
                <h2>Frontend developer</h2>
                {/* Aquí van las tecnologías que conozco */}
            </article>
        </main>
    );
}

export default Welcome;
