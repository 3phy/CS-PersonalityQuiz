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
    desc: "You conjure answers out of thin air—aka, copy-paste. Who needs understanding when the spell works?",
    img: "assets/img/stack.png"
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
const container = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const progress = document.getElementById("progress");

let currentQuestion = 0;
const userAnswers = [];

function renderQuestion(index) {
  const q = questions[index];
  container.innerHTML = '';
  progress.innerText = `Question ${index + 1} of ${questions.length}`;

  const qDiv = document.createElement("div");
  qDiv.className = "question";
  qDiv.style.display = "flex";
  qDiv.style.flexDirection = "column";
  qDiv.style.alignItems = "center";
  qDiv.style.textAlign = "center";
  qDiv.innerHTML = `<h3 style="margin-bottom: 24px;">${index + 1}. ${q.q}</h3>`;

  q.a.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerText = text;
    btn.setAttribute("data-type", q.type[i]);
    btn.type = "button";

    btn.onclick = () => {
      userAnswers[index] = q.type[i];

      const allOptions = qDiv.querySelectorAll("button");
      allOptions.forEach(b => {
        b.style.background = "#3a3a5a";
        b.style.color = "#fff";
      });

      btn.style.background = "#00ffcc";
      btn.style.color = "#000";

      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          currentQuestion++;
          renderQuestion(currentQuestion);
        } else {
          showResult();
        }
      }, 300); // 300ms delay for user to see their choice
    };

    qDiv.appendChild(btn);
  });

  container.appendChild(qDiv);

  // If user already selected answer, show it
  if (userAnswers[index]) {
    const selectedBtn = Array.from(container.querySelectorAll(".option"))
      .find(btn => btn.getAttribute("data-type") === userAnswers[index]);

    if (selectedBtn) {
      selectedBtn.style.background = "#00ffcc";
      selectedBtn.style.color = "#000";
    }
  }

  nextBtn.innerText = (index === questions.length - 1) ? "Get My Result" : "Next";
  backBtn.disabled = (index === 0);
}

nextBtn.addEventListener("click", () => {
  if (!userAnswers[currentQuestion]) {
    container.querySelector('.question').style.border = "2px solid #ff4444";
    alert("⚠️ Please select an answer before proceeding.");
    return;
  }

  container.querySelector('.question').style.border = "none"; // clear red border
  currentQuestion++;
  if (currentQuestion < questions.length) {
    renderQuestion(currentQuestion);
  } else {
    showResult();
  }
});



backBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(currentQuestion);
  }
});

function showResult() {
  const counts = {};
  userAnswers.forEach(type => {
    counts[type] = (counts[type] || 0) + 1;

    
  });

  const topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const result = personalities[topType];

document.getElementById("result").innerHTML = `
  <div id="result-wrapper" style="display: flex; flex-direction: column; align-items: center; text-align: center; gap: 20px; padding: 20px; background: #2a2a40; border-radius: 12px; max-width: 600px; margin: auto;">
    
    <img src="${result.img || ''}" alt="${result.name}" style="width:100px; border-radius: 8px;">
    
    <div>
      <h2 style="color: #00ffcc;">You are: ${result.name}</h2>
      <p>${result.desc}</p>
    </div>

    <div id="result-branding" style="margin-top: 30px; display: flex; flex-direction: column; align-items: center;">
      <img src="assets/img/logo.png" alt="Logo" style="width: 60px; height: auto;">
      <span style="margin-top: 8px; font-size: 12px; color: #aaa;">Created with COMSA</span>
    </div>
  </div>
`;



  document.getElementById("result-modal").style.display = "flex";
}

// Modal behavior
const resultModal = document.getElementById('result-modal');
const closeModalBtn = document.getElementById('close-modal');
closeModalBtn.onclick = () => resultModal.style.display = 'none';

const restartBtn = document.getElementById('restart-btn');

restartBtn.onclick = () => {
  resultModal.style.display = 'none';
  currentQuestion = 0;
  userAnswers.length = 0;
  renderQuestion(currentQuestion);
  window.scrollTo(0, 0);
};
const downloadBtn = document.getElementById('download-btn');

downloadBtn.onclick = () => {
  const target = document.getElementById("result-wrapper");

  html2canvas(target, {
    backgroundColor: null // keeps background transparent if needed
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "programmer-personality.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
};


// Start quiz
renderQuestion(currentQuestion);

