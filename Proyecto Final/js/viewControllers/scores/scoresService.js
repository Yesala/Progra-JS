import { Card } from "../../models/card.js";

export class ScoresService{
    constructor(viewController){
        this.viewController = viewController;
    }

    getScores(){
        var request = new XMLHttpRequest();
        request.open('GET','https://us-central1-beehivebackend-23257.cloudfunctions.net/app/scores');
        request.onreadystatechange = this.getScoreCompleted.bind(this);
        request.send(); 
    }
 
    getScoreCompleted(event){
        var request = event.target;
        if(request.readyState === 4){
            if(request.status === 200){
                console.log(request.responseText);
                this.viewController.start(JSON.parse(request.responseText));
            }
        }
    }
}

//request.onload = this.getCardsComplete.bind(this);