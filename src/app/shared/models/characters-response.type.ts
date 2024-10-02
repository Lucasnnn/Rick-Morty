import { Character } from './character.class';
import { InfoResponse } from './info-response.type';

export interface CharactersResponse {
  info: InfoResponse;
  results: Character[];
}
