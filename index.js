function writeCards(name, event) {
    const thankYouMessages = [];
    for (let a = 0; a < name.length; a++) {
        thankYouMessages.push(`Thank you, ${name[a]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
}


const gifts = ["teddy bear", "drone", "doll",];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);


function countDown(number) {
   let b = 10;
    while (b >= 0) {
        console.log(b--)
    } 
}