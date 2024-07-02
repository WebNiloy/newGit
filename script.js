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
console.log(oddNumberSum(numbers));