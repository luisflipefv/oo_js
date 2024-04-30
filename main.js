function Carro(nome, fabricante, anoFabricacao, categoria, velMaxima){
    this.nome = nome;
    this.fabricante = fabricante;
    this.anoFabricacao = anoFabricacao;
    this.categoria = categoria;
    let _velMaxima = velMaxima;
    var carroLigado = false

    this.getVelMaxima = function(){
        return _velMaxima;
    }

    this.setVelMaxima = function(velocidade){
        if(typeof velocidade === 'number'){
            _velMaxima = velocidade;
        }
    }

    this.ligarCarro = function(){
        carroLigado = true;
        console.log(`O ${this.fabricante} ${this.nome} está ligado`);
    }

    this.getCarroLigado = function(){
        return carroLigado;
    }

    this.desligarCarro = function(){
        carroLigado = false;
        console.log(`O ${fabricante} ${nome} está desligado`)
    }

    this.acelerar = function(){
        if(carroLigado === true){
            console.log('o carro está acelerando');
        }else{
            console.log('Para acelerar é preciso que o carro esteja ligado')
        }
    }
}

function Esportivo (nome, fabricante, anoFabricacao, velMaxima){
    Carro.call(this, nome, fabricante, anoFabricacao, 'Esportivo', velMaxima);

    this.ligarTurbo = function(velTurbo){
        if(typeof velTurbo === 'number' && velTurbo >= velMaxima && this.getCarroLigado() === true){
            this.setVelMaxima(velTurbo);
            console.log(`Turbo ativado! Nova velocidade máxima: ${this.getVelMaxima()} km/h`);
        }else{
            console.log('Para ativar o turbo, este deve ser maior que a velocidade maxima do veiculo. Também é necessário que o carro esteja ligado')
        }
    }

}

function Utilitario (nome, fabricante, anoFabricacao, velMaxima, cargaMax){
    Carro.call(this, nome, fabricante, anoFabricacao, 'Utilitario', velMaxima)
    this.cargaMax = cargaMax;
    var cargaAtual = 0
    this.verificaCarga = function(){
        return cargaAtual
    }

    this.adicionarCarga = function(carga){
        if(typeof carga === 'number' && cargaAtual + carga <= cargaMax){
            cargaAtual += carga;
            console.log(`A carga atual do ${fabricante} ${nome} é de ${cargaAtual}kgs`)
        }else{
            console.log(`${fabricante} ${nome} ja atingiu o limite de carga suportado`)
        }
    }

    this.retirarCarga = function(cargaRetirada){
        if(typeof cargaRetirada === 'number' && cargaRetirada <= cargaAtual && cargaAtual > 0){
            cargaAtual -= cargaRetirada
            console.log(`O volume atual da carga é de ${cargaAtual}kgs`)
        }else{
            console.log(`${fabricante} ${nome} está vazio`)
        }
    }
}

const carro1 = new Carro('Gol', 'VolksWagem', 1998, 'hatch', 120);
console.log(carro1);
carro1.setVelMaxima(130);
console.log(carro1.getVelMaxima());
carro1.acelerar();
carro1.ligarCarro();
carro1.acelerar();

const carro2 = new Esportivo('Uracan', 'Lamborghini', 2020, 300);
console.log(carro2);
carro2.setVelMaxima(340);
console.log(carro2.getVelMaxima());
console.log(carro1.getVelMaxima());
carro2.ligarCarro();
carro2.ligarTurbo(350);
carro2.ligarTurbo(250);
carro2.desligarCarro();

const carro3 = new Utilitario('Fiorino', 'Fiat', 2004, 160, 650);
console.log(carro3);
carro3.adicionarCarga(200);
carro3.adicionarCarga(300);
carro3.adicionarCarga(150);
carro3.adicionarCarga(150);
carro3.retirarCarga(300);
carro3.retirarCarga(400);
