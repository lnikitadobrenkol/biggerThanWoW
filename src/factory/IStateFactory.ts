import MovingType from '../types/MovingType';
import { IMovingState } from '../types/IMovingState';

export interface IStateFactory {
  createGoState(): IMovingState;
  createRideState(): IMovingState;
  createFlyState(): IMovingState;
  createEatState(): IMovingState;
  createCastState(): IMovingState;
  createStateForType(type: MovingType): IMovingState;
}
