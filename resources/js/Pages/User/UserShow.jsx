import React from "react";

function UserShow(props) {
    return (
        <div>
            <h1>UserShowView</h1>

            {props?.usuario[0] ? (
                <span>
                    {props.usuario[0].name}
                </span> /* Los span >>>>> p  (segun mario(según iván maestro frontend)) */
            ) : (
                <span>No hay usuario</span>
            )}
        </div>
    );
}

export default UserShow;
