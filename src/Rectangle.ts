export class Rectangle {
    private ctx: CanvasRenderingContext2D;
    private x: number = 10;
    private y: number = 10;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public moveDown(amount: number = 5): void {
        this.y += amount;
    }

    public moveUp(amount: number = 5): void {
        this.y -= amount;
    }

    public moveLeft(amount: number = 5): void {
        this.x -= amount;
    }

    public moveRight(amount: number = 5): void {
        this.x += amount;
    }

    public render(): void {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(this.x, this.y, 100, 100);
    }
}
