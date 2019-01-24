export const gigasecond = (birth) => {
  const gs = birth.getTime() + ((10 ** 9) * 1000)
  return new Date(gs)
}
