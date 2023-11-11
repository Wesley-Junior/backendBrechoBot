export default class Produto {
    
    #codigo;
    #nome;
    #tamanho;
    #cor;
    #valor;

    constructor(codigo, nome, tamanho, cor, valor) {
        this.#codigo = codigo,
        this.#nome = nome,
        this.#tamanho = tamanho,
        this.#cor = cor,
        this.#valor = valor
    }

    get codigo(){
        return this.#codigo;
    } 
    set codigo(novoCodigo){
        this.#codigo=novoCodigo
    }

    get nome(){
        return this.#nome;
    } 
    set nome(novoNome){
        this.#nome=novoNome
    }

    get tamanho(){
        return this.#tamanho;
    } 
    set tamanho(novoTamanho){
        this.#tamanho=novoTamanho
    }

    get cor(){
        return this.#cor;
    } 
    set cor(novaCor){
        this.#cor=novaCor
    }

    get valor(){
        return this.#valor;
    } 
    set valor(novoValor){
        this.#valor=novoValor
    }
    
    toJSON(){
        return {
            'codigo' : this.#codigo,
            'nome':this.#nome,
            'tamanho':this.#tamanho,
            'cor':this.#cor,
            'valor':this.#valor
        };
    }
}
    