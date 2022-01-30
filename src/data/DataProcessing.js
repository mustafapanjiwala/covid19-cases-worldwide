let max = 0;

const dataProcessing = (stats, geo) => {
  let d = {NewConfirmed: 0, NewDeaths: 0, NewRecovered: 0,TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0};
  let data = stats;
  // console.log(data);
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

    }
  }
  // console.log(d);
  if(!d.Country){
    console.log("not found", geo.properties.ISO_A2);
    if(geo.properties.ISO_A2 === 'GL')
      return {Country: "Greenland", CountryCode: "GL",NewConfirmed: 0, NewDeaths: 0, NewRecovered: 0,TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0}
    else if(geo.properties.ISO_A2 === 'AQ')
      return {Country: "Antarctica", CountryCode: "AQ",NewConfirmed: 0, NewDeaths: 0, NewRecovered: 0,TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0}
    else if(geo.properties.ISO_A2 === 'TF')
      return {Country: "French Southern and Antarctic Lands", CountryCode: "TF",NewConfirmed: 0, NewDeaths: 0, NewRecovered: 0,TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0}
    else if(geo.properties.ISO_A2 === 'FK')
      return {Country: "Falkland Islands", CountryCode: "FK",NewConfirmed: 0, NewDeaths: 0, NewRecovered: 0,TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0}
    return {Country: "Not Found", CountryCode: "NF",NewConfirmed: 0, NewDeaths: 0, NewRecovered: 0,TotalConfirmed: 0, TotalDeaths: 0, TotalRecovered: 0}
  }
  return d;
};

let info = "";
let countryName = "";
let countryStats = {};

const drawerInfo = (data) => {
  // if(!data.Country){
  //   console.log(data);
  // }
  countryName = data.Country + " (" + data.CountryCode + ")";
  countryStats = {
    "New Confirmed": data.NewConfirmed,
    "Total Confirmed": data.TotalConfirmed,
    "New Deaths": data.NewDeaths,
    "Total Deaths": data.TotalDeaths,
    "New Recovered": data.NewRecovered,
    "Total Recovered": data.TotalRecovered,
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
