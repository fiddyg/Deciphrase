export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}

const easyPhrase1Word1Letters = ['h', 'e', 'r', 'e', "'", 's']
const easyPhrase1Word1 = shuffle(easyPhrase1Word1Letters).join('')
const easyPhrase1Word2Letters = ['j', 'o', 'h', 'n', 'n', 'y']
const easyPhrase1Word2 = shuffle(easyPhrase1Word2Letters).join('')
const easyPhrase1 = [easyPhrase1Word1, easyPhrase1Word2]
const easyCorrectPhrase1 = "here's johnny"

const easyPhrase2Word1Letters = ['y', 'o', 'u', "'", 'r', 'e']
const easyPhrase2Word1 = shuffle(easyPhrase2Word1Letters).join('')
const easyPhrase2Word2Letters = ['f', 'i', 'r', 'e', 'd']
const easyPhrase2Word2 = shuffle(easyPhrase2Word2Letters).join('')
const easyPhrase2 = [easyPhrase2Word1, easyPhrase2Word2]
const easyCorrectPhrase2 = "you're fired"

const easyPhrase3Word1Letters = ['i', 't', "'", 's']
const easyPhrase3Word1 = shuffle(easyPhrase3Word1Letters).join('')
const easyPhrase3Word2Letters = ['a', 'l', 'i', 'v', 'e']
const easyPhrase3Word2 = shuffle(easyPhrase3Word2Letters).join('')
const easyPhrase3 = [easyPhrase3Word1, easyPhrase3Word2]
const easyCorrectPhrase3 = "it's alive"

export const easyPhrases = [easyPhrase1, easyPhrase2, easyPhrase3]

export const easyCorrectPhrases = [easyCorrectPhrase1, easyCorrectPhrase2, easyCorrectPhrase3]



const mediumPhrase1Word1Letters = ['e', 'a', 't']
const mediumPhrase1Word1 = shuffle(mediumPhrase1Word1Letters).join('')
const mediumPhrase1Word2Letters = ['m', 'y']
const mediumPhrase1Word2 = shuffle(mediumPhrase1Word2Letters).join('')
const mediumPhrase1Word3Letters = ['s', 'h', 'o', 'r', 't', 's']
const mediumPhrase1Word3 = shuffle(mediumPhrase1Word3Letters).join('')
const mediumPhrase1 = [mediumPhrase1Word1, mediumPhrase1Word2, mediumPhrase1Word3]
const mediumCorrectPhrase1 = 'eat my shorts'

const mediumPhrase2Word1Letters = ['i', "'", 'l', 'l']
const mediumPhrase2Word1 = shuffle(mediumPhrase2Word1Letters).join('')
const mediumPhrase2Word2Letters = ['b', 'e']
const mediumPhrase2Word2 = shuffle(mediumPhrase2Word2Letters).join('')
const mediumPhrase2Word3Letters = ['b', 'a', 'c', 'k']
const mediumPhrase2Word3 = shuffle(mediumPhrase2Word3Letters).join('')
const mediumPhrase2 = [mediumPhrase2Word1, mediumPhrase2Word2, mediumPhrase2Word3]
const mediumCorrectPhrase2 = "i'll be back"

const mediumPhrase3Word1Letters = ['j', 'u', 's', 't']
const mediumPhrase3Word1 = shuffle(mediumPhrase3Word1Letters).join('')
const mediumPhrase3Word2Letters = ['k', 'e', 'e', 'p']
const mediumPhrase3Word2 = shuffle(mediumPhrase3Word2Letters).join('')
const mediumPhrase3Word3Letters = ['s', 'w', 'i', 'm', 'm', 'i', 'n', 'g']
const mediumPhrase3Word3 = shuffle(mediumPhrase3Word3Letters).join('')
const mediumPhrase3 = [mediumPhrase3Word1, mediumPhrase3Word2, mediumPhrase3Word3]
const mediumCorrectPhrase3 = 'just keep swimming'

export const mediumPhrases = [mediumPhrase1, mediumPhrase2, mediumPhrase3]

export const mediumCorrectPhrases = [mediumCorrectPhrase1, mediumCorrectPhrase2, mediumCorrectPhrase3]



const hardPhrase1Word1Letters = ['t', 'h', 'a', 't', "'", 's']
const hardPhrase1Word1 = shuffle(hardPhrase1Word1Letters).join('')
const hardPhrase1Word2Letters = ['w', 'h', 'a', 't']
const hardPhrase1Word2 = shuffle(hardPhrase1Word2Letters).join('')
const hardPhrase1Word3Letters = ['s', 'h', 'e']
const hardPhrase1Word3 = shuffle(hardPhrase1Word3Letters).join('')
const hardPhrase1Word4Letters = ['s', 'a', 'i', 'd']
const hardPhrase1Word4 = shuffle(hardPhrase1Word4Letters).join('')
const hardPhrase1 = [hardPhrase1Word1, hardPhrase1Word2, hardPhrase1Word3, hardPhrase1Word4]
const hardCorrectPhrase1 = "that's what she said"



const hardPhrase2Word1Letters = ['y', 'o', 'u']
const hardPhrase2Word1 = shuffle(hardPhrase2Word1Letters).join('')
const hardPhrase2Word2Letters = ['t', 'a', 'l', 'k', 'i', 'n']
const hardPhrase2Word2 = shuffle(hardPhrase2Word2Letters).join('')
const hardPhrase2Word3Letters = ['t', 'o']
const hardPhrase2Word3 = shuffle(hardPhrase2Word3Letters).join('')
const hardPhrase2Word4Letters = ['m', 'e']
const hardPhrase2Word4 = shuffle(hardPhrase2Word4Letters).join('')
const hardPhrase2 = [hardPhrase2Word1, hardPhrase2Word2, hardPhrase2Word3, hardPhrase2Word4]
const hardCorrectPhrase2 = 'you talkin to me'



const hardPhrase3Word1Letters = ['y', 'o', 'u', "'", 'r', 'e']
const hardPhrase3Word1 = shuffle(hardPhrase3Word1Letters).join('')
const hardPhrase3Word2Letters = ['k', 'i', 'l', 'l', 'i', 'n', 'g']
const hardPhrase3Word2 = shuffle(hardPhrase3Word2Letters).join('')
const hardPhrase3Word3Letters = ['m', 'e']
const hardPhrase3Word3 = shuffle(hardPhrase3Word3Letters).join('')
const hardPhrase3Word4Letters = ['s', 'm', 'a', 'l', 'l', 's']
const hardPhrase3Word4 = shuffle(hardPhrase3Word4Letters).join('')
const hardPhrase3 = [hardPhrase3Word1, hardPhrase3Word2, hardPhrase3Word3, hardPhrase3Word4]
const hardCorrectPhrase3 = "you're killing me smalls"

export const hardPhrases = [hardPhrase1, hardPhrase2, hardPhrase3]

export const hardCorrectPhrases = [hardCorrectPhrase1, hardCorrectPhrase2, hardCorrectPhrase3]