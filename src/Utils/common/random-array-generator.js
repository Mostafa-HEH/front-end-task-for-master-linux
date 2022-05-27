export function randomArrayGenerator(arrayLength) {
  // random array for answers
  let randomArray = [];

  // push random number which isn't in the array
  while (randomArray.length !== arrayLength) {
    // assign randome number from 0 to arrayLength
    let randomNumber = Math.floor(Math.random() * arrayLength);

    // if randome number isn't in ther array push it
    if (!randomArray.includes(randomNumber)) randomArray.push(randomNumber);
  }
  return randomArray;
}
