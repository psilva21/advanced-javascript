var alunos = ["Daniel", "Maria", "Jose"];
alunos = alunos.map( aluno => new Aluno(aluno) );

alunos[0].adicionarNotas(5,2,3,8);
alunos[1].adicionarNotas(5,10,3,8);
alunos[2].adicionarNotas(5,2,8,8);

var listaAlunos = new ListaAlunos(alunos);
var listaAlunosView = new ListaAlunosView('#listaAlunos');
listaAlunosView.atualiza(listaAlunos);

var listaAlunosController = new ListaAlunosController(listaAlunos, listaAlunosView);
var formAdicionarAlunoView = new FormAdicionarAlunoView('#form-adiciona');
var formAdicionarAlunoController = new FormAdicionarAlunoController(
  listaAlunos,
  formAdicionarAlunoView
);
var formBuscarAlunoView = new FormBuscarAlunoView('#form-busca');
var formBuscarAlunoController = new FormBuscarAlunoController(listaAlunos, formBuscarAlunoView);
blg.$('#form-adiciona form').addEventListener('submit', function (e) {
  e.preventDefault();
    
  var nome = blg.$('#nome').value;
    
  var notas = [];
  var i = 1;
  while (blg.$('#nota' + i)) {
    notas.push(parseFloat(blg.$('#nota' + i).value));
    i++;
  }
    
  listaAlunosController.adicionarAluno(nome, notas);
  formAdicionarAlunoController.limpar();
});

blg.$('#form-busca #botaoBusca').addEventListener('click', function (evt) {
  var field = formBuscarAlunoController.getInputField(evt.target.parentNode);
  
  let filter = formBuscarAlunoController.buscar(field.value);
  listaAlunosView.atualiza(filter);
});