import Image from 'next/image';
// import Hero from 'public/images/Hero.png';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="item">
          <h1 className="title">Welcome to the testing project</h1>
          <p className="desc">Below is a list of my professional projects</p>
          <button className="item-btn">See Our Works</button>
        </div>
        <div className="item">
          <Image src="/images/Hero.png" alt="hero-pic" width={500} height={500} className="img"> 
          </Image>
        </div>
      </div>
    </>
  );
}
