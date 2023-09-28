import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";

function App() {
  const pdasData = [
    { title: "Alexa", handle: "@alexa99", image: AlexaImage, desc: "Alexa was created by Amazon and helps you make purchases on Amazon.com" },
    { title: "Cortana", handle: "@cortana32", image: CortanaImage, desc: "Cortana was created by Microsoft. Who knows what it does?" },
    { title: "Siri", handle: "@siri01", image: SiriImage, desc: "Siri was created by Apple and is being phased out?" },
  ];
  return (
    <>
    <section className="hero is-primary">
      <div className="hero-body">
        <p className="title">Personal Digital Assistants</p>
      </div>
    </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            {pdasData.map((data) => (
              <div className="column is-4">
                <ProfileCard
                  title={data.title}
                  handle={data.handle}
                  key={data.title}
                  image={data.image}
                  desc={data.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
