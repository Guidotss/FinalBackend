import { Mensaje } from "../classes/mensajes";
import { mensajesSchema } from "../dataBase/schemas/mensajesSchema";

export class MensajesDao extends Mensaje {
    constructor() {
        super("mensajes", mensajesSchema);
    }
}