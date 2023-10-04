import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment } from "semantic-ui-react";
import { useContext } from "react";
import { RegionsContext } from "./utils/context";
import RegionPage from "./components/RegionPage/RegionPage";
import CountryPage from "./components/CountryPage/CountryPage";

export default function MyApp() {
  const regions = useContext(RegionsContext);

  return (
    <Container>
      <Segment>
        <Header />
        <Segment>
          <Routes>
            <Route
              path="/"
              element={<Navigate to={regions[0].toLowerCase()} />}
            />
            <Route
              path="/region"
              element={<Navigate to={regions[0].toLowerCase()} />}
            />
            {regions.map((r) => (
              <Route
                key={r}
                path={`/region/:name`}
                element={<RegionPage />}
              ></Route>
            ))}
            <Route path="/country/:name" element={<CountryPage />} />
          </Routes>
        </Segment>
      </Segment>
    </Container>
  );
}
