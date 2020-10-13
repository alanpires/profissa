export const getStars = (array) => {
  console.log(array);
  let stars = [];
  let grade;
  if (array.length > 0) {
    array.map((star) => {
      stars.push(star.stars);
    });
    grade = parseFloat(
      stars.reduce((accum, curr) => accum + curr) / stars.length
    ).toFixed(2);
  }
  return grade;
};
