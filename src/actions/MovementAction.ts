import { MovementType } from './MovementType';

export class MovementAction {

    private MOVE_SPEED: number = 5 * 60 / 1000; // pixel / ms

    constructor(private startCoordinate: number, private startTime: number, private movementType: MovementType) {
    }

    public getCurrentCoordinate(currentTime: number): number {
        const time: number = (currentTime - this.startTime);
        const movement: number = this.MOVE_SPEED * time;
        return this.movementType === MovementType.Increase ? this.startCoordinate + movement : this.startCoordinate - movement;
    }
}
