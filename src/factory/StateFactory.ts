import { IStateFactory } from './IStateFactory';
import { IMovingState } from '../types/IMovingState';
import GoState from '../states/GoState';
import RideState from '../states/RideSate';
import FlyState from '../states/FlyState';
import EatState from '../states/EatState';
import CastState from '../states/CastState';
import MovingType from '../types/MovingType';

export default class StateFactory implements IStateFactory {
  createGoState(): IMovingState {
    return new GoState(this);
  }

  createRideState(): IMovingState {
    return new RideState(this);
  }

  createFlyState(): IMovingState {
    return new FlyState(this);
  }

  createEatState(): IMovingState {
    return new EatState(this);
  }

  createCastState(): IMovingState {
    return new CastState(this);
  }

  createStateForType(type: MovingType): IMovingState {
    switch (type) {
      case MovingType.Ride: return this.createRideState();
      case MovingType.Fly: return this.createFlyState();
      case MovingType.Eat: return this.createEatState();
      case MovingType.Cast: return this.createCastState();
      case MovingType.Go: return this.createGoState();
      default:
        return this.createGoState();
    }
  }
}
