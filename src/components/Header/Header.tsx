import { Theme, Button } from "react-daisyui";

interface HeaderProps {
  regions: Array<string>;
}

export default function Header({ regions }: HeaderProps) {
  return (
    <header>
      <h1>React Countries</h1>
      <Button color="primary">Click me, dark!</Button>
      <nav></nav>
    </header>
  );
}
