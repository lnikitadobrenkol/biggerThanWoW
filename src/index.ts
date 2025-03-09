import Character from './Character';
import MovingType from './types/MovingType';

function main(): void {
  const person = new Character(MovingType.Go);
  person.move(5);
  person.toRide();
  person.move(5);
  person.toFly();
  person.move(5);
}

main();
