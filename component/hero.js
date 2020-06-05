import css from "./hero.module.css";

import { Twitter, Linkedin, Github } from "./socialIcons";

export default function HelloWorld() {
  const info = {
    name: "Patrick",
    city: "Berlin",
    occupation: "Front-End Developer",
  };

  return (
    <div className={css.hero}>
      <div className="row">
        <h1>I'm {info.name}</h1>
        <div className={css.description}>
          I'm a {info.occupation} based {info.city}. Here will be your
          description. Use this to describe what you do or whatever you feel
          best describes yourself to a potential employer.
        </div>
        <div className={css.socialIcons}>
          <a href="//github.com">
            <Github />
          </a>
          <a href="//twitter.com">
            <Twitter />
          </a>
          <a href="//linkedin.com">
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
