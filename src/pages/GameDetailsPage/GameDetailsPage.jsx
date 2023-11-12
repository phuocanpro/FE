import React from 'react'
import {  useParams } from 'react-router-dom'
import GameDetailsComponent from '../../components/GameDetailsComponent/GameDetailsComponent'
const GameDetailsPage = () => {

  const {id} = useParams()
  
  return (
    <div style={{width: '100%', height: '100%'}}>
      <div style={{ width: '1270px', height: '100%', margin: '0 auto'}} >
        
        <GameDetailsComponent idGame={id} />


        <h1 style={{color:'#fff', fontSize:'300%',padding: '0 20px' }}>Configuration</h1>
        <table style={{ color: 'white', fontSize: '20px' , paddingBottom: '70px'}}>
    <thead>
      <tr>
        <th style={{ padding: '0 45px' }}></th>
        <th style={{ padding: '0 45px' }}>Minimum</th>
        <th style={{ padding: '0 45px' }}>Recommended</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ padding: '0 45px' }}>OS</td>
        <td style={{ padding: '0 45px' }}>Windows 7 Ultimate 64-Bit</td>
        <td style={{ padding: '0 45px' }}>Windows 10 Home 64-Bit</td>
      </tr>
      <tr>
        <td style={{ padding: '0 45px' }}>CPU</td>
        <td style={{ padding: '0 45px' }}>Intel Core i5-4500K</td>
        <td style={{ padding: '0 45px' }}>Intel Core i7-3770K</td>
      </tr>
      <tr>
        <td style={{ padding: '0 45px' }}>RAM</td>
        <td style={{ padding: '0 45px' }}>8GB</td>
        <td style={{ padding: '0 45px' }}>16GB</td>
      </tr>
      <tr>
        <td style={{ padding: '0 45px' }}>Graphics</td>
        <td style={{ padding: '0 45px' }}>NVIDIA GeForce GTX 660|AMD Radeon HD 7870</td>
        <td style={{ padding: '0 45px' }}>NVIDIA GeForce RTX 3080|AMD Radeon RX 6800 XT</td>
      </tr>
      <tr>
        <td style={{ padding: '0 45px' }}>Storage</td>
        <td style={{ padding: '0 45px' }}>60GB available space</td>
        <td style={{ padding: '0 45px' }}>60GB available space</td>
      </tr>
    </tbody>
  </table>
 <hr />
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
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}}>Languages:</u> English, French, Vietnamese...</li>
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}} >Publisher:</u> Riot Games</li>
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}} >Related Day:</u> 12/9/2012</li>
        <li style={{ paddingBottom: '20px' }}><u style={{color:'#9932CC'}}> ESRB Ratings:</u> Teen</li>



      </ul>
    </div>
  </div>


      </div>
    </div>
    
  )
}

export default GameDetailsPage