import { IStateFactory } from './IStateFactory';
import { IMovingState } from '../types/IMovingState';
import GoState from '../states/GoState';
import RideState from '../states/RideSate';
import FlyState from '../states/FlyState';
import EatState from '../states/EatState';
import MovingType from '../types/MovingType';

export default class StateFactory implements IStateFactory {
  createGoState(): GoState {
    return new GoState(this);
  }

  createRideState(): RideState {
    return new RideState(this);
  }

  createFlyState(): FlyState {
    return new FlyState(this);
  }

  createEatState(): EatState {
    return new EatState(this);
  }

  createStateForType(type: MovingType): IMovingState {
    switch (type) {
      case MovingType.Ride: return this.createRideState();
      case MovingType.Fly: return this.createFlyState();
      case MovingType.Eat: return this.createEatState();
      case MovingType.Go: return this.createGoState();
      default:
        return this.createGoState();
    }
  }
}
