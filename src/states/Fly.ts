import { AbstractState } from "./AbstractState";
import { IMovingState } from "../types/IMovingState";
import { Ride } from "./Ride";
import {Go} from "./Go";

export class Fly extends AbstractState {
  canAttack(): boolean {
    return false;
  }

  getMovingAccelerator(): number {
    return 2;
  }

  toGo(): IMovingState {
    return new Go();
  }

  toRide(): IMovingState {
    return new Ride();
  }
  
  toFly(): IMovingState {
    return this;
  }
  
  toEat(): IMovingState {
    throw new Error("Not allowed while flying");
  }

  toCast(): IMovingState {
    throw new Error("Not allowed while flying");
  }
}