import "./App.css";
import Main from "./components/Main.jsx";
import RegistrationForm from "./components/MoreDetails.jsx";
import MoreDetails from "./components/RegistrationForm";

function App() {
  const openForm = (id) => {
    console.log("clicled");
    document.getElementById(id).style.transform = "scale(1)";
    document.getElementById(id).style.width = "100%";
    document.getElementById(id).style.height = "100%";
  };
  return (
    <div className="App">
      <Main openForm={openForm} />
      <RegistrationForm />
      <MoreDetails />
    </div>
  );
}

export default App;
