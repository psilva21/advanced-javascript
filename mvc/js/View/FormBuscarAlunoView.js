class FormBuscarAlunoView{
    constructor(seletor) {
        this.$seletor = blg.$(seletor);
        this.$seletor.innerHTML = this.getTemplate();
    }
    getTemplate() {
        return `<input id="campoBusca" pĺaceholder="Buscar Aluno">
                <button id="botaoBusca">Buscar</button>`;
    }

}