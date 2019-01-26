const compute = (dna1, dna2) => {
  if(dna1.length !== dna2.length) {
    throw new Error('left and right strands must be of equal length')
  } else {
    return dna1.split('').reduce((acc, item, index) => {
      if(item !== dna2[index]) {
        acc += 1
      }
      return acc
    }, 0)
  }
}

export {compute}