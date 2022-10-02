import React, { useEffect, useState } from "react";
import "../styles/blue_resume.css";

export const BlueResume = () => {
  const [data, setData] = useState({
    firstName: "Mohammad",
    lastName: "Daniyal",
    Profession: "Software Engineer",
    city: "Delhi",
    country: "India",
    pinCode: "432222",
    phone: "9876543210",
    email: "daniyalmohammad@gmail.com",
    summary: "",
  });

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  return (
    <>
      <div className="resume">
        <div className="resume_left">
          {/* <div className="resume_profile">
            <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" />
          </div> */}
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">
                  {data?.firstName?.length > 3 ? data.firstName : "Mohammd"}{" "}
                  {data?.lastName?.length > 3 ? data.lastName : "Daniyal"}
                </p>
                <p className="regular">
                  {data?.Profession?.length > 3
                    ? data.Profession
                    : "Software Engineer"}
                </p>
              </div>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  {/* <GoLocation/> */}
                  <div className="data">
                    {data?.city}, {data?.pinCode} <br /> {data?.country}
                  </div>
                </li>
                <li>
                  <div className="data">{data?.phone}</div>
                </li>
                <li>
                  <div className="data">{data?.email}</div>
                </li>
                <li>
                  <div className="data">www.mohamad.com</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">skill's</p>
              </div>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <div className="skill_name">HTML</div>
                  <div className="skill_progress">
                    <span style={{ width: "80%" }}></span>
                  </div>
                  <div className="skill_per">80%</div>
                </li>
                <li>
                  <div className="skill_name">CSS</div>
                  <div className="skill_progress">
                    <span style={{ width: "70%" }}></span>
                  </div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div className="skill_name">SASS</div>
                  <div className="skill_progress">
                    <span style={{ width: "90%" }}></span>
                  </div>
                  <div className="skill_per">90%</div>
                </li>
                <li>
                  <div className="skill_name">JS</div>
                  <div className="skill_progress">
                    <span style={{ width: "60%" }}></span>
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">JQUERY</div>
                  <div className="skill_progress">
                    <span style={{ width: "88%" }}></span>
                  </div>
                  <div className="skill_per">88%</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <div className="icon">
                    <i className="fab fa-facebook-square"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Facebook</p>
                    <p>Stephen@facebook</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-twitter-square"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Twitter</p>
                    <p>Stephen@twitter</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Youtube</p>
                    <p>Stephen@youtube</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="data">
                    <p className="semi-bold">Linkedin</p>
                    <p>Stephen@linkedin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">About us</p>
            </div>
            <p>
              {data?.summary.length > 20
                ? data.summary
                : `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis illo fugit officiis distinctio culpa officia totam
              atque exercitationem inventore repudiandae?`}
            </p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Work Experience</p>
            </div>
            <ul>
              <li>
                <div className="date">2013 - 2015</div>
                <div className="info">
                  <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
              <li>
                <div className="date">2015 - 2017</div>
                <div className="info">
                  <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
              <li>
                <div className="date">2017 - Present</div>
                <div className="info">
                  <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="date">2010 - 2013</div>
                <div className="info">
                  <p className="semi-bold">Web Designing (Texas University)</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
              <li>
                <div className="date">2000 - 2010</div>
                <div className="info">
                  <p className="semi-bold">Texas International School</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, voluptatibus!
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_hobby">
            <div className="title">
              <p className="bold">Hobby</p>
            </div>
            <ul>
              <li>
                <i className="fas fa-book"></i>
              </li>
              <li>
                <i className="fas fa-gamepad"></i>
              </li>
              <li>
                <i className="fas fa-music"></i>
              </li>
              <li>
                <i className="fab fa-pagelines"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
