import { JumpAction } from '../actions/JumpAction';
import { MovementAction } from '../actions/MovementAction';
import { MovementType } from '../actions/MovementType';
import { Canvas } from '../Canvas';
import { Rocks } from './Rocks';

export class TerrainModel {
    private MOVE_SPEED: number = 1 * 60 / 1000; // pixel / ms
    private ROCKS_ROWS: number = 3;
    private HORIZON_START: number = 19;
    private rocks: Rocks[];

    constructor(private canvas: Canvas) {
        this.reset();
    }

    public reset(): void {
        this.rocks = this.initializeRocks();
    }

    public render(time: number): void {
        this.renderHorizon();
        this.renderRocks(time);
    }

    private renderHorizon(): void {
        this.canvas.fillStyle = 'gray';
        this.canvas.fillRect(0, this.HORIZON_START, this.canvas.width, 4);
    }

    private renderRocks(time: number): void {
        this.rocks.forEach(rocks => rocks.render(time));
    }

    private initializeRocks(): Rocks[] {
        const rocks: Rocks[] = [];
        for (let row: number = 0; row < this.ROCKS_ROWS; row++) {
            const rocksSpeed: number = this.MOVE_SPEED * (row + 2);
            const yCoordinate: number = this.HORIZON_START - ((row + 1) * 14);
            rocks.push(new Rocks(this.canvas, rocksSpeed, yCoordinate));
        }
        return rocks;
    }
}
