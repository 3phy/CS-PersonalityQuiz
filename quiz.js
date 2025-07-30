const questions = [
  {
    q: "What time do you usually code best?",
    a: ["Morning with coffee", "Late at night", "During panic mode", "All day every day"],
    type: ["coffee", "midnight", "error", "wizard"]
  },
  {
    q: "Your first reaction to a bug is:",
    a: ["Google it", "Blame semicolons", "Meditate", "Rewrite everything"],
    type: ["stack", "vandal", "philosopher", "refactor"]
  },
  {
    q: "Your IDE of choice?",
    a: ["VS Code", "Vim", "Notepad++", "Wait, what's an IDE?"],
    type: ["wizard", "hacker", "meme", "gambler"]
  },
  {
    q: "How do you name your variables?",
    a: ["Meaningful", "a, b, z", "temp123_final", "Destructive names"],
    type: ["philosopher", "vandal", "gambler", "error"]
  },
  {
    q: "What do you do when your code finally works?",
    a: ["Celebrate", "Panic", "Push to prod", "Cry"],
    type: ["meme", "wizard", "gambler", "stack"]
  },
  {
    q: "Pick your debugging style:",
    a: ["console.log everything", "Rubber duck", "Staring", "Comment/uncomment"],
    type: ["wizard", "wizard", "error", "refactor"]
  },
  {
    q: "What music do you code to?",
    a: ["Lo-fi", "Metal", "Classical", "Silence"],
    type: ["philosopher", "hacker", "wizard", "stack"]
  },
  {
    q: "Your dream job?",
    a: ["Google dev", "Game dev", "Hacker", "Meme dev"],
    type: ["wizard", "refactor", "hacker", "meme"]
  },
  {
    q: "Most used command?",
    a: ["git commit -m 'final'", "Ctrl + Z", "StackOverflow search", "npm install"],
    type: ["gambler", "error", "stack", "coffee"]
  },
  {
    q: "How do you handle group projects?",
    a: ["Do everything", "Disappears", "Make the slides", "Merge chaos"],
    type: ["wizard", "hacker", "meme", "gambler"]
  },
  {
    q: "Favorite error?",
    a: ["Segfault", "NullPointer", "Expected ;", "404 Motivation"],
    type: ["error", "stack", "vandal", "philosopher"]
  },
  {
    q: "Coding flex?",
    a: ["Works first try", "Readable spaghetti", "Fix bugs randomly", "Push to git"],
    type: ["wizard", "refactor", "stack", "gambler"]
  },
  {
    q: "Relationship with StackOverflow?",
    a: ["We're dating", "I owe them", "Homepage", "I copy my own answers"],
    type: ["stack", "stack", "stack", "meme"]
  },
  {
    q: "Break time activity?",
    a: ["Doomscroll", "Coffee", "Talk to AI", "Refactor life"],
    type: ["meme", "coffee", "wizard", "refactor"]
  },
  {
    q: "Favorite language?",
    a: ["Python", "JavaScript", "C++", "HTML"],
    type: ["wizard", "meme", "hacker", "philosopher"]
  }
];

const personalities = {
  stack: {
    name: "The StackOverflow Summoner",
    desc: "You conjure answers out of thin air—aka, copy-paste. Who needs understanding when the spell works?"
  },
  wizard: {
    name: "The Debugging Wizard",
    desc: "You're the Gandalf of bugs. Console logs and intuition are your magic wands."
  },
  coffee: {
    name: "The Coffee Compiler",
    desc: "You function on espresso and hope. Without caffeine, your code (and soul) won't run."
  },
  midnight: {
    name: "The Midnight Coder",
    desc: "You rise with the moon, deploy at dawn, and fear sunlight like Dracula in dark mode."
  },
  gambler: {
    name: "The Git Gambler",
    desc: "Every push is a bet. Every merge is chaos. You live on the edge of version control."
  },
  vandal: {
    name: "The Variable Vandal",
    desc: "Your code is unreadable, unpredictable, and unforgettable. May God have mercy on your reviewers."
  },
  error: {
    name: "The Error Whisperer",
    desc: "You don’t fix bugs—you speak to them. You find errors through raw instinct (and lots of crying)."
  },
  refactor: {
    name: "The Infinite Refactorer",
    desc: "You never finish anything. You just keep polishing until your code shines... and crashes anyway."
  },
  meme: {
    name: "The Meme Dev",
    desc: "You code for laughs, vibes, and likes. Your GitHub is just memes wrapped in functions."
  },
  hacker: {
    name: "The Hacker Wannabe",
    desc: "You run Kali, wear a hoodie, and tell people you're in cybersecurity. You know at least one WiFi joke."
  },
  philosopher: {
    name: "The Frontend Philosopher",
    desc: "You make things look good—until CSS breaks your spirit. Every bug is a question about existence."
  }
};

const form = document.getElementById("quiz-form");

questions.forEach((item, index) => {
  const qDiv = document.createElement("div");
  qDiv.className = "question";
  qDiv.innerHTML = `<h3>${index + 1}. ${item.q}</h3>`;

  item.a.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = option;
    btn.setAttribute("data-type", item.type[i]);
    btn.setAttribute("type", "button");
    btn.onclick = function () {
      const siblings = qDiv.querySelectorAll("button");
      siblings.forEach(b => b.style.background = "#3a3a5a");
      this.style.background = "#00ffcc";
      this.style.color = "#000";
      this.classList.add("selected");
      this.classList.add("answered");
      qDiv.setAttribute("data-answer", this.getAttribute("data-type"));
    };
    qDiv.appendChild(btn);
  });

  form.appendChild(qDiv);
});

document.getElementById("submit-btn").onclick = () => {
  const answers = Array.from(document.querySelectorAll(".question"))
    .map(q => q.getAttribute("data-answer"))
    .filter(Boolean);

  if (answers.length < questions.length) {
    alert("Please answer all questions!");
    return;
  }

  const counts = {};
  answers.forEach(type => {
    counts[type] = (counts[type] || 0) + 1;
  });

  const topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const result = personalities[topType];

  document.getElementById("result").innerHTML = `
    <h2>You are: ${result.name}</h2>
    <p>${result.desc}</p>
  `;
  document.getElementById("result").style.display = "block";
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
