import AbstractState from './AbstractState';
import { IStateFactory } from '../factory/IStateFactory';
import MovingType from '../types/MovingType';

export default class CastState extends AbstractState {
  constructor(factory: IStateFactory) {
    super(MovingType.Cast, factory);
  }

  canAttack(): boolean {
    return this.type === MovingType.Cast;
  }

  getMovingAccelerator(): number {
    return this.type === MovingType.Cast ? 0 : 1;
  }
}
