import AbstractState from './AbstractState';
import { IStateFactory } from '../factory/IStateFactory';
import MovingType from '../types/MovingType';

export default class EatState extends AbstractState {
  constructor(factory: IStateFactory) {
    super(MovingType.Eat, factory);
  }

  canAttack(): boolean {
    return this.type !== MovingType.Eat;
  }

  getMovingAccelerator(): number {
    return this.type === MovingType.Eat ? 0 : 1;
  }
}
