import { JumpAction } from '../actions/JumpAction';
import { MovementAction } from '../actions/MovementAction';
import { MovementType } from '../actions/MovementType';
import { Canvas } from '../Canvas';

export class PlayerModel {
    private x: number = 30;
    private y: number = 0;

    private startJump: boolean = false;
    private isJumping: boolean = false;
    private jumpAction: JumpAction = null;

    private startRightMovement: boolean = false;
    private stopRightMovement: boolean = false;
    private isMovingRight: boolean = false;
    private moveRightAction: MovementAction = null;

    private startLeftMovement: boolean = false;
    private stopLeftMovement: boolean = false;
    private isMovingLeft: boolean = false;
    private moveLeftAction: MovementAction = null;

    constructor(private canvas: Canvas) {
    }

    public startMovingLeft(): void {
        if (!this.isMovingLeft) {
            this.startLeftMovement = true;
        } else if (this.stopLeftMovement) {
            this.startLeftMovement = true;
            this.stopLeftMovement = false;
        }
    }

    public stopMovingLeft(): void {
        if (this.isMovingLeft || this.startLeftMovement) {
            this.stopLeftMovement = true;
        }
    }

    public startMovingRight(): void {
        if (!this.isMovingRight) {
            this.startRightMovement = true;
        } else if (this.stopRightMovement) {
            this.startRightMovement = true;
            this.stopRightMovement = false;
        }
    }

    public stopMovingRight(): void {
        if (this.isMovingRight || this.startRightMovement) {
            this.stopRightMovement = true;
        }
    }

    public jump(): void {
        if (!this.isJumping) {
            this.startJump = true;
        }
    }

    public render(time: number): void {
        this.update(time);
        this.canvas.fillStyle = 'green';
        this.canvas.fillRect(this.x, this.y, 35, 100);
    }

    private update(time: number): void {
        if (this.startJump) {
            this.jumpAction = new JumpAction(this.y, time);
            this.isJumping = true;
            this.startJump = false;
        }

        if (this.isJumping) {
            this.y = this.jumpAction.getCurrentHeight(time);
            this.isJumping = !this.jumpAction.isDone;
        }

        if (this.startRightMovement && !this.isJumping) {
            this.moveRightAction = new MovementAction(this.x, time, MovementType.Increase);
            this.isMovingRight = true;
            this.startRightMovement = false;
        }

        if (this.stopRightMovement && !this.isJumping) {
            this.isMovingRight = false;
            this.stopRightMovement = false;
        }

        if (this.isMovingRight) {
            this.x = this.moveRightAction.getCurrentCoordinate(time);
        }

        if (this.startLeftMovement && !this.isJumping) {
            this.moveLeftAction = new MovementAction(this.x, time, MovementType.Decrease);
            this.isMovingLeft = true;
            this.startLeftMovement = false;
        }

        if (this.stopLeftMovement && !this.isJumping) {
            this.isMovingLeft = false;
            this.stopLeftMovement = false;
        }

        if (this.isMovingLeft) {
            this.x = this.moveLeftAction.getCurrentCoordinate(time);
        }
    }
}
