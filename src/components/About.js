import React, { Component } from "react";

class About extends Component {
  render() {
    const {
      name,
      bio,
      street,
      city,
      image,
      phone,
      email,
      resumeDownload,
    } = this.props.data;
    const profilepic = "images/" + image;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Tim Baker Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>A propos de moi</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Me contacter</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>Email: {email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={`docs/${resumeDownload}`} className="button">
                    <i className="fa fa-download"></i>Télécharger mon CV (PDF)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
