function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}



const word1letters = [
    'h',
    'e',
    'l',
    'l',
    'o'
]

const word1 = shuffle(word1letters).join('')

export const word1length = word1letters.length

const word2letters = [
    'w',
    'o',
    'r',
    'l',
    'd'
]

const word2 = shuffle(word2letters).join('')

export const word2length = word2letters.length

export const phrase1 = [word1, word2]




export const phrases = [
    phrase1.join(' ')
]


