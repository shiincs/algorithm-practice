// # Pangram

// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma,
// "every letter") is a sentence using every letter of the alphabet at least once.
// The best known English pangram is:
// > The quick brown fox jumps over the lazy dog.

// The alphabet used consists of ASCII letters `a` to `z`, inclusive, and is case
// insensitive. Input will not contain non-ASCII symbols.

const isPangram = (sentence) => {
  // 입력받은 문장을 모두 소문자로 바꾼다.
  const lowerSentence = sentence.toLowerCase()

  // 입력받은 문장과 비교할 알파벳 샘플을 만들어준다.
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  // 문장과 샘플을 비교한 결과를 넣어줄 저장소를 만든다.
  let flag = ''

  // 알파벳 샘플을 하나씩 순회를 돌면서 입력받은 문장과 비교한다.
  for(let item of alphabet) {
    // 만약 알파벳 샘플이 입력받은 문장에 들어있고, 저장소에는 안들어있다면
    if(lowerSentence.includes(item) && !flag.includes(item)) {
      // 저장소에 알파벳을 넣는다.
      flag += item
    }
  }

  // 저장소의 길이와 알파벳 샘플의 길이가 같다면 true / 아니면 false
  return flag === alphabet? true : false
}

export {isPangram}