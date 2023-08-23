import React,{useEffect} from "react";

//styling and animation
import styled from "styled-components";
import {motion} from "framer-motion"

//redux
import { useSelector,useDispatch } from "react-redux";
import { fetchGames } from "../features/gamesSlice";

//importing components
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Game from "../components/Game";




const Home = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchGames()); //dispatching the fetch games action creator(in context of redux toolkit- async thunk)
      return () => {
        //cleanup
      }
    },[dispatch])

    //getting the data back
    const {popularGames,newGames,upcomingGames} = useSelector((state) => state.games.data);
    return(
      <>
        <NavBar/>
        <Banner/>
        <GameList>
          <h2>Popular Games</h2>
          <Games>
        {popularGames.map(game => <Game game={game} key={game.id}/>)}
          </Games>
          <h2>New Games</h2>
          <Games>
            {newGames.map(game => <Game game={game} key={game.id}/>)}
          </Games>
          <h2>Upcoming Games</h2>
          <Games>
            {upcomingGames.map(game => <Game game={game} key={game.id}/>)}
          </Games>
        </GameList> 
      </>
    )
}


const GameList = styled.div`
  padding:0.5rem;
  margin:1.5rem;
  h2{
    text-align: center;
    padding: 1.5rem;
    font-size: 4rem;
    font-weight: lighter;
    color: #fafafa;
  }
  @media screen and (max-width: 650px) {
    margin: 0;
    padding:0;
  }
`

const Games = styled.div`
  min-height: 80vh;
  padding:1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));  
  grid-column-gap: 3rem;
  grid-column-gap: 3rem;
  @media screen and (max-width: 650px) {
    margin: 0;
    padding:0;
  }
`

export default Home;