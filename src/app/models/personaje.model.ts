export interface Personaje {
    nombre: string;
    alias: string;
    imagen: string;
    descripcion: string;
    tipo: 'Heroe' | 'AntiHeroe' | 'Villano';
    universo: 'Marvel' | 'DC' | 'Otro';
}
