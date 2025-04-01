function alterarTextoAleatorioPrimeiroP() {
    // Seleciona a div com a classe 'main-horoscope'
    const div = document.querySelector(".main-horoscope");

   
    // Seleciona o primeiro <p> dentro dessa div
    const paragrafo = div.querySelector("p");

   

    // Lista de 10 textos aleatórios
    const textosAleatorios = [
        "The stars are not in your favor today—expect unexpected misfortunes at every turn",
        "Beware of trusting too easily today; betrayal lurks closer than you think",
        "Your finances are aligned… for disaster. Avoid major purchases or investments.",
        "A minor inconvenience will snowball into a major headache—brace yourself",
        "An important plan will go terribly wrong today, and there's little you can do about it.",
        "Someone will test your patience today, and you’ll struggle to keep your composure.",
        "You will lose something valuable—whether it's an object or a friendship, it’s gone.",
        "Avoid making promises today; circumstances will make them impossible to keep.",
        "Your luck is running thin—double-check everything, or suffer the consequences.",
        "An opportunity will slip through your fingers today, and it won’t come back."
    ];

    // Escolhe um texto aleatório da lista
    const novoTexto = textosAleatorios[Math.floor(Math.random() * textosAleatorios.length)];

    // Altera o conteúdo do <p> com o texto aleatório
    paragrafo.innerText = novoTexto;

}

// Chama a função
alterarTextoAleatorioPrimeiroP();
