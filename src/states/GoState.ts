import AbstractState from './AbstractState';
import { IStateFactory } from '../factory/IStateFactory';
import MovingType from '../types/MovingType';
import { IMovingState } from '../types/IMovingState';

export default class GoState extends AbstractState {
  constructor(factory: IStateFactory) {
    super(MovingType.Go, factory);
  }

  // eslint-disable-next-line class-methods-use-this
  canAttack(): boolean {
    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  getMovingAccelerator(): number {
    return 1;
  }

  toRide(): IMovingState {
    return this.factory.createRideState();
  }
}
