import { Canvas } from './Canvas';
import { KeyboardInteractions } from './KeyboardInteractions';
import { PlayerModel } from './player/PlayerModel';
import { Renderer } from './Renderer';

export class App {
    private canvas: Canvas;
    private playerModel: PlayerModel;
    private renderer: Renderer;
    private keyboardInteractions: KeyboardInteractions;

    constructor() {
        this.canvas = new Canvas();
        this.renderer = new Renderer();
        this.playerModel = new PlayerModel(this.canvas.ctx);
        this.keyboardInteractions = new KeyboardInteractions(this.canvas, this.playerModel);
    }

    /**
     * start
     */
    public start(): void {
        this.keyboardInteractions.createInteractions();

        this.renderer.addCallback(() => this.canvas.clear());
        this.renderer.addCallback((time: number) => this.playerModel.render(time));

        this.renderer.startLoop();
    }
}
