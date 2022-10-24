import { FC } from "react";
import { ProductsProps } from "../models/productsProps";
import {MyButton} from './MyButton';

export const Products : FC<ProductsProps> = (dati: ProductsProps) => 
{
    return (
        <>
            <h3 className="text-success">{dati.message} Ci sono {dati.products} prodotti </h3>
            <MyButton/>
        </>
    );
}