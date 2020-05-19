import { Observable } from "@babylonjs/core";

let activeModel = null;
export let activeModelObservable = new Observable(o=>{
    activeModelObservable.notifyObserver(o, activeModel)
});

activeModelObservable.add(e=>activeModel=e);