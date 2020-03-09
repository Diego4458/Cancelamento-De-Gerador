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
    "Ser Prostituta",
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
    "Ganhar Na Mega Sena"
];
BtnImg.addEventListener('click',()=>{
alert('Twitter: @Diego4458\nGithub: Diego4458\n  Segue Nois');
});
button.addEventListener('click',()=>{
    if(input.value.length > 0)
    {
        if(input.value === "Diego")
        {
            GenerateCancelamento(input.value,'Ser Developar');
        }
        else
        {
    GenerateCancelamento(input.value,GenerateMotivo())
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
