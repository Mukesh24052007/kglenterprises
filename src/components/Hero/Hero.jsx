import {
  useEffect,
  useRef
} from 'react'
import Typed from 'typed.js'

import "./style.css"

const Hero = () => {
  const company = "KGL Enterprises";
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `We offer complete support for paddy and groundnut farming—from cultivation to harvesting and beyond. 
        Our services include crop buying at fair prices, reliable transport for agri-goods, 
        and tractor/equipment sales`,
      ],
      typeSpeed: 40,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-left-content">
          <div className="hero-left-content-head">
            <h1>{company}</h1>
          </div>

          <div className="hero-left-content-main">
            <p ref={el}></p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-right-content">
          <img src="/tractor.png" alt="kgl" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
