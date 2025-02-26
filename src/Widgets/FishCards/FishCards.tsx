import { useState } from "react";
import "./FishCards.scss";

type Fishes = {
  typeOfFish: string;
  numberOfFins: number;
  id: number;
};

export const FishCards = () => {
  const [fishes, setFishes] = useState<Fishes[]>([
    { typeOfFish: "Perch", numberOfFins: 23, id: Date.now() },
    { typeOfFish: "Pike", numberOfFins: 2, id: Date.now() },
    { typeOfFish: "Carp", numberOfFins: 3, id: Date.now() },
    { typeOfFish: "Trout", numberOfFins: 54, id: Date.now() },
    { typeOfFish: "Salmon", numberOfFins: 31, id: Date.now() },
    { typeOfFish: "Cod", numberOfFins: 2300034, id: Date.now() },
  ]);

  return (
    <>
      <div className="cardWrapper">
        {fishes.map((fish) => {
          return (
            <div key={fish.id} className="card">
              <h2 className="type">{fish.typeOfFish}</h2>
              <div className="attributes">
                <h3 className="fins">Number of Fins:</h3>
                <p className="finsResult">{fish.numberOfFins} </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
