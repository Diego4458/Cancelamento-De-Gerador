/////////////////////////////
// Isso Não è Um Easter Egg//
/////////////////////////////
var lista = document.getElementById('box');
var button  = document.querySelector('button');
var input  = document.querySelector('input');
var BtnImg  = document.querySelector('img');
var Motivos = [
	"Ser Machista",
	"Ser Homofobico",
	"Ser Hetero",
	"Ser Gay",
	"Ser Lesbica",
	"Jogar Minecraft",
    "Ser o Valter",
    "Asaltar Bancos",
    "Usar Drogas",
    "Ser Adolescente",
    "Ser O Diniz",
    "Ver Parafernalha",
    "Ouvir Kpop",
    "Jogar Lol",
    "Brincar De Ciranda",
    "Fazer Cirurgias Clandestinas",
    "Ser Traficante De Drogas",
    "Ser Dama Da Noite",
    "Estar Usando Esse Site",
    "Ser E-girl",
    "Ser Gostosa",
    "Brincar Com Meu Coração",
    "Militar Errado",
    "Não Saber javascript",
    "Dormir na Aula Do Vagner",
    "Não Ter visto O Easter Egg Na página",
    "Ver Pornografia Em Escesso",
    "Brincar De Esconde Esconde",
    "Ser Lolicon",
    "Ganhar Na Mega Sena",
    "Ser Um Pirata",
    "Jogar Playstation Pirata",
    "Ser Branco",
    "Ser Negro",
    "Ser Pardo",
    "Ser Esquizofrenico",
    "Ter Ebola",
    "Ter Coronga Virus",
    "Ter Corona Virus",
    "Dar PT",
    "Ser Furmante",
    "Fumar Derby",
    "Ser Alcolatra",
    "Ser o Ralph",
    "Beber Suco De Caixinha",
    "Beber Tody Agitando",
    "Ser radical",
    "Cobrar Barato",
    "Não Saber Contar",
    "Faltar As Aulas Do Vagner",
    "Pesquisar No Google De Forma Errada",
    "Ver Tutorias Arabes",
    "Falar Que O Flamento é Time",
    "Torcer Pro Palmeiras",
    "Falar Que #Inforaça è Curso e Não Uma Família"
];
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