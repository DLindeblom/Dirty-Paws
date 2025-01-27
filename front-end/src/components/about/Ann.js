import './About.css';

import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

import annBui from './images/annBui.png';

const Container = styled(animated.div)`
  min-height: 32rem;
  max-height: 33rem;

  min-width: 20rem;
  max-width: 20rem;

  border-radius: 1.5rem;
  overflow: hidden;

  margin: 1rem;
  background-color: #fffdfdaa;

  text-align: center;
`;
const calc = (x, y) => [
  // -(y - window.innerHeight / 2) / 60,
  // (x - window.innerWidth / 4) / 60,
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 1 / 4) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Ann() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <div className="about-top">
        <img className="about-pic" src={annBui} alt="front about dev-wrapper" />
      </div>
      <div className="content">
        <a href="mailto: hello.annbui@gmail.com" >
          <h2 className="about-name"> Ann Bui </h2>
          <p className="dev">Fullstack Web Developer</p>
        </a>
      </div>
      <div className="about-bio">
        <p className="about__bio">
          A front-end lover
          <br />
          Amateur UX/UI designer.
          <br />I am passionate about
          <br />
          designing and creating products
          <br />
          that are user-friendly
          <br />
          and visually appealing.
        </p>
      </div>
      <div className="about-footer ann">
        <div className="city">
          <p className="about-title">
            <a href="https://github.com/thaian161">
              <img
                className="github"
                src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                alt="front about dev-wrapper"
              />
            </a>
          </p>
          <p className="dev">thaian161</p>
        </div>
        <div>
          <p className="about-title">
            <a href="https://www.linkedin.com/in/thaian161/">
              <img
                className="linkedIn"
                src="https://cdn-icons-png.flaticon.com/512/185/185964.png"
                alt="front about dev-wrapper"
              />
            </a>
          </p>
          <p className="dev">thaian161</p>
        </div>
      </div>
    </Container>
  );
}
