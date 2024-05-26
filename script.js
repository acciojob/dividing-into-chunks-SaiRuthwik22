const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = []
let i = 0
while(i<arr.length){
    let subarr = []
    let sum = 0
    while(sum<=n){
        console.log(sum)
        if((sum+arr[i])<=n){
            sum +=arr[i]
            subarr.push(arr[i])
            i+=1
        }
        else{
            break
        }
    }
    result.push(subarr)
    
}
return result
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
