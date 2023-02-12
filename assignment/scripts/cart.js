console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Update the `cart.js` file to do the following:



const maxItems = 5;
let basket = [];

function addItem(item){
 console.log('added item', item);
 if(basket.push(item)){
    return true;
 }
 else{
    addItem == isFull;
    return false;
 }
}
//Testing addItem function...
console.log(addItem('bread'));
console.log( addItem('milk'));
console.log( addItem('cereal'));
console.log( addItem('cookies'));
console.log(addItem('pop'));
console.log(addItem('cake'));
// Function works in the console


function listItems(){
    console.log('In listItems function');
        for(i=0; i < basket.length; i++){
        console.log(basket[ i ]);
        
}return 'List Complete';
}

console.log(listItems());
// Function works in console.

function empty(){
    console.log('In empty function');
    basket.length = 0;
return 'Basket is empty';
}


console.log('The basket should be empty:', empty(basket));


function isFull(){
console.log('In isFull function');
    if (maxItems < basket.length){
        return false;
    }
    else{
        return true;
    }
}




function removeItem(item){
console.log('In removeItem function'), item;
}