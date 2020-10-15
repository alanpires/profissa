import profissaFeedbacks from "../request-feedback";
import services from "../service-request";
import profissaHomepage from "../profissas-homepage";
import { filterProfissa } from "../helper";

describe("Reducer", () => {
  it("adds feedbacks", () => {
    const feedback = {
      creatorId: 12,
      creator: {
        email: "ricardo@gmail.com",
        name: "ricardo",
        cpf: "35122451231",
        adress: "Rua hilford",
        cep: 32451133,
        select: ["Cliente"],
      },
    };
    const action = {
      type: "FEEDBACKS",
      feedback,
    };

    const result = profissaFeedbacks(
      {
        feedbacksRequest: [],
      },
      action
    );

    expect(result).toStrictEqual({ feedbacksRequest: feedback });
  });

  it("adds serviceRequest", () => {
    const serviceRequest = {
      clienteId: 12,
      profissaId: 1,
      profissa: {
        email: "alanPires@gmail.com",
        password:
          "$2a$10$TuN1speMggvTmEmg7aC43.OufcydPGYXVrbQLByZ6c7wlnREJKFpu",
        name: "Alan Pires",
        cpf: "78489582148",
        adress: "Rua Alameda",
        cep: 12155654,
        select: ["Profissa"],
        service: "Pedreiro",
        softSkills: "Sou pontual, organizado e responsável.",
        hardSkills:
          "Azulejista, habilidade na operação de máquinas de construção, conhecimento em alvenaria e interpretação de projetos.",
        about:
          "Confiável, trabalhador da Construção Civil com mais de 15 anos de experiência. Excelente trabalho em equipe, construções rápidas, com segurança e eficiência.",
        previousJob: [
          "https://image.freepik.com/fotos-gratis/plugue-de-montagem-do-tecnico-de-colheita_23-2147743071.jpg",
          "https://image.freepik.com/fotos-gratis/construcao-de-casa-nova-residencial-em-andamento-no-canteiro-de-obras_293060-461.jpg",
          "https://image.freepik.com/fotos-gratis/grupo-de-engenheiros-construtores-arquitetos-no-canteiro-de-obras_116407-2715.jpg",
          "https://image.freepik.com/fotos-gratis/canalizador-de-encanamento-com-chave-inglesa_23-2147772228.jpg",
        ],
        id: 1,
      },
      typeService: "Pedreiro",
      details: "Arrumar o piso da area de serviço",
      schedule: "2020-11-21",
      id: 1,
    };

    const action = {
      type: "SERVICE_RESQUEST",
      serviceRequest,
    };

    const result = services(
      {
        services: [],
      },
      action
    );

    expect(result).toStrictEqual({ services: serviceRequest });
  });

  it("adds profissaHomepage", () => {
    const profissa = [
      {
        email: "olivia@gmail.com",
        password:
          "$2a$10$zCG4nAWkTAjL13RbLLitXuhrGBDW5PWRvdVTYDDf7cY1A/wyZnNFi",
        name: "olivia",
        cpf: "34212221432",
        adress: "Rua sorito",
        cep: 32451125,
        select: ["Profissa"],
        service: "Programador",
        id: 10,
      },
    ];

    const action = {
      type: "PROFISSAS",
      profissa,
    };

    const result = profissaHomepage(
      {
        profissasRequest: [],
      },
      action
    );

    expect(result).toStrictEqual({
      profissasRequest: filterProfissa(profissa),
    });
  });
});
