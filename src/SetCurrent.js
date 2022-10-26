function setCurrent(element){
    const home = document.getElementById('home');
    const createAccount = document.getElementById('create-account');
    const deposit = document.getElementById('deposit');
    const withdraw = document.getElementById('withdraw');
    const shop = document.getElementById('shop');

    const navLinks = [home, createAccount, deposit, withdraw, shop];

    for(let i = 0; i < navLinks.length; i++){
        if(navLinks[i].classList.contains('current-page')){
            navLinks[i].classList.remove('current-page')
        }
    }

    element.classList.add('current-page')
}

export default setCurrent;