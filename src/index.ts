import { Character } from "./Character";
import { MOVING_TYPE } from "./types/MOVING_TYPE";

const person = new Character(MOVING_TYPE.GO);
console.log(person.move(5)); 
person.toRide();
console.log(person.move(5));
person.toFly();
console.log(person.move(5));
person.attack();
console.log(person.move(5));
person.toEat();
console.log(person.move(5));
person.toCast();
