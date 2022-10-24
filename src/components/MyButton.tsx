import { useState } from "react";
import { Display } from "./Display";

export const MyButton = (props: any) => {
    return (
            <button onClick={ () => props.incrementData(props.increment) } className="btn btn-success">{props.text}</button>
        );
}