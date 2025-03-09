import MovingType from './types/MovingType';
import StateFactory from './factory/StateFactory';
import { IMovingState } from './types/IMovingState';

export default class Character {
  private state: IMovingState;

  private factory: StateFactory;

  constructor(initialType: MovingType = MovingType.Go) {
    this.factory = new StateFactory();
    // Use factory to create initial state
    this.state = this.factory.createStateForType(initialType);
  }

  move(distance: number): number {
    return distance * this.state.getMovingAccelerator();
  }

  toLand(): void {
    this.state = this.state.toGo();
  }

  toRide(): void {
    this.state = this.state.toRide();
  }

  toFly(): void {
    this.state = this.state.toFly();
  }

  toEat(): void {
    this.state = this.state.toEat();
  }

  attack(): void {
    if (!this.state.canAttack()) {
      throw new Error('Cannot attack now');
    }
  }
}
