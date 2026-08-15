function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return 'Invalid';
  }

  for (let user of users) {
    if (!user.hasOwnProperty('isActive')) {
      return 'Invalid';
    }
  }

  return users.filter(user => user.isActive === true);
}

console.log(
  filterActiveUsers([
    { name: 'John', isActive: true },
    { name: 'Alice', isActive: false },
    { name: 'Bob', isActive: true },
  ]),
);
console.log(
  filterActiveUsers([
    { name: 'Eve', isActive: false },
    { name: 'Charlie', isActive: true },
  ]),
);
console.log(
  filterActiveUsers([
    { name: 'David', isActive: true },
    { name: 'Frank', isActive: true },
  ]),
);
console.log(
  filterActiveUsers([
    { name: 'Grace', isActive: false },
    { name: 'Hannah', isActive: false },
  ]),
);
console.log(
  filterActiveUsers([
    { name: 'Ivy', isActive: true },
    { name: 'Jack', isActive: false },
  ]),
);
