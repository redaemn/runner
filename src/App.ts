import { Canvas } from "./Canvas";
import { Rectangle } from "./Rectangle";
import { Renderer } from "./Renderer";
import { KeyboardInteractions } from "./KeyboardInteractions";

export class App {
    private canvas: Canvas;
    private rectangle: Rectangle;
    private renderer: Renderer;
    private keyboardInteractions: KeyboardInteractions;

    constructor() {
        this.canvas = new Canvas();
        this.renderer = new Renderer();
        this.rectangle = new Rectangle(this.canvas.ctx);
        this.keyboardInteractions = new KeyboardInteractions(this.canvas, this.rectangle);
    }

    /**
     * start
     */
    public start(): void {
        this.keyboardInteractions.createInteractions();

        this.renderer.addCallback(() => this.canvas.clear());
        this.renderer.addCallback(() => this.rectangle.render());
        
        this.renderer.startLoop();
    }
}
