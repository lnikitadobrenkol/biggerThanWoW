import MovingType from '../types/MovingType';
import { IStateFactory } from '../factory/IStateFactory';
import { IMovingState } from '../types/IMovingState';

export default abstract class AbstractState implements IMovingState {
  protected factory: IStateFactory;

  protected type: MovingType;

  constructor(type: MovingType, factory: IStateFactory) {
    this.type = type;
    this.factory = factory;
  }

  canAttack(): boolean {
    return this.type === MovingType.Go;
  }

  getMovingAccelerator(): number {
    if (this.type === MovingType.Go) {
      return 1;
    }
    return 1;
  }

  toGo(): IMovingState {
    throw new Error(`Cannot transition to Go from state: ${this.type}`);
  }

  toRide(): IMovingState {
    throw new Error(`Cannot transition to Ride from state: ${this.type}`);
  }

  toFly(): IMovingState {
    throw new Error(`Cannot transition to Fly from state: ${this.type}`);
  }

  toEat(): IMovingState {
    throw new Error(`Cannot transition to Eat from state: ${this.type}`);
  }

  toCast(): IMovingState {
    throw new Error(`Cannot transition to Cast from state: ${this.type}`);
  }
}
