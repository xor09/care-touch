import React from "react";
import cancelPng from "../thumbnails/x-button.png";

const RegistrationForm = () => {
  const submitFunc = () => {
    console.log("clicked");
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const sem = document.getElementById("Sem").value;
    const object = document.getElementById("object").value;
    const benfit_to_sco = document.getElementById("benfit_to_sco").value;
    const methodology = document.getElementById("methodology").value;
    const outcome = document.getElementById("outcome").value;

    if (
      name.length == 0 ||
      sem.length == 0 ||
      object.length == 0 ||
      course.length == 0 ||
      benfit_to_sco.length == 0 ||
      methodology.length == 0 ||
      outcome.length == 0
    )
      alert("please fill valid information...");
    else {
      console.log(
        name,
        course,
        sem,
        object,
        benfit_to_sco,
        methodology,
        outcome
      );
    }
  };
  const closeForm = () => {
    document.getElementById("registrationForm").style.transform = "scale(0)";
    document.getElementById("registrationForm").style.width = "0";
    document.getElementById("registrationForm").style.height = "0";
  };
  return (
    <div id="registrationForm" className="registrationForm">
      <header>
        <h2>Registration From</h2>
        <button type="button" onClick={() => closeForm()}>
          <img src={cancelPng} alt="cancel"></img>
        </button>
      </header>
      <div className="inputFields">
        <input
          autoComplete="false"
          id="name"
          placeholder="Name.."
          type="text"
        />
        <input
          autoComplete="false"
          id="course"
          placeholder="Course.."
          type="text"
        />
        <input
          autoComplete="false"
          id="Sem"
          placeholder="Semester.."
          type="text"
        />
        <textarea
          autoComplete="false"
          rows={5}
          id="object"
          placeholder="Objective.."
          type="text"
        />
        <textarea
          autoComplete="false"
          rows={5}
          id="benfit_to_sco"
          placeholder="Benifit to society.."
          type="text"
        />
        <textarea
          autoComplete="false"
          rows={5}
          id="methodology"
          placeholder="Methodology.."
          type="text"
        />
        <textarea
          autoComplete="false"
          rows={5}
          id="outcome"
          placeholder="Outcome.."
          type="text"
        />
      </div>
      <button onClick={() => submitFunc()} className="submitBtn" type="button">
        Submit
      </button>
    </div>
  );
};
export default RegistrationForm;
