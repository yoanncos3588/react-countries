import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css'

export default function MyApp() {
  const [regions, setRegions] = useState<Array<string>>([
    "Africa",
    "Americas",
    "Europe",
    "Oceania",
    "Asia",
    "Antarctic",
  ]);
  return <Header regions={regions} />;
}
