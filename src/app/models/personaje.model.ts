export interface Personaje {
    nombre: string;
    alias: string;
    imagen: string;
    descripcion: string;
    afiliacion: 'Heroe' | 'AntiHeroe' | 'Villano';
    universo: 'Marvel' | 'DC' | 'Otro';
}
