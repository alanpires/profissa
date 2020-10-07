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
          stars:
            star.stars.reduce((accum, curr) => accum + curr) /
            star.stars.length,
        });
      }
    });
  });
  return profissasSorted;
};
