import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import { CountryItemInterface } from "../../interfaces";

export default function CountryItem({
  flags,
  name,
  ccn3,
  subregion,
}: CountryItemInterface) {
  return (
    <>
      <Item key={ccn3}>
        <Item.Image size="tiny" src={flags.png} />
        <Item.Content>
          <Item.Header
            as={Link}
            to={`/country/${name.common.toLowerCase()}?ccn=${ccn3}`}
          >
            {name.common}
          </Item.Header>
          <Item.Meta>{subregion}</Item.Meta>
        </Item.Content>
      </Item>
    </>
  );
}
