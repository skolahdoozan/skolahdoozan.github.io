// API Call
d3.json('https://gbfs.citibikenyc.com/gbfs/en/station_information.json').then(
    function(responseData)
    {
        console.log(responseData);
    }
);

function createMakers(bikeData)
{
    console.log(bikeData);
    var stations = bikeData.data.stations;
    var bikeMarkers = [];
    for (var i=0; i<stations.length; i++)
    {
        let currentStation = stations[i];
        let currentMaker = L.marker([currentStation.lat, currentStation.lon])
            .bindPopup(`<center>
            <h2>${currentStation.name}</h2><hr>
            Bike Capacity: <b>${currentStation.capacity}</b>
            </center>`);

        bikeMarkers.push(currentMaker);

        /*
        or 
        bikeMarkers.push(
            L.marker(
                [
                    stations[i].lat, stations[i].lon                    
                ]
            )
            .bindPopup(
                <center>
                <h2>${stations[i].name}</h2><hr>
                Bike Capacity: <b>${currentStation.capacity}</b>
                </center>`
            );
        );
        */
    }
    function createMap(bikeMarkers)
    {
        
    }
}

// function createMap(bikeMarkers)
// {

// }