/* https://programmers.co.kr/learn/courses/30/lessons/12969
function star (x,y) {
    var s=[]
    for (var i=0;i<y;i++) {
        var si=Array(x+1).join("*");
        s.push(si);
    }
    return s.join("<br>")
}*/
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    for (var i=0;i<n[1];i++) {
        console.log(Array(Number(n[0])+1).join("*"));
    }
});