import { AdvancedDynamicTexture } from "@babylonjs/gui";
import {Texture} from "@babylonjs/core";

export let advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI", true );
advancedTexture.updateSamplingMode(Texture.TRILINEAR_SAMPLINGMODE);
advancedTexture.idealWidth = 1920;