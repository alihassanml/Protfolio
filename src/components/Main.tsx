import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



function Main() {


  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
    <div data-aos="flip-left" className="main-main-1 container-fluid">
      <div className="main-left col-6">
        <h1 className="main-heading-01">Hi! I'm <span style={{color:'#2dba4e'}}> Ali Hassan</span></h1>
        <h2 className="main-heading-02">I am <span style={{color:'#2dba4e'}}> Data Scientist </span></h2>
        <p className="main-heading-03">Hi, I am a Machine Learning and Deep Learning specialist, innovating in Generative AI and LangChain. As a Full Stack Developer, I have expertise in Scikit learn,Tensorflow, ANN, CNN React, Django, and FastAPI.</p>
        <a href="https://drive.google.com/uc?export=download&id=1_rSTZpBRD8DwFFwmRtYSf8CJIjhGTUpd"  style={{textDecoration:"None" , color:'white',cursor:'pointer'}} download><button className="main-button-1">Download CV</button></a>
      </div>
      <div className="main-right col-6">
        <div className="main-right-image"></div>
      </div>
    </div>
    </>
    
  );
}

export default Main;
