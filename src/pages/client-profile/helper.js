import { sortProfissas } from "../homepage/helper";

export const servicesRequestClienteCurrent = (
  array,
  user,
  feedback,
  professional
) => {
  const profissasArray = sortProfissas(feedback, professional);
  const servicesRequestClient = [];
  const scheduledProfissas = [];
  array.map((serviceCurrent) => {
    if (serviceCurrent.clienteId === user.id)
      servicesRequestClient.push(serviceCurrent.profissa);
  });
  console.log(profissasArray, servicesRequestClient);
  servicesRequestClient.map((scheduledProfissa) => {
    profissasArray.map((profissa) => {
      if (profissa.id === scheduledProfissa.id) {
        scheduledProfissas.push(profissa);
      }
    });
  });
  return scheduledProfissas;
};

export const axiosConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
