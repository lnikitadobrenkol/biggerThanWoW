import AbstractState from './AbstractState';
import { IStateFactory } from '../factory/IStateFactory';
import MovingType from '../types/MovingType';

export default class EatState extends AbstractState {
  constructor(factory: IStateFactory) {
    super(MovingType.Eat, factory);
  }

  // eslint-disable-next-line class-methods-use-this
  canAttack(): boolean {
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  getMovingAccelerator(): number {
    return 0;
  }
}
