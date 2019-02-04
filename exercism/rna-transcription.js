// # RNA Transcription

// Given a DNA strand, return its RNA complement (per RNA transcription).

// Both DNA and RNA strands are a sequence of nucleotides.

// The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
// guanine (**G**) and thymine (**T**).

// The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
// guanine (**G**) and uracil (**U**).

// Given a DNA strand, its transcribed RNA strand is formed by replacing
// each nucleotide with its complement:

// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

function toRna(dnaInput) {
  const dnaSample = ['A', 'C', 'G', 'T']
  const rnaSample = []
  const dnaList = dnaInput.split('')

  for(let item of dnaList) {
    // 유효한 DNA 값인지 검사
    if(!dnaSample.includes(item)) {
      throw new Error('Invalid input DNA.')
    }
    // 하나씩 비교하면서 dna를 rna로 바꾼다.
    if(item === 'A') {
      rnaSample.push('U')
    } else if(item === 'C') {
      rnaSample.push('G')
    } else if(item === 'G') {
      rnaSample.push('C')
    } else if(item === 'T') {
      rnaSample.push('A')
    }
  }

  return rnaSample.join('')
}

export {toRna}
