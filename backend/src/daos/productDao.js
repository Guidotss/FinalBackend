import { Producto } from "../classes/productos";
import { productsSchema } from "../dataBase/schemas/productosSchema";

export class ProductDao extends Producto{
    constructor(){
        super("Productos",productsSchema);
    }
}
