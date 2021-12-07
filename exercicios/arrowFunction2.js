function Pessoa() { // sem arrow
    this.idade = 0;

    setInterval( function() {
        this.idade++;
        console.log(this.idade);
    },1000);
}

function Pessoa2(){
    this.idade = 0;

    setInterval(()=>{
        this.idade++;
        console.log(this.idade);
    },1000);
}

