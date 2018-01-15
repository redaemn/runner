import { JumpAction } from '../actions/JumpAction';
import { MovementAction } from '../actions/MovementAction';
import { MovementType } from '../actions/MovementType';
import { Canvas } from '../Canvas';

export class TerrainModel {
    private MOVE_SPEED: number = 5 * 60 / 1000; // pixel / ms
    private ROCKS_ROWS: number = 3;
    private ROCKS_WIDTH: number = 24;
    private ROCKS_HEIGHT: number = 4;
    private HORIZON_START: number = 19;
    private rocks: boolean[][];
    private movementStartTime: number = 0;

    constructor(private canvas: Canvas) {
        this.rocks = this.initializeRocks();
    }

    public render(time: number): void {
        const rocksXMovement: number = this.calculateRocksXMovement(time);
        this.renderHorizon();
        this.renderRocks(rocksXMovement);
    }

    private get rocksColumns(): number {
        return Math.round(this.canvas.width / this.ROCKS_WIDTH) * 2;
    }

    private renderHorizon(): void {
        this.canvas.fillStyle = 'gray';
        this.canvas.fillRect(0, this.HORIZON_START, this.canvas.width, 4);
    }

    private renderRocks(rocksXMovement: number): void {
        this.canvas.fillStyle = 'gray';
        for (let row: number = 0; row < this.ROCKS_ROWS; row++) {
            for (let column: number = 0; column < this.rocksColumns; column++) {
                if (this.rocks[row][column]) {
                    const y: number = this.HORIZON_START - ((row + 1) * (this.ROCKS_HEIGHT * 3.5));
                    const xDisplacement: number = (row % 2) * (this.ROCKS_WIDTH / 2);
                    const x: number = -rocksXMovement + xDisplacement + (column * this.ROCKS_WIDTH);
                    if (x + this.ROCKS_WIDTH >= 0) {
                        this.canvas.fillRect(x, y, this.ROCKS_WIDTH, this.ROCKS_HEIGHT);
                    }
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

    private asyncronouslyUpdateRocks(): void {
        setTimeout(() => {
            this.splitRocks();
            this.updateRocks();
        }, 0);
    }

    private splitRocks(): void {
        const newRocks: boolean[][] = [];
        for (let row: number = 0; row < this.ROCKS_ROWS; row++) {
            newRocks.push(this.rocks[row].slice(this.rocksColumns / 2, this.rocksColumns));
        }
        this.rocks = newRocks;
    }

    private updateRocks(): void {
        for (let row: number = 0; row < this.ROCKS_ROWS; row++) {
            for (let column: number = 0; column < this.rocksColumns / 2; column++) {
                this.rocks[row].push(Math.random() < .2);
            }
        }
    }

    private calculateRocksXMovement(time: number): number {
        const xMovement: number = this.MOVE_SPEED * (time - this.movementStartTime);
        if (xMovement >= this.canvas.width) {
            this.movementStartTime = time;
            this.asyncronouslyUpdateRocks();
        }
        return xMovement;
    }
}
