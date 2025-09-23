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
  
  let correct=0, wrong=0;
  alert;
  
  while (true) {
    let item = items[Math.floor(Math.random() * items.length)];
    let ans = prompt( item.q);
  
    if (!ans || ans.toUpperCase() === "EXIT") break;
  
    if (ans.trim().toUpperCase() === item.a.toUpperCase()) {
      correct++; alert(" Correct!");
    } else {
      wrong++; alert(" Wrong! Correct: " + item.a);
    }
  }
  console.log(" Game Over!\ntrue " + correct + " | false " + wrong);
  