import React from "react";

const Main = ({ openForm }) => {
  return (
    <div className="Main">
      <nav className="navBar">
        <header>
          <h1>IIC</h1>
          <button onClick={() => openForm("registrationForm")}>Register</button>
        </header>
      </nav>
      <ul className="cardList">
        <li>
          <span>14/04/2022</span>
          <span>Name</span>
          <span>objective</span>
          <span>school</span>
          <footer>
            <button onClick={() => openForm("moreDetailsContainer")}>
              more
            </button>
            <button>download</button>
          </footer>
        </li>
        <li>
          <span>14/04/2022</span>
          <span>Name</span>
          <span>objective</span>
          <span>school</span>
          <footer>
            <button onClick={() => openForm("moreDetailsContainer")}>
              more
            </button>
            <button>download</button>
          </footer>
        </li>
        <li>
          <span>14/04/2022</span>
          <span>Name</span>
          <span>objective</span>
          <span>school</span>
          <footer>
            <button onClick={() => openForm("moreDetailsContainer")}>
              more
            </button>
            <button>download</button>
          </footer>
        </li>
        <li>
          <span>14/04/2022</span>
          <span>Name</span>
          <span>objective</span>
          <span>school</span>
          <footer>
            <button onClick={() => openForm("moreDetailsContainer")}>
              more
            </button>
            <button>download</button>
          </footer>
        </li>
      </ul>
    </div>
  );
};

export default Main;
