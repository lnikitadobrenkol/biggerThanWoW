# Changelog

## [Unreleased]

### Refactor
- Separated the state machine into individual files:
  - `AbstractState.ts`
  - `Eat.ts`
  - `Cast.ts`
  - `Fly.ts`
  - `Go.ts`
  - `Ride.ts`
  - Removed `1.ts` (migrated its content into the new structure).

### Features
- Added the **Eat** and **Cast** states, each extending `AbstractState` with unique behavior.

### Other
- Moved shared interfaces/enums to `src/types/IMovingState.ts` and `src/types/MOVING_TYPE.ts`.
- Created `src/Character.ts` and `src/index.ts` for clearer project organization.
