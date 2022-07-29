import { View } from "../view.js";

export class CardView extends View {
    constructor(parent, card, appManager) {
        super(parent);
        this.card = card;//model
        this.appManager = appManager;
        this.mainContainer.classList.add('cardView_mainContainer');
        this.defaultIcon = '❕';
        this.mainContainer.innerHTML = this.defaultIcon;
        this.mainContainer.onclick = this.onSelected.bind(this);
        //this.clickSFX = new Audio('my.audio.file.wav');
        //this.corrrectSFX = new Audio('my.audio.file.wav');
    }

    onSelected(){
        this.appManager.onCardViewSelected(this);
        //this.clickSFX.play();
    }

    show() {
        this.mainContainer.classList.add('cardView_disabled');
        this.mainContainer.innerHTML = this.card.icon;
    }

    hide() {
        this.mainContainer.classList.remove('cardView_disabled')
        this.mainContainer.innerHTML = this.defaultIcon;
    }

    end() {
        this.mainContainer.classList.add('cardView_disable');
    }

    discover(){
        //this.correctSFX.play();
        this.card.isDiscovered = true;
        this.mainContainer.classList.add('cardView_discovered')
    }

}