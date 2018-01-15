import { Canvas } from './Canvas';
import { KeyboardInteractions } from './KeyboardInteractions';
import { PlayerModel } from './player/PlayerModel';
import { Renderer } from './Renderer';
import { TerrainModel } from './terrain/TerrainModel';

export class App {
    private canvas: Canvas;
    private renderer: Renderer;
    private keyboardInteractions: KeyboardInteractions;
    private playerModel: PlayerModel;
    private terrainModel: TerrainModel;

    constructor() {
        this.canvas = new Canvas();
        this.renderer = new Renderer();
        this.playerModel = new PlayerModel(this.canvas);
        this.terrainModel = new TerrainModel(this.canvas);
        this.keyboardInteractions = new KeyboardInteractions(this.canvas, this.playerModel);
    }

    /**
     * start
     */
    public start(): void {
        this.keyboardInteractions.createInteractions();

        this.renderer.addCallback(() => this.canvas.clear());
        this.renderer.addCallback((time: number) => this.terrainModel.render(time));
        this.renderer.addCallback((time: number) => this.playerModel.render(time));

        this.renderer.startLoop();
    }
}
