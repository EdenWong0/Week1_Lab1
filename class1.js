class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
}
    toString() {
        return '(' + this.wheels + ')';
}
}
class Car extends Vehicle {
    constructor(color) {
     super(4);
     this.color = color;
    }
    toString() {
     return super.toString() + ' colored: ' + this.color;
    }
}
let car = new Car('blue');
car.toString();
console.log(car instanceof Car);
console.log(car instanceof Vehicle);


function reinitConst(){
    const me = 1;
    console.log(me);
    me = 2;
    console.log(me);
    }
    reinitConst();

function reinitConst(){
    let me = 1;
    console.log(me);
    me = 2;
    console.log(me);
    }
reinitConst();

function iterateVar() {
    for(var i = 0; i < 10; i++) {
    console.log(i);
    }
    console.log(i);
    }
    iterateVar();

function iterateLet() {
    for(let i = 0; i < 10; i++) {
    console.log(i);
    }
    console.log(i);
    }
    iterateLet();

function add(x, y = 0) {
    console.log(x + y);
    }
    add(1);
    add(1,2);

function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
    }
userFriends('User', 'Bob', 'Alice');

function userTopFriends(firstFriend, secondFriend, thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
    }
    userTopFriends(...['Alice', 'Bob', 'Michelle']);
            
