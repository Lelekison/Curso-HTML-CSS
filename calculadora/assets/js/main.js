function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaBotao();
            this.pressionaEnter();
        },
        pressionaBackSpace(){
            this.display.addEventListener('keydown', e =>{
                if (e.keycode === 8){
                    e.preventDefault();
                    this.clearDisplay();
                }
            });
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
            if (e.keycode ===13){
                this.realizaConta();
            }
            })
        },
        realizaConta(){
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta Inválida');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta Inválida');
                return;
            }
        },
        clearDisplay(){
            this.display.value='';
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },
        cliqueBotoes(){
            document.addEventListener('click', e =>{
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                this.display.focus();
            });
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();