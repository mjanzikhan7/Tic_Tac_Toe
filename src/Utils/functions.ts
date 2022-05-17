import { Images } from "../Assets/Images";
export const checkWinner = (gameState:any)=>{
    const length = 3;
    let sum;
    
    //Check Row
    for(let x=0;x<length;x++){
        sum = gameState[x][0] + gameState[x][1] + gameState[x][2]
        if(sum == 3){
            return 1
        }else if(sum == -3){
            return -1
        }
    }

    //Check Column
    for(let x=0;x<length;x++){
        sum = gameState[0][x] + gameState[1][x] + gameState[2][x]
        if(sum == 3){
            return 1
        }else if(sum == -3){
            return -1
        }
    }

    //Check Diagonal 1
    sum = gameState[0][0] + gameState[1][1] + gameState[2][2]
    if(sum == 3){
        return 1
    }else if(sum == -3){
        return -1
    }

    //Check Diagonal 2
    sum = gameState[0][2] + gameState[1][1] + gameState[2][0]
    if(sum == 3){
        return 1
    }else if(sum == -3){
        return -1
    }

    return 0
  }
export const renderIcon =(row:number,col:number,gameState:any)=>{
    let val = gameState[row][col]
    switch(val){
        case 1:
            return Images.Circle
            break;
        case -1:
            return Images.Cross
            break;
        default:
            return null
            break;
    }
  }