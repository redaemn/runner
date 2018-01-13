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
            case 'KeyS':
            case 'ArrowDown':
                // Handle 'down'
                // this.rectangle.moveDown();
                break;
            case 'KeyW':
            case 'ArrowUp':
                // Handle 'up'
                // this.rectangle.moveUp();
                break;
            case 'KeyA':
            case 'ArrowLeft':
                // Handle 'left'
                this.rectangle.startMovingLeft();
                break;
            case 'KeyD':
            case 'ArrowRight':
                // Handle 'right'
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
            case 'KeyS':
            case 'ArrowDown':
                // Handle 'down'
                // this.rectangle.moveDown();
                break;
            case 'KeyW':
            case 'ArrowUp':
                // Handle 'up'
                // this.rectangle.moveUp();
                break;
            case 'KeyA':
            case 'ArrowLeft':
                // Handle 'left'
                this.rectangle.stopMovingLeft();
                break;
            case 'KeyD':
            case 'ArrowRight':
                // Handle 'right'
                this.rectangle.stopMovingRight();
                break;
        }
    }
}
