import { IMovingState } from "../types/IMovingState";

export abstract class AbstractState implements IMovingState {
    abstract canAttack(): boolean
    abstract getMovingAccelerator(): number

    toGo(): IMovingState {
        throw new Error('Not allowed')
    }

    toRide(): IMovingState {
        throw new Error('Not allowed')
    }

    toFly(): IMovingState {
        throw new Error('Not allowed')
    }

    toEat(): IMovingState {
        throw new Error("Not allowed");
    }

    toCast(): IMovingState {
        throw new Error("Not allowed");
    }
}