export class FormBuscarAlunoController{
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    buscar(nome) {
        if (!nome) return this.model;
        return {
            lista: this.model.buscarAluno(nome)
        };
    }
    getInputField(parent) {
        return parent.querySelector('input');
    }
}