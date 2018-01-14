import { Canvas } from './Canvas';
import { Rectangle } from './Rectangle';

export class KeyboardInteractions {
    constructor(private canvas: Canvas, private rectangle: Rectangle) {
    }

    /**
     * createInteractions
     */
    public createInteractions(): void {
        this.canvas.addEventListener('keydown', (e) => this.handleKeydown(e));
        this.canvas.addEventListener('keyup', (e) => this.handleKeyup(e));
    }

    /**
     * handleKeydown
     */
    public handleKeydown(event: KeyboardEvent): void {
        switch (event.code) {
            case 'KeyA':
            case 'ArrowLeft':
                this.rectangle.startMovingLeft();
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.rectangle.startMovingRight();
                break;
            case 'Space':
                this.rectangle.jump();
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
                this.rectangle.stopMovingLeft();
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.rectangle.stopMovingRight();
                break;
        }
    }
}
