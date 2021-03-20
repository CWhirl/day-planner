$('#currentDay').text(moment());

var currentHour = parseInt(moment().format("hh"));

timeBlockArray = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8')];


function setColors () {
    for (const block in timeBlockArray) {
        
    }
}

setColors();