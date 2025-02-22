import { AbstractState } from "./AbstractState";
import { IMovingState } from "../types/IMovingState";
import { Ride } from "./Ride";
import {Eat} from "./Eat";
import {Fly} from "./Fly";
import {Cast} from "./Cast";

export class Go extends AbstractState {
    canAttack() {
        return true;
    }

    getMovingAccelerator() {
        return 1;
    }

    toGo(): IMovingState {
        return this;
    }
    

    toRide(): IMovingState {
        return new Ride();
    }

    toFly(): IMovingState {
        return new Fly();
    }

    toEat(): IMovingState {
        return new Eat();
    }
    
    toCast(): IMovingState {
        return new Cast();
    }
}