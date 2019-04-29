import express from 'express';

// https://github.com/esosedi/3166
import countryList from 'iso3166-2-db/countryList/en';

const app = express();

function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

app.get('/countries', (req, res) => {
  const result = Object.keys(countryList).map((key, index) => {
    const { iso, iso3, name } = countryList[key];
    return { iso, iso3, name };
  });

  res.status(200).send(result.sort(compare));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
