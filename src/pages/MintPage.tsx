import Navbar from "../components/Navbar";
import {useState} from "react";

export default function MintPage() {
    let [counter, setCounter] = useState(1)
    const available = 820
    const total = 2000

    const incrementCounter = () => {
        setCounter(++counter)
    }

    const decrementCounter = () => {
        setCounter(--counter)
    }

    const setMax = () => {
        setCounter(total-available)
    }

    return (
        <div className="mint-page">
            <Navbar/>

            <div className="mint-block">
                <div className="inner">
                    <div className="title">
                        Public Mint is <span style={{color: "#FD4A4A"}}>LIVE</span>
                    </div>

                    <div className="available-container">
                        <p>Available</p>
                        <p>822/2000</p>
                    </div>

                    <div className="amount">
                        <p>Amount</p>
                        <div className={"counter"}>
                            <button onClick={incrementCounter}>+</button>
                            <input style={{width: `${(''+counter).length}ch`}} type="text" value={counter} onChange={(e)=>{setCounter(+e.target.value)}}/>
                            <button onClick={decrementCounter}>-</button>
                        </div>
                        <button onClick={setMax}>MAX</button>
                    </div>

                    <div className="price">
                        <p>Total Price</p>
                        <p>0.37</p>
                    </div>

                    <div className="button">
                        <button className="default-button">
                            CONNECT WALLET
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}