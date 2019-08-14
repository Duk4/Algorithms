//bills available 10,20,50,100,200,500
//ticket = 70;
//starting with 0 in cash register
//fans = array of arrays;

var fans = [[50, 10, 10], [50, 20], [100], [20, 20, 20, 10], [200], [500]];

function tickets(fans){
    var cashRegister = [0, 0, 0, 0, 0, 0];
    const ticket = 70;

    function moneyBack(change){
        while((change-200)>=200){
            if(cashRegister[4]>0){
                cashRegister[4]--;
                change -= 200;
            } else {
                break;
            }
        }
        while((change-100)>=100){
            if(cashRegister[3]>0){
                cashRegister[3]--;
                change -= 100;
            } else {
                break;
            }
        }
        while((change-50)>=50){
            if(cashRegister[2]>0){
                cashRegister[2]--;
                change -= 50;
            } else {
                break;
            }
        }
        while((change-20)>=20){
            if(cashRegister[1]>0){
                cashRegister[1]--;
                change -= 20;
            } else {
                break;
            }
        }
        while((change-10)>=10){
            if(cashRegister[0]>0){
                cashRegister[0]--;
                change -= 10;
            } else {
                break;
            }
        }
    }

    for(var i = 0; i < fans.length; i++){
        var money = 0;
        var change = 0;
        for(let j in fans[i]){
            money += fans[i][j];
            if(fans[i][j]==10){
                cashRegister[0]++;
            } else if(fans[i][j]==20){
                cashRegister[1]++;
            } else if(fans[i][j]==50){
                cashRegister[2]++;
            } else if(fans[i][j]==100){
                cashRegister[3]++;
            } else if(fans[i][j]==200){
                cashRegister[4]++;
            } else if(fans[i][j]==500){
                cashRegister[5]++;
            }
        }
        change = money - ticket;
        moneyBack(change);
        if(change>0){
            return "I don't have change to give you back.";
        }
    }
    return "Here's your change.";
  }