let str = prompt("Nhập chuỗi");
// let str = "vbvbvbvb";
let array = str.split('');
let count = 0;
let a = ["a", "o", "e", "u", "i"]
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < a.length; j++)
        if (a[j] == array[i]) {
            count += 1;
        }
}
console.log(count);