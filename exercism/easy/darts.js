const solve = (x, y) => {
  if(!(typeof x === 'number' && typeof y === 'number')) {
    return null
  } else if(x <= 3 && y <= 3) {
    return 10
  } else if(x <= 5 && y <= 5) {
    return 5
  } else if(x <= 10 && y <= 10) {
    return 1
  } else if(x > 10 && y > 10) {
    return 0
  }
}

export {solve}