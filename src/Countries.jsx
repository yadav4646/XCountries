import { useEffect, useState } from "react";

function CountryCard({ flagUrl, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "5px",
        height: "200px",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={flagUrl}
        alt={`Flag of ${name}`}
        style={{ height: "100px", width: "100px" }}
      />
      <h2>{name}</h2>
    </div>
  );
}

const Countries = () => {
  const API_URL = "https://xcountries-backend.azurewebsites.net/all";

  let [countries, setCountries] = useState([]);

  console.log(countries);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error Fetching data: " + error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px  ",
      }}
    >
      {countries.map((country) => (
        <CountryCard
          name={country.name}
          flagUrl={country.flag}
          ket={country.abbr}
        />
      ))}
    </div>
  );
};

export default Countries;
