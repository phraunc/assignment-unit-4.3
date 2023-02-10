console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Update the `cart.js` file to do the following:

let basket = [];

function addItem(item){
    console.log('added item', item);
        basket.push( item);
return true;
}
console.log(addItem('bread'));
console.log( addItem('milk'));
console.log( addItem('cereal'));
// Function works in the console

function listItems(){
    console.log('In listItems function');
for(i=0; i < basket.length; i++){
    console.log(basket[ i ]);
    
}return 'List Complete';
}

console.log(listItems());
// Function woroks in console.