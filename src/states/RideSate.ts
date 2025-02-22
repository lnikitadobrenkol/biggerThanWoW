import AbstractState from './AbstractState';
import { IStateFactory } from '../factory/IStateFactory';
import MovingType from '../types/MovingType';
import { IMovingState } from '../types/IMovingState';

export default class RideState extends AbstractState {
  constructor(factory: IStateFactory) {
    super(MovingType.Ride, factory);
  }

  canAttack(): boolean {
    return this.type !== MovingType.Eat;
  }

  static getMovingAccelerator(): number {
    return 1.5;
  }

  toFly(): IMovingState {
    return this.factory.createFlyState();
  }

  toLand(): IMovingState {
    return this.factory.createGoState();
  }
}
