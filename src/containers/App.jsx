import React from 'react';
import Main from '../components/main';
import Sidebar from '../components/sidebar';
import Info from '../components/info';
import About from '../components/about';
import Education from '../components/education';
import Experience from '../components/experience';
import Certifications from '../components/certifications';
import Skills from '../components/skills';
import useGetData from '../hooks/useGetData';

const App = () => {
    const data = useGetData();
    console.log(data);
    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main> 
          <Sidebar>
            <About 
              avatar = {data.avatar} 
              name = {data.name}
              profession = {data.profession}
              bio = {data.bio}
              address = {data.address}
              social = {data.social}
            />
          </Sidebar>
          <Info>
            <Education 
              data = {data.education}
            />
            <Experience 
              data = {data.experience}
            />
            <Certifications 
              data = {data.certificate}
            />
            <Skills 
            data = {data.skills}
            />
          </Info>
        </Main>
    );
}

export default App;