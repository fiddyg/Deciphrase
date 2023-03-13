function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}


export const phrases = [
    'h',
    'e',
    'l',
    'l',
    'o'
]

function phrase1() {
    const word1letters = [
        'h',
        'e',
        'l',
        'l',
        'o'
    ]

    const word1 = shuffle(word1letters)

    const word2letters = [
        'w',
        'o',
        'r',
        'l',
        'd'
    ]

    const word2 = shuffle(word2letters)
    
}
