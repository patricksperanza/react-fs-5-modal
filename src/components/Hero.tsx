import computer from "../assets/computer.jpg";

const Hero = () => {
  return (
    <>
      <main className="main">
        <div className="main-title">
          <h1>OmniTech Solutions</h1>
          <h3>Empowering the Future with Innovatie Technologies</h3>
        </div>
        <img src={computer} alt="computer" />
      </main>
      <button className="chat">💬</button>
    </>
  );
};

export default Hero;
