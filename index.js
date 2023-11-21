
// esta es el simulador de la base de datos

Categoria = {

    casa:[
         
        {
            id:1,
            titulo:'la romana',
            area: ' casa',
            foto:'img/ca1.jpg',
            parrafo: 'Casa en buen estado listo para ti y todo bien',
            estado:'venta',
            precio: 12000
        },

        {
            id:2,
            titulo:'santiago',
            area: ' casa',
            foto:'img/ca2.jpg',
            estado:'alquiler',
            parrafo: 'lo alquilo a buen precio por que es heavy',
            precio: 23000
        },

        {
            id:3,
            titulo:'santiago',
            area: ' oficina',
            foto:'img/ofi.jpg',
            estado:'alquiler',
            parrafo: 'lo alquilo es muy comoda',
            precio: 7000
        },

        {
            id:4,
            titulo:'san cristobal',
            area: ' casa',
            foto:'img/ca3.jpg',
            estado:'venta',
            parrafo: 'se vende esta propieda buena y soportable',
            precio: 17000
        },

        {
            id:5,
            titulo:'san cristobal',
            area: ' casa',
            foto:'img/ca3.jpg',
            estado:'venta',
            parrafo: 'se vende esta propieda buena y soportable',
            precio: 17000
        },

        {
            id:6,
            titulo:'santiago',
            area: ' oficina',
            foto:'img/presentacion.jpg',
            estado:'alquiler',
            parrafo: 'lo alquilo es muy comoda',
            precio: 27000
        },

        {
            id:7,
            titulo:'santiago',
            area: ' oficina',
            foto:'img/gras.jpg',
            estado:'alquiler',
            parrafo: 'lo alquilo es muy comoda',
            precio: 67000
        },
        {
            id:8,
            titulo:'santiago',
            area: ' oficina',
            foto:'img/ofi.jpg',
            estado:'alquiler',
            parrafo: 'lo alquilo es muy comoda',
            precio: 67000
        },


    ]
  
    
    

};




const padreAl = document.getElementById('contenedor-alquiler');
const conte= Categoria.casa;

const contenidoAlq = ()=>{
   
   


for(let i=0; i<conte.length; i++){
   
    ele= document.createElement('a');
ele.classList.add('cont-cont');
ele.href = '#';
ele.dataset.id=conte[i].id;
ele.innerHTML= ` <div class="cont">


<img src="${conte[i].foto}" alt="">

</div>

<p class="titulo-cont">${conte[i].titulo},${conte[i].area}</p>
<p class="par-cont">${conte[i].parrafo}</p>
<div class="cont-alq">
<p class="precio">$RD${conte[i].precio}</p>
<p class="alq">${conte[i].estado}</p>
</div>`;

padreAl.appendChild(ele);


 }



}

contenidoAlq();

const cont = document.querySelectorAll('.cont-cont');

// aqui va la parte de las img

const formato = document.querySelector('.formato');

const preview = (id)=>{

for(let i = 0; i < cont.length; i++ ){

    let ele = document.createElement('div');
    ele.className='cont-cont-formato';
    ele.innerHTML=`<div class="cont-form">
    <div class="titu">
 <h1>tutulo</h1>
 <i class="fa-solid fa-xmark"></i>

    </div>

<div class="cont-img">

<img src="img/ca2.jpg" alt="">

</div>

 <p class="desc"> hdsfkdsflkdsfa</p>

</div>`;

formato.appendChild(ele);




}

}



// aqui va la parte de click


padreAl.addEventListener('click', (e)=>{
    
e.preventDefault();


if(e.target.closest('a')){
    
    document.querySelector('.formato').style.display='block';
    document.body.style.overflow='hidden';

    
    const idActivo = e.target.closest('a').dataset.id;
     
    
    

    console.log(idActivo);
    const casaActual = Categoria.casa;
   console.log(casaActual);
    preview(idActivo);

}

});

const search = document.querySelector('.contenedor-search');

search.addEventListener('focus', ()=>{

     //search.style.border='1px solid blue';
     search.style.boxShadow=' 1px 1px 15px 1px #ccc ';
    search.style.background='#fff';

    
},true);

search.addEventListener('blur', ()=>{

    // search.style.border='none';
     search.style.boxShadow=' none ';
    search.style.background='#ebf2f7';

    
},true);




