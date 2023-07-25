import { useContext, useState } from "react";
import { Menu } from "semantic-ui-react";
import { RegionsContext } from "../../../utils/context";
import { NavLink } from "react-router-dom";

export default function Nav() {
  //charge les régions depuis context
  const regions = useContext(RegionsContext);

  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (name: string | undefined) => {
    if (name !== undefined) {
      setActiveItem(name);
    }
  };

  return (
    <Menu>
      {regions.map((r) => (
        <Menu.Item
          as={NavLink}
          to={r.toLowerCase()}
          key={r}
          name={r}
          active={activeItem === r}
          onClick={(e, { name }) => handleItemClick(name)}
        >
          {r}
        </Menu.Item>
      ))}
    </Menu>
  );
}
