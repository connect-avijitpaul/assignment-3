function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return 'Invalid';
  }

  for (let score of scores) {
    if (typeof score !== 'number') {
      return 'Invalid';
    }
  }

  let updatedScores = scores.map(score => score + 10);

  let total = updatedScores.reduce((sum, score) => sum + score, 0);

  return total;
}

console.log(bonusScore([80, 90, 70]));
console.log(bonusScore([60, 75, 85, 95]));
console.log(bonusScore([50, 65, 80]));
console.log(bonusScore([90, 100, 85, 95]));
console.log(bonusScore([70, 80, 90]));
