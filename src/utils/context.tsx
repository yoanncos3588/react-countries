import { createContext } from "react";
import { ChildrenInterface, RegionsType } from "../interfaces";

const defaultRegions = [
  "Africa",
  "Americas",
  "Europe",
  "Oceania",
  "Asia",
  "Antarctic",
];

export const RegionsContext = createContext<RegionsType>(defaultRegions);

export function RegionsProvider({ children }: ChildrenInterface) {
  return (
    <RegionsContext.Provider value={defaultRegions}>
      {children}
    </RegionsContext.Provider>
  );
}
