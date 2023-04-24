// Variável da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeyBolinha = 6;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


function setup(){
    createCannnvas(600,400);
}

function draw(){
    backgoround(0);
    mostraBolinha();
    MovimentoBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaRaquete();
    verificaColisaoRaquete();
}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
}

function MovimentoBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
        velocidadeXBolinha *= -1;
    }
    if(yBolinha + raio > width || yBolinha - raio < 0){
        velocidadeyBolinha *= -1;
    }
}

function mostraRaquete(){
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete(){
    if (keyIsDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaquete += 10;
    }
}

function verificaColisaoRaquete(){
    if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
        velocidadeXBolinha *= -1;
    }
}
