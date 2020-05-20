import sizes from "./sizes";
import customButton from "../customButton";
import {sizePanel} from "../../panels/sizePanel";
import {penSizeObservable} from "../selectPenSizeButton";
import {colorPalette} from "../colorPalette/colorPalette";

function Palette(){
    this.sizePaletteButtons = [];

    for(let i = 0; i<8; i++){
        let newPaletteButton = sizePaletteButton(sizes[i])
        this.sizePaletteButtons.push(newPaletteButton)
    }
    window.palette = this.sizePaletteButtons;

    this.status = true;
    this.toggle = (status) => {
        if(typeof status === typeof true){
            this.status = status;
        } else {
            this.status = !this.status;
        }
        this.sizePaletteButtons.forEach(button=>{
            button.isVisible = this.status;
            sizePanel.isVisible = this.status;
        })
    }
}

export let sizePalette = new Palette();
sizePalette.toggle();

function sizePaletteButton(size){
    return customButton({
        name: "sizePalette",
        image: size.image,
        onClick(){
            colorPalette.toggle(false);
            sizePalette.toggle(false);
            penSizeObservable.notifyObservers(size.size)
        },
        width: 1.2,
        height: 3/5,
        stack: sizePanel,
    })
}