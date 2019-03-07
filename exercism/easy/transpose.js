const transpose = arr => {
  const maxLength = Math.max(...arr.map(item => item.length))
  const result = [];
  const splited = arr.reduce((acc, item) => {
    if (item.length < maxLength) {
      const distance = maxLength - item.length;
      for (let i = 0; i < distance; i++) {
        item += ' '
      }
    }
    acc.push(item.split(''))
    return acc;
  }, [])

  for (let i = 0; i < maxLength; i++) {
    let inner = "";
    for (let j = 0; j < splited.length; j++) {
      inner += splited[j][i]
    }
    if (i === maxLength - 1) {
      result.push(inner.trimRight());
    } else {
      result.push(inner);
    }
  }
  return result;
}

export default transpose;