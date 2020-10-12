"use strict";{
  const work = document.getElementById("work");
  const pri = document.getElementById("pri");
  const other = document.getElementById("other");
  const add = document.getElementById("add");
  let memo = document.getElementById("memo");
  const list = document.getElementsByClassName("list");
  const form = document.querySelector("form");

  //textareaの内容をliを生成して入れる
  function aadMemo(elm) {
    const txt = memo.value;
    const item = document.createElement("li");
    item.textContent = txt;
    mkRmvBtn(item);
    elm.appendChild(item);
  }

  //deleteボタン作成
  function mkRmvBtn(elm) {
    const rmvBtn = document.createElement("p");
    rmvBtn.textContent = "remove";

    //deleteがクリックされたら対応するliを削除
    rmvBtn.addEventListener("click", () => {
      rmvBtn.parentNode.remove();
    });
    elm.appendChild(rmvBtn);
  }

  //カテゴリごとのul配下にliを追加
  add.addEventListener("click", () => {
    const category = document.getElementById("category").value;

    //未入力時の警告
    if(memo.value ==="") {
      alert("There's no text at the form!");
      return;
    }

    //プルダウンのカテゴリごとにリスト追加先を変える
    switch(category) {
      case "0":
        aadMemo(work);
        memo.value = "";
        break;
      case "1":
        aadMemo(pri);
        memo.value = "";
        break;
      case "2":
        aadMemo(other);7
        memo.value = "";
        break;
      default:
        break;
    }
  });
}
