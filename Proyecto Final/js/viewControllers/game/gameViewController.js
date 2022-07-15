import { ViewController } from "../viewController.js";

export class GameViewController extends ViewController {
    constructor(appManager, parent){
        super(appManager, parent, 'Game');
        this.mainContainer.classList.add('gameViewController');
    }

    show(){

    }

    hide(){
        
    }
}