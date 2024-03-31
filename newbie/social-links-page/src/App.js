import "./App.css";
import Card from "./Card";
function App() {
  const links = {
    GitHub: "https://github.com",
    "FrontEnd Mentor": "https://www.frontendmentor.io",
    Linkedin: "https://linkedin.com",
    Twitter: "https://x.com",
    Intagram: "https://instagram.com",
  };
  return (
    <div class="container">
      <Card
        name="Jessica Randall"
        location="London, United Kingdom"
        description='"Front-end developer and avid reader."'
        links={links}></Card>
    </div>
  );
}

export default App;
