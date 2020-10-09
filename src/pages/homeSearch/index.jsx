import React from "react";
import { Card } from "lib-kenzie-academy";
import LoginModal from "../../components/login-modal";
import {
  ContainerFlexHomePage,
  DivProfileCards,
  InfoCard,
  EstrelaCards
} from "./style";
import RicardoSvg from './photos/ricardo.svg'
import { useEffect, useState } from "react";
import { requestProfissasHomepage } from "../../redux/actions/profissas-homepage";
import { useDispatch, useSelector } from "react-redux";
import InputHome from "../../components/InputHome";

const HomeSearch = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.ProfissaHomepage.profissasRequest);
  const [usersHome, setUsersHome] = useState([])
  const storeHome = useSelector((state) => state);
  const userLoged = storeHome.access.user.name;
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (usersHome.length === 0) {
      dispatch(requestProfissasHomepage());
      setUsersHome(users)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  const onSubmit = (e, input) => {
    e.preventDefault()
    setUsersHome(
      users.filter(
        elem => (elem.service === input.serv || input.serv === "Serviços") || (elem.cep <= input.cep + 50 && elem.cep >= input.cep - 50)
      ))
    console.log(usersHome, input)
  };

  return (
    <ContainerFlexHomePage>
      {showLogin ? <LoginModal setShowLogin={setShowLogin} /> : null}
      <InputHome onSubmit={onSubmit} />
      <h1>230 Profissas encontrados</h1>
      <DivProfileCards>
        {usersHome ? (
          usersHome.map((user, index) => (
            <Card key={index}>
              <InfoCard>
                <img src={RicardoSvg} />
                <div>
                  <EstrelaCards />
                  <EstrelaCards />
                  <EstrelaCards />
                  <EstrelaCards />
                  <EstrelaCards />
                </div>
                <p>12 avaliações</p>
                <h1>{user.name}</h1>
                <h1>{user.service}</h1>
              </InfoCard>
            </Card>
          ))
        ) : (
            <h1>Carregando</h1>
          )}
      </DivProfileCards>
    </ContainerFlexHomePage>
  );
};

export default HomeSearch;
