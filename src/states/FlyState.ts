import { IMovingState } from '../types/IMovingState';
import { IStateFactory } from '../factory/IStateFactory';
import MovingType from '../types/MovingType';
import AbstractState from './AbstractState';

export default class FlyState extends AbstractState {
  constructor(factory: IStateFactory) {
    super(MovingType.Fly, factory);
  }

  canAttack(): boolean {
    return this.type !== MovingType.Eat;
  }

  getMovingAccelerator(): number {
    return this.type === MovingType.Fly ? 0 : 2;
  }

  toRide(): IMovingState {
    return this.factory.createRideState();
  }
}
