const_ = require("lodash");
//only change code below this line 
//users nested array with four objects srarts here
let users = [
    {firstName:'John', lastName:'Doe', age:24, gender:'male'},
    {firstName:'Jane', lastName:'Doe', age:5, gender:'female'},
    {firstName:'Jim', lastName:'Carrey', age:54, gender:'male'},
    {firstName:'Kate', lastName:'Winslet', age:40, gender:'female'}
     ];
//getUsers function - list of users strart here
 function getUsers (){
    
    const output= users; 
    return output;
}
 console.log(getUsers(users));

function findUser (lastName, gender){
    try {

        let u1 = _.find(users, {lastName,gender});
            

    } catch( error) {
    return //change
    console.log();
    }
}
