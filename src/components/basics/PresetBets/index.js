import React from 'react';
import './index.css'

const PresetBet = () =>{
    return(
        <>
            <div className='preset-content'>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "14px" }}>PRESET BETS</div>
                <div className='box-content'>
                    <div className='bet-box'>0.5</div>
                    <div className='bet-box'>1</div>
                    <div className='bet-box'>5</div>
                    <div className='bet-box'>10</div>
                    <div className='bet-box'>25</div>
                    <div className='bet-box'>50</div>
                    <div className='bet-box'>100</div>
                </div>
            </div>
        </>
    )
}

export default PresetBet;
