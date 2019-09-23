class FormAdicionarAlunoController{
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    limpar() {
        var inputs = this.view.$seletor.querySelectorAll('input');
        
        Array.prototype.forEach.call(inputs, (input) => {
            input.value = '';
        });
        inputs[0].focus();
    }
}