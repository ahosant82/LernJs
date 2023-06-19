// for(var i=0; i<=20; i++){
//     console.log(i);

//     if (i > 9) {
//         break;
//     }
// }


// var subjects = ['bangla', 'english', 'mathemetics', 'scince' , "riligion", "ict"];

// for(var i= 0; i< subjects.length; i++){
//     var subject = subjects[i];
//     if (subject == 'scince') {
//         break;
//     }

//     console.log(subject);
// }

var arrey = [11,225,33,44,55,111, 221,278, 355, 550];

for(var i=0; i<10; i++){
    var num = arrey[i];
    
    // console.log(num);

    if (num > 140) {
        continue;
    }
    console.log(num);
}