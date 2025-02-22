import {IMovingState} from "../types/IMovingState";
import {AbstractState} from "./AbstractState";
import {Eat} from "./Eat";
import {Fly} from "./Fly";
import {Go} from "./Go";
import {Ride} from "./Ride";

export class Cast extends AbstractState {
    canAttack() {
        return true;
    }

    getMovingAccelerator() {
        return 0;
    }

    toGo(): IMovingState {
        return new Go();
    }

    toRide(): IMovingState {
        return new Ride();
    }

    toFly(): IMovingState {
        return new Fly();
    }

    toEat(): IMovingState {
        throw new Error("Not allowed while casting");
    }

    toCast(): IMovingState {
        return this;
    }
}