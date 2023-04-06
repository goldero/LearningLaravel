import React from "react";
import { useTranslation } from "react-i18next";

function Language() {
    const { t, i18n } = useTranslation();

    return (
        <select
            className="m-5"
            onChange={(e) => {
                i18n.changeLanguage(e.target.value);
            }}
        >
            <option value="es">Español</option>
            <option value="en">English</option>
        </select>
    );
}

export default Language;
