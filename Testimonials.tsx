import React, { useState } from "react";

interface Card {
  title: string;
  content: string;
  imagecontent: string;
  image: string;
  imagetitle: string;
  imagecompanyname: string;
  
}

const CardSwitcher: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const cards: Card[] = [
    {
      title: "Card 1",
      content:
        "Beeja has simplified our HR processes, saving us countless hours every week. It’s a game-changer for our team.",
      imagecontent: "Billey Kimber",
      image: "/Images/itesm.jpg",
      imagetitle: "HR Manager",
      imagecompanyname: "Sonic Solutions pvt ltd.",
     
    },
    {
      title: "Card 2",
      content: " This is the second card ",
      imagecontent: "Name",
      image: "/Images/itesm.jpg",
      imagetitle: "HR Manager",
      imagecompanyname: "Sonic Solutions pvt ltd.",
      
    },
    {
      title: "Card 3",
      content: "This is the third card.",
      imagecontent: "Name ",
      image: "/Images/itesm.jpg",
      imagetitle: "HR Manager",
      imagecompanyname: "Sonic Solutions pvt ltd.",
     
    },
  ];

  const changeCardright = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);

  };

  const changeCardlight = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);

  };


  return (
    <div className="card-boxs">
      <div className="card">
        <div className="dotsimage">
         
          <img src="/Images/dots.svg" alt="Background dots" />
        </div>
        <div className="card-item">
          <p className="textdesing">{cards[currentCard].content}</p>
        </div>

        <div className="image-box">
          <img className="images" src={cards[currentCard].image} alt="Card" />
          <div className="image-content">
            {cards[currentCard].imagecontent}
            <div className="image-imagetitle">
              {cards[currentCard].imagetitle}
            </div>
            <div className="image-companyname">
              {cards[currentCard].imagecompanyname}
            </div>
          </div>
        </div>
      </div>

      <div className="card-button">
        <button onClick={changeCardlight}>
          <img
            className="image-buttonOne"
            src="/Images/Button-left.svg"
            alt="Previous"
          />
        </button>
        <div className="dots-container">
          {cards.map((card, index) => (
            <div
              className={`dots-container-items ${currentCard === index ? "active" : ""}`}
              key={index}
              onClick={() => setCurrentCard(index)}
            >
            </div>
          ))}
        </div>


        <button onClick={changeCardright}>
          <img
            className="image-buttonTwo"
            src="/Images/Button-right.svg"
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
};

export default CardSwitcher;
