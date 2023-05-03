d3.json('data.json').then(function(data){
    console.log(data);
});

function popularGreek(greek)
{
    return greek.greekSearchResults > 100000000
}

d3.json('data.json').then(function(data){
    let poppinGreeks = data.filter(popularGreek);
    let trace = {
        x: poppinGreeks.map(entry => entry.greekName),
        y: poppinGreeks.map(entry => entry.greekSearchResults),
        type: 'bar'
    };

    let traceData = [trace];

    let layout = {
        title: 'Popular Greek Search Results'
    };

    Plotly.newPlot('plot1', traceData, layout)
});


