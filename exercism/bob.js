// 내 답안
export const hey = message => {
  message = message.trim();
  if (
    message[message.length - 1] === "?" &&
    message === message.toUpperCase()
  ) {
    return `Calm down, I know what I'm doing!`;
  } else if (message[message.length - 1] === "?") {
    return "Sure.";
  } else if (
    message === message.toUpperCase() &&
    message !== message.toLowerCase()
  ) {
    return "Whoa, chill out!";
  } else if (message.length === 0) {
    return "Fine. Be that way!";
  }
  return "Whatever.";
};

// // 다른 사람 답안
// export const hey = (msg) => {
//   const isForcedQuestion = /^[A-Z ]+\?$/g;
//   const isQuestion = /\?+$/g;
//   const isShouting = /[A-Z]+!*/g;
//   const isUsingLower = /[a-z]+/g;

//   if (msg.match(isForcedQuestion)) {
//     return 'Calm down, I know what I\'m doing!';
//   } else if (msg.trim().match(isQuestion)) {
//     return 'Sure.';
//   } else if (msg.match(isShouting) && !msg.match(isUsingLower)) {
//     return 'Whoa, chill out!';
//   } else if (msg.trim() === '') {
//     return 'Fine. Be that way!';
//   }
//   return 'Whatever.';
// }
