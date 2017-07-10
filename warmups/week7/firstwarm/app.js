

let parenth = (str) => {
    let stack =[];
    for(let i=0;i<str.lenghth; i++){
        if( str[i]===')'){
            stack.pop('(');
        }
            if(stack.pop()===undefined){
                return false;
        
        } else if(str[i]==='('){
            stack.push('(')
        }
    }
 if(stack.length===0){
        return true;
    } else {
        return false;
    }
};







module.exports=parenth;