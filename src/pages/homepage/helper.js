export const sortProfissas = (feedbacks, profissas) => {
  console.log(feedbacks, profissas);
  let profissasSorted = [];
  let stars = [];
  profissas.map((profissa, index) => {
    stars.push({ profissaId: profissa.id, stars: [] });

    feedbacks.map((feedback) => {
      if (feedback.receiverId === profissa.id) {
        stars[index].stars.push(feedback.stars);
      }
    });
  });
  stars.map((star) => {
    profissas.map((profissa) => {
      if (star.profissaId === profissa.id) {
        profissasSorted.push({
          ...profissa,
          avaliations: star.stars.length,
          stars: parseFloat(
            (
              star.stars.reduce((accum, curr) => accum + curr) /
              star.stars.length
            ).toFixed(2)
          ),
        });
      }
    });
  });
  return profissasSorted.sort(function (a, b) {
    if (a.stars < b.stars) {
      return 1;
    }
    if (a.stars > b.stars) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
};

// export const renderStars = () =>{

// }
