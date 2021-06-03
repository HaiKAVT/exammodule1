function equation(a,b){
    if(a == 0) {
        if(b == 0) {
            alert('PTVSN');
        } else {
            alert('PTVN');
        }
    } else {
        x = -b/a;
        alert(x)
    }
}
alert(equation(5,8));