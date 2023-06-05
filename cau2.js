let array = [1, 232, 4, 43, 56, 87, 5, 3, 8];
let check = Number((prompt("phần tử cần tìm")));

let count;
for (let i = 0; i < array.length; i++) {
    if (check == array[i]) {
        count = i;
    }
}
console.log(count);
if (count) {
    alert("có, tại: "+ count);
    
} else {
    alert("không");
  
}