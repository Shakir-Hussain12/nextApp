import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg'
          alt="About Image"
          fill
        ></Image>
      </div>
      <div className={styles.txtContainer}>
        <div>
          <h1>This is first text</h1>
        </div>
        <div>
          <h1>This is second text</h1>
          <button className="item-btn">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default About;
