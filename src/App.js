import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Section from "./components/Sections";
import TopBackgroundSection from "./components/TopBackgroundSection";

import imgSrc from "./assets/images/sean-pollock-PhYq704ffdA-unsplash 1.png";
import backlit from "./assets/images/backlit-bonding-casual-708392-400x400 1.png";
import businessman from "./assets/images/businessman-4608282_1920 1.png";
import handShake from "./assets/images/hands-1063442_1280 1.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <TopBackgroundSection
        title="The largest community of photo enthusiasts"
        buttonText="Join Today"
      />
      <Section
        title="Snap photos and share like never before"
        showContent={false}
        secClassName="fst-sec"
        showSecClass={true}
        cardClassName="fst-cards"
        showCardClass={true}
      >
        <Card
          title="Sed ut perspiciatis"
          text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est"
          showText={true}
          buttonText="Learn more"
          showBtn={true}
          cardClass="fstsec-card"
          showCardClass={true}
        />
        <Card
          title="Lorem ipsum dolor"
          text="amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
          showText={true}
          buttonText="Learn more"
          showBtn={true}
          cardClass="fstsec-card"
          showCardClass={true}
        />
        <Card
          title="Nemo enim ipsam"
          text="consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam"
          showText={true}
          buttonText="Learn more"
          showBtn={true}
          cardClass="fstsec-card"
          showCardClass={true}
        />
        <Card
          title="tempor incididunt"
          text="eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora"
          showText={true}
          buttonText="Learn more"
          showBtn={true}
          cardClass="fstsec-card"
          showCardClass={true}
        />
      </Section>

      <Section
        title="Have you ever posted any photo on social media?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        showContent={true}
        secClassName="sec-center"
        showSecClass={true}
        cardClassName="snd-cards"
        showCardClass={true}
        cardChildClass=""
        showCardChildClass={true}
        imgSrc={imgSrc}
        // imgSrc="/src/assets/images/sean-pollock-PhYq704ffdA-unsplash 1.png"
      >
        <Card
          title="Sed ut perspiciatis"
          text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur"
          showText={true}
          // cardClass="fstsec-card"
          // showCardClass={true}
        />
        <Card
          title="Lorem ipsum dolor"
          text="amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.r"
          showText={true}
          // cardClass="fstsec-card"
          // showCardClass={true}
        />
        <Card
          title="Nemo Enim ipsam"
          text="consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum"
          showText={true}
          // cardClass="fstsec-card"
          // showCardClass={true}
        />
      </Section>
      <Section
        title="Make your photos more stylish"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        showContent={true}
        secClassName="trd-sec"
        showSecClass={true}
        cardClassName="trd-cards"
        showCardClass={true}
      >
        <Card
          title="Sed ut persoiciatis"
          text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia."
          showText={true}
          imgSrc={backlit}
          showImgSrc={true}
          cardClass="trdsec-card"
          showCardClass={true}
        />
        <Card
          title="Lorem ipsum dolor"
          text="Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          showText={true}
          imgSrc={businessman}
          showImgSrc={true}
          cardClass="trdsec-card"
          showCardClass={true}
        />
        <Card
          title="Nemo enim ipsam"
          text="Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
          showText={true}
          imgSrc={handShake}
          showImgSrc={true}
          cardClass="trdsec-card"
          showCardClass={true}
        />
      </Section>
      <Section
        title="Ready to take a free trial?"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        showContent={true}
        secClassName="form-sec"
        showSecClass={true}
        cardClassName="form-cards"
        showCardClass={true}
      >
        <Card
          title="Sign up for a free account"
          showFormBtn={true}
          buttonText="Register"
          // showCardClass={true}
          // cardClass="form-card"
        />
      </Section>
      <Footer />
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
