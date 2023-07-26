//https://restcountries.com/v3.1/region/europe?fields=name,flags,ccn3,subregion

import { useParams } from "react-router-dom";

import { Item } from "semantic-ui-react";
import { CountryItemInterface, DataRegionInterface } from "../../interfaces";
import useFetch from "../../hooks/useFetch";
import CountryItem from "../CountryPage/CountryItem";

export default function RegionPage() {
  const { name: regionName } = useParams<string>();

  const { data: countries, error } = useFetch(
    `https://restcountries.com/v3.1/region/${regionName}?fields=name,flags,ccn3,subregion`
  ) as DataRegionInterface;

  return (
    <section>
      {error ? (
        error
      ) : (
        <Item.Group divided>
          {countries.map((c: CountryItemInterface) => (
            <CountryItem
              key={c.ccn3}
              flags={c.flags}
              name={c.name}
              ccn3={c.ccn3}
              subregion={c.subregion}
            />
          ))}
        </Item.Group>
      )}
    </section>
  );
}
