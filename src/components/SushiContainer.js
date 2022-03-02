import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({displayedSushis, handleMoreSushi, eatSushi}) {

  return (
    <div className="belt">
      {displayedSushis.map((sushi) => <Sushi sushi={sushi} key ={sushi.id} eatSushi={eatSushi}/>)}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
