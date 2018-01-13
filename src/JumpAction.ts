export class JumpAction {
    private JUMP_SPEED: number = .4;
    private GRAVITY_SPEED: number = .0004;
    private jumpDone: boolean = false;

    constructor(private startHeight: number, private startTime: number) {
    }

    public step(currentTime: number): number {
        const time: number = (currentTime - this.startTime);
        const currentGravity: number = this.GRAVITY_SPEED * (time / 700);
        const verticalStep: number = Math.round( (this.JUMP_SPEED * time) - (currentGravity * Math.pow(time, 2) / 2) );
        const currentHeight: number = Math.min(this.startHeight - verticalStep, this.startHeight);
        this.jumpDone = time > 0 && currentHeight === this.startHeight;
        return currentHeight;
    }

    public get isDone(): boolean {
        return this.jumpDone;
    }
}
