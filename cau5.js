let a = prompt("");
let b = prompt("");
function comparenTriplets() {
    let arrayA = a.split();
    let arrayb = b.split();
    console.log(arrayA);
    console.log(arrayB);
    let Alice = 0;
    let Bob = 0;
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] < arrayb[i]) {
            Alice += 1;
        } else { Bob += 1; }
    }
    let array = [Alice, Bob]
    console.log(array);
    return comparenTriplets();
}
