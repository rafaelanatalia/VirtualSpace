/*menu mobile*/
var menuBar= document.querySelector('#btnmobile i');

menuBar.addEventListener('click',(e)=>{
    e.preventDefault();
   let menuMobile=document.querySelector('body > header > nav ul');
   if(menuMobile.classList.contains('show-menu')){
       menuMobile.classList.remove('show-menu');
   }
   else{
       menuMobile.classList.add('show-menu');
       
   }

})
