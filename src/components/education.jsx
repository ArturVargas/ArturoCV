import React from 'react';
import H2Styled from '../styled/h2Styled';
import H3Styled from '../styled/h3Styled';
import PStyled from '../styled/pStyled';

const Education = props => (
    <div className="Education">
        <H2Styled name="Educación" />
        <div className="Education-container">
          {
             props.data.map((edu, index) => (
              <div className="Education-item" key={`Edu-${index}`}>
                <H3Styled>
                  {edu.degree} {edu.institution}
                   <span>{edu.startDate} - {edu.endDate}</span>
                </H3Styled>
                <PStyled name={edu.description} />
              </div>
            ))}
           
        </div>
    </div>
);

export default Education;