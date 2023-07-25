import Nav from "./Nav/Nav";
import { Button } from "semantic-ui-react";

interface HeaderProps {
  regions: Array<string>;
}

export default function Header({ regions }: HeaderProps) {
  return (
    <header>
      <h1>React Countries</h1>
      <Nav />
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </header>
  );
}
