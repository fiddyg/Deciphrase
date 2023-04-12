export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}



const phrase1Word1Letters = [
    'h',
    'e',
    'l',
    'l',
    'o'
]

const phrase1Word1 = shuffle(phrase1Word1Letters).join('')

const phrase1Word2Letters = [
    'w',
    'o',
    'r',
    'l',
    'd'
]

const phrase1Word2 = shuffle(phrase1Word2Letters).join('')

export const phrase1 = [phrase1Word1, phrase1Word2]

export const correctPhrase1 = 'hello world'


const phrase2Word1Letters = [
    'g',
    'o',
    'o',
    'd'
]

const phrase2Word1 = shuffle(phrase2Word1Letters).join('')

const phrase2Word2Letters = [
    'm',
    'o',
    'r',
    'n',
    'i',
    'n',
    'g'
]


const phrase2Word2 = shuffle(phrase2Word2Letters).join('')

export const phrase2 = [phrase2Word1, phrase2Word2]

export const correctPhrase2 = 'good morning'


const phrase3Word1Letters = [
    'n',
    'o'
]

const phrase3Word1 = shuffle(phrase3Word1Letters).join('')

const phrase3Word2Letters = [
    'p',
    'r',
    'o',
    'b',
    'l',
    'e',
    'm'
]

const phrase3Word2 = shuffle(phrase3Word2Letters).join('')

export const phrase3 = [phrase3Word1, phrase3Word2]

export const correctPhrase3 = 'no problem'

export const correctPhrases = [
    correctPhrase1, 
    correctPhrase2, 
    correctPhrase3
]

export const phrases = [
    phrase1.join(' '),
    phrase2.join(' '),
    phrase3.join(' ')
]


