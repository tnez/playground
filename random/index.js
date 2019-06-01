const { random, round } = Math

module.exports = (req, res) => {
  const rando = round(random() * 100)
  res.end(`${rando}`)
}
