import { Canvas } from '../Canvas';

export class Rocks {
    private ROCKS_WIDTH: number = 24;
    private ROCKS_HEIGHT: number = 4;
    private rocks: boolean[];
    private movementStartTime: number = 0;
    private xMovementCorrection: number = 0;

    constructor(private canvas: Canvas, private moveSpeed: number, private yCoordinate: number) {
        this.reset();
    }

    public reset(): void {
        this.rocks = this.initializeRocks();
    }

    public render(time: number): void {
        const rocksXMovement: number = this.calculateRocksXMovement(time);
        this.renderRocks(rocksXMovement);
    }

    private get rocksColumns(): number {
        return Math.round(this.canvas.width / this.ROCKS_WIDTH) + 1;
    }

    private renderRocks(rocksXMovement: number): void {
        this.canvas.fillStyle = 'gray';
        for (let column: number = 0; column < this.rocksColumns; column++) {
            if (this.rocks[column]) {
                const x: number = -rocksXMovement + (column * this.ROCKS_WIDTH);
                if (x + this.ROCKS_WIDTH >= 0) {
                    this.canvas.fillRect(x, this.yCoordinate, this.ROCKS_WIDTH, this.ROCKS_HEIGHT);
                }
            }
        }
    }

    private initializeRocks(): boolean[] {
        const rocks: boolean[] = [];
        for (let column: number = 0; column < this.rocksColumns; column++) {
            rocks.push(Math.random() < .2);
        }
        return rocks;
    }

    private asyncronouslyUpdateRocks(): void {
        setTimeout(() => {
            this.rocks.shift();
            this.rocks.push(Math.random() < .2);
        }, 0);
    }

    private calculateRocksXMovement(time: number): number {
        const xMovement: number = this.moveSpeed * (time - this.movementStartTime) + this.xMovementCorrection;
        if (xMovement >= this.ROCKS_WIDTH) {
            this.xMovementCorrection = xMovement - this.ROCKS_WIDTH;
            this.movementStartTime = time;
            this.asyncronouslyUpdateRocks();
        }
        return xMovement;
    }
}
