export const filterProfissa = (array) => {
  const servicesCount = array.reduce((current, { service }) => {
    current[service] ? (current[service] += 1) : (current[service] = 1);
    console.log(current);
    return current;
  }, {});
  let profissaArrayOrdened = [];

  // console.log(servicesCount);
  if (servicesCount) {
    Object.keys(servicesCount).map((serviceName) => {
      array.map((profissa) => {
        if (profissa.service === serviceName) {
          profissaArrayOrdened.push({
            id: profissa.id,
            name: profissa.name,
            email: profissa.email,
            service: profissa.service,
            stars: 0,
          });
        }
      });
    });
  }
  console.log(profissaArrayOrdened);
  return profissaArrayOrdened;
};

// export const filterStars = (array) => {
//   const StarsCount = array.map(({ stars }) => {

// };
