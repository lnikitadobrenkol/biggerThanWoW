import AbstractState from './AbstractState';
import { IStateFactory } from '../factory/IStateFactory';
import MovingType from '../types/MovingType';
import { IMovingState } from '../types/IMovingState';

export default class GoState extends AbstractState {
  constructor(factory: IStateFactory) {
    super(MovingType.Go, factory);
  }

  canAttack(): boolean {
    return this.type === MovingType.Go;
  }

  static getMovingAccelerator(): number {
    return 1;
  }

  toRide(): IMovingState {
    return this.factory.createRideState();
  }
}
