function getMiddle(s){
  var length = s.length;
  var result = '';
  if(length % 2 == 0){
    var x = length / 2 - 1;
    result = s[x] + s[x+1];
    return result;
  } else {
    var x = (length + 1) / 2;
    result = s[x-1];
    return result;
  }
}