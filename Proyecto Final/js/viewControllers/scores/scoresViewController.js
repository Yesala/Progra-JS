import { ViewController } from "../viewController.js";
import { ScoresService } from "./scoresService.js";

export class ScoresViewController extends ViewController {
    constructor(appManager, parent) {
        super(appManager, parent, 'Scores');
        this.service = new ScoresService(this);
        this.mainContainer.classList.add('scoresViewController');

        //this.mainContainer.style.left = '250px';
        // this.navigationBar.style.backgroundColor = 'yellow';
        // this.contentContainer.style.backgroundColor = 'blue';

        this.service.getScores();
    }

    start(scores) {
        var table = document.createElement('table');
        table.className = 'scoresViewController_table';
        this.contentContainer.appendChild(table);

        var tr = document.createElement('tr');
        table.appendChild(tr);

        var th = document.createElement('th');
        th.innerHTML = 'Name';
        tr.appendChild(th);

        var th = document.createElement('th');
        th.innerHTML = 'Score';
        tr.appendChild(th);

        var th = document.createElement('th');
        th.innerHTML = 'Time';
        tr.appendChild(th);

        var th = document.createElement('th');
        th.innerHTML = 'Clicks';
        tr.appendChild(th);

        // this.cardsContainer.innerHTML = '';
        // this.cardViews = [];

        scores.forEach(score => {
            tr = document.createElement('tr');
            table.appendChild(tr);

            var td = document.createElement('td');
            td.innerHTML = score.username;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = score.score;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = score.time;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = score.clicks;
            tr.appendChild(td);
        });
    }

    show() {

    }

    hide() {

    }
} 