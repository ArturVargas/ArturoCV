import React from 'react';

const Social = props => (
    <div className="Social">
    {
        props.social &&
        <ul>
            {
                props.social.map((item, idx) => (
                  <li key={`Social${idx}`}>
                    <a href={item.url}>
                      {item.name}
                    </a>
                  </li>
            ))}
        </ul>
    }
    </div>
);


export default Social;