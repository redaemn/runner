export class Renderer {
    private callbacks: Array<() => any> = [];
    private isLoopActive: boolean = false;
    private currentAnimationFrameId: number;

    public addCallback(fn: () => any): void {
        this.callbacks.push(fn);
    }

    public startLoop(): void {
        this.isLoopActive = true;
        this.renderLoop();
    }

    public stopLoop(): void {
        this.isLoopActive = false;
        window.cancelAnimationFrame(this.currentAnimationFrameId);
    }

    private renderLoop(): void {
        if (!this.isLoopActive) {
            return;
        }
        this.currentAnimationFrameId = window.requestAnimationFrame(() => {
            this.executeCallbacks();
            this.renderLoop();
        });
    }

    private executeCallbacks(): void {
        this.callbacks.forEach((fn) => fn());
    }
}
