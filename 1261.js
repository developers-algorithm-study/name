function noname(arr) {
 var box=[];
 for (i in arr) {
  if (arr[i]%5==0) box.push(arr[i]);
 }
 return box.length?box?0;
}