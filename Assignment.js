// Problem 1 : ana to vori >>>>>>>>>>>>>>>>>>>>>>>>
function anaToVori(ana){
    if(typeof ana != "number" || ana <= 0){
        return "Please enter a valid number";
    }
    else{
        const vori = ana / 16;
    return vori;
    }
}


// Problem 2 : PandaCost >>>>>>>>>>>>>>>>>>>>>>>>>>
function pandaCost(singara, samucha, jilapi){
    if (typeof singara != 'number' || typeof samucha != 'number' || typeof jilapi != 'number') {
        return 'please enter a valid number';
    }
    if(singara < 0 || samucha < 0 || jilapi < 0){
        return 'please enter a valid number';
    }
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;
    const singaraCost = singara * singaraPrice;
    const samuchaCost = samucha * samuchaPrice;
    const jilapiCost = jilapi * jilapiPrice;
    const totalCost = singaraCost + samuchaCost + jilapiCost;
    return totalCost;
}


// Problem 3 : picnicBudget >>>>>>>>>>>>>>>>>>>>
function picnicBudget(person){
    if(typeof person != "number" || person <= 0){
        return "Please enter a valid number";
    }
    
    if(person <= 100){
        const for100 = person * 5000;
        return for100;
    }
    else if(person <=200){
        const for100 = 100 * 5000;
        const remaing =(person - 100) * 4000;
        const for200 = for100 + remaing;
        return for200;
    }
    else{
        const forFirst100 = 100 * 5000;
        const forSecond100 = 100 * 4000;
        const remaing = (person - 200) * 3000;
        const totalBudget = forFirst100 + forSecond100 + remaing;
        return totalBudget;
    }
}


// Problem 4 : oddFriend >>>>>>>>>>>>>>>>>>>>>>
function oddFriend(arry){
    
    for(const friend of arry){
        if(typeof friend != "string"){
            return "Please enter a valid number";
        }
        else if(friend.length & 2 != 0){
            return friend;
        } 
    }
    return "There is no odd Friend";
    
}
