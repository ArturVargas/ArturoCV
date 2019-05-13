import React from 'react';

const Certifications = props => (
    <div className="Certifications">
        <div className="Certifications-container">
        {
          props.data.map((cert, idx) => (
            <div className="Certifications-item" key={`Cert-${idx}`}>
               <h3>
                {cert.name} {cert.institution}
                <span>{cert.date}</span>
               </h3>
               <p>{cert.description}</p>
            </div>
          ))}
           
        </div>
    </div>
);

export default Certifications;