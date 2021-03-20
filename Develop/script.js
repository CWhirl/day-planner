var currentTime = getCurrentTime();
timeBlockArray = [$('#0'), $('#1'), $('#2'), $('#3'), $('#4'), $('#5'), $('#6'), $('#7'), $('#8')];

//sets current time to the 24 hour format
function getCurrentTime () {
    var currentHour = parseInt(moment().format("hh"));
    var currentPeriod = moment().format("A");

    if (currentPeriod == "PM"){
        currentHour = currentHour + 12;
    }
    return currentHour;
}

//fills in the background color of the timeblocks
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

function init () {
    for (const block in timeBlockArray) {
        if (localStorage.getItem($(`#${block}`).data("hour")) != undefined) {
            $(`#in${$(`#${block}`).data("hour")}`).val(localStorage.getItem($(`#${block}`).data("hour")));
        }
    }
    setColors();
    //sets time at top of screen
    $('#currentDay').text(moment());
}

init();
$('.saveBtn').on('click', function () {
    btnNum = $(this).data("hour");
    localStorage.setItem(btnNum, $(`#in${btnNum}`).val());
});