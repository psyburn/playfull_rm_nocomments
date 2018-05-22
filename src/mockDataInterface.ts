type GenderType = 'Male' | 'Female';
type SpeciesType = 'Human';
type StatusType = 'Alive';

interface ICharacter {
  created: string;
  episode: string[];
  gender: GenderType;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  },
  name: string;
  origin: {
    name: string;
    url: string;
  },
  species: SpeciesType;
  status: StatusType;
  url: string;

}
interface IMeta {
  count: number;
  next: string;
  page: number;
  prev: string;
}

export interface IList {
  info: IMeta;
  results: ICharacter[];
}
