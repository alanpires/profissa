export const sortProfissas = (feedbacks, profissas) => {
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
        if (star.stars.length > 0) {
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

    return 0;
  });
};

export const loadBestRatingByProfession = (feedbacks, profissas) => {
  let loadProfissas = sortProfissas(feedbacks, profissas);
  const servicesCount = loadProfissas.reduce((current, { service }) => {
    current[service] ? (current[service] += 1) : (current[service] = 1);
    return current;
  }, {});
  let arrayBestRating = [];
  if (servicesCount) {
    Object.keys(servicesCount).map((serviceName) => {
      arrayBestRating.push({
        service: serviceName,
        professionals: loadProfissas.map((profissa) => {
          if (profissa.service === serviceName) {
            return profissa;
          }
        }),
      });
    });
  }
  return arrayBestRating.slice(0, 4).map((service) => {
    let bestProfissa = service.professionals.sort(function (a, b) {
      if (a.stars < b.stars) {
        return 1;
      }
      if (a.stars > b.stars) {
        return -1;
      }

      return 0;
    });
    console.log(bestProfissa[0]);
    return bestProfissa[0];
  });
};
