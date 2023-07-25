export type RegionsType = Array<string>;

export interface ChildrenInterface {
  children: React.ReactNode;
}

export type CountriesListInterface = Array<CountryInListInterface>;

export interface CountryInListInterface {
  flags: FlagsInterface;
  name: CountryNameInterface;
  ccn3: string;
  subregion: string;
}

export interface FlagsInterface {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryNameInterface {
  common: string;
  official: string;
  nativeName: object;
}
