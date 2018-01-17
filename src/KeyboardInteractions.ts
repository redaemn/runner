import { Canvas } from './Canvas';
import { PlayerModel } from './player/PlayerModel';

export class KeyboardInteractions {
    constructor(private canvas: Canvas, private playerModel: PlayerModel) {
    }

    /**
     * createInteractions
     */
    public createInteractions(): void {
        this.canvas.addEventListener('keydown', e => this.handleKeydown(e));
        this.canvas.addEventListener('keyup', e => this.handleKeyup(e));
    }

    /**
     * handleKeydown
     */
    public handleKeydown(event: KeyboardEvent): void {
        switch (event.code) {
            case 'KeyA':
            case 'ArrowLeft':
                this.playerModel.startMovingLeft();
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.playerModel.startMovingRight();
                break;
            case 'Space':
                this.playerModel.jump();
                break;
        }
    }

    /**
     * handleKeyup
     */
    public handleKeyup(event: KeyboardEvent): void {
        switch (event.code) {
            case 'KeyA':
            case 'ArrowLeft':
                this.playerModel.stopMovingLeft();
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.playerModel.stopMovingRight();
                break;
        }
    }
}
