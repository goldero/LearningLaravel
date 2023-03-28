import React from "react";

function UserShow(props) {
    return (
        <div>
            Hola
            <p>
                {props.usuario[0].name}
                {props.usuario[0].email}
                {props.usuario[0].id}
            </p>
        </div>
    );
}

export default UserShow;
