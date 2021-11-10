const obj = require('./data.json');

const arr = obj.data.list;

const arrSeries = arr.map((val) => {
    return (val.attributes.series.seriesId);
})

console.log(arrSeries);


