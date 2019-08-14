function smallEnough(a, limit){
    let x = 0;
    for(let i in a){
      if(a[i]>limit){
        x++;
      }
    }
    if(x!=0){
      return false;
    } else {
      return true;
    }
  }