import { FC, useState } from "react"
import { MyAppProps } from "../models/productsProps";
import { Display } from "./Display";
import { MyButton } from "./MyButton";

export const MyApp : FC<MyAppProps> = (props) => {
    const [user, setUser] = useState(props);
    const incrementAge = (incrementValue: number) => 
    { 
        setUser({ name: user.name, age: user.age + incrementValue});
    };

    return (
        <div className="container">
            <MyButton incrementData={incrementAge} text={user.age} increment={1}  />
            <MyButton incrementData={incrementAge} text={user.age} increment={-1}  />
            <Display text={user.age.toString()} cssClass="text-warning"  />
        </div>
    );
}