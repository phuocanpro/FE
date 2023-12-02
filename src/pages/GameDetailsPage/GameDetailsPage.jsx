import React from 'react'
import {  useParams } from 'react-router-dom'
import { StarFilled } from "@ant-design/icons";
import GameDetailsComponent from '../../components/GameDetailsComponent/GameDetailsComponent'
const GameDetailsPage = () => {

  const {id} = useParams()
  
  return (
    <div style={{width: '100%', height: '100%'}}>
      <div style={{ width: '1270px', height: '100%', margin: '0 auto'}} >
        
        <GameDetailsComponent idGame={id} />


       
 
  <div style={{ color: 'white', fontSize: '17px', lineHeight: '2', padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <h2>About this game</h2>
      <h4>What is LOL?</h4>
      <p>League of Legends (LoL) is a popular multiplayer online game developed by Riot Games.</p>
      <p>It was released in 2009 and has since become one of the most played PC games worldwide, with millions </p>
    <p>It features a diverse range of champions, each with unique abilities.</p>
    <p>The game is known for its strategic gameplay and vibrant esports scene.</p>
    </div>
    <div>
      <h2>Game Details</h2>
      <ul>
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}}>Genres:</u> Action, Adventure, Indie</li>
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}}>Platforms:</u> Windows, macOS, Linux</li>
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}} >Publisher:</u> Riot Games</li>
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}} >Related Day:</u> 12/9/2012</li>
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}}> Ratings:</u> Teen 16+
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253,216,54" }} /></li>



      </ul>
    </div>
  </div>


      </div>
    </div>
    
  )
}

export default GameDetailsPage