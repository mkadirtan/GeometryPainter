import customButton from "../customButton";
import colorPanels from "../../panels/colorPanels";
import { selectedFaceObservable } from "../../../utilities/selectFace";
import { activeModelObservable } from "../../../utilities/activeModel";
import colors from "./colors";

let selectedFace;
selectedFaceObservable.add(e=>selectedFace = e);

let activeModel;
activeModelObservable.add(e=>activeModel=e);

function Palette(){
    this.colorPaletteButtons = [];
    for(let i = 0; i<4; i++){
        this.colorPaletteButtons[i] = []
        for(let j = 0; j<3; j++){
            let newPaletteButton = colorPaletteButton(colors[i][j], i)
            this.colorPaletteButtons[i].push(newPaletteButton)
        }
    }
    this.status = true;
    this.toggle = () => {
        this.status = !this.status;
        this.colorPaletteButtons.forEach(buttonCol => {
            buttonCol.forEach(button=>{
                button.isVisible = this.status;
            })
        })
    }
}

export let colorPalette = new Palette();
colorPalette.toggle();

function colorPaletteButton(color, stackPanelId){
    return customButton({
        name: "colorPalette",
        image: color.image,
        onClick(){
            activeModel.changeFaceColor(selectedFace, color.color);
        },
        stack: colorPanels[stackPanelId],
    })
}