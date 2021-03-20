var currentTime = getCurrentTime();
timeBlockArray = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8')];


function getCurrentTime () {
    var currentHour = parseInt(moment().format("hh"));
    var currentPeriod = moment().format("A");

    if (currentPeriod == "PM"){
        currentHour = currentHour + 12;
    }
    return currentHour;
}

function setColors () {
    for (const block in timeBlockArray) {
        if (currentTime > $(`#${block}`).data("hour")) {
            $(`#${block}`).addClass("past");
        } else if (currentTime < $(`#${block}`).data("hour")) {
            $(`#${block}`).addClass("future");
        } else {
            $(`#${block}`).addClass("present");
        }
    }
}

//sets time at top of screen
$('#currentDay').text(moment());

setColors();
