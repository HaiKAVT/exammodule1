function check(arr, a) {
       let viTri = 0;
    for (let i = 0; i < arr.length; i++) {
        if (a == arr[i]) {
            viTri = i;
            return console.log("a có trong mảng và ở vị trí thứ " + i);
        }
    }
    if (viTri==0){
        console.log("ko có trong mảng");
    }
}

let arr = [1, 4, 6, 2, 7, 3, 9];
let a = +prompt();
check(arr,a);