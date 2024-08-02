import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function Project() {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div data-aos="flip-right">
      <br />
      <br />
      <br />
      <div className="container-fluid project-1">
        <div className="row" style={{ display: "flex" }}>
          <div className="col-4 project-01-1">
            <h3 className="project-01-2">Creadit Card Fraud Detection </h3>
            <p className="project-01-detail">
            This project aims to detect fraudulent credit card transactions using machine learning techniques, implemented with the Streamlit{" "}
            </p>
            <a href="https://github.com/alihassanml/Credit-Card-fraud-Detection.git" style={{ color: "white", textDecoration: "none"}}><button className="project-01-button">
              
                Github
            </button>

              </a>
          </div>
          <div className="col-4 project-01-1">
            <h3 className="project-01-2">Music Recommendation System </h3>
            <p className="project-01-detail">
            The system recommends songs based on their similarity to the user's preferences, utilizing natural language processing (NLP) and cosine similarity.{" "}
            </p>
            <a href="https://github.com/alihassanml/Music-Recommendation-System.git" style={{ color: "white", textDecoration: "none" }}>

            <button className="project-01-button">
                Github
            </button>

              </a>
          </div>
          <div className="col-4 project-01-1">
            <h3 className="project-01-2">Weather Django Hub </h3>
            <p className="project-01-detail">
            This application is designed to provide real-time weather information for various locations using the Django web framework. The project utilizes weather APIs to fetch current weather data.{" "}
            </p>
              <a href="https://github.com/alihassanml/WeatherDjangoHub.git" style={{ color: "white", textDecoration: "none" }}>
            <button className="project-01-button">

                Github
            </button>
            </a>

          </div>
          <div className="col-4 project-01-1">
            <h3 className="project-01-2">Resume Screamin App</h3>
            <p className="project-01-detail">
            The Resume Screaming App aims to enhance the process of resume screening by leveraging machine learning techniques. This Django-based web application utilizes a K-Nearest Neighbors classifier.{" "}
            </p>
            <a href="https://github.com/alihassanml/Resume-Screamin-App.git" style={{ color: "white", textDecoration: "none" }}>
            <button className="project-01-button">
                Github
            </button>

              </a>
          </div>
        </div>
      </div>

      {/* 2nd ------------- */}

      <div className="container-fluid project-1">
        <div className="row" style={{ display: "flex" }}>
          <div className="col-4 project-01-1">
            <h3 className="project-01-2">Langchian Gemini MCQS Generate </h3>
            <p className="project-01-detail">
            (MCQ) application powered by LangChain, Streamlit, and Gemini. It allows to generate and answer MCQs on various topics, providing  feedback & rewards.{" "}
            </p>
            <a href="https://github.com/alihassanml/QuizGenius.git" style={{ color: "white", textDecoration: "none" }}>

            <button className="project-01-button">
                Github
            </button>

              </a>
          </div>
          <div className="col-4 project-01-1">
            <h3 className="project-01-2">Face Mask Detection</h3>
            <p className="project-01-detail">
            Project aims to detect whether a person in face mask or not using deep learning . The model is trained on a dataset containing images of people with and without face masks{" "}
            </p>
            <a href="" style={{ color: "white", textDecoration: "none" }}>

            <button className="project-01-button">
                Github
            </button>

              </a>
          </div>

          <div className="col-4 project-01-1">
            <h3 className="project-01-2">Human Emotion Detection App </h3>
            <p className="project-01-detail">
            This project is a human emotion detection application built using a  (CNN). The model is designed to classify images into three emotion categories.{" "}
            </p>
            <a href="https://github.com/alihassanml/Human-Emotion-Detection-Deep-Learning.git" style={{ color: "white", textDecoration: "none" }}>

            <button className="project-01-button">
                Github
            </button>

              </a>
          </div>

          <div className="col-4 project-01-1">
            <h3 className="project-01-2">Fake News Detection Project
            </h3>
            <p className="project-01-detail">
            This machine learning project focused on detecting fake news. The project utilizes Python and various libraries such as Pandas, NLTK, and Scikit-learn.{" "}
            </p>
            <a href="https://github.com/alihassanml/fake-news-detection.git" style={{ color: "white", textDecoration: "none" }}>

            <button className="project-01-button">
                Github
            </button>

              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
