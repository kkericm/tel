
String.prototype.extend = function(char) {
    return this.normalize("NFD").replace(/[\u0300-\u036f]/g, "") === char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
Array.prototype.incAny = function(letter) {
    return this.some(item => item.extend(letter));
}

var RealWord = AllWords[randInt(0, AllWords.length)].toUpperCase();
var won = "0";

document.addEventListener("keyup", (ev) => {
    let wait = document.querySelector(".current .wait");
    let next = wait.nextElementSibling;
    let prev = wait.previousElementSibling;

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
                    saveState()
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
    won = "1"
    setTimeout(() => {
        document.querySelectorAll(".current .letter").forEach((d, e) => {
            d.classList.replace("lock", "pulsing")
            d.style.animationDelay = `${e/7}s`;
        });
        document.querySelector("body").style.boxShadow = "inset 0 0 100px 0 rgba(0, 0, 0, 0.6)"
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

function newGame(index = 0) {
    RealWord = AllWords[randInt(0, AllWords.length)].toUpperCase();
    
    document.querySelector(".tel img").classList.remove("pulsing-tel");
    document.querySelectorAll(".tel .title span").forEach(d => {
        d.classList.remove("pulsing-tel");
    });
    document.querySelector("body").style.boxShadow = "inset 0 0 40px 0 rgba(0, 0, 0, 0.5)"
    if (index !== -1) {
        document.querySelector(".message").classList.add("transparent");
        setTimeout(() => {
            document.querySelector(".message").classList.add("hidden");
        }, 500)
        document.querySelectorAll(".try-word").forEach((d, e) => {
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
        });
    }
    
    addEventClick()
    document.querySelectorAll(".keyboard .key").forEach(d => {
        d.classList.remove("no-have")
        d.classList.remove("correct")
        d.classList.remove("have")
    });
    won = "0"
    saveState()
}


function saveState() {
    var words = ""
    var keys = ""
    document.querySelectorAll(".try-word:not(.future)").forEach(d => {
        d.querySelectorAll(".letter").forEach(el => {
            if(el.classList.contains("in-local")){ words += "2" }
            else if(el.classList.contains("in-word")){ words += "1" }
            else{ words += "0" }
            words += el.textContent || "&"
        })
        words += "-"
    })
    document.querySelectorAll(".keyboard .key").forEach(d => {
        if(d.classList.contains("correct")){ keys += "3" }
        else if(d.classList.contains("have")){ keys += "2" }
        else if(d.classList.contains("no-have")){ keys += "0" }
        else{ keys += "1" }
    })
    // return [words, keys, won + RealWord]
    saveCookie("words", words)
    saveCookie("keyboard", keys)
    saveCookie("word", won + RealWord)
}
function saveCookie(key, content, espireIn = 1, path = "/") {
    var expDate = new Date();
    expDate.setMonth(expDate.getHours() + espireIn); // expira em 1 hora
    document.cookie = `${key}=${content}; expires=${expDate.toUTCString()}; path=${path}`;
}
function loadState(/**@type {string}*/ state) {
    newGame(-1)
    RealWord = state[2].slice(1);
    var _win = state[2].at(0) === "1";
    var words = state[0]
        .split("-")
        .slice(0, -1)
        .map((d) => {
            var s = [];
                for (var i = 0; i < d.length; i += 2) s.push(d.substring(i, i + 2));
                return s;
            })
    var keys = state[1]

    var dwords = document.querySelectorAll(".try-word");
    words.forEach((word, i) => {
        if (i === words.length - 1 && !_win) {
            dwords.item(0).classList.replace("current", "reveal");
            dwords.item(i).classList.replace("future", "current");
            dwords.item(0).querySelectorAll(".letter").forEach((letter, j) => {
                letter.classList.add("lock")
            });
            dwords.item(i).querySelectorAll(".letter").forEach((letter, j) => {
                letter.classList.remove("lock")
            });
        } else {
            dwords.item(i).classList.replace("future", "reveal")
            dwords.item(i).querySelectorAll(".letter").forEach((letter, j) => {
                if (word[j].at(0) === "2") letter.classList.add("in-local")
                else if (word[j].at(0) === "1") letter.classList.add("in-word")
                letter.textContent = word[j].at(1);
            });
        }
    });
    document.querySelectorAll(".keyboard .key").forEach((d, e) => {
        if(keys.at(e) === "3") d.classList.add("correct")
        else if(keys.at(e) === "2") d.classList.add("have")
        else if(keys.at(e) === "0") d.classList.add("no-have")
    });
    if (_win) {
        let cs = dwords.item(words.length - 1);
        cs.classList.replace("reveal", "current");
        cs.querySelectorAll(".letter").item(0).classList.remove("wait");
        win();
    }
}
var entrys = Object.fromEntries(document.cookie.split("; ").map(d => d.split("=")))
loadState([entrys.words, entrys.keyboard, entrys.word])