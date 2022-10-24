import { Header } from "../components/Header";
import { MyApp } from "../components/MyApp";

export const HomePage = () => {
    const myAppState = {name: 'Mario Rossi', age: 30  };
    return ( 
        <>
        <p>Home</p>
        <Header/>
        <MyApp {...myAppState}/>
        </>
    );
}