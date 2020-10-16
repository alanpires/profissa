export const filterProfissa = (array) => {
  const servicesCount = array.reduce((current, { service }) => {
    current[service] ? (current[service] += 1) : (current[service] = 1);
    return current;
  }, {});
  let profissaArrayOrdened = [];

  if (servicesCount) {
    Object.keys(servicesCount).map((serviceName) => {
      array.map((profissa) => {
        if (profissa.service === serviceName) {
          profissaArrayOrdened.push({
            id: profissa.id,
            name: profissa.name,
            email: profissa.email,
            service: profissa.service,
            image: profissa.image,
            cep: profissa.cep,
            stars: 0,
          });
        }
      });
    });
  }
  return profissaArrayOrdened;
};
