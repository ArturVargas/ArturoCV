import React from 'react';
import H2Styled from '../styled/h2Styled';
import H3Styled from '../styled/h3Styled';
import PStyled from '../styled/pStyled';

const Certifications = props => (
    <div className="Certifications">
      <H2Styled name="Certificaciones" />
        <div className="Certifications-container">
        {
          props.data.map((cert, idx) => (
            <div className="Certifications-item" key={`Cert-${idx}`}>
               <H3Styled>
                {cert.name} {cert.institution}
                <span>{cert.date}</span>
                </H3Styled>
                <PStyled name={cert.description} />
            </div>
          ))}
           
        </div>
    </div>
);

export default Certifications;