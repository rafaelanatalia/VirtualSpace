// efeito do button
const nav = document.querySelector('.nav');
nav.addEventListener('click',(event) => {
    nav.classList.toggle('open');
});

/*menu mobile*/

var menuBar= document.querySelector('div.wrappers > button');

menuBar.addEventListener('click',(e)=>{
    e.preventDefault();
   let menuMobile=document.querySelector('body > header > nav');
   if(menuMobile.classList.contains('show-menu')){
       menuMobile.classList.remove('show-menu');
   }
   else{
       menuMobile.classList.add('show-menu');
       
   }

})


// mostrar descrição de produto
var verProdutos= document.querySelector ('#mostrar ')

verProdutos.addEventListener('click', (e)=>{
    e.preventDefault();

    const vitrine=document.querySelector("#descricao > div > p");
    if(vitrine.classList.contains('show-text')){
        vitrine.classList.remove('show-text');
    }
    else{
        vitrine.classList.add( 'show-text');
    }

})