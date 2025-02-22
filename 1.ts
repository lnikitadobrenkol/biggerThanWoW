
enum MOVING_TYPE {
    LAND = "LAND",
    RIDE = "RIDE",
}
interface MovingState {
    canAttack(): boolean;
    getMovingAccelerator(): number;

    toFly(): MovingState
    toRide(): MovingState
    toLanded(): MovingState
}

abstract class AbstractState implements MovingState {
    abstract canAttack(): boolean
    abstract getMovingAccelerator(): number

    toFly(): MovingState {
        throw new Error('Not allowed')
    }

    toLanded(): MovingState {
        throw new Error('Not allowed')
    }

    toRide(): MovingState {
        throw new Error('Not allowed')
    }
}

class Land extends AbstractState {
    canAttack() {
        return true;
    }

    getMovingAccelerator() {
        return 1;
    }

    toRide(): MovingState {
        return new Ride();
    }
}

class Ride extends AbstractState {
    canAttack() {
        return false;
    }

    getMovingAccelerator() {
        return 1.5;
    }

    toFly(): MovingState {
        return new Fly();
    }

    toLanded(): MovingState {
        return new Land();
    }
}

class Fly extends AbstractState {
    canAttack() {
        return false;
    }

    getMovingAccelerator() {
        return 2;
    }

    toRide(): MovingState {
        return new Ride();
    }
}


class Character {
    private state: MovingState;

    public constructor(stateType = MOVING_TYPE.LAND) {
        //if (stateType === MOVING_TYPE_LAND) {
            this.state = new Land()
        //}
        this.state = new Land()
    }

    public move(x: number) {
        return x * this.state.getMovingAccelerator()
    }

    public toFly() {
        console.log('Flying')
        this.state = this.state.toFly()
    }

    public toRide() {
        console.log('Riding')
        this.state = this.state.toRide()
    }

    public toLanded() {
        console.log('Landed')
        this.state = this.state.toLanded()
    }

    public attack() {
        if (this.state.canAttack()) {
            throw new Error('Cannot attack now')
        }
    }
}

const person = new Character(MOVING_TYPE.LAND)

person.move(5)
person.toRide()
person.toFly()
