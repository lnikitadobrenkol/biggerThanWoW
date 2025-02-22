export interface IMovingState {
    canAttack(): boolean;
    getMovingAccelerator(): number;

    toGo(): IMovingState
    toRide(): IMovingState
    toFly(): IMovingState
    toEat(): IMovingState
    toCast(): IMovingState
}