export class Renderer {
    private callbacks: (() => any)[] = [];
    private isLoopActive: boolean = false;
    private currentAnimationFrameId: number;

    public addCallback(fn: () => any) {
        this.callbacks.push(fn);
    }

    public startLoop() {
        this.isLoopActive = true;
        this.renderLoop();
    }

    public stopLoop() {
        this.isLoopActive = false;
        window.cancelAnimationFrame(this.currentAnimationFrameId);
    }

    private renderLoop() {
        if (!this.isLoopActive) {
            return;
        }
        this.currentAnimationFrameId = window.requestAnimationFrame(() => {
            this.executeCallbacks();
            this.renderLoop();
        });
    }

    private executeCallbacks() {
        this.callbacks.forEach((fn) => fn());
    }
}