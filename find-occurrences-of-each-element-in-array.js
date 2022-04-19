const occurrences = tasks.reduce(function (acc, curr){
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});