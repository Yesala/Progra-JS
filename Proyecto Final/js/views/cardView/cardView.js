import { View } from "../view.js";

export class CardView extends View {
    constructor(parent, card, appManager) {
        super(parent);
        this.card = card;//model
        this.appManager = appManager;
        this.mainContainer.classList.add('cardView_mainContainer');
        this.defaultIcon = '❕';
        this.mainContainer.innerHTML = this.defaultIcon;
        this.mainContainer.onclick = this.show.bind(this);
    }

    show() {
        this.mainContainer.classList.add('cardView_disabled');
        this.appManager.updateClicks(this);
        this.mainContainer.innerHTML = this.card.icon;
    }

    hide() {
        this.mainContainer.classList.remove('cardView_disabled')
        this.mainContainer = this.defaultIcon;
    }

    end() {
        this.mainContainer.classList.add('cardView_disable');
    }

    discover(){
        this.mainContainer.classList.add('cardView_discovered')
    }

}