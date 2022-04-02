// icon do hamburg
const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});



// ativando o menu
const menubar=document.querySelector('.nav-icon-8');

menubar.addEventListener('click', (e)=>{
    e.preventDefault();
    let menumobile=document.querySelector('nav');
    if(menumobile.classList.toggle('show-menu'));
})


// active link 
const currentLocation= location.href;
const menuItem =document.querySelectorAll('a');
const menuLength= menuItem.length

for (let i=0; i<menuLength; i++){
    if (menuItem[i].href===currentLocation){
        menuItem[i].classList.toggle(className="active")
    }
}


// search

const search=document.querySelector(' input[type=search]')
search.addEventListener('click', (e)=>{
  e.preventDefault();
  let iconSearch=document.querySelector('bx bx-search-alt-2');
  if (iconSearch.classList.toggle('show.search'));
})