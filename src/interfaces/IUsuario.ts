import { Material } from "../models/Material";
export interface IUsuario {
    id: number;
    nombre: string;

    prestar(material: Material): void;
    
}