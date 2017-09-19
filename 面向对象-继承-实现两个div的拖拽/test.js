function Master(name) {
    this.name=name;
}
Master.prototype.feed=function (animal,food) {
    alert(this.name+'给'+animal.name+'喂食'+food.name);
}

function Food(name) {
    this.name=name;
}

function Fish(name) {
    this.food=Food;
    this.food(name);
}

function Bone(name) {
    this.food=Food;
    this.food(name);
}

function Animal(name) {
    this.name=name;
}

function Cat(name) {
    this.animal=Animal;
    this.animal(name);
}

function Dog(name) {
    this.animal=Animal;
    this.animal(name);
}

