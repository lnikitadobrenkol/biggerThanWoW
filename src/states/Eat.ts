import {IMovingState} from "../types/IMovingState";
import {AbstractState} from "./AbstractState";
import {Cast} from "./Cast";
import {Go} from "./Go";

export class Eat extends AbstractState {
    canAttack() {
        return false;
    }

    getMovingAccelerator() {
        return 0;
    }

    toGo(): IMovingState {
        return new Go();
    }

    toRide(): IMovingState {
        throw new Error("Not allowed while eating");
    }

    toFly(): IMovingState {
        throw new Error("Not allowed while eating");
    }    

    toEat(): IMovingState {
        return this;
    }

    toCast(): IMovingState {
        throw new Error("Not allowed while eating");
    }
}