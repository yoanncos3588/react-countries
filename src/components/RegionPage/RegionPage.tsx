//https://restcountries.com/v3.1/region/europe?fields=name,flags,ccn3,subregion

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { Item } from "semantic-ui-react";
import { CountriesListInterface } from "../../interfaces";

export default function RegionPage() {
  const { name: regionName } = useParams<string>();

  console.log(regionName);

  const [countries, setCountries] = useState<CountriesListInterface | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/region/${regionName}?fields=name,flags,ccn3,subregion`
        );
        if (res.status !== 200) {
          throw new Error("Erreur dans la requette");
        }
        setCountries(res.data);
      } catch (error) {
        setCountries(null);
      }
    };
    if (regionName !== "") {
      fetchData();
    }
  }, [regionName]);

  return (
    <Item.Group divided>
      {countries?.map((c) => (
        <Item key={c.ccn3}>
          <Item.Image size="tiny" src={c.flags.png} />
          <Item.Content>
            <Item.Header as={Link} to={`/country/${c.name.common.toLowerCase()}`}>
              {c.name.common}
            </Item.Header>
            <Item.Meta>{c.subregion}</Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );
}
