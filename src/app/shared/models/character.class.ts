export class Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;

  constructor(character: Character) {
    this.id = character.id;
    this.name = character.name;
    this.status = character.status;
    this.species = character.species;
    this.type = character.type;
    this.gender = character.gender;
    this.origin = character.origin;
    this.location = character.location;
    this.image = character.image;
    this.episode = character.episode;
    this.url = character.url;
    this.created = character.created;
  }
}
