let max = 0;

const dataProcessing = (stats, geo) => {
  let d = {};
  let data = stats;
  for (const cntry in data) {
    let countryData = data[cntry].Countries;

    for (const prop in countryData) {
      let eachCountry = [countryData[prop]];
      let d_temp = eachCountry.find(
        (s) => s["CountryCode"] === geo.properties.ISO_A2
      );
      if (d_temp !== undefined) {
        d = d_temp;
      }

      // if (d["TotalConfirmed"] > max) {
      //   max = d["TotalConfirmed"];
      // }
      //console.log(eachCountry)
    }
  }

  return d;
};

let info = "";
let countryName = "";
let countryStats = {};

const drawerInfo = (d) => {
  countryName = d.Country + " (" + d.CountryCode + ")";
  countryStats = {
    "New Confirmed": d.NewConfirmed,
    "Total Confirmed": d.TotalConfirmed,
    "New Deaths": d.NewDeaths,
    "Total Deaths": d.TotalDeaths,
    "New Recovered": d.NewRecovered,
    "Total Recovered": d.TotalRecovered,
  };

  info = Object.entries(countryStats).map(([key, value]) => {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{JSON.stringify(value)}</td>
      </tr>
    );
  });
  return (
    <div className="drawerInfo">
      <h3>{countryName}</h3>
      <table>
        <tbody>{info}</tbody>
      </table>
    </div>
  );
};

export { dataProcessing, max, drawerInfo };
