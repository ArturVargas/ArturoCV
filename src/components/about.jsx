
import React from 'react';
import Social from './socialmedia';
import styled from 'styled-components';

// Inician Bloques de Estilos //
// se renderizan como componentes de React
const AboutStyle = styled.div`
  text-align: center;
`;
const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;
const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height 160px;
  border: solid 2px #516AE8;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(196, 89, 255, 0.6);
`;
const AboutName = styled.div`
  text-align: center;
`;
const AboutH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: 1.3px;
  margin: .5em 0 0 0;
  color: #7666FF;
`;
const AboutProf = styled.p`
  margin: .5em 0 2em 0;
  leter-spacing: 1.6px;
  font-weight: 300;
  font-size: 20px;
  color: #516AE8
`;
const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;
const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 400;
`;


const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle>
      <div className="About-container">
        <AboutAvatar>
          <figure>
              <AboutImg src={avatar} alt=""/>
          </figure>
        </AboutAvatar>
        <AboutName>
          <AboutH2>{name}</AboutH2>
        </AboutName>
        <div className="About-profession">
          <AboutProf>{profession}</AboutProf>
        </div>
        <div className="About-desc">
          <AboutBio>{bio}</AboutBio>
        </div>
        <div className="About-location">
          <AboutLocation>{address}</AboutLocation>  
        </div>
        <div className="About-social">
           <Social social={social} />
        </div>
      </div>
    </AboutStyle>
);

export default About;