var gimme = function (inputArray) {
    if(inputArray[0]>inputArray[1] && inputArray[0]<inputArray[2] || inputArray[0]>inputArray[2] && inputArray[0]<inputArray[1]){
      return 0;
    } else if (inputArray[1]>inputArray[0] && inputArray[1]<inputArray[2] || inputArray[1]>inputArray[2] && inputArray[1]<inputArray[0]){
      return 1;
    } else {
      return 2;
    }
  };