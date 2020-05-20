import { drawingColorObservable } from "../gui2D/buttons/selectDrawingColorButton";
import { penSizeObservable } from "../gui2D/buttons/selectPenSizeButton";

let drawingColor = "#000000";
drawingColorObservable.add(e=>drawingColor=e);

let penSize = 3;
penSizeObservable.add(e=>penSize=e);

export function startDrawing() {
    if(document.getElementById("drawCanvas")){
        endDrawing();
        return;
    }

    let drawCanvas;
    drawCanvas = document.createElement("CANVAS");
    drawCanvas.id = "drawCanvas";
    drawCanvas.style.position = "absolute";
    document.body.prepend(drawCanvas);

    let renderCanvas = document.getElementById("renderCanvas");

    if (drawCanvas instanceof HTMLCanvasElement) {
        let ctx = drawCanvas.getContext("2d");
        let mouse = {x: 0, y: 0};

        drawCanvas.width = renderCanvas.width * (1 - 512 / 1920);
        drawCanvas.style.width = drawCanvas.width + "px";
        let xOffset = (176 * (renderCanvas.width / 1920))
        drawCanvas.style["margin-left"] = xOffset + "px";

        drawCanvas.height = renderCanvas.height;
        drawCanvas.style.height = drawCanvas.height + "px";

        let onPaint = function () {
            ctx.lineWidth = penSize;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.strokeStyle = drawingColor//'#FF0C99';
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        };

        window.addEventListener("resize", () => {
            drawCanvas.width = renderCanvas.width * (1 - 512 / 1920);
            drawCanvas.style.width = drawCanvas.width + "px";
            xOffset = (176 * (renderCanvas.width / 1920))
            drawCanvas.style["margin-left"] = xOffset + "px";

            drawCanvas.height = renderCanvas.height;
            drawCanvas.style.height = drawCanvas.height + "px";
        })

        drawCanvas.addEventListener('mousemove', function (e) {
            mouse.x = e.clientX - xOffset;
            mouse.y = e.clientY;
        }, false);

        drawCanvas.addEventListener('touchmove', function (e) {
            mouse.x = e.touches[0].clientX - xOffset;
            mouse.y = e.touches[0].clientY;
        }, false);

        drawCanvas.addEventListener('mousedown', function () {
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            drawCanvas.addEventListener('mousemove', onPaint, false);
        }, false);

        drawCanvas.addEventListener('touchstart', function (e) {
            mouse.x = e.touches[0].clientX - xOffset;
            mouse.y = e.touches[0].clientY;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            drawCanvas.addEventListener('touchmove', onPaint, false);
        }, false);

        drawCanvas.addEventListener('mouseup', function () {
            drawCanvas.removeEventListener('mousemove', onPaint, false);
        }, false);

        drawCanvas.addEventListener('touchcancel', function () {1
            drawCanvas.removeEventListener('touchmove', onPaint, false);
        }, false);
    }
}

export function endDrawing(){
    while(document.getElementById("drawCanvas")) {
        let drawCanvas = document.getElementById("drawCanvas");
        document.body.removeChild(drawCanvas);
    }
}