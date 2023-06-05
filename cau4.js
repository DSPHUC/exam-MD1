
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

let objAnimal1 = new Animal("Elenphant", "45.6");
let arrayString = objAnimal1.toString();
let objAnimal2 = new Animal(name, weight);
objAnimal1.setName(Mouse);
let arr = new Array();
Animal.push(objAnimal1);
Animal.push(new Animal("Elenphant", "45.6"), new Animal(name, weight));
arr.forEach(element => {
    console.log(element.toString());
});
