import React, { useState } from "react";
import {
    ButtomsearchHomepage,
    Form,
    ContainerInput,
    BoxInput
} from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosPin } from "react-icons/io";

const InputHome = ({ onSubmit }) => {
    const [input, setInput] = useState({ serv: "", cep: 0 });
    return (
        <Form onSubmit={(e) => onSubmit(e, input)}>
            <ContainerInput>
                <BoxInput>
                    <AiOutlineSearch />
                    <select onChange={(e) => setInput({ ...input, serv: e.target.value })}>
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
                        <optgroup label="Reformas e Construções:">
                            <option>Pedreiro</option>
                            <option>Eletricista</option>
                            <option>Jardineiro</option>
                            <option>Engenheiro</option>
                            <option>Vidraceiro</option>
                            <option>Carpinteiro</option>
                            <option>Arquiteto</option>
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
                        pattern="\d{5}\d{3}"
                        placeholder="CEP ex: 00000000"
                        onChange={(e) => setInput({ ...input, cep: e.target.value })}
                    />
                </BoxInput>
            </ContainerInput>
            <ButtomsearchHomepage type="submit">Buscar</ButtomsearchHomepage>
        </Form>
    );
};

export default InputHome;
