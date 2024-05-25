
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
]

String.prototype.extend = function(char) {
    return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
Array.prototype.incAny = function(letter) {
    return this.some(item => item.extend(letter));
}

// const RealWord = "LÁPIS"
var RealWord = AllWords[randInt(0, AllWords.length)].toUpperCase();

document.addEventListener("keyup", (ev) => {
    let wait = document.querySelector(".current .wait");
    let next = wait.nextElementSibling;
    let prev = wait.previousElementSibling;

    console.log(ev.key)

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
            let d = lets.item(index);
            let letter = d.textContent;
            if (RealWord[index].extend(letter)) {
                revealLetter(d, "lock in-local", RealWord[index]);
            } else if (RealWord.includes(letter)) {
                revealLetter(d, "lock in-word");
            } else {
                revealLetter(d, "lock");
            }
            index++;
        }, 200)
        setTimeout(() => {
            clearInterval(interval)
            if (document.querySelectorAll(".current .in-local").length === 5) {
                win()
            } else {
                document.querySelector(".current").classList.replace("current", "reveal");
                let future = document.querySelector(".future")
                if (future !== null) {
                    console.log(1)
                    future.classList.replace("future", "current");
                    document.querySelectorAll(".current .lock").forEach(d => d.classList.remove("lock"))
                    addEventClick()
                } else {
                    console.log(2)
                    lost()
                }
            }
            index = 0;
        }, 1250)
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
    document.querySelectorAll(".current .in-local").forEach(d=>d.classList.remove("lock"));

    let message = document.querySelector(".message")
    message.innerHTML = `
        <span>You Win</span>
        <button onclick="newGame()">Next</button>`
    message.classList.remove("hidden")
}
function lost() {
    let message = document.querySelector(".message")
    message.innerHTML = `
        <span>R: <span class="res">${RealWord}</span></span>
        <button onclick="newGame()">Try again</button>`
    message.classList.remove("hidden")
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
    document.querySelector(".message").classList.add("hidden");
    document.querySelector(".words").outerHTML = `<div class="words">
        <div class="try-word current">
            <div class="letter wait"></div>
            <div class="letter"></div>
            <div class="letter"></div>
            <div class="letter"></div>
            <div class="letter"></div>
        </div>
        <div class="try-word future">
            <div class="letter lock wait"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
        </div>
        <div class="try-word future">
            <div class="letter lock wait"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
        </div>
        <div class="try-word future">
            <div class="letter lock wait"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
        </div>
        <div class="try-word future">
            <div class="letter lock wait"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
            <div class="letter lock"></div>
        </div>
    </div>`;
}