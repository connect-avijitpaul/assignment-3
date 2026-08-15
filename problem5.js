function generateLeaderboard(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return 'Invalid';
  }

  for (let student of students) {
    if (!student.name || !('score' in student)) {
      return 'Invalid';
    }

    if (typeof student.score !== 'number') {
      return 'Invalid';
    }
  }

  const qualified = students.filter(student => student.score >= 70);

  const names = qualified.map(({ name }) => name.toUpperCase());

  return names.slice(0, 3);
}
