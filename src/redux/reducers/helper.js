export const filterProfissa = (array) => {
  const servicesCount = array.reduce((current, { service }) => {
    current[service] ? (current[service] += 1) : (current[service] = 1);
    console.log(current);
    return current;
  }, {});
  let profissaArrayOrdened = [];

  if (servicesCount) {
    Object.keys(servicesCount).map((serviceName) => {
      array.map((profissa) => {
        if (profissa.service === serviceName) {
          profissaArrayOrdened.push(profissa);
        }
      });
    });
  }

  return profissaArrayOrdened;
};
