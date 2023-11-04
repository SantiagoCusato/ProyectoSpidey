class canvas_ficha extends canvas_objeto {
    constructor(jugador, id, context, posInicialX, posInicialY, imagen, color) {
        super(jugador, context, posInicialX, posInicialY, imagen, color);
        this.radio = 37//Math.round(Math.random() * 100);
        this.borde = 3;
        this.anguloDesde = 0;
        this.anguloHasta = 2 * Math.PI;
        this.habilitada = false;
        this.id = id;
    }

    //Si se encuentra una posicion en el tablero se lleva a esa posicion
    //sino vuelve al inicio
    setPosicionFinal(posX, posY) {
        this.posCanvasX = posX;
        this.posCanvasY = posY;
        this.posInicialX = posX;
        this.posInicialY = posY;
    }

    setPosicionInicial() {
        this.posCanvasX = this.posInicialX;
        this.posCanvasY = this.posInicialY;
    }

    getPosicionFinalX(){
        return this.posCanvasX;
    }

    getPosicionInicialX(){
        return this.posInicialX;
    }

    draw(cGanador, bGanador) {
        if(cGanador!=null){
            this.color = cGanador;
        }
        if(bGanador!=null){
            this.borde = bGanador;
        }
        this.context.save();
        this.context.beginPath();
        
        this.context.arc(this.posCanvasX, this.posCanvasY, this.radio, this.anguloDesde, this.anguloHasta);
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.borde;
        this.context.stroke();
        if(this.imagen == null){
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.closePath();
        }else{
            this.context.clip();
            this.context.drawImage(this.imagen, this.posCanvasX-this.radio, 
            this.posCanvasY-this.radio, this.radio*2, this.radio*2);
                
            this.context.restore();
        }
    }

    getRadio() {
        return this.radio+this.borde;
    }

    isHabilitada() {
        return this.habilitada;
    }

    setHabilitada(valor) {
        this.habilitada = valor;
    }

    getId() {
        return this.id;
    }

    isClicked(posX, posY){
        let distancia = 0;
        let posX1K = posX + 70;
        let posY1K = posY + 13;

        if(this.getPosInicialX()>1000){
            distancia = Math.sqrt(((posX1K) - this.getPosInicialX()) ** 2 + ((posY1K) - this.getPosInicialY()) ** 2);
        }else{
            distancia = Math.sqrt((posX - this.getPosInicialX()) ** 2 + (posY - this.getPosInicialY()) ** 2);
        }
        return distancia < this.radio;
    }

}