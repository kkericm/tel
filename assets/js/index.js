
const AllWords = [
    "viste", "zoada", "urano", "calvo", "gases", "neném", "aliar",
    "preta", "horas", "perro", "suave", "reger", "vírus", "peixe",
    "sinto", "salva", "mecha", "rapto", "sírio", "astro", "exijo",
    "metal", "civil", "surfe", "orgia", "cuíca", "irmão", "graxa",
    "banco", "polpo", "rifle", "moído", "catar", "retrô", "móvel",
    "solda", "salsa", "coisa", "caixa", "gávea", "parda", "costa",
    "macia", "amido", "pitéu", "fúria", "pirão", "trigo", "baixo",
    "ligue", "ergue", "corda", "alfar", "farda", "toque", "final",
    "rímel", "rever", "ligar", "óbice", "banda", "ramal", "bomba",
    "canoa", "noite", "floco", "capim", "vacum", "untar", "calar",

    "foste", "pesos", "salto", "bucha", "domar", "douto", "bosta",
    "moita", "furor", "panco", "dança", "espiã", "ativo", "clone",
    "coesa", "bucal", "temor", "surra", "asilo", "frear", "exame",
    "ganso", "plebe", "louça", "lasso", "mamãe", "clave", "amino",
    "ímpar", "pedir", "horta", "régua", "álbum", "sanha", "beijo",
    "polpo", "bolão", "surra", "parma", "cisco", "horta", "China",
    "geada", "ganso", "lista", "trevo", "lábio", "deter", "barra",
    "letal", "pulga", "porre", "diria", "cobre", "cofre", "testa",
    "guiar", "atarê", "frear", "rodar", "gemer", "humor", "censo",
    "palha", "raios", "feder", "aluno", "chula", "jovem", "gorda",

    "pinça", "casal", "vácuo", "brega", "tomba", "lápis", "bazar",
    "alemã", "ousar", "urgir", "avião", "votar", "vença", "sumir",
    "vulto", "papai", "persa", "rimar", "sonso", "casar", "posto",
    "porco", "dedal", "fadar", "papar", "ativo", "racha", "recém",
    "varal", "ligar", "touro", "cesta", "lítio", "perco", "velha",
    "sobra", "ramal", "dados", "lança", "lança", "perca", "fusca",
    "viena", "cólon", "cegar", "danar", "ritmo", "exato", "temor",
    "bacia", "vidro", "dengo", "vinil", "Havaí", "cujos", "tapar",
    "feita", "longo", "ureia", "telão", "preso", "perda", "mocha",
    "atual", "lagoa", "freio", "gnomo", "fobia", "lítio", "graça",

    "mídia", "sabre", "feudo", "quite", "negar", "bolão", "febre",
    "manto", "hotel", "pedra", "anzol", "bravo", "troço", "unção",
    "pouca", "cesto", "safar", "mercê", "sarro", "órgão", "trela",
    "tiara", "fardo", "parar", "resto", "panda", "farão", "afago",
    "fungo", "fitas", "jeans", "foice", "dique", "herói", "casco",
    "pudim", "guiar", "sogro", "prece", "burgo", "sonda", "zorra",
    "rubro", "usina", "desde", "turca", "vinte", "porto", "dublê",
    "atado", "sofre", "razão", "lince", "ciclo", "tenor", "deusa",
    "leste", "morno", "trevo", "bardo", "quina", "pólis", "dúbio",
    "haras", "tchau", "líder", "sarda", "foste", "cobre", "surdo",

    "sorte", "papel", "quais", "pinto", "barca", "mudos", "doido",
    "norte", "oeste", "joias", "maçãs", "droga", "poder", "mundo",
    "viuvo", "macio", "barba", "forca", "facão", "menor", "menos",
    "outro", "somos", "barco", "balsa", "bunda", "ações", "medos",
    "carro", "caros", "calça", "bolsa", "bocha", "carta", "caçar",
    "galho", "terra", "pilha", "grave", "pinga", "grama", "estar",
    "curso", "torta", "torto", "causa", "coisa", "casal", "casas",
    "porta", "março", "junho", "julho", "carne", "trair", "diabo",
    "irmão", "cargo", "estas", "cinco", "treze", "fomos", "fomes",
    "feses", "trama", "circo", "olhar", "virar", "fazer", "morte",
    "morto", "morre", "viver", "vivos", "larga", "solta", "terço",
    "termo", "feroz", "vilão", "parto", "porte", "peito", "friza",

    "gêmeo", "prima", "safra", "agito", "digna", "pombo", "ordem",
    "penta", "poder", "olhos", "vazio", "parda", "visão", "combo",
    "sexta", "fruta", "sarda", "nacho", "morna", "cerca", "murar",
    "aroma", "pedra", "ávida", "boato", "agito", "beata", "senta",
    "farda", "fosso", "jogar", "rodar", "grana", "teste", "broto",
    "bumbo", "nicho", "vadia", "áureo", "suíço", "vício", "busto",
    "lacre", "fibra", "bulbo", "calda", "puxar", "molar", "manso",
    "viajo", "óxido", "supõe", "alvar", "cópia", "torça", "quedo",
    "dúzia", "viúvo", "fosso", "maçom", "tumor", "pluma", "relax",
    "abrir", "carga", "altar", "espiã", "pausa", "banal", "vital",

    "curva", "papel", "lenda", "magia", "morna", "babar", "trigo", "manga",
    "gorro", "átomo", "criar", "veraz", "vence", "viste", "parco", "caqui",
    "bulha", "ritmo", "censo", "boldo", "parda", "surto", "bioma", "cacau",
    "bloco", "outro", "cisne", "vírus", "recém", "vadia", "viúvo", "melão",
    "exato", "clave", "perca", "gosto", "draga", "narco", "peito", "limão",
    "mocha", "lábio", "coala", "peixe", "foder", "derme", "zoada", "amora",
    "balde", "gorro", "magma", "gávea", "sofri", "burro", "dólar", "mamão",
    "capim", "treno", "sogra", "queda", "tribo", "etapa", "bruxa", "atriz",
    "iscar", "veria", "colar", "disco", "couve", "leque", "cerol",
    "jurar", "úbere", "pesar", "pequi", "fruir", "amena", "perco",
]

