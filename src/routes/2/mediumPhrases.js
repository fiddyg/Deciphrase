import { shuffle } from "../phrases";

// Eat my shorts
// I’ll be back
// Just Keep Swimming

const phrase1Word1Letters = ['e', 'a', 't']
const phrase1Word1 = shuffle(phrase1Word1Letters).join('')
const phrase1Word2Letters = ['m', 'y']
const phrase1Word2 = shuffle(phrase1Word2Letters).join('')
const phrase1Word3Letters = ['s', 'h', 'o', 'r', 't', 's']
const phrase1Word3 = shuffle(phrase1Word3Letters).join('')
const phrase1 = [phrase1Word1, phrase1Word2, phrase1Word3]
const correctPhrase1 = 'eat my shorts'



const phrase2Word1Letters = ['i', "'", 'l', 'l']
const phrase2Word1 = shuffle(phrase2Word1Letters).join('')
const phrase2Word2Letters = ['b', 'e']
const phrase2Word2 = shuffle(phrase2Word2Letters).join('')
const phrase2Word3Letters = ['b', 'a', 'c', 'k']
const phrase2Word3 = shuffle(phrase2Word3Letters).join('')
const phrase2 = [phrase2Word1, phrase2Word2, phrase2Word3]
const correctPhrase2 = "i'll be back"



const phrase3Word1Letters = ['j', 'u', 's', 't']
const phrase3Word1 = shuffle(phrase3Word1Letters).join('')
const phrase3Word2Letters = ['k', 'e', 'e', 'p']
const phrase3Word2 = shuffle(phrase3Word2Letters).join('')
const phrase3Word3Letters = ['s', 'w', 'i', 'm', 'm', 'i', 'n', 'g']
const phrase3Word3 = shuffle(phrase3Word3Letters).join('')
const phrase3 = [phrase3Word1, phrase3Word2, phrase3Word3]
const correctPhrase3 = 'just keep swimming'

export const phrases = [phrase1, phrase2, phrase3]

export const correctPhrases = [correctPhrase1, correctPhrase2, correctPhrase3]