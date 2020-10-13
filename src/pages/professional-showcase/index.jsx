import React, { useState, useEffect } from "react";
import { Card } from "lib-kenzie-academy";
import { Header, ProfissionaisProximos } from "./style";
import { useParams } from "react-router-dom";
import { InfoCard, DivCard } from "../homepage/style";
import RicardoSvg from "../homepage/photos/ricardo.svg";
import { Estrela } from "../homepage/style";
import FeedbacksProfissa from "../../components/feedbacks-profissa";
import Carousel from "../../components/swiperCarousel";
import ToHireProfessionalModal from "../../components/to-hire-professional-modal";
import { useSelector } from "react-redux";
import { requestInfosProfissa } from "../../redux/actions/infos-profissa-actions";
import { useDispatch } from "react-redux";
import InfosProfissa from "../../components/infosProfissa";

const ProfessionalShowcase = () => {
  const [showModalProfissa, setShowModalProfissa] = useState(false);
  const users = useSelector((state) => state.profissaHomepage.profissasRequest);
  const { id } = useParams();
  const token = useSelector((state) => state.access.token);
  const dispatch = useDispatch();
  const infosProfissa = useSelector((state) => state.infosProfissa);
  const feedbacks = useSelector(
    (state) => state.profissaFeedbacks.feedbacksRequest
  );

  const axiosConfig = (token) => ({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    dispatch(requestInfosProfissa(id, axiosConfig(token)));
  }, [id]);

  return (
    <>
      {showModalProfissa && (
        <ToHireProfessionalModal setShowModalProfissa={setShowModalProfissa} />
      )}
      <Header>Header Fixo</Header>
      <InfosProfissa
        setShowModalProfissa={setShowModalProfissa}
        showModalProfissa={showModalProfissa}
      />
      <Carousel images={infosProfissa.previousJob} />
      <FeedbacksProfissa />
      <ProfissionaisProximos>
        <h4>Outros profissionais da área</h4>
      </ProfissionaisProximos>

      <DivCard>
        {users.map((user, index) => (
          <div key={index}>
            <Card className="card" key={index}>
              <InfoCard>
                <img src={RicardoSvg} />
                <div>
                  {Array.from({ length: user.stars }, (v, k) => k).map(
                    (key) => {
                      return <Estrela key={key} />;
                    }
                  )}
                </div>
                <p>{user.avaliations} avaliações</p>
                <h1>{user.name}</h1>
                <h1>{user.service}</h1>
              </InfoCard>
            </Card>
          </div>
        ))}
      </DivCard>
    </>
  );
};

export default ProfessionalShowcase;
