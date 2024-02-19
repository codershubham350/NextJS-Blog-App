import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/programmer.jpg"
          width={600}
          height={600}
          alt="Image of a Developer"
        />
      </div>
      <h1>Hi, I am David</h1>
      <p>
        I blog about web development - especially front-end frameworks like
        React or NextJS
      </p>
    </section>
  );
}

export default Hero;
