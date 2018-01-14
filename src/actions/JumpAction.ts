export class JumpAction {
    private JUMP_SPEED: number = 10 * 60 / 1000; // pixel / ms
    private GRAVITY_ACCELERATION: number = 9.80665 * 120 / ( 1000 * 1000 ); // pixel / ms^2
    private jumpDone: boolean = false;

    constructor(private startHeight: number, private startTime: number) {
    }

    public getCurrentHeight(currentTime: number): number {
        const time: number = (currentTime - this.startTime);
        const verticalMovement: number = Math.round( (this.JUMP_SPEED * time) - (this.GRAVITY_ACCELERATION * Math.pow(time, 2) / 2) );
        const currentHeight: number = Math.min(this.startHeight - verticalMovement, this.startHeight);
        this.jumpDone = time > 0 && currentHeight === this.startHeight;
        return currentHeight;
    }

    public get isDone(): boolean {
        return this.jumpDone;
    }
}
