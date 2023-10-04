export type RegionsType = Array<string>;

export interface DataRegionInterface extends ErrorInterface {
  data: CountriesListInterface;
}

export type CountriesListInterface = Array<CountryItemInterface>;

export interface CountryItemInterface {
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

export interface SubRegionsInterface {
  key: string;
  text: string;
  value: string;
}

// UTILS

export interface DataInterface extends ErrorInterface {
  data: object;
}
export interface ErrorInterface {
  error: string | null;
}
export interface ChildrenInterface {
  children: React.ReactNode;
}