String.prototype.extend = function(char) {
    return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
Array.prototype.incAny = function(letter) {
    return this.some(item => item.extend(letter));
}

var RealWord = AllWords[randInt(0, AllWords.length)].toUpperCase();

document.addEventListener("keyup", (ev) => {
    let wait = document.querySelector(".current .wait");
    let next = wait.nextElementSibling;
    let prev = wait.previousElementSibling;

    // console.log(ev.key)

    if (ev.key === "ArrowRight") {
        if (next !== null) {
            wait.classList.remove("wait");
            next.classList.add("wait");
        }
    } else if (ev.key === "ArrowLeft") {
        if (prev !== null) {
            wait.classList.remove("wait");
            prev.classList.add("wait");
        }
    } else if (ev.key === "Enter") {
        testWord()
    } else if (ev.key === "Backspace") {
        if (prev !== null) {
            wait.textContent = ""
            wait.classList.remove("wait");
            prev.classList.add("wait");
        } else {
            wait.textContent = ""
        }
    } else if (ev.key.length === 1) {
        if (next !== null) {
            wait.textContent = ev.key.toUpperCase()
            wait.classList.replace("wait", "fill")
            next.classList.add("wait")
        } else {
            wait.textContent = ev.key.toUpperCase()
        }
    }
});

document.querySelectorAll(".keyboard .key").forEach(d => {
    d.addEventListener("mouseup", (ev) => {
        let /**@type {Element}*/ el = ev.currentTarget
        let wait = document.querySelector(".current .wait");
        let next = wait.nextElementSibling;
        let prev = wait.previousElementSibling;

        // console.log(el.textContent)

        if (el.classList.contains("del")) {
            if (prev !== null) {
                wait.textContent = ""
                wait.classList.remove("wait");
                prev.classList.add("wait");
            } else {
                wait.textContent = ""
            }
        } else if (el.classList.contains("enter")) {
            testWord()
        } else {
            if (next !== null) {
                wait.textContent = el.textContent
                wait.classList.replace("wait", "fill")
                next.classList.add("wait")
            } else {
                wait.textContent = el.textContent
            }
        }
    })
})

function addEventClick() {
    document.querySelectorAll(".current .letter").forEach(d => {
        d.addEventListener("mouseup", (ev) => {
            let /**@type {Element}*/ el = ev.currentTarget
            document.querySelector(".current .wait").classList.remove("wait")
            el.classList.add("wait")
        })
    })
}
addEventClick()

function testWord() {
    let lets = document.querySelectorAll(".current .letter")
    let s = ""
    let index = 0;
    lets.forEach(d => s+=d.textContent);
    if (AllWords.incAny(s.toLowerCase())) {
        var interval = setInterval(() => {
            if (index === 5) {
                clearInterval(interval)
                setTimeout(() => {
                    if (document.querySelectorAll(".current .in-local").length === 5) {
                        win()
                    } else {
                        document.querySelector(".current").classList.replace("current", "reveal");
                        let future = document.querySelector(".future")
                        if (future !== null) {
                            future.classList.replace("future", "current");
                            document.querySelectorAll(".current .lock").forEach(d => d.classList.remove("lock"))
                            addEventClick()
                        } else {
                            lost()
                        }
                    }
                }, 200)
            } else {
                let d = lets.item(index);
                let letter = d === null ? "" : d.textContent;
                letter = letter === "Ç" ? "C" : letter
                if (RealWord[index].extend(letter)) {
                    document.querySelector(`.key.${letter}`).classList.add("correct")
                    revealLetter(d, "lock in-local", RealWord[index]);
                } else if (RealWord.includes(letter)) {
                    document.querySelector(`.key.${letter}`).classList.add("have")
                    revealLetter(d, "lock in-word");
                } else {
                    document.querySelector(`.key.${letter}`).classList.add("no-have")
                    revealLetter(d, "lock");
                }
                index++;
            }
        }, 200)
    } else {
        lets.forEach(d => {
            d.style.animation = "Shok 400ms forwards";
            setTimeout(() => {
                setTimeout(() => {
                    d.style.animation = "";
                }, 150);
            }, 150);
        })
    }
}

function win() {
    setTimeout(() => {
        document.querySelectorAll(".current .letter").forEach((d, e) => {
            d.classList.replace("lock", "pulsing")
            d.style.animationDelay = `${e/7}s`;
        });
        document.querySelector(".screen").style.boxShadow = "inset 0 0 100px 0 rgba(0, 0, 0, 0.6)"
        document.querySelector(".tel img").classList.add("pulsing-tel")
        document.querySelectorAll(".tel .title span").forEach((d, e) => {
            d.classList.add("pulsing-tel")
        });
    
        setTimeout(() => {
            let message = document.querySelector(".message");
            message.classList.remove("transparent");
            message.innerHTML = `
                <span>You Win</span>
                <button onclick="newGame()">Next</button>`
            message.classList.remove("hidden");
        }, 200)
    }, 200);
}
function lost() {
    let message = document.querySelector(".message")
    message.innerHTML = `
        <span>R: <span class="res">${RealWord}</span></span>
        <button onclick="newGame()">Try again</button>`
    message.classList.remove("hidden")
    message.classList.remove("transparent")
    document.querySelector(".message button").style.width = "80px"
    document.querySelector(".message .res").style.fontFamily = "consolas"
    document.querySelector(".message .res").style.fontSize = "30px"
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max + min)) - min;
}

function revealLetter(el, newe = null, change = null) {
    el.style.animation = "RevealLetter 400ms forwards";
    setTimeout(() => {
        el.className = "letter " + newe;
        if (change!==null) el.textContent=change
        setTimeout(() => {
            el.style.animation = "";
        }, 200);
    }, 200);
}

function newGame() {
    RealWord = AllWords[randInt(0, AllWords.length)].toUpperCase();
    
    document.querySelector(".tel img").classList.remove("pulsing-tel");
    document.querySelectorAll(".tel .title span").forEach(d => {
        d.classList.remove("pulsing-tel");
    });
    document.querySelector(".screen").style.boxShadow = "inset 0 0 40px 0 rgba(0, 0, 0, 0.5)"
    document.querySelector(".message").classList.add("transparent");
    setTimeout(() => {
        document.querySelector(".message").classList.add("hidden");
    }, 500)
    document.querySelectorAll(".try-word").forEach((d, e) => {
        // console.log(d)
        if (e === 0) {
            d.className = "try-word current";
            d.querySelectorAll(".letter").forEach((k, e1) => {
                k.className = "letter" + (e1 == 0 ? " wait" : "");
                k.textContent = ""
                k.style.animation = ""
            })
        } else {
            d.className = "try-word future";
            d.querySelectorAll(".letter").forEach((k, e2) => {
                k.className = "letter lock" + (e2 == 0 ? " wait" : "");
                k.textContent = ""
                k.style.animation = ""
            });
        }
    })
    
    addEventClick()
    document.querySelectorAll(".keyboard .key").forEach(d => {
        d.classList.remove("no-have")
        d.classList.remove("correct")
        d.classList.remove("have")
    })
}