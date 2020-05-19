import { advancedTexture } from "../../advancedTexture";
import config from '../gui2D.config'
import { StackPanel, Control } from "@babylonjs/gui";

let colorPanel0 = new StackPanel("colorPanel0");
const offsetLeft = (1920 - config.controlBaseSize - config.colorPaletteSize)
const offsetTop = 2*config.controlBaseSize;

colorPanel0.width = config.colorPaletteSize + "px";
colorPanel0.height = 1;
colorPanel0.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
colorPanel0.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
colorPanel0.isVertical = true;
colorPanel0.left = offsetLeft + "px";
colorPanel0.top = offsetTop + "px";
colorPanel0.metadata = { activeButton: ""}

advancedTexture.addControl(colorPanel0);

let colorPanel1 = new StackPanel("colorPanel1");

colorPanel1.width = config.colorPaletteSize + "px";
colorPanel1.height = 1;
colorPanel1.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
colorPanel1.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
colorPanel1.isVertical = true;
colorPanel1.left = (offsetLeft - config.colorPaletteSize) + "px";
colorPanel1.top = offsetTop + "px";
colorPanel1.metadata = { activeButton: ""}
advancedTexture.addControl(colorPanel1);

let colorPanel2 = new StackPanel("colorPanel2");

colorPanel2.width = config.colorPaletteSize + "px";
colorPanel2.height = 1;
colorPanel2.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
colorPanel2.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
colorPanel2.isVertical = true;
colorPanel2.left = (offsetLeft - 2*config.colorPaletteSize) + "px";
colorPanel2.top = offsetTop + "px";
colorPanel2.metadata = { activeButton: ""}
advancedTexture.addControl(colorPanel2);

let colorPanel3 = new StackPanel("colorPanel3");

colorPanel3.width = config.colorPaletteSize + "px";
colorPanel3.height = 1;
colorPanel3.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
colorPanel3.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
colorPanel3.isVertical = true;
colorPanel3.left = (offsetLeft - 3*config.colorPaletteSize) + "px";
colorPanel3.top = offsetTop + "px";
colorPanel3.metadata = { activeButton: ""}
advancedTexture.addControl(colorPanel3);

export default [colorPanel0, colorPanel1, colorPanel2, colorPanel3]