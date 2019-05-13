import React from 'react';
import H2Styled from '../styled/h2Styled';
import H3Styled from '../styled/h3Styled';
import PStyled from '../styled/pStyled';

const Experience = props => (
    <div className="Experience">
      <H2Styled name="Experiencia" />
        <div className="Experience-container">
        {
          props.data.map((exp, index) => (
            <div className="Experience-item" key = {`Exp-${index}`}>
               <H3Styled>
                {exp.jobTitle} { exp.company}
                <span> { exp.startDate} - {exp.endDate}</span>
               </H3Styled>
               <PStyled name={exp.jobDescription} />
            </div>
          ))}
           
        </div>
    </div>
);

export default Experience;