import characterData from './data.js'
import Character from './Character.js'

let monstersArray = ["orc"]
let isWaiting = false

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render()