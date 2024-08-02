import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const About = () => {
  

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
    <div data-aos="flip-right">
      <h1 className="about-heading-01">About</h1>
      <ul className="about-heading-ul">
        <p className="about-heading-02">
          <h4>🧠 Machine Learning Engineer | Data Scientist | Deep Learning</h4>
          <br />
          <p style={{paddingLeft:'20px'}}>Specializing in Deep Learning and Generative AI, I develop and optimize predictive models using Python, TensorFlow, and Keras, turning complex data into actionable business strategies.</p>
          <br />
          <br />
          <br />
          <h4>💻 Full Stack Web Developer</h4>
          <br />
          <p style={{paddingLeft:'20px'}}>I have extensive experience in frontend and backend development with React, Django, Flask, FastAPI, and a strong grasp of HTML, CSS, JavaScript, Python, databases, and server-side languages.</p>
          <br />
          <br />
          <h4>🚀 Innovator and Learner</h4>
          <br />
          <p style={{paddingLeft:'20px'}}>Exploring Generative AI and LangChain, I'm passionate about innovation and continuously expanding my skills to leverage data and technology for solving complex problems and making a positive impact.</p>
        </p>

        <p className="about-heading-02">
          <h2 className="about-heading-02-1" >Programing Language</h2>
          <br />
          <ul style={{display:'flex'}} className='about-machine-learning'>

          <ul style={{width:"33.3%"}}>
            <li>Python</li>
            <li>Tensorflow</li>
            <li>RNN</li>
          </ul>

          <ul style={{width:"33.3%"}}>
            <li>Pandas</li>
            <li>MLflow</li>
            <li>Computer Vision</li>
          </ul>

          <ul style={{width:"33.3%"}}>
            <li>Seaborn</li>
            <li>Opencv</li>
            <li>ANN & CNN</li>
          </ul>

          </ul>

{/* ------------------------------2nd */}
          <ul style={{display:'flex'}} className='about-machine-learning'>

          <ul style={{width:"33.3%"}}>
            <li>Django</li>
            <li>FastApi</li>
            <li>React</li>
          </ul>

          <ul style={{width:"33.3%"}}>
            <li>Html</li>
            <li>Flask</li>
            <li>SQL DBMS</li>
          </ul>

          <ul style={{width:"33.3%"}}>
            <li>Github</li>
            <li>CSS5</li>
            <li>Flask</li>
          </ul>

          </ul>
          <br />

{/* -----------------------3rd */}
<ul style={{display:'flex'}} className='about-machine-learning'>

          <ul style={{width:"33.3%"}}>
            <li >Generative AI</li>
            <li>Gemini</li>
            <li>Langchain</li>
          </ul>

          <ul style={{width:"33.3%"}}>
            <li>NLP</li>
            <li>Streamlit</li>
            <li>Docker</li>
          </ul>

          </ul>

        </p>
      </ul>
    </div>
    </>
  );
}

export default About;
