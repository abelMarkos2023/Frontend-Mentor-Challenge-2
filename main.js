const menuOpen = document.getElementById("btnOpen")
const menuClose = document.getElementById("btnClose")
const navContent = document.getElementById("navContent")
const overlay = document.getElementById("overlay")

const media = window.matchMedia('(width <= 70rem)');


setupNav(media)
media.addEventListener('change', (e) =>{
setupNav(e)  
})

function setupNav(e){
  if(e.matches){
    console.log('is Mobile')
    //navContent.style.display = 'none'
    setTimeout(()=>{
      navContent.style.display = 'block'
    },500)
  }else{
    console.log('is desktop')
    // overlay.style.display="none";
    // overlay.style.opacity=0;
    overlay.style.opacity = 0;
  overlay.style.display = 'none';
    navContent.style.display = ''

  }
}
menuOpen.addEventListener('click',() => {
  navContent.classList.add('toggleContent')
  overlay.style.display = 'block'
  overlay.style.opacity = 0.5
  document.getElementById('body').classList.add('disapleScroll')
})
menuClose.addEventListener('click',() => {
  navContent.classList.remove('toggleContent');
  overlay.style.opacity = 0;
  overlay.style.display = 'none';
  document.getElementById('body').classList.remove('disapleScroll')

})
overlay.addEventListener('click', () => {
  navContent.classList.remove('toggleContent');
  overlay.style.opacity = 0;
  overlay.style.display = 'none';
})