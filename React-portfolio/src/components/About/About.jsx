import React from "react";
import "./About.css";

export default function About(props) {
    const { name, bio, avatar_url, followers, following, location } =
        props.user;

    return (
        <section className="about-section">
            <div className="detail">
                <h1>Hello, I'm {name}</h1>
                <h3>MERN Stack Developer</h3>
                <p>👨‍💻 “Hey, I’m Nikunj — diving deep into the MERN stack to become a full-fledged Full-Stack Developer. I enjoy experimenting with new technologies, building side projects, and creating apps that not only work but also feel great to use. Always open for collaboration, internships, and learning opportunities along the way.” 🔥</p>
                <p>{bio}</p>
                <p>{location}</p>
                <div className="github-stats">
                    <p className="follower">
                        <span>Follower - </span>
                        <span> {followers}</span>
                    </p>
                    <p className="follower">
                        <span>Following - </span>
                        <span> {following}</span>
                    </p>

                </div>
                <button className="hire-btn">
                    <a href="https://www.linkedin.com/in/nikunj-rana-7ba712319/">Hire Me</a>
                </button>
                <button className="resume-btn">Resume</button>
            </div>

            <img src={avatar_url} alt="" />
        </section>
    );
}
