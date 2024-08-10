export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Vaibhav</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"> Frontend </span>{" "}
            <br />
            Developer
          </h1>
          {/* <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p> */}
        </div>
        <div className="mt-3">
      <a href="https://www.linkedin.com/in/vaibhav-sonawane-937324247/" ><button className="btn btn-primary ">Get In Touch</button></a> 
    
      </div>  </div>
      <div className="hero--section--img">
        <img src="\img\profile-pic (2).png" alt="Hero Section" />
      </div>
    </section>
  );
}
