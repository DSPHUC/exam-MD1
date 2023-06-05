
function Animal(name,weight) {

    this.name = name;
    this.weight = weight;

this.setName = function name(name) {
    return this.name;
}
this.getName = function name() {
    return this.name;
}
this.setWeight = function weight(weight) {
    return this.weight;
}
this.getWeight = function weight() {
    return this.weight;
}
this.toString = function () {
    return `name: ${(this.name)}; weight: ${(this.weight)}`;
}
}

let elenphant = new Animal("Elenphant", "45.6");
let arrayString = elenphant.toString();
// elenphant.setName("Mouse");
let arrs = new Array();
arrs.push(elenphant);
arrs.push(new Animal("Mouse",));
arrs.forEach(element => {
    console.log(element.toString());
});
