'use strict'

const gQuests = [
    { id: 1, opts: ['dog', 'bird'], correctOptIndex: 0 },
    { id: 2, opts: ['shoes', 'hamburger'], correctOptIndex: 1 },
    { id: 3, opts: ['Homeless guy', 'Thor'], correctOptIndex: 1 },

]

var gCurrQuestIdx
function onInit() {
    const elControl = document.querySelector('.control')
    elControl.style.display = 'block'
    const elMainBox = document.querySelector('.mainBox')
    elMainBox.style.display = 'none'

}

function startGame() {
    const elControl = document.querySelector('.control')
    elControl.style.display = 'none'
    const elMainBox = document.querySelector('.mainBox')
    elMainBox.style.display = 'block'
    gCurrQuestIdx = 0
    renderQuest()

}

function renderQuest() {
    document.querySelector('img').src = `img/${gQuests[gCurrQuestIdx].id}.jpg`

    document.getElementById('0').innerText = ' shkood '

    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        document.getElementById(i).innerText = gQuests[gCurrQuestIdx].opts[i]

    }
}





function onOption(id) {

    var rightAnswer = gQuests[gCurrQuestIdx].correctOptIndex

    var rightAnswer = rightAnswer + ''
    if (id === rightAnswer) {

        if (gCurrQuestIdx === gQuests.length - 1) {
            victory()
        }
        else gCurrQuestIdx++

        renderQuest()
    } else {

        alert('Try again!')
    }

}

function victory() {
    alert('Winner!')
    onInit()

}




