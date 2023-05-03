let greekNames =[];
let romanNames = [];
let greekSearchResults = [];
let romanSearchResults = [];
let pairs = [];

for (var i = 0; i < searchResults.length; i++)
{
    result = searchResults[i];

    pairs.push(result.pair);
    romanNames.push(result.romanName);
    greekNames.push(result.greekName);
    romanSearchResults.push(result.romanSearchResults);
    greekSearchResults.push(result.greekSearchResults);

}

let greekTrace = {
    x: pairs,
    y: greekSearchResults,
    text: greekNames,
    name: 'Greek',
    type: 'bar'
};

let romanTrace = {
    x: pairs,
    y: romanSearchResults,
    text: romanNames,
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
