import Header from "./components/Header";
import "./App.scss";
import FirstScreen from "./components/FirstScreen";
import FirstWhite from "./components/First_white";
import FirstBlu from "./components/FirstBlu";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <FirstScreen />
      <FirstWhite
        subtitle="About Us"
        title="Who we are ?"
        images="./img/Vector-p1.svg"
        text="Cubetech  is a global technology partner enabling change and transformation across industries, and generating long-lasting value for businesses, people, and the wider world. We deliver exceptional results on every project with the cutting-edge tech expertise of our team bringing innovative solutions for each client."
      />
      <FirstBlu
        subtitle="About Us"
        images="./img/p3.png"
        text="Cubetech  is a global technology partner enabling change and transformation across industries, and generating long-lasting value for businesses, people, and the wider world. We deliver exceptional results on every project with the cutting-edge tech expertise of our team bringing innovative solutions for each client."
      />
      <FirstWhite
        subtitle="About Us"
        title="Who we are ?"
        images="./img/Vector-p2.svg"
        text="Cubetech  is a global technology partner enabling change and transformation across industries, and generating long-lasting value for businesses, people, and the wider world. We deliver exceptional results on every project with the cutting-edge tech expertise of our team bringing innovative solutions for each client."
      />
      <FirstBlu
        subtitle="About Us"
        images="./img/Vector-p3.svg"
        text="Cubetech  is a global technology partner enabling change and transformation across industries, and generating long-lasting value for businesses, people, and the wider world. We deliver exceptional results on every project with the cutting-edge tech expertise of our team bringing innovative solutions for each client. long-lasting value for businesses, people, and the wider world. We deliver exceptional results on every project with the cutting-edge tech expertise of our team bringing innovative solutions for each"
      />
      <FirstWhite
        subtitle="About Us"
        title="Who we are ?"
        images="./img/Vector-p5.svg"
        text="Cubetech  is a global technology partner enabling change and transformation across industries, and generating long-lasting value for businesses, people, and the wider world. We deliver exceptional results on every project with the cutting-edge tech expertise of our team bringing innovative solutions for each client."
      />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
