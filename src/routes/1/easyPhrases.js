import { shuffle } from "../phrases";

const phrase1Word1Letters = ['h', 'e', 'r', 'e', "'", 's']

const phrase1Word1 = shuffle(phrase1Word1Letters).join('')

const phrase1Word2Letters = ['j', 'o', 'h', 'n', 'n', 'y']

const phrase1Word2 = shuffle(phrase1Word2Letters).join('')

const phrase1 = [phrase1Word1, phrase1Word2]

const correctPhrase1 = "here's johnny"



const phrase2Word1Letters = ['y', 'o', 'u', "'", 'r', 'e']

const phrase2Word1 = shuffle(phrase2Word1Letters).join('')

const phrase2Word2Letters = ['f', 'i', 'r', 'e', 'd']

const phrase2Word2 = shuffle(phrase2Word2Letters).join('')

const phrase2 = [phrase2Word1, phrase2Word2]

const correctPhrase2 = "you're fired"



const phrase3Word1Letters = ['i', 't', "'", 's']

const phrase3Word1 = shuffle(phrase3Word1Letters).join('')

const phrase3Word2Letters = ['a', 'l', 'i', 'v', 'e']

const phrase3Word2 = shuffle(phrase3Word2Letters).join('')

const phrase3 = [phrase3Word1, phrase3Word2]

const correctPhrase3 = "it's alive"

export const phrases = [phrase1, phrase2, phrase3]

export const correctPhrases = [correctPhrase1, correctPhrase2, correctPhrase3]