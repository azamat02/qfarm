import Navbar from "../components/Navbar";
import {ArrowPathIcon} from "@heroicons/react/24/outline";

export default function MintPage() {
    return (
        <div className="mint-page">
            <Navbar/>

            <div className="mint-block">
                <div className="inner">
                    <div className="title">
                        Public Mint is <span style={{color: "#FD4A4A"}}>LIVE</span>
                    </div>
                    <div className="input">
                        <input placeholder={"Enter quantity"} type="number"/>
                        <p className="text">
                            QFarmKZT
                        </p>
                    </div>
                    <div className="icon">
                        <ArrowPathIcon/>
                    </div>
                    <div className="input">
                        <input placeholder={"Enter quantity"} type="number"/>
                        <p className="text">
                            ETH
                        </p>
                    </div>
                    <div className="cost">
                        <p className={"item"}>
                            <p className="number">1</p>
                            <p className="text">QFarmKZT</p>
                        </p>
                        <p className={"equal"}>
                            =
                        </p>
                        <p className={"item"}>
                            <p className="number">0.0000023</p>
                            <p className="text">ETH</p>
                        </p>
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