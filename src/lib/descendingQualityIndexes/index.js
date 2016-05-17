module.exports = (a, b) => {
  if (a.qualityIndex > b.qualityIndex) {
    return -1
  }

  if (a.qualityIndex < b.qualityIndex) {
    return 1
  }

  return 0
}
