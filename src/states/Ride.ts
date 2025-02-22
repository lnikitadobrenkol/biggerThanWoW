import { AbstractState } from "./AbstractState";
import { IMovingState } from "../types/IMovingState";
import { Fly } from "./Fly";
import { Go } from "./Go";

export class Ride extends AbstractState {
    canAttack() {
        return false;
    }

    getMovingAccelerator() {
        return 1.5;
    }

    toGo(): IMovingState {
        return new Go();
    }
    
    toRide(): IMovingState {
        return this;
    }

    toFly(): IMovingState {
        return new Fly();
    }
    
    toEat(): IMovingState {
        throw new Error("Not allowed while riding");
    }
        
    toCast(): IMovingState {
        throw new Error("Not allowed while riding");
    }
}
