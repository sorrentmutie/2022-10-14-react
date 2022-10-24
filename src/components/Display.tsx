import { FC } from "react";
import { DisplayProps } from "../models/productsProps";

export const Display: FC<DisplayProps> = (props) => <div className={props.cssClass}>{props.text}</div>