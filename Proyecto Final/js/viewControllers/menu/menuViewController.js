import { ViewController } from "../viewController.js";

export class MenuViewController extends ViewController {
     constructor(appManager, parent) {
          super(appManager, parent, 'Menu');
          this.mainContainer.classList.add('menuViewController');
          this.backBtn.hidden = true;

          var text1Lbl = document.createElement('p');
          var text2Lbl = document.createElement('p');
          this.usernameIn = document.createElement('input');
          var playBtn = document.createElement('button');
          var scoreBtn = document.createElement('button');

          this.contentContainer.appendChild(text1Lbl);
          this.contentContainer.appendChild(text2Lbl);
          this.contentContainer.appendChild(this.usernameIn);
          this.contentContainer.appendChild(playBtn);
          this.contentContainer.appendChild(scoreBtn);

          text1Lbl.innerHTML = 'Card Memory Game';
          text2Lbl.innerHTML = 'Enter username to play';
          this.usernameIn.placeholder = 'Username';
          playBtn.innerHTML = 'PLAY';
          scoreBtn.innerHTML = 'SCORES';

          this.contentContainer.classList.add('menuViewController_contentContainer');
          text1Lbl.className = 'menuViewController_text1Lbl';
          text2Lbl.className = 'menuViewController_text2Lbl';
          this.usernameIn.classList.add('menuViewController_usernameIn');
          playBtn.classList.add('menuViewController_buttons');
          scoreBtn.classList.add('menuViewController_buttons');

          playBtn.onclick = this.onPlayBtn.bind(this);
          scoreBtn.onclick = this.onScoreBtn.bind(this);
     }

     onPlayBtn() {
          var username = this.usernameIn.value;
          if(username !== ''){
               this.appManager.setUsername(username);
               this.appManager.showGame();
          }
     }

     onScoreBtn() {
          this.appManager.showScores();
     }



}  