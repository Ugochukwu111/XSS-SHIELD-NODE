
/*I put the below code outside function scope for cache*/ 
const sideBarBtn = document.getElementById('side-bar-btn'); //side bar button element

const sideBarEl = document.getElementById('side-bar');//sidebar element

const sideBarWrapper = document.getElementById('side-bar-wrapper');



function toggleSideBar() {

  let isOpen = sideBarEl.getAttribute('aria-label');

  if(isOpen == 'side bar closed'){

    sideBarEl.classList.add('show')
    sideBarWrapper.style.display = 'flex';
    sideBarEl.setAttribute('aria-label', 'side bar open');
    

  }else if (isOpen == 'side bar open') {

    sideBarEl.classList.remove('show');
    sideBarWrapper.style.display = 'none';
    sideBarEl.setAttribute('aria-label', 'side bar closed');

  }
}

sideBarBtn.addEventListener('click', ()=>{
  toggleSideBar()
})

sideBarWrapper.addEventListener('click', ()=>{
  toggleSideBar()
})





