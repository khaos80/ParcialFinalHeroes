export interface Personaje {
    nombre: string;
    alias: string;
    imagen: string;
    descripcion: string;
    afiliacion: 'Heroe' | 'Villano';
    universo: 'Marvel' | 'DC' | 'Otro';
    etiquetas: Etiquetas[];
}

export type Etiquetas =
  | 'Lider'
  | 'Tecnologico'
  | 'Mistico'
  | 'Mutante'
  | 'Cosmico'
  | 'Mentalista'
  | 'Callejero'
  | 'Velocista'
  | 'Superfuerza'
  | 'Agilidad'
  | 'Estratega'
  | 'Humano'
  | 'Dios'
  | 'Vigilante'
  | 'Impulsivo'
  | 'Oscuro'
  | 'Redimido'
  | 'Mercenario'
  | 'Armadura avanzada'
  | 'Asesino entrenado'
  | 'Genio criminal'
  | 'Manipulador'
  | 'Mistico oscuro'
  | 'Psicopata'
  | 'Tirano'
  | 'Tecnologico maligno';