/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
//let preferences = [3,1,2,5,6,4];
//let number = getLoveTrianglesCount(preferences);
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter=0;
  for(let i=0;i<preferences.length;i++){
    let j=preferences[i];
    j=preferences[j-1];
    j=preferences[j-1];
    if(i == (j-1)){counter++;}
  }
  console.log(counter);
  return Math.floor(counter/3);
};

