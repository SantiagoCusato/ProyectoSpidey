class Tablero {

    constructor(c, ctx, row, col) {
        this.canvas = c;
        this.ctx = ctx;
        this.tamaniocelda = 80; // Tamaño de celda
        this.rows = row;
        this.cols = col;
        this.Tablero = new Array(this.rows);
        this.JugarorActual = 'blue';
        this.anchoTotal =  this.tamaniocelda * this.cols;
        this.altoTotal =  this.tamaniocelda * this.rows;
        this.posInicialX = (1288 - this.tamaniocelda * this.cols) / 2;
        this.posInicialY = (644 - this.tamaniocelda * this.rows) / 2;
        
    }



    drawCirculo(col, row, color) {
        this.ctx.beginPath();
        
        this.ctx.arc(this.posInicialX + col * this.tamaniocelda + this.tamaniocelda / 2,
        this.posInicialY + row * this.tamaniocelda + this.tamaniocelda / 2,
          this.tamaniocelda / 2 -3,
           0,
            2 * Math.PI);

        this.ctx.fillStyle = color || 'rgb(240, 236, 228)';
        this.ctx.fill();
        this.ctx.strokeStyle ='rgb(251, 64, 145)';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }

    inicializarTablero() {
        for (let row = 0; row < this.rows; row++) {
            this.Tablero[row] = new Array();
            for (let col = 0; col < this.cols; col++) {
                this.Tablero[row][col] = null;
            }
        }
    }

    drawTablero() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.drawCirculo(col, row, this.Tablero[row][col]);
            }
        }
    }

    

   AddFicha(event, ficha) {
    // console.log("tablero inicializado ");
    // console.log(this.Tablero);
        let col = 0;
        if(this.PosicionMouseValidaX(event) && this.PosicionMouseValidaY(event)){
            let posicionX = event.offsetX - this.posInicialX;
            col = Math.floor(posicionX/this.tamaniocelda);
            if (this.MovimientoValido(col)) {
                let row = this.ObtenerFila(col);
                
                this.Tablero[row][col] = ficha;

                ficha.setPosicionFinal(this.posInicialX+col*this.tamaniocelda+ficha.getRadio(), 
                    this.posInicialY+row*this.tamaniocelda+ficha.getRadio());
            }
        }
    }

    PosicionMouseValidaX(event){
        return event.offsetX > this.posInicialX 
        && event.offsetX < this.posInicialX + (this.tamaniocelda * this.cols);
    }

    PosicionMouseValidaY(event){
        return event.offsetY < this.altoTotal + this.posInicialY;
    }

    MovimientoValido(col) {
        return col >= 0 && col < this.cols && this.Tablero[0][col] === null;
    }

    ObtenerFila(col) {
        for (let row = this.rows - 1; row >= 0; row--) {
            if (this.Tablero[row][col] === null) {
                return row;
            }
        }
        return -1;
    }

    checkoQuienGana(row, col) {
        //pasarle la fila y col ?
      
        return false;
    }
}
