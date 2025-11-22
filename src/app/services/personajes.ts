import { Injectable } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private personajes: Personaje[] = [
    // Heroes Marvel //
    {
      nombre: 'Spider-Man',
      alias: 'Peter Parker',
      imagen: 'assets/personajes/spiderman.jpg',
      descripcion: 'Un joven con habilidades arácnidas que lucha contra el crimen en Nueva York.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Callejero', 'Agilidad', 'Estratega', 'Humano', 'Vigilante']
    },
    {
      nombre: 'Iron Man',
      alias: 'Tony Stark',
      imagen: 'assets/personajes/ironman.jpg',
      descripcion: 'Un genio multimillonario que utiliza una armadura avanzada para combatir el mal.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Lider', 'Tecnologico', 'Estratega', 'Humano', 'Armadura avanzada']
    },
    {
      nombre: 'Thor',
      alias: 'Thor Odinson',
      imagen: 'assets/personajes/thor.jpg',
      descripcion: 'El dios del trueno de Asgard, que protege la Tierra con su poderoso martillo Mjolnir.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Cosmico', 'Superfuerza', 'Agilidad', 'Dios', 'Impulsivo', 'Oscuro']
    },
    {
      nombre: 'Captain America',
      alias: 'Steve Rogers',
      imagen: 'assets/personajes/captainamerica.jpg',
      descripcion: 'Un super soldado que lucha por la justicia y la libertad durante la Segunda Guerra Mundial.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Lider', 'Superfuerza', 'Agilidad', 'Estratega', 'Humano']
    },
    {
      nombre: 'Hulk',
      alias: 'Bruce Banner',
      imagen: 'assets/personajes/hulk.jpg',
      descripcion: 'Un científico que se transforma en un gigante verde y poderoso cuando se enfurece.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Mutante', 'Superfuerza', 'Humano', 'Impulsivo']
    },
    {
      nombre: 'Black Widow',
      alias: 'Natasha Romanoff',
      imagen: 'assets/personajes/blackwidow.jpg',
      descripcion: 'Una espía y experta en artes marciales que trabaja para S.H.I.E.L.D.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Callejero', 'Velocista', 'Agilidad', 'Estratega', 'Humano', ]
    },
    {
      nombre: 'Hawkeye',
      alias: 'Clint Barton',
      imagen: 'assets/personajes/hawkeye.jpg',
      descripcion: 'Un arquero excepcionalmente hábil y miembro de los Vengadores.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Agilidad', 'Estratega', 'Humano', 'Vigilante']
    },
    {
      nombre: 'Doctor Strange',
      alias: 'Stephen Strange',
      imagen: 'assets/personajes/doctorstrange.jpg',
      descripcion: 'Un ex neurocirujano que se convierte en el Hechicero Supremo, protegiendo la Tierra de amenazas místicas.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Mistico', 'Estratega', 'Humano', 'Vigilante', 'Redimido']
    },
    {
      nombre: 'Black Panther',
      alias: 'T\'Challa',
      imagen: 'assets/personajes/blackpanther.jpg',
      descripcion: 'El rey de Wakanda, que posee habilidades sobrehumanas gracias a la hierba en forma de corazón.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Lider', 'Velocista', 'Agilidad', 'Estratega', 'Humano']
    },
    {
      nombre: 'Captain Marvel',
      alias: 'Carol Danvers',
      imagen: 'assets/personajes/captainmarvel.jpg',
      descripcion: 'Una piloto de la Fuerza Aérea que adquiere poderes cósmicos y se convierte en una heroína intergaláctica.',
      afiliacion: 'Heroe',
      universo: 'Marvel',
      etiquetas: ['Cosmico', 'Velocista', 'Superfuerza', 'Agilidad', 'Estratega']
    },

    // Villanos Marvel //
    {
      nombre: 'Loki',
      alias: 'Loki Laufeyson',
      imagen: 'assets/personajes/loki.jpg',
      descripcion: 'El dios de las mentiras y el engaño, hermano adoptivo de Thor.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Cosmico', 'Mentalista', 'Dios', 'Estratega', 'Redimido']
    },
    {
      nombre: 'Thanos',
      alias: 'Thanos',
      imagen: 'assets/personajes/thanos.jpg',
      descripcion: 'Un titán loco obsesionado con el equilibrio universal, conocido por reunir las Gemas del Infinito.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Cosmico', 'Superfuerza', 'Estratega', 'Oscuro', 'Psicopata', 'Tirano']
    },
    {
      nombre: 'Green Goblin',
      alias: 'Norman Osborn',
      imagen: 'assets/personajes/greengoblin.jpg',
      descripcion: 'Un empresario loco y archienemigo de Spider-Man.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Agilidad', 'Humano', 'Impulsivo', 'Armadura avanzada','Tecnologico maligno']
    },
    {
      nombre: 'Doctor Octopus',
      alias: 'Otto Octavius',
      imagen: 'assets/personajes/doctoroctopus.jpg',
      descripcion: 'Un científico con brazos mecánicos que se convierte en un enemigo de Spider -Man.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Tecnologico', 'Agilidad', 'Humano', 'Armadura avanzada', 'Tecnologico maligno']
    },
    {
      nombre: 'Magneto',
      alias: 'Erik Lehnsherr',
      imagen: 'assets/personajes/magneto.jpg',
      descripcion: 'Un mutante con la capacidad de controlar el magnetismo y líder de los Hermanos Mutantes.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Lider', 'Mutante', 'Mentalista', 'Manipulador']
    },
    {
      nombre: 'Red Skull',
      alias: 'Johann Schmidt',
      imagen: 'assets/personajes/redskull.jpg',
      descripcion: 'Un líder nazi y archienemigo del Capitán América.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Lider', 'Mutante', 'Oscuro', 'Genio criminal', 'Mistico oscuro']
    },
    {
      nombre: 'Ultron',
      alias: 'Ultron',
      imagen: 'assets/personajes/ultron.jpg',
      descripcion: 'Una inteligencia artificial malvada creada por Tony Stark que busca la destrucción de la humanidad.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Estratega', 'Armadura avanzada', 'Genio criminal', 'Psicopata', 'Tecnologico maligno']
    },
    {
      nombre: 'Kingpin',
      alias: 'Wilson Fisk',
      imagen: 'assets/personajes/kingpin.jpg',
      descripcion: 'Un poderoso criminal y archienemigo de Daredevil.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Callejero', 'Estratega', 'Humano', 'Oscuro', 'Genio criminal']
    },
    {
      nombre: 'Mistério',
      alias: 'Quentin Beck',
      imagen: 'assets/personajes/misterio.jpg',
      descripcion: 'Un maestro de las ilusiones y enemigo de Spider-Man.',
      afiliacion: 'Villano',
      universo: 'Marvel',
      etiquetas: ['Estratega', 'Humano', 'Genio criminal', 'Manipulador', 'Tecnologico maligno']
    },

    // Heroes DC //
    {
      nombre: 'Superman',
      alias: 'Clark Kent',
      imagen: 'assets/personajes/superman.jpg',
      descripcion: 'Un extraterrestre del planeta Krypton con superpoderes que protege la Tierra.',
      afiliacion: 'Heroe',
      universo: 'DC',
      etiquetas: ['Mutante', 'Superfuerza', 'Agilidad', 'Tecnologico maligno']
    },
    {
      nombre: 'Batman',
      alias: 'Bruce Wayne',
      imagen: 'assets/personajes/batman.jpg',
      descripcion: 'Un vigilante enmascarado que lucha contra el crimen en Gotham City.',
      afiliacion: 'Heroe',
      universo: 'DC',
      etiquetas: ['Lider', 'Callejero', 'Estratega', 'Humano', 'Vigilante', 'Oscuro']
    },
    {
      nombre: 'Wonder Woman',
      alias: 'Diana Prince',
      imagen: 'assets/personajes/wonderwoman.jpg',
      descripcion: 'Una princesa amazona con fuerza sobrehumana y habilidades de combate excepcionales.',
      afiliacion: 'Heroe',
      universo: 'DC',
      etiquetas: ['Mistico', 'Superfuerza', 'Agilidad', 'Humano']
    },
    {
      nombre: 'The Flash',
      alias: 'Barry Allen',
      imagen: 'assets/personajes/flash.jpg',
      descripcion: 'Un velocista con la capacidad de moverse a velocidades increíbles.',
      afiliacion: 'Heroe',
      universo: 'DC',
      etiquetas: ['Velocista', 'Agilidad', 'Humano']
    },
    {
      nombre: 'Aquaman',
      alias: 'Arthur Curry',
      imagen: 'assets/personajes/aquaman.jpg',
      descripcion: 'El rey de Atlantis con la capacidad de comunicarse con la vida marina.',
      afiliacion: 'Heroe',
      universo: 'DC',
      etiquetas: ['Mistico', 'Agilidad', 'Humano']
    },
    {
      nombre: 'Green Lantern',
      alias: 'Hal Jordan',
      imagen: 'assets/personajes/greenlantern.jpg',
      descripcion: 'Un miembro del Cuerpo de Green Lanterns que utiliza un anillo de poder para crear construcciones de energía verde.',
      afiliacion: 'Heroe',
      universo: 'DC',
      etiquetas: ['Cosmico', 'Agilidad', 'Estratega', 'Vigilante']
    },
    {
      nombre: 'Shazam',
      alias: 'Billy Batson',
      imagen: 'assets/personajes/shazam.jpg',
      descripcion: 'Un joven que se transforma en un superhéroe adulto con poderes mágicos al pronunciar la palabra "Shazam".',
      afiliacion: 'Heroe',
      universo: 'DC',
      etiquetas: ['Mistico', 'Humano', 'Vigilante']
    },
    {
      nombre: 'Green Arrow',
      alias: 'Oliver Queen',
      imagen: 'assets/personajes/greenarrow.jpg',
      descripcion: 'Un arquero experto y vigilante que lucha contra el crimen en Star City.',
      afiliacion: 'Heroe',
      universo: 'DC',
      etiquetas: ['Agilidad', 'Estratega', 'Humano', 'Vigilante', 'Asesino entrenado']
    },

    // Villanos DC //
    {
      nombre: 'Joker',
      alias: 'Desconocido',
      imagen: 'assets/personajes/joker.jpg',
      descripcion: 'Un criminal psicópata y archienemigo de Batman.',
      afiliacion: 'Villano',
      universo: 'DC',
      etiquetas: ['Callejero', 'Estratega', 'Humano', 'Impulsivo', 'Genio criminal', 'Manipulador', 'Psicopata']
    },
    {
      nombre: 'Darkseid',
      alias: 'Darkseid',
      imagen: 'assets/personajes/darkseid.jpg',
      descripcion: 'Un dios tirano de Apokolips que busca conquistar el universo.',
      afiliacion: 'Villano', 
      universo: 'DC',
      etiquetas: ['Cosmico', 'Dios', 'Oscuro', 'Psicopata', 'Tirano']
    },
    {
      nombre: 'Harley Quinn',
      alias: 'Harleen Quinzel',
      imagen: 'assets/personajes/harleyquinn.jpg',
      descripcion: 'Una ex psiquiatra que se convierte en la compañera del Joker y una villana caótica.',
      afiliacion: 'Villano',
      universo: 'DC',
      etiquetas: ['Callejero', 'Agilidad', 'Humano', 'Impulsivo', 'Manipulador', 'Psicopata']
    },
    {
      nombre: 'Deathstroke',
      alias: 'Slade Wilson',
      imagen: 'assets/personajes/deathstroke.jpg',
      descripcion: 'Un mercenario y asesino experto con habilidades sobrehumanas.',
      afiliacion: 'Villano',
      universo: 'DC',
      etiquetas: ['Agilidad', 'Humano', 'Oscuro', 'Mercenario', 'Asesino entrenado']
    },
    {
      nombre: 'Brainiac',
      alias: 'Brainiac',
      imagen: 'assets/personajes/brainiac.jpg',
      descripcion: 'Una inteligencia artificial alienígena que busca adquirir conocimiento y destruir mundos.',
      afiliacion: 'Villano',
      universo: 'DC',
      etiquetas: ['Impulsivo', 'Mistico oscuro', 'Psicopata', 'Tirano', 'Tecnologico maligno']
    },
    {
      nombre: 'Sinestro',
      alias: 'Thaal Sinestro',
      imagen: 'assets/personajes/sinestro.jpg',
      descripcion: 'Un ex Green Lantern que se convierte en un villano y líder del Cuerpo de Sinestro.',
      afiliacion: 'Villano',
      universo: 'DC',
      etiquetas: ['Lider', 'Cosmico', 'Genio criminal', 'Mistico oscuro']
    },
    {
      nombre: 'Black Manta',
      alias: 'David Hyde',
      imagen: 'assets/personajes/blackmanta.jpg',
      descripcion: 'Un enemigo de Aquaman con un traje avanzado que le permite respirar bajo el agua y luchar contra el héroe.',
      afiliacion: 'Villano',
      universo: 'DC',
      etiquetas: ['Agilidad', 'Estratega', 'Armadura avanzada', 'Mistico oscuro']
    },
    {
      nombre: 'Two-Face',
      alias: 'Harvey Dent',
      imagen: 'assets/personajes/twoface.jpg',
      descripcion: 'Un ex fiscal de distrito que se convierte en un villano con una personalidad dividida.',
      afiliacion: 'Villano',
      universo: 'DC',
      etiquetas: ['Mistico', 'Callejero', 'Vigilante', 'Impulsivo','Genio criminal', 'Psicopata']
    },
  ];

  constructor() {}

  getPersonajes(): Personaje[] {
    return this.personajes;
  }

  searchPersonajesByName(name: string): Personaje[] {
    return this.personajes.filter((personaje) =>
      personaje.nombre.toLowerCase().includes(name.toLowerCase()) ||
      personaje.alias.toLowerCase().includes(name.toLowerCase())
    );
  }
}
