import * as React from "react";

export default function CarShow({ car }) {
    return (
        <div className="flex items-center flex-col">
            <p>hola soy el show del coche: {car[0].id}</p>
        </div>
    );
}
