// @ts-ignore
import logo from '../assets/images/logo_white.png'
import Dropdown from "./Dropdown";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
    const investorButtonContent = (
        <div className="dropdown-button-content">
            <p className="title">Invest in cattle</p>
            <button>
                How it works
                <ChevronRightIcon/>
            </button>
            <button>
                Why Cattle
                <ChevronRightIcon/>
            </button>
        </div>
    )

    const ownerButtonContent = (
        <div className="dropdown-button-content">
            <p className="title">Access more capital</p>
            <button>
                How it works
                <ChevronRightIcon/>
            </button>
            <button>
                Why Tokenize
                <ChevronRightIcon/>
            </button>
        </div>
    )

    return (
        <div className="navbar">
            <div className="logo" onClick={()=>{navigate('/')}}>
                <img src={logo} alt="logo"/>
            </div>
            <div className="buttons">
                <Dropdown buttonTitle={"Investors"} content={investorButtonContent}/>
                <Dropdown buttonTitle={"Owners"} content={ownerButtonContent}/>
                <p>Our story</p>
                <button className="default-button" onClick={()=>{navigate('/mint')}}>
                    GET STARTED
                </button>
            </div>
        </div>
    )
}