import { useSearchParams } from "react-router-dom";

export default function Country() {
  const [searchParams] = useSearchParams();
  const ccn: number = Number(searchParams.get("ccn"));
  console.log("🚀 ~ file: CountryPage.tsx:5 ~ Country ~ searchParams:", ccn);

  return <div>country</div>;
}
