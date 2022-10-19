import './App.css';
import { Link } from 'react-router-dom';



function Nav() {
    function setCurrent(selectedLink){

        const home = document.getElementById('home');
        const createAccount = document.getElementById('create-account');
        const deposit = document.getElementById('deposit');
        const withdraw = document.getElementById('withdraw');
        const allData = document.getElementById('all-data');
    
        const navLinks = [home, createAccount, deposit, withdraw, allData];
    
        for(let i = 0; i < navLinks.length; i++){
            if(navLinks[i].classList.contains('active')){
                navLinks[i].classList.remove('active')
            }
        }
        
        navLinks[selectedLink].classList.add('active')
    }
    
    return (
        <div>
        
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand color-change">Bad Bank</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link color-change" to='/' id="home" onClick={()=>setCurrent(0)}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link color-change" to='/create-account' id="create-account" onClick={()=>setCurrent(1)}>Create Account</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link color-change" to='/deposit' id="deposit" onClick={()=>setCurrent(2)}>Deposit</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link color-change" to='/withdraw' id="withdraw" onClick={()=>setCurrent(3)}>Withdraw</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link color-change" to='/all-data' id="all-data" onClick={()=>setCurrent(4)}>All Data</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Nav;
