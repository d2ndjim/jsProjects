const quotes = {
    love: ["love all, trust a few, do wrong to none", "you call it madness, but i call it love,", "true love stories never have endings"],
    sad: ["sadness is a kind of defence", "sad hurts but it's a healthy feeling", "melancholy is the happiness of being sad"],
    motivation: ["either you run the day or it runs you", "concentrate all thoughts upon work in hand", "don't limit yourself"],
    life: ["the purpose of life is to be happy", "get busy living or get busy dying", "life is a long lesson in humility"]
}

function randomizer(num) {
    return Math.floor(Math.random() * num)
}

randQuotes = []

for(let category in quotes) {
    let options = randomizer(quotes[category].length)

    switch (category) {
        case 'love':
            randQuotes.push(`love quote: ${quotes[category][options]}`)
            break;
        case 'sad':
            randQuotes.push(`sad quote: ${quotes[category][options]}`)
            break;
        case 'motivation':
            randQuotes.push(`motivational quote: ${quotes[category][options]}`)
            break;
         case 'life':
            randQuotes.push(`life quote: ${quotes[category][options]}`)
            break;
        default:
            console.log(error)
    }
}

console.log(randQuotes)
