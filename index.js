// Code your solution here
function findMatching(drivers, string) {
  let filterResult = drivers.filter((name) => {
    if (
      name.toLowerCase() === string.toLowerCase() ||
      name.toUpperCase() === string.toUpperCase()
    ) {
      let founds = [];
      founds.push(name);
      return founds;
    }
  });
  return filterResult;
}
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

findMatching(drivers, "Sammy");

//---------------------------------------------
function fuzzyMatch(drivers, string) {
  let match = true;
  let word = drivers.filter((letter) => letter[0] === string[0]);
  if (match) {
    return word;
  } else if (!match) {
    return [];
  }
}

function matchName(drivers, string) {
  let match = true;
  if (match) {
    let found = drivers.filter((name) => name === string.name);
    return found;
  } else {
    return "No Name Found!";
  }
}
