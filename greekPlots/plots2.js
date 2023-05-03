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

let greekTrace = {
    x: searchResults.map(result => result.pair), //pairs,
    y: searchResults.map(result => result.greekSearchResults),
    text: searchResults.map(result => result.greekName),
    name: 'Greek',
    type: 'bar'
};

let romanTrace = {
    x: searchResults.map(result => result.pair),
    y: searchResults.map(result => result.romanSearchResults),
    text: searchResults.map(result => result.romanName),
    name: 'Roman',
    type: 'bar'
};

let data = [greekTrace, romanTrace];

let layout = {
    title: 'Greek vs. Roman Search Results',
    barmode: 'group',
    margin: {
        l: 50, 
        r: 50,
        b: 200,
        t: 50,
        pad: 4
    }
};

Plotly.newPlot('plot', data, layout);
