import { IMovingState } from '../types/IMovingState';
import { IStateFactory } from '../factory/IStateFactory';
import MovingType from '../types/MovingType';
import AbstractState from './AbstractState';

export default class FlyState extends AbstractState {
  constructor(factory: IStateFactory) {
    super(MovingType.Fly, factory);
  }

  // eslint-disable-next-line class-methods-use-this
  canAttack(): boolean {
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  getMovingAccelerator(): number {
    return 2;
  }

  toRide(): IMovingState {
    return this.factory.createRideState();
  }
}
