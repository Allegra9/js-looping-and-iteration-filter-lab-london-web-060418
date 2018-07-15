// filters a list of names to match driverNames case insensitively:

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

// PARTIALLY MATCH SUBSTRINGS:     Sa in Sammy, Sarah, etc.
function fuzzyMatch (list, lettersToMatch) {
  let nameLength = lettersToMatch.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, nameLength) === lettersToMatch;
  });
}

//  MATCHES OBJECT VALUES TO A PROVIDED STRING:
function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
