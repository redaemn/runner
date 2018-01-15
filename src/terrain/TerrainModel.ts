import { JumpAction } from '../actions/JumpAction';
import { MovementAction } from '../actions/MovementAction';
import { MovementType } from '../actions/MovementType';
import { Canvas } from '../Canvas';

export class TerrainModel {
    private ROCKS_ROWS: number = 3;
    private ROCKS_WIDTH: number = 24;
    private ROCKS_HEIGHT: number = 4;
    private HORIZON_START: number = 19;
    private rocks: boolean[][];

    constructor(private canvas: Canvas) {
        this.rocks = this.initializeRocks();
    }

    public render(time: number): void {
        this.update(time);
        this.renderHorizon();
        this.renderRocks();
    }

    private get rocksColumns(): number {
        return this.canvas.width / this.ROCKS_WIDTH * 2;
    }

    private renderHorizon(): void {
        this.canvas.fillStyle = 'gray';
        this.canvas.fillRect(0, this.HORIZON_START, this.canvas.width, 4);
    }

    private renderRocks(): void {
        this.canvas.fillStyle = 'gray';
        for (let row: number = 0; row < this.ROCKS_ROWS; row++) {
            for (let column: number = 0; column < this.rocksColumns; column++) {
                if (this.rocks[row][column]) {
                    const y: number = this.HORIZON_START - ((row + 1) * (this.ROCKS_HEIGHT * 3.5));
                    const xDisplacement: number = (row % 2) * (this.ROCKS_WIDTH / 2);
                    const x: number = xDisplacement + (column * this.ROCKS_WIDTH);
                    this.canvas.fillRect(x, y, this.ROCKS_WIDTH, this.ROCKS_HEIGHT);
                }
            }
        }
    }

    private initializeRocks(): boolean[][] {
        const rocks: boolean[][] = [];
        for (let row: number = 0; row < this.ROCKS_ROWS; row++) {
            rocks.push([]);
            for (let column: number = 0; column < this.rocksColumns; column++) {
                rocks[row].push(Math.random() < .2);
            }
        }
        return rocks;
    }

    private update(time: number): void {
        this.updateRocks(time);
    }

    private updateRocks(time: number): void {
        // do nothing
    }
}
