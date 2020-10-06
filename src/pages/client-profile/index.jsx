import React, { useEffect, useState } from "react";
import { MainDiv, LeftDiv, RightDiv, ProfileTitle, DivCard } from "./style.js";
import AvatarCard from "../../components/avatar-card";
import Sidebar from "../../components/sidebar";
import RicardoSvg from "../homepage/photos/ricardo.svg";
import { Card } from "lib-kenzie-academy";
import { InfoCard, EstrelaCards } from "../homepage/style.js";
import axios from "axios";

const ClientProfile = () => {
  return (
    <>
      <MainDiv>
        <LeftDiv>
          <AvatarCard />
          <Sidebar />
        </LeftDiv>
        <RightDiv>
          <ProfileTitle>Serviços solicitados</ProfileTitle>
          <DivCard>
            <Card>
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
                <h1>Ricardo</h1>
                <h2>Programador</h2>
              </InfoCard>
            </Card>
            <Card>
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
                <h1>Ricardo</h1>
                <h2>Programador</h2>
              </InfoCard>
            </Card>
            <Card>
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
                <h1>Ricardo</h1>
                <h2>Programador</h2>
              </InfoCard>
            </Card>
            <Card>
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
                <h1>Ricardo</h1>
                <h2>Programador</h2>
              </InfoCard>
            </Card>
            <Card>
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
                <h1>Ricardo</h1>
                <h2>Programador</h2>
              </InfoCard>
            </Card>
            <Card>
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
                <h1>Ricardo</h1>
                <h2>Programador</h2>
              </InfoCard>
            </Card>
          </DivCard>
        </RightDiv>
      </MainDiv>
    </>
  );
};

export default ClientProfile;
