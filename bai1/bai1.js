let arr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
let result = [];
let longgestString = 0;
function allLongestStrings(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longgestString){
            longgestString = arr[i].length;
        }
        
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length == longgestString){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(allLongestStrings(arr));
