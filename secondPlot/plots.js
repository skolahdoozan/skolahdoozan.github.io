let gooseBumpBooks =['a', 'b', 'c'];

let timesRead = [3, 6, 4];

let trace1 = {
    x: gooseBumpBooks,
    y: timesRead,
    type: 'bar',
    name: 'Sami'
};

var data = [trace1];

var layout = {
    title: "Sami's gooseBumpBooks"
};

Plotly.newPlot('plot1', data, layout);

let timesRead2 = [6, 3, 1];

let trace2 = {
    x: gooseBumpBooks,
    y: timesRead2,
    type: 'bar',
    name: 'Sadaf'
};

let data2 = [trace1, trace2];

var layout2 = {
    title: 'Sami & Sadaf'
};

Plotly.newPlot('plot2', data2, layout2);