/* https://programmers.co.kr/learn/courses/30/lessons/12969*/
function star (x,y) {
    var s=[]
    for (var i=0;i<y;i++) {
        var si=Array(x+1).join("*");
        s.push(si);
    }
    return s.join("<br>")
}