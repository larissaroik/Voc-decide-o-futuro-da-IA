const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];

function aleatorio(lista) {
	const posicao = Math.floor(Math.random() * lista.length);
	return lista[posicao];
}

const nome = aleatorio(nomes);

const perguntas = [
	{
    	enunciado: "Assim que saiu da esconst nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];

function aleatorio(lista) {
	const posicao = Math.floor(Math.random() * lista.length);
	return lista[posicao];
}

const nome = aleatorio(nomes);

const perguntas = [
	{
    	enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    	alternativas: [
        	{
            	texto: "Isso é assustador!",
            	afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
        	},
        	{
            	texto: "Isso é maravilhoso!",
            	afirmacao: "Quis saber como usar a IA no seu dia a dia."
        	}
    	]
	},
	{
    	enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
    	alternativas: [
        	{
            	texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            	afirmacao: "Conseguiu utilizar a IA para buscar informações úteis de forma rápida."
        	},
        	{
            	texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
            	afirmacao: "Demonstrou preferência por métodos tradicionais de pesquisa e colaboração humana."
        	}
    	]
	},
	{
    	enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    	alternativas: [
        	{
            	texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
            	afirmacao: "Preocupou-se com a segurança dos empregos e a transição do mercado de trabalho."
        	},
        	{
            	texto: "Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            	afirmacao: "Acredita no potencial de inovação e novos caminhos gerados pela tecnologia."
        	}
    	]
	},
	{
    	enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    	alternativas: [
        	{
            	texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            	afirmacao: "Preferiu usar ferramentas manuais e expressar a criatividade de forma tradicional."
        	},
        	{
            	texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
            	afirmacao: "Explorou geradores de imagem para acelerar e expandir suas ideias visuais."
        	}
    	]
	},
	{
    	enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    	alternativas: [
        	{
            	texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
            	afirmacao: "Entendeu a importância da revisão humana e do uso crítico das ferramentas de IA."
        	},
        	{
            	texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            	afirmacao: "Considerou que saber direcionar comandos à IA já é uma forma válida de contribuição."
        	}
    	]
	}
];

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

if (botaoIniciar) {
	botaoIniciar.addEventListener('click', iniciaJogo);
}

function iniciaJogo() {
	atual = 0;
	historiaFinal = "";
	telaInicial.style.display = 'none';
	caixaResultado.classList.remove("mostrar");
	mostraPergunta();
}

function mostraPergunta() {
	if (atual >= perguntas.length) {
    	mostraResultado();
    	return;
	}
	perguntaAtual = perguntas[atual];
    
	const textoPergunta = perguntaAtual.enunciado.replace(/você/g, nome);
	caixaPerguntas.textContent = textoPergunta;
    
	caixaAlternativas.textContent = "";
	mostraAlternativas();
}

function mostraAlternativas() {
	for (const alternativa of perguntaAtual.alternativas) {
    	const botaoAlternativas = document.createElement("button");
    	botaoAlternativas.textContent = alternativa.texto;
    	botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    	caixaAlternativas.appendChild(botaoAlternativas);
	}
}

function respostaSelecionada(opcaoSelecionada) {
	const afirmacoes = opcaoSelecionada.afirmacao;
	historiaFinal += afirmacoes + " ";
	atual++;
	mostraPergunta();
}

function mostraResultado() {
	caixaPerguntas.textContent = `Em 2049, ${nome}...`;
	textoResultado.textContent = historiaFinal;
	caixaAlternativas.textContent = "";
	caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
	atual = 0;
	historiaFinal = "";
	caixaResultado.classList.remove("mostrar");
	telaInicial.style.display = 'block';
	caixaPerguntas.textContent = "";
}

if (botaoJogarNovamente) {
	botaoJogarNovamente.addEventListener("click", jogaNovamente);
}
cola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    	alternativas: [
        	{
            	texto: "Isso é assustador!",
            	afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
        	},
        	{
            	texto: "Isso é maravilhoso!",
            	afirmacao: "Quis saber como usar a IA no seu dia a dia."
        	}
    	]
	},
	{
    	enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
    	alternativas: [
        	{
            	texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            	afirmacao: "Conseguiu utilizar a IA para buscar informações úteis de forma rápida."
        	},
        	{
            	texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
            	afirmacao: "Demonstrou preferência por métodos tradicionais de pesquisa e colaboração humana."
        	}
    	]
	},
	{
    	enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    	alternativas: [
        	{
            	texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
            	afirmacao: "Preocupou-se com a segurança dos empregos e a transição do mercado de trabalho."
        	},
        	{
            	texto: "Defendo a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            	afirmacao: "Acredita no potencial de inovação e novos caminhos gerados pela tecnologia."
        	}
    	]
	},
	{
    	enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    	alternativas: [
        	{
            	texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            	afirmacao: "Preferiu usar ferramentas manuais e expressar a criatividade de forma tradicional."
        	},
        	{
            	texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
            	afirmacao: "Explorou geradores de imagem para acelerar e expandir suas ideias visuais."
        	}
    	]
	},
	{
    	enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    	alternativas: [
        	{
            	texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
            	afirmacao: "Entendeu a importância da revisão humana e do uso crítico das ferramentas de IA."
        	},
        	{
            	texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            	afirmacao: "Considerou que saber direcionar comandos à IA já é uma forma válida de contribuição."
        	}
    	]
	}
];

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

if (botaoIniciar) {
	botaoIniciar.addEventListener('click', iniciaJogo);
}

function iniciaJogo() {
	atual = 0;
	historiaFinal = "";
	telaInicial.style.display = 'none';
	caixaResultado.classList.remove("mostrar");
	mostraPergunta();
}

function mostraPergunta() {
	if (atual >= perguntas.length) {
    	mostraResultado();
    	return;
	}
	perguntaAtual = perguntas[atual];
    
	const textoPergunta = perguntaAtual.enunciado.replace(/você/g, nome);
	caixaPerguntas.textContent = textoPergunta;
    
	caixaAlternativas.textContent = "";
	mostraAlternativas();
}

function mostraAlternativas() {
	for (const alternativa of perguntaAtual.alternativas) {
    	const botaoAlternativas = document.createElement("button");
    	botaoAlternativas.textContent = alternativa.texto;
    	botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    	caixaAlternativas.appendChild(botaoAlternativas);
	}
}

function respostaSelecionada(opcaoSelecionada) {
	const afirmacoes = opcaoSelecionada.afirmacao;
	historiaFinal += afirmacoes + " ";
	atual++;
	mostraPergunta();
}

function mostraResultado() {
	caixaPerguntas.textContent = `Em 2049, ${nome}...`;
	textoResultado.textContent = historiaFinal;
	caixaAlternativas.textContent = "";
	caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
	atual = 0;
	historiaFinal = "";
	caixaResultado.classList.remove("mostrar");
	telaInicial.style.display = 'block';
	caixaPerguntas.textContent = "";
}

if (botaoJogarNovamente) {
	botaoJogarNovamente.addEventListener("click", jogaNovamente);
}
