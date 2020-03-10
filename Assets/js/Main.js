/////////////////////////////
// Isso Não è Um Easter Egg//
/////////////////////////////
var lista = document.getElementById('box');
var button  = document.querySelector('button');
var input  = document.querySelector('input');
var BtnImg  = document.querySelector('img');

BtnImg.addEventListener('click',()=>{
alert('Twitter: @Diego4458\nGithub: Diego4458\n  Segue Nois');
});
button.addEventListener('click',()=>{
    if(input.value.length > 0)
    {
        if(input.value === "Diego4458")
        {
            GenerateCancelamento(input.value,'Ser Developar');
        }
        else
        {
            GenerateCancelamento(input.value,GenerateMotivo(),)
        }
    }
});

function GenerateMotivo()
{
   return Motivos[Math.floor(Math.random() * Motivos.length)];
}
function GenerateCancelamento(Nome,Motivo)
{
    lista.innerHTML = '';
    var label = document.createElement("a");
    var labeltext = document.createTextNode(`${Nome} foi Cancelado Por ${Motivo}`);
    label.appendChild(labeltext);
    label.setAttribute('class','BoxBox')
    lista.appendChild(label);
}

console.log(`Diego Esteve Aqui Segue No Insta diegodel4458`)