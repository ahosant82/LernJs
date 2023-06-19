var goodMoring = 9;
var BreakFrist = 8;
var afterNoon = 12;
var goodEveing = 17;
var goodNight = 23;
var input = 29;

// conditions
if (input <= goodMoring) {
    if (input == goodMoring) {
        console.log('Good Moring its runing time');
    }

    else if(input == BreakFrist){
        console.log('Good Moring its Breakfrist Time');
    }
    else{
        console.log('Good Moring Everyone');
    }

}

else if (input <= afterNoon) {
    console.log('Good Noon Everyone');
}

else if (input <= goodEveing) {
    console.log('Good Eveing Everyone');
}

else if (input <= goodNight) {
    console.log('Good Night Everyone');
}

else{
    console.log('There is daed');
}