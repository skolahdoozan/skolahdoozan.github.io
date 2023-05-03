// let greekNames =[];
// let romanNames = [];
// let greekSearchResults = [];
// let romanSearchResults = [];
// let pairs = [];

// for (var i = 0; i < searchResults.length; i++)
// {
//     result = searchResults[i];

//     pairs.push(result.pair);
//     romanNames.push(result.romanName);
//     greekNames.push(result.greekName);
//     romanSearchResults.push(result.romanSearchResults);
//     greekSearchResults.push(result.greekSearchResults);

// }

// let pairs = searchResults.map(function(result) {
//     return searchResults.pair;
// });

// or

// let pairs = searchResults.map(result => result.pair);


// function popularGreek(entry) {
//     return entry.greekSearchResults > 1000000
// };

// function popularRoman(entry) {
//     return entry.romanSearchResults > 1000000
// };

// let poppinGreeks = searchResults.filter(popularGreek);
// let poppinRomans = searchResults.filter(popularRoman);

// filter based on criteria

// sort and slice

let poppinGreeks = searchResults.sort((a, b) => b.greekSearchResults - a.greekSearchResults);
let poppinRomans = searchResults.sort((a, b) => b.romanSearchResults - a.romanSearchResults);

poppinGreeks = poppinGreeks.slice(0, 10);
poppinRomans = poppinRomans.slice(0, 10);

poppinGreeks = poppinGreeks.reverse();
poppinRomans = poppinRomans.reverse();


let greekTrace = {
    x: poppinGreeks.map(result => result.pair), //pairs,
    y: poppinGreeks.map(result => result.greekSearchResults),
    text: poppinGreeks.map(result => result.greekName),
    name: 'Greek',
    type: 'bar',
    orientation: 'h'
};




let romanTrace = {
    x: poppinRomans.map(result => result.pair),
    y: poppinRomans.map(result => result.romanSearchResults),
    text: poppinRomans.map(result => result.romanName),
    name: 'Roman',
    type: 'bar',
    orientation: 'h'
};

let greekData = [greekTrace];
let romanData = [romanTrace];

let greekLayout = {
    title: 'Popular Greek Search Results',
    margin: {
        l: 100, 
        r: 100,
        b: 100,
        t: 100
    }
};
let romanLayout = {
    title: 'Popular Roman Search Results',
    margin: {
        l: 100, 
        r: 100,
        b: 100,
        t: 100
    }
};

Plotly.newPlot('plot1', greekData, greekLayout);
Plotly.newPlot('plot2', romanData, romanLayout);
