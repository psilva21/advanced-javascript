import { blg } from "../../beluga2.js";

export class FormAdicionarAlunoView {
  constructor(seletor) {
    this.$seletor = blg.$(seletor);
    this.$seletor.innerHTML = this.getTemplate();
  }
  getTemplate() {
    return ` <form action="#">
		      	        <input type="text" id="nome" required>
		      	        <input type="number" id="nota1" required min="0" max="10">
		      	        <input type="number" id="nota2" required min="0" max="10">
		      	        <input type="number" id="nota3" required min="0" max="10">
		      	        <input type="number" id="nota4" required min="0" max="10">
		      	        <button type="submit">Adicionar</button>
		      	    </form>`;
  }
}