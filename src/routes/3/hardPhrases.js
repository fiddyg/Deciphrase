import { shuffle } from "../phrases";

// That's what she said
// You Talking to me
// You’re killin’ me smalls

const phrase1Word1Letters = ['t', 'h', 'a', 't', "'", 's']
const phrase1Word1 = shuffle(phrase1Word1Letters).join('')
const phrase1Word2Letters = ['w', 'h', 'a', 't']
const phrase1Word2 = shuffle(phrase1Word2Letters).join('')
const phrase1Word3Letters = ['s', 'h', 'e']
const phrase1Word3 = shuffle(phrase1Word3Letters).join('')
const phrase1Word4Letters = ['s', 'a', 'i', 'd']
const phrase1Word4 = shuffle(phrase1Word4Letters).join('')
const phrase1 = [phrase1Word1, phrase1Word2, phrase1Word3, phrase1Word4]
const correctPhrase1 = "that's what she said"



const phrase2Word1Letters = ['y', 'o', 'u']
const phrase2Word1 = shuffle(phrase2Word1Letters).join('')
const phrase2Word2Letters = ['t', 'a', 'l', 'k', 'i', 'n']
const phrase2Word2 = shuffle(phrase2Word2Letters).join('')
const phrase2Word3Letters = ['t', 'o']
const phrase2Word3 = shuffle(phrase2Word3Letters).join('')
const phrase2Word4Letters = ['m', 'e']
const phrase2Word4 = shuffle(phrase2Word4Letters).join('')
const phrase2 = [phrase2Word1, phrase2Word2, phrase2Word3, phrase2Word4]
const correctPhrase2 = 'you talkin to me'



const phrase3Word1Letters = ['y', 'o', 'u', "'", 'r', 'e']
const phrase3Word1 = shuffle(phrase3Word1Letters).join('')
const phrase3Word2Letters = ['k', 'i', 'l', 'l', 'i', 'n', 'g']
const phrase3Word2 = shuffle(phrase3Word2Letters).join('')
const phrase3Word3Letters = ['m', 'e']
const phrase3Word3 = shuffle(phrase3Word3Letters).join('')
const phrase3Word4Letters = ['s', 'm', 'a', 'l', 'l', 's']
const phrase3Word4 = shuffle(phrase3Word4Letters).join('')
const phrase3 = [phrase3Word1, phrase3Word2, phrase3Word3, phrase3Word4]
const correctPhrase3 = "you're killing me smalls"

export const phrases = [phrase1, phrase2, phrase3]

export const correctPhrases = [correctPhrase1, correctPhrase2, correctPhrase3]