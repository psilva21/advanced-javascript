import { Aluno } from '../Model/AlunoModel.js';

export class ListaAlunosController {
         constructor(model, view) {
           this.model = model;
           this.view = view;

           this.view.$seletor.addEventListener(
             "click",
             this.editarAluno.bind(this)
           );

           this.pegaLocalStorage();
         }
         pegaLocalStorage() {
           let local = localStorage.getItem("alunos");
            console.log(local);
            
             if (local) {
               let alunos = JSON.parse(local);
               alunos.forEach((aluno, idx) => {
                 this.model.adicionarAluno(
                   new Aluno(aluno.nome, aluno._notas, aluno._id)
                 );
               });
               this.view.atualiza(this.model);
             }
         }
            
        atualizarLocalStorage(model) {
            let _model = model.map(item => {
                return {
                    nome: item.nome,
                    notas: item._notas,
                    _id: item._id
                 }
             })
            _model = JSON.stringify(_model);
            localStorage.setItem('alunos',_model);
         }
         editarAluno(e) {
           let target = e.target;

           while (target !== e.currentTarget) {
             if (target.getAttribute("data-id")) {
               break;
             }
             target = target.parentNode;
           }

           if (target) {
             let _id = parseInt(target.getAttribute("data-id"));
             let _notas = prompt("digite as novas notas separadas por virgula");

             if (!_notas) return;

             _notas = _notas.split(",").map(nota => parseFloat(nota));

             let aluno = this.model.obterPorId(_id);
             aluno.atualizarNotas(_notas);

               this.view.atualiza(this.model);
            // localStorage.setItem("alunos", this.model.lista);
            this.atualizarLocalStorage(this.model.lista);    
           }
         }

         adicionarAluno(nome, notas) {
           this.model.adicionarAluno(new Aluno(nome, notas));
             this.view.atualiza(this.model);
            // localStorage.setItem("alunos", this.model.lista);
            this.atualizarLocalStorage(this.model.lista);    
             
         }
       }                 