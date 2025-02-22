import { MOVING_TYPE } from "./types/MOVING_TYPE";
import { IMovingState } from "./types/IMovingState";
import { Go } from "./states/Go";

export class Character {
    private state: IMovingState;

    public constructor(stateType = MOVING_TYPE.GO) {
        this.state = new Go();
    }

    public move(x: number) {
        return x * this.state.getMovingAccelerator()
    }

    public toLanded() {
        console.log('Going')
        this.state = this.state.toGo()
    }

    public toFly() {
        console.log('Flying')
        this.state = this.state.toFly()
    }

    public toRide() {
        console.log('Riding')
        this.state = this.state.toRide()
    }

    public attack() {
        if (this.state.canAttack()) {
            throw new Error('Cannot attack now')
        }
    }

    public toEat() {
        console.log("Eating");
        this.state = this.state.toEat();
    }

    public toCast() {
        console.log("Casting");
        this.state = this.state.toCast();
    }
}