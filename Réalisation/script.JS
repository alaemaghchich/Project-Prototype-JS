const items = [
    { q: "the best football player", a: "lawla dorof" },
    { q: "the best singer", a: "cheb laarbi" },
    { q: "the best music in history", a: "finito" },
    { q: "mrOLAMPIA classic physique 2025 winner", a: "cbum" },
    { q: "ballon d'or 2025", a: "dembele" },
    { q: "world strongest man 2017", a: "eddie hall" },
    { q: "best game", a: "freefire" },
    { q: "who is alae maghchich", a: "the king" }
];

let correct = 0;
let wrong = 0;
for (let i = 0; i < items.length; i++) {
    let free = prompt(items[i].q);
     if (free == items[i].a) {
        correct++;
        alert("Correct!");
    } else {
        wrong++;
        alert("Wrong! Correct answer: " + items[i].a);
    }
}
console.log("Game Over!\nCorrect: " + correct + " | Wrong: " + wrong);


