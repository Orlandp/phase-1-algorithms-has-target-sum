function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();

  // Loop through each number in the array
  for (const number of array) {
    // Calculate the complement of the current number
    const complement = target - number;

    // Check if the complement is already in the seen set
    if (seen.has(complement)) {
      return true; // Found a pair that adds up to the target
    }

    // Add the current number to the seen set
    seen.add(number);
  }

  return false; 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
