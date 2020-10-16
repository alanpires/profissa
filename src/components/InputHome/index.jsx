import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtomsearchHomepage, Form, ContainerInput, BoxInput } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";

const defaultInput = { serv: "", cep: "" };

const InputHome = ({ onSubmit, searchMode, setSearchMode }) => {
  const [input, setInput] = useState(defaultInput);
  const history = useHistory();

  const refresh = (e) => {
    setInput(defaultInput);
  };

  return (
    <Form onSubmit={(e) => onSubmit(e, input)}>
      <ContainerInput>
        <BoxInput>
          <AiOutlineSearch />
          <select
            onChange={(e) => setInput({ ...input, serv: e.target.value })}
            value={input.serv}
          >
            <option value="Serviços">Serviços</option>
            <optgroup label="Assistência técnica:">
              <option>Celulares</option>
              <option>Computadores</option>
              <option>Eletrodomésticos</option>
            </optgroup>
            <optgroup label="Aulas particulares: ">
              <option>Idiomas</option>
              <option>Artesanato</option>
              <option>Reforço escolar</option>
              <option>Gastronomia</option>
              <option>Música</option>
            </optgroup>
            <optgroup label="Automóveis:">
              <option>Funilaria</option>
              <option>Mecânica</option>
              <option>Guincho</option>
              <option>Elétrica</option>
              <option>Limpeza</option>
            </optgroup>

            <optgroup label="Desenvolvimento web">
              <option>Programador</option>
            </optgroup>
            <optgroup label="Reforma:">
              <option>Pedreiro</option>
              <option>Pintor</option>
              <option>Jardineiro</option>
            </optgroup>
            <optgroup label="Saúde e beleza:">
              <option>Cuidador(a)</option>
              <option>Dentista</option>
              <option>Cabeleireiro</option>
              <option>Enfermagem</option>
              <option>Esteticista</option>
              <option>Fisioterapeuta</option>
              <option>Manicure</option>
              <option>Médico(a)</option>
              <option>Nutricionista</option>
              <option>Pedicure</option>
              <option>Personal Trainer</option>
              <option>Psicólogo(a)</option>
            </optgroup>
            <optgroup label="Serviços domésticos:">
              <option>Babá</option>
              <option>Cozinheiro(a)</option>
              <option>Diarista</option>
              <option>Passadeira(o)</option>
            </optgroup>
          </select>
        </BoxInput>
        <BoxInput>
          <IoIosPin />
          <input
            placeholder="CEP ex: 00000000"
            onChange={(e) =>
              setInput({ ...input, cep: Number(e.target.value) })
            }
            value={input.cep}
          />
        </BoxInput>
      </ContainerInput>
      <ButtomsearchHomepage type="submit">Buscar</ButtomsearchHomepage>
      {searchMode && (
        <ButtomsearchHomepage
          onClick={(e) => {
            setSearchMode(true);
            refresh(e);
          }}
        >
          Voltar
        </ButtomsearchHomepage>
      )}
    </Form>
  );
};

export default InputHome;
