const isIsogram = input => {
  input = input.toLowerCase()
  for(let i=0; i < input.length; i++) {
    for(let j=i+1; j < input.length; j++) {
      if(input[i] !== '-' && input[j] !== '-' && input[i] !== ' ' && input[j] !== ' ') {
        if(input[i] === input[j]) {
          return false
        }
      }
    }
  }
  return true
}

export {isIsogram}