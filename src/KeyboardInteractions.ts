import { Rectangle } from "./Rectangle";
import { Canvas } from "./Canvas";

export class KeyboardInteractions {
    constructor(private canvas: Canvas, private rectangle: Rectangle) {
    }

    /**
     * createInteractions
     */
    public createInteractions() {
        this.canvas.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    /**
     * handleKeydown
     */
    public handleKeydown(event: KeyboardEvent) {
        switch (event.code) {
            case "KeyS":
            case "ArrowDown":
                // Handle "down"
                this.rectangle.moveDown();
                break;
            case "KeyW":
            case "ArrowUp":
                // Handle "up"
                this.rectangle.moveUp();
                break;
            case "KeyA":
            case "ArrowLeft":
                // Handle "left"
                this.rectangle.moveLeft();
                break;
            case "KeyD":
            case "ArrowRight":
                // Handle "right"
                this.rectangle.moveRight();
                break;
        }
    }
}
