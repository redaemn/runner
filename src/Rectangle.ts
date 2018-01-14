import { JumpAction } from './JumpAction';

export class Rectangle {
    private ctx: CanvasRenderingContext2D;
    private x: number = 30;
    private y: number = 230;
    private mustJump: boolean = false;
    private jumpAction: JumpAction = null;
    private isMovingRight: boolean = false;
    private isMovingLeft: boolean = false;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public startMovingLeft(): void {
        this.isMovingLeft = true;
    }

    public stopMovingLeft(): void {
        this.isMovingLeft = false;
    }

    public startMovingRight(): void {
        this.isMovingRight = true;
    }

    public stopMovingRight(): void {
        this.isMovingRight = false;
    }

    public jump(): void {
        if (this.jumpAction !== null && !this.jumpAction.isDone) {
            return;
        }
        this.mustJump = true;
    }

    public render(time: number): void {
        this.update(time);
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, 50, 50);
    }

    private update(time: number): void {
        if (this.mustJump) {
            this.jumpAction = new JumpAction(this.y, time);
            this.mustJump = false;
        }

        if (this.jumpAction !== null && !this.jumpAction.isDone) {
            this.y = this.jumpAction.step(time);
        }
        if (this.isMovingLeft) {
            this.x -= 5;
        }
        if (this.isMovingRight) {
            this.x += 5;
        }
    }
}
