//making a simple search function 

const numbers = [23, 45, 34, 67, 78]
// for (let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// this is a trdition and a bit lengthy process of playing a loop on arrray

// the simple version of this, is "for--- of"  loop
for (let number of numbers) {
    console.log(number);
}

const products = [
    { id: 1 , name: "Walton Fridge", price: 23000},
    { id: 2 , name: "Iphone", price: 23000},
    { id: 3 , name: "Mac book laptop", price: 23000},
    { id: 4 , name: "xiami phone", price: 23000},
    { id: 5 , name: "Samsung phone note 7", price: 23000},
    { id: 6 , name: "One phone", price: 23000},
]
// for (const product of products) {
//     console.log(product);
// }

function searchResult(products, search) {
    const matched= []
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    } return matched
}
let output = searchResult(products, "fridge");
console.log(output);