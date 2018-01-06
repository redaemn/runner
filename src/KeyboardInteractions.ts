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
        switch(event.code) {
            case "KeyS":
            case "ArrowDown":
              // Handle "back"
              this.rectangle.moveDown();
              break;
            case "KeyW":
            case "ArrowUp":
              // Handle "forward"
              this.rectangle.moveUp();
              break;
            case "KeyA":
            case "ArrowLeft":
              // Handle "turn left"
              this.rectangle.moveLeft();
              break;
            case "KeyD":
            case "ArrowRight":
              // Handle "turn right"
              this.rectangle.moveRight();
              break;
        }
    }
}