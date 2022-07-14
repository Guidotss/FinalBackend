import {Carrito} from "../classes/carrito";
import {carritoSchema} from "../dataBase/schemas/carritoSchema";


export class CartDao extends Carrito{
    constructor(){
        super("carrito",carritoSchema);
    }
}