import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [index, setIndex] = useState(0)
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => setSushis(sushis))
    },[]);

  const displayedSushis = sushis.slice(index, index + 4)

  function handleMoreSushi() {
    setIndex(index + 4)
  }

  function eatSushi(piece) {

    const remainingMoney = (money - piece.price)

    if (piece.eaten && remainingMoney >= 0){
    setMoney(remainingMoney)

    setSushis(sushis.map((sushi => {
      if(sushi.id === piece.id) {
        return {...sushi, eaten : true}
      } else {
        return sushi
      }
    })))
  }
  }

  const plates = sushis.filter((sushi) => sushi.eaten)


  return (
    <div className="app">
      <SushiContainer displayedSushis={displayedSushis} index={index} handleMoreSushi={handleMoreSushi} eatSushi={eatSushi}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
