function descendingOrder(n){
    var x = n.toString();
    var arr = [];
    for(let i in x){
      arr[i] = Number(x[i]);
    }
    for(var i = 0; i<arr.length; i++){
        for(let j = 0; j<(arr.length - i - 1); j++){
            if(arr[j]<arr[j+1]){
                let x = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = x;
            }
        }
    }
    x = "";
    for(let i in arr){
      x += arr[i].toString();
    }
    return Number(x);
  }