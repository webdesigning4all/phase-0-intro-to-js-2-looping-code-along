// Code your solutions in this file

const gifts = ["teddy bear", "drone", "drone", "doll"];

function wrapGifts(gifts) {
    for(let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
      
    }
    return gifts;
}
const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";
const messages = writeCards(names, event);

function writeCards(names, event) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}

//while loop

function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  countDown(11);
