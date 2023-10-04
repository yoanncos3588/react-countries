//https://restcountries.com/v3.1/region/europe?fields=name,flags,ccn3,subregion

import { useParams } from "react-router-dom";

import { Divider, Dropdown, Item } from "semantic-ui-react";
import { CountryItemInterface, DataRegionInterface, SubRegionsInterface } from "../../interfaces";
import useFetch from "../../hooks/useFetch";
import CountryItem from "./CountryItem";
import { useEffect, useState } from "react";

export default function RegionPage() {
  const [subRegionsList, setSubRegionsList] = useState<SubRegionsInterface[]>([]);
  const [selectedSubRegion, setSelectedSubRegion] = useState<string>("");
  const { name: regionName } = useParams<string>();

  const { data: countries, error } = useFetch(`https://restcountries.com/v3.1/region/${regionName}?fields=name,flags,ccn3,subregion`) as DataRegionInterface;

  /** build subregions dropdown */
  useEffect(() => {
    setSelectedSubRegion("");
    if (countries.length === 0) return;
    const uniqueRegions = new Set();
    const subRegionsBuilder = countries
      .filter((c) => {
        if (!uniqueRegions.has(c.subregion)) {
          uniqueRegions.add(c.subregion);
          return true;
        }
        return false;
      })
      .map((c) => {
        return {
          key: c.subregion,
          text: c.subregion,
          value: c.subregion,
        };
      });
    setSubRegionsList(subRegionsBuilder);
  }, [countries]);

  /**
   * when user select a subregion filter
   * @param data
   */
  const onChangeSelectSubRegion = (data: string) => {
    if (data === selectedSubRegion) return;
    setSelectedSubRegion(data);
  };

  return (
    <section>
      {error ? (
        error
      ) : (
        <>
          <h2>Countries from {regionName}</h2>
          <Divider hidden />
          <Dropdown
            clearable
            options={subRegionsList}
            selection
            placeholder="Subregion"
            value={selectedSubRegion}
            onChange={(e, data) => onChangeSelectSubRegion(data.value as string)}
          />
          <Divider hidden />
          <Item.Group divided>
            {countries.map((c: CountryItemInterface) =>
              selectedSubRegion === "" ? (
                <CountryItem key={c.ccn3} flags={c.flags} name={c.name} ccn3={c.ccn3} subregion={c.subregion} />
              ) : (
                c.subregion === selectedSubRegion && <CountryItem key={c.ccn3} flags={c.flags} name={c.name} ccn3={c.ccn3} subregion={c.subregion} />
              )
            )}
          </Item.Group>
        </>
      )}
    </section>
  );
}
