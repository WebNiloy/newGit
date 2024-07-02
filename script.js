// note
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function oddNumberSum(numbers){
    let oddNumbers = [];
    let sum = 0;
    for (const num of numbers) {
        if(num % 2 !=0){
            oddNumbers.push(num)
        }
    }
    for (const oddNum of oddNumbers) {
        sum = sum + oddNum;  
    }
    return {oddNumbers,sum}
}
// console.log(oddNumberSum(numbers));

// === some array operation
const items = ['bottle', 'mug', 'paper', 'pen'];
console.log(items.indexOf("mug"));
console.log(items.push("laptop","iphone"));
console.log(items);
console.log(items.pop());

// === switch & case operation
const color = "green";
switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "gary":
        console.log("color is gary");
        break;
    case "green":
        console.log("color is green");
        break;
    case "yellow":
        console.log("color is yellow");
        break;

    default:
        console.log("color is black");
        break;
}