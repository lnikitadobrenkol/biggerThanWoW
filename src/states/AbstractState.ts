import MovingType from '../types/MovingType';
import { IStateFactory } from '../factory/IStateFactory';
import {IMovingState} from '../types/IMovingState';

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
    return 1;
  }

  toGo(): IMovingState {
    throw new Error('Not allowed');
  }

  toRide(): IMovingState {
    throw new Error('Not allowed');
  }

  toFly(): IMovingState {
    throw new Error('Not allowed');
  }

  toEat(): IMovingState {
    throw new Error('Not allowed');
  }

  toCast(): IMovingState {
    throw new Error('Not allowed');
  }
}
