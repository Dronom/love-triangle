/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter=0;
  for(let i=0;i<preferences.length;i++){
    let j=preferences[i];
    if(j == preferences[j-1]) continue;
    j=preferences[j-1];
    j=preferences[j-1];
    if(i == (j-1)){counter++;}
  }
  return (counter/3);
};

