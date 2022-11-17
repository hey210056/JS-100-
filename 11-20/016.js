function reverseMessage(message){
    return message.split('').reverse().join('');
}

const hey = reverseMessage("거꾸로");
console.log(hey);
