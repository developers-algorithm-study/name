/* http://codeup.kr/problem.php?id=1261*/
function noname(arr) {
 var box=[];
 for (i in arr) {
  if (arr[i]%5==0) box.push(arr[i]);
 }
 return box.length?box:0;
}