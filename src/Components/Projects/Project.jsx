import React, { useContext } from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Codepen from "../../img/codepen.jpg";
import Movie from "../../img/Movie.jpg";
import Quiz from "../../img/quiz.jpg";
import Crud from "../../img/crud.jpg";
import BookStore from "../../img/bookstore.jpg";
import Youtube from "../../img/youtube.jpg";
import { themeContext } from "../../Context";

const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="project_container" id="Project">
        <span style={{ color: darkMode ? "white" : "" }}>
          Recent<span className="text">Projects</span>
        </span>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className="project_container-slider"
        >
          <SwiperSlide>
            <div className="project_card">
              <img src={BookStore} alt="image" />
            </div>
            <div className="project_details">
              <span>
                Project Name:
                <span className="Project_heading"> Book Store</span>
              </span>
              <a
                href="https://github.com/Killerturi/book-store.git"
                target="_blank"
              >
                <span style={{ color: darkMode ? "white" : "" }}>
                  source code
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project_card">
              <img src={Movie} alt="image" />
            </div>
            <div className="project_details">
              <span>
                Project Name:
                <span className="Project_heading"> Movie Website</span>
              </span>
              <a
                href="https://github.com/Killerturi/movie-website.git"
                target="_blank"
              >
                <span style={{ color: darkMode ? "white" : "" }}>
                  source code
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project_card">
              <img src={Youtube} alt="image" />
            </div>
            <div className="project_details">
              <span>
                Project Name:
                <span className="Project_heading"> Youtube</span>
              </span>
              <a
                href="https://github.com/Killerturi/youtube-clone.git"
                target="_blank"
              >
                <span style={{ color: darkMode ? "white" : "" }}>
                  source code
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project_card">
              <img src={Quiz} alt="image" />
            </div>
            <div className="project_details">
              <span>
                Project Name:
                <span className="Project_heading"> Quiz App</span>
              </span>
              <a
                href="https://github.com/Killerturi/quiz-app.git"
                target="_blank"
              >
                <span style={{ color: darkMode ? "white" : "" }}>
                  source code
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project_card">
              <img src={Codepen} alt="image" />
            </div>
            <div className="project_details">
              <span>
                Project Name:
                <span className="Project_heading"> Codepen clone</span>
              </span>
              <a
                href="https://github.com/Killerturi/codepen-clone.git"
                target="_blank"
              >
                <span style={{ color: darkMode ? "white" : "" }}>
                  source code
                </span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project_card">
              <img src={Crud} alt="image" />
            </div>
            <div className="project_details">
              <span>
                Project Name:
                <span className="Project_heading"> Crud App</span>
              </span>
              <a
                href="https://github.com/Killerturi/crud-app.git"
                target="_blank"
              >
                <span style={{ color: darkMode ? "white" : "" }}>
                  source code
                </span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Project;
