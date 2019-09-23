export class ListaAlunos{
    constructor(_lista){
        this.lista = [].concat(_lista);
    }
    
    obterPorId(_id){
        return this.lista.filter( aluno => aluno._id === _id )[0];
    }
    
    adicionarAluno(aluno){
        this.lista.push(aluno)
    }
    buscarAluno(nome) {
        return this.lista.filter(aluno => {
            return aluno.nome.toLowerCase() === nome.toLowerCase();
        })
    }
}