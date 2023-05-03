let button = d3.select('#clickme')

function handleClick()
{
    console.log('You clicked the button!');
    console.log(d3.event.target);
}

button.on('click', handleClick);
