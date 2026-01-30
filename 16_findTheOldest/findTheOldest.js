function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

const findTheOldest = function(arr) {
  const oldestPerson = arr.sort((a,b) => {
    return getAge(b.yearOfBirth, b.yearOfDeath) - getAge(a.yearOfBirth, a.yearOfDeath);
  })
  return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
