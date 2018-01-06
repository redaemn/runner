export class Canvas {

    private _ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private isAutomaticallyResizing: boolean = false;

    constructor() {
        const canvasElements: NodeListOf<HTMLCanvasElement> = document.getElementsByTagName('canvas');
        if (canvasElements.length > 0) {
            this.canvas = canvasElements[0];
            this.canvas.focus();
            this._ctx = this.canvas.getContext('2d');
            this.setSize();
            this.addAutomaticSizeListener();
        }
    }

    public get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }

    public addEventListener<K extends keyof HTMLElementEventMap>(
        type: K,
        listener: (
            this: HTMLCanvasElement,
            ev: HTMLElementEventMap[K]
        ) => any,
        options?: boolean | AddEventListenerOptions): void {
        this.canvas.addEventListener(type, listener, options);
    }

    public clear(): void {
        this._ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private setSize(): void {
        const width: number = document.documentElement.clientWidth;
        const height: number = document.documentElement.clientHeight;
        this.canvas.width = width;
        this.canvas.height = height;
    }

    private addAutomaticSizeListener(): void {
        window.addEventListener('resize', () => {
            if (this.isAutomaticallyResizing) {
                return;
            }
            this.isAutomaticallyResizing = true;
            window.requestAnimationFrame(() => {
                this.setSize();
                this.isAutomaticallyResizing = false;
            });
        });
    }
}
