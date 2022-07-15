import { ViewController } from "../viewController.js";

export class ScoresViewController extends ViewController {
    constructor(appManager, parent){
        super(appManager, parent, 'Scores');
        this.mainContainer.classList.add('scoresViewController');

        //this.mainContainer.style.left = '250px';
        this.navigationBar.style.backgroundColor = 'yellow';
        this.contentContainer.style.backgroundColor = 'blue';
    }

    show(){

    }

    hide(){
        
    }
} 