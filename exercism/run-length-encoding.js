const encode = (str) => {
  let count = 1
  let newStr= ''

  for(let i=0; i < str.length; i++) {
    if(str[i] === str[i+1]) {
      count += 1
    } else if(str[i] !== str[i+1]) {
      if(count > 1) {
        newStr += count + str[i]
      } else if(count === 1) {
        newStr += str[i]
      }      
      count = 1
    }
  }
  
  return newStr
}

const decode = (str) => {
  let index = -1
  let newArr = []
  let answer = ''

  for(let i=0; i < str.length; i++) {
    if(Number.isNaN(parseInt(str[i]))) {
      newArr.push(str.slice(index+1, i))
      newArr.push(str[i])
      index = i
    }
  }

  newArr.forEach((item, index, array) => {
    if(index%2 === 1) {
      if(array[index-1] !== '') {
        answer += item.repeat(array[index-1])
      } else if(array[index-1] === '') {
        answer += item.repeat(1)
      }
    }
  })

  return answer
}

export {encode, decode}