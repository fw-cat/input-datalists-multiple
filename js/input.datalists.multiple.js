;!(function() {
  multipleTextInput = (inputId, _options) => {
    // 各種設定
    let defaults = Object.assign({},{
      'close_btn': "x"
    }, _options)

    // 選択された値の配列
    let selectValues = [];

    // データ送信用入力欄
    let mainInput = document.getElementById(inputId)
    mainInput.style.display = "none"
    mainInput.style.visibility = 'hidden'
    if (mainInput.value != "")  {
      selectValues = mainInput.value.split(",")
    }

    let selectArea = document.createElement("div")
    selectArea.classList.add("select-area")

    // 表示用入力欄
    let subInput = document.createElement("input")
    subInput.classList.add("select-input")
    subInput.setAttribute("list", mainInput.getAttribute("list"))
    subInput.addEventListener("change", (e) => _subInput(e))

    // 表示要素の追加
    mainInput.parentNode.insertBefore(subInput, mainInput.nextElementSibling)
    mainInput.parentNode.insertBefore(selectArea, subInput.nextElementSibling)

    // テキストの追加アクション
    const _subInput = (e) => {
      let value = e.target.value
      e.target.value = ""

      let areaTag = document.createElement("div")
      areaTag.classList.add("select-area-tag")

      let closeBtn = document.createElement("a")
      closeBtn.href = "#"
      closeBtn.innerHTML = defaults.close_btn
      closeBtn.addEventListener("click",(e) => _closeBtn(e))
      areaTag.appendChild(closeBtn)

      let areaSapn = document.createElement("span")
      areaSapn.innerHTML = value
      areaTag.appendChild(areaSapn)

      selectArea.appendChild(areaTag)
      selectValues.push(value)

      mainInput.value = selectValues.join(",")
    }
    // 閉じるボタンのアクション
    const _closeBtn = (e) => {
      e.preventDefault()

      // 削除するテキスト
      let deleteText = e.target.closest('.select-area').querySelector('a + span').innerHTML
      console.log(selectValues, deleteText, selectValues.indexOf(deleteText))
      selectValues = selectValues.filter(text => text !== deleteText)
      mainInput.value = selectValues.join(",")
      console.log(selectValues)

      // closeボタンが押されたdomを削除
      e.target.closest('.select-area').removeChild(e.target.closest('.select-area-tag'))
      return false
    }
  }
})();
