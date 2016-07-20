(() => {
  'use strict';

  const size = 3;
  let currentNum = 0;
  let startTime;
  let timerId;

  const board = document.getElementById('js-score-board');
  const scoreText = document.getElementById('js-score-text');
  const scoreBtn = document.getElementById('js-score-btn');

  const initBoard = () => {

    var buttons = [];

    const createButton = (num) => {
      const btn = document.createElement('div');
      btn.classList.add('score__panel', 'score__panel--hidden');
      btn.textContent = num;
      btn.addEventListener('click', function (e) {
        // 押すべき数字と押した数字が等しければ半透明にする
        // memo: 文字列と数字の比較をしているので、左辺を数値に変換
        if ((this.textContent - 0) === currentNum) {
          this.classList.add('score__panel--inactive');
          currentNum++;
        }

        // ゲームオーバー
        if (currentNum === size * size) {
          clearTimeout(timerId);
        }
      }, false);

      return btn;
    }

    // 前に追加した要素を削除
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }

    for (let i = 0; i < size * size; i++) {
      buttons.push(createButton(i));
    }

    while (buttons.length) {
      // ランダムにボタンを並べる
      let button = buttons.splice(Math.floor(Math.random() * buttons.length), 1);
      board.appendChild(button[0]);

      // 改行を入れる
      if (buttons.length % size === 0) {
        board.appendChild(document.createElement('br'));
      }
    }
  };

  initBoard();

  scoreBtn.addEventListener('click', function (e) {
    // タイマーの多重起動防止
    if (timerId !== null) clearTimeout(timerId);

    initBoard();

    // 最初は文字を隠す
    const btns = document.querySelectorAll('.score__panel');
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove('score__panel--hidden');
    }

    currentNum = 0
    startTime = Date.now();
    runTimer();
  }, false);

  scoreBtn.addEventListener('mousedown', function (e) {
    this.classList.add('score__btn--pushed');
  }, false);

  scoreBtn.addEventListener('mouseup', function (e) {
    this.classList.remove('score__btn--pushed');
  }, false);

  const runTimer = () => {
    scoreText.textContent = ((Date.now() - startTime) / 1000).toFixed(2);
    timerId = setTimeout(() => {
      runTimer();
    }, 10);
  }

})();
