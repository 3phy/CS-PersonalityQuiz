const questions = [
    // Social Energy (E vs I) - 8 questions
    {
        q: "I prefer working on coding projects in group settings rather than alone.",
        dimension: "EI",
        type: "E"
    },
    {
        q: "I feel energized after participating in hackathons and coding competitions.",
        dimension: "EI", 
        type: "E"
    },
    {
        q: "I enjoy explaining my code and technical solutions to others.",
        dimension: "EI",
        type: "E"
    },
    {
        q: "I prefer to discuss problems out loud before coding solutions.",
        dimension: "EI",
        type: "E"
    },
    {
        q: "I work more effectively when wearing headphones in a quiet space.",
        dimension: "EI",
        type: "I"
    },
    {
        q: "I prefer to think through problems internally before sharing ideas.",
        dimension: "EI",
        type: "I"
    },
    {
        q: "I find large team meetings draining and prefer smaller discussions.",
        dimension: "EI",
        type: "I"
    },
    {
        q: "I prefer written communication over verbal discussions for technical topics.",
        dimension: "EI",
        type: "I"
    },

    // Work Style (P vs R) - 8 questions
    {
        q: "I prefer to quickly build a working prototype rather than plan extensively first.",
        dimension: "PR",
        type: "P"
    },
    {
        q: "I'm comfortable with 'messy' code as long as it works initially.",
        dimension: "PR",
        type: "P"
    },
    {
        q: "I like to test ideas rapidly through trial and error.",
        dimension: "PR",
        type: "P"
    },
    {
        q: "I enjoy the excitement of seeing immediate results from my code.",
        dimension: "PR",
        type: "P"
    },
    {
        q: "I spend significant time refining and optimizing my code after it works.",
        dimension: "PR",
        type: "R"
    },
    {
        q: "I prefer to write clean, well-documented code from the beginning.",
        dimension: "PR",
        type: "R"
    },
    {
        q: "I thoroughly review and test my code before considering it complete.",
        dimension: "PR",
        type: "R"
    },
    {
        q: "I focus on code quality and maintainability over quick delivery.",
        dimension: "PR",
        type: "R"
    },

    // Problem Approach (T vs C) - 7 questions
    {
        q: "I'm drawn to algorithmic challenges and data structure problems.",
        dimension: "TC",
        type: "T"
    },
    {
        q: "I prefer backend development and system architecture over frontend work.",
        dimension: "TC",
        type: "T"
    },
    {
        q: "I find satisfaction in optimizing code performance and efficiency.",
        dimension: "TC",
        type: "T"
    },
    {
        q: "I'm more interested in how things work than how they look.",
        dimension: "TC",
        type: "T"
    },
    {
        q: "I enjoy working on user interfaces and visual design elements.",
        dimension: "TC",
        type: "C"
    },
    {
        q: "I'm passionate about creating engaging user experiences.",
        dimension: "TC",
        type: "C"
    },
    {
        q: "I like adding animations and interactive elements to my projects.",
        dimension: "TC",
        type: "C"
    },

    // Workflow Preference (S vs D) - 7 questions
    {
        q: "I work well under last-minute pressure and tight deadlines.",
        dimension: "SD",
        type: "S"
    },
    {
        q: "I'm flexible with changing requirements and pivot easily.",
        dimension: "SD",
        type: "S"
    },
    {
        q: "I prefer to keep my options open rather than commit to detailed plans.",
        dimension: "SD",
        type: "S"
    },
    {
        q: "I thrive in unpredictable, fast-paced development environments.",
        dimension: "SD",
        type: "S"
    },
    {
        q: "I prefer to plan my coding tasks and stick to a structured approach.",
        dimension: "SD",
        type: "D"
    },
    {
        q: "I use project management tools and maintain organized workflows.",
        dimension: "SD",
        type: "D"
    },
    {
        q: "I prefer to complete tasks well before deadlines to avoid stress.",
        dimension: "SD",
        type: "D"
    }
];

const personalities = {
    EPTS: {
        name: "The Lab Leader",
        code: "EPTS",
        desc: "Extroverted • Prototyper • Technical • Spontaneous",
        fullDesc: "Life of the lab. You start coding in the middle of discussions and somehow always finish first. You thrive on collaboration and rapid technical iteration.",
        traits: ["Collaborative coder", "Quick problem solver", "Team energizer", "Pressure performer"],
        color: "#ff6b35"
    },
    EPTD: {
        name: "The Sprint Master", 
        code: "EPTD",
        desc: "Extroverted • Prototyper • Technical • Disciplined",
        fullDesc: "Always leading sprints, loves project trackers but still codes fast. You combine rapid prototyping with organized project management.",
        traits: ["Project leader", "Fast developer", "Process optimizer", "Team coordinator"],
        color: "#4ecdc4"
    },
    EPCS: {
        name: "The Demo Wizard",
        code: "EPCS", 
        desc: "Extroverted • Prototyper • Creative • Spontaneous",
        fullDesc: "Makes flashy demos that wow the audience, even if half is placeholder code. You excel at creating impressive prototypes quickly.",
        traits: ["Demo master", "Creative prototyper", "Presentation pro", "Rapid designer"],
        color: "#45b7d1"
    },
    EPCD: {
        name: "The Design Director",
        code: "EPCD",
        desc: "Extroverted • Prototyper • Creative • Disciplined", 
        fullDesc: "The 'design lead' who also organizes deadlines and Figma boards. You balance creative vision with structured project management.",
        traits: ["Design leader", "Creative organizer", "Vision setter", "Team motivator"],
        color: "#96ceb4"
    },
    ERTS: {
        name: "The Coding Comedian",
        code: "ERTS",
        desc: "Extroverted • Refiner • Technical • Spontaneous",
        fullDesc: "Fixes your code mid-presentation but also cracks jokes while doing it. You bring humor and technical expertise to any team.",
        traits: ["Code optimizer", "Team comedian", "Live debugger", "Morale booster"],
        color: "#feca57"
    },
    ERTD: {
        name: "The Code Guardian", 
        code: "ERTD",
        desc: "Extroverted • Refiner • Technical • Disciplined",
        fullDesc: "Project manager vibes, merges all pull requests after thorough review. You maintain code quality while leading technical discussions.",
        traits: ["Quality enforcer", "Code reviewer", "Technical leader", "Standard setter"],
        color: "#ff9ff3"
    },
    ERCS: {
        name: "The Overnight Redesigner",
        code: "ERCS",
        desc: "Extroverted • Refiner • Creative • Spontaneous", 
        fullDesc: "Can redesign the UI in one night after feedback, still smiling. You adapt quickly to creative challenges with endless enthusiasm.",
        traits: ["Rapid redesigner", "Feedback implementer", "Creative adapter", "Positive energy"],
        color: "#54a0ff"
    },
    ERCD: {
        name: "The Pixel Perfectionist",
        code: "ERCD", 
        desc: "Extroverted • Refiner • Creative • Disciplined",
        fullDesc: "Polished UI, pixel-perfect, and follows every UX best practice. You create beautiful, refined interfaces while maintaining team collaboration.",
        traits: ["UX expert", "Detail perfectionist", "Design standards keeper", "Quality advocate"],
        color: "#5f27cd"
    },
    IPTS: {
        name: "The Solo Hacker",
        code: "IPTS",
        desc: "Introverted • Prototyper • Technical • Spontaneous",
        fullDesc: "Solo hacker who can finish a minimum viable product overnight. You work best independently and deliver impressive results quickly.",
        traits: ["Independent coder", "MVP creator", "Night owl developer", "Problem solver"],
        color: "#00d2d3"
    },
    IPTD: {
        name: "The Silent Deliverer",
        code: "IPTD", 
        desc: "Introverted • Prototyper • Technical • Disciplined",
        fullDesc: "Quiet but deadly — delivers a perfectly working backend on time. You combine independent work style with reliable execution.",
        traits: ["Reliable deliverer", "Backend specialist", "Quiet achiever", "Deadline keeper"],
        color: "#ff9f43"
    },
    IPCS: {
        name: "The Creative Experimenter",
        code: "IPCS",
        desc: "Introverted • Prototyper • Creative • Spontaneous", 
        fullDesc: "Makes mini-games or experiments just for fun, often late-night coder. You explore creative ideas independently with passion.",
        traits: ["Creative explorer", "Game developer", "Experimental coder", "Passion projecter"],
        color: "#ee5a6f"
    },
    IPCD: {
        name: "The Peaceful Designer",
        code: "IPCD",
        desc: "Introverted • Prototyper • Creative • Disciplined",
        fullDesc: "Crafts beautiful, consistent designs alone in peaceful silence. You create polished creative work through focused, independent effort.",
        traits: ["Consistent designer", "Peaceful creator", "Detail focused", "Independent artist"],
        color: "#0abde3"
    },
    IRTS: {
        name: "The Debug Ninja",
        code: "IRTS", 
        desc: "Introverted • Refiner • Technical • Spontaneous",
        fullDesc: "Appears last minute to debug everything and disappears again. You're the mysterious problem-solver who saves the day.",
        traits: ["Debug master", "Problem fixer", "Mysterious helper", "Last-minute hero"],
        color: "#1dd1a1"
    },
    IRTD: {
        name: "The Zero-Bug Coder",
        code: "IRTD",
        desc: "Introverted • Refiner • Technical • Disciplined", 
        fullDesc: "Methodical coder, zero bugs, zero drama. You write impeccable code through careful planning and systematic execution.",
        traits: ["Bug-free coder", "Methodical programmer", "Quality focused", "Drama-free developer"],
        color: "#ffd32a"
    },
    IRCS: {
        name: "The Quiet Redesigner",
        code: "IRCS",
        desc: "Introverted • Refiner • Creative • Spontaneous",
        fullDesc: "Will suddenly redesign the project banner during a break. You contribute creative improvements quietly and unexpectedly.",
        traits: ["Surprise improver", "Quiet creative", "Banner artist", "Spontaneous designer"],
        color: "#ff5252"
    },
    IRCD: {
        name: "The Aesthetic Architect", 
        code: "IRCD",
        desc: "Introverted • Refiner • Creative • Disciplined",
        fullDesc: "Meticulous artist and coder — everything is neat, structured, and aesthetic. You perfect the intersection of beauty and functionality.",
        traits: ["Meticulous creator", "Aesthetic coder", "Structure lover", "Beauty engineer"],
        color: "#7b1fa2"
    }
};

let currentQuestion = 0;
const userAnswers = [];
const scores = { E: 0, I: 0, P: 0, R: 0, T: 0, C: 0, S: 0, D: 0 };

const form = document.getElementById("quiz-form");
const container = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const progress = document.getElementById("progress");
const progressFill = document.getElementById("progress-fill");

function updateProgress() {
    const percentage = ((currentQuestion + 1) / questions.length) * 100;
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    progressFill.style.width = `${percentage}%`;
}

function renderQuestion(index) {
    const q = questions[index];
    
    container.classList.add('loading');
    
    setTimeout(() => {
        container.innerHTML = '';
        
        const qDiv = document.createElement("div");
        qDiv.className = "question";
        qDiv.innerHTML = `<h3>${index + 1}. ${q.q}</h3>`;

        const scaleContainer = document.createElement("div");
        scaleContainer.className = "likert-container";
        
        const scaleLabels = document.createElement("div");
        scaleLabels.className = "scale-labels";
        scaleLabels.innerHTML = `
            <span>Strongly Disagree</span>
            <span>Disagree</span>
            <span>Neutral</span>
            <span>Agree</span>
            <span>Strongly Agree</span>
        `;
        
        const scaleOptions = document.createElement("div");
        scaleOptions.className = "scale-options";

        for (let i = 1; i <= 5; i++) {
            const option = document.createElement("div");
            option.className = "scale-option";
            
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question_${index}`;
            radio.value = i;
            radio.id = `q${index}_${i}`;
            
            const label = document.createElement("label");
            label.setAttribute("for", `q${index}_${i}`);
            label.textContent = i;
            
            option.appendChild(radio);
            option.appendChild(label);
            
            radio.addEventListener('change', () => selectOption(i, index));
            scaleOptions.appendChild(option);
        }

        scaleContainer.appendChild(scaleLabels);
        scaleContainer.appendChild(scaleOptions);
        qDiv.appendChild(scaleContainer);
        container.appendChild(qDiv);

        // Show previously selected answer
        if (userAnswers[index] !== undefined) {
            const selectedRadio = container.querySelector(`input[value="${userAnswers[index]}"]`);
            if (selectedRadio) {
                selectedRadio.checked = true;
                selectedRadio.parentElement.classList.add('selected');
            }
        }

        updateProgress();
        updateButtons();
        container.classList.remove('loading');
    }, 150);
}

function selectOption(value, questionIndex) {
    // Remove previous selection styling
    container.querySelectorAll('.scale-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection styling
    const selectedOption = container.querySelector(`input[value="${value}"]`).parentElement;
    selectedOption.classList.add('selected');
    
    userAnswers[questionIndex] = value;
    
    // Auto-advance after a short delay
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            renderQuestion(currentQuestion);
        } else {
            calculateResult();
        }
    }, 800);
}

function updateButtons() {
    nextBtn.textContent = (currentQuestion === questions.length - 1) ? "Get My Result 🎯" : "Next →";
    backBtn.disabled = (currentQuestion === 0);
}

nextBtn.addEventListener("click", () => {
    if (userAnswers[currentQuestion] === undefined) {
        container.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => container.style.animation = '', 500);
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion(currentQuestion);
    } else {
        calculateResult();
    }
});

backBtn.addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion(currentQuestion);
    }
});

function calculateResult() {
    // Reset scores
    Object.keys(scores).forEach(key => scores[key] = 0);
    
    // Calculate scores based on answers
    questions.forEach((question, index) => {
        const answer = userAnswers[index];
        if (answer !== undefined) {
            const score = answer - 3; // Convert 1-5 scale to -2 to +2
            
            if (question.type === 'E' || question.type === 'I') {
                if (question.type === 'E') {
                    scores.E += score;
                } else {
                    scores.I += score;
                }
            } else if (question.type === 'P' || question.type === 'R') {
                if (question.type === 'P') {
                    scores.P += score;
                } else {
                    scores.R += score;
                }
            } else if (question.type === 'T' || question.type === 'C') {
                if (question.type === 'T') {
                    scores.T += score;
                } else {
                    scores.C += score;
                }
            } else if (question.type === 'S' || question.type === 'D') {
                if (question.type === 'S') {
                    scores.S += score;
                } else {
                    scores.D += score;
                }
            }
        }
    });
    
    // Determine personality type
    const personality = (scores.E > scores.I ? 'E' : 'I') +
                       (scores.P > scores.R ? 'P' : 'R') +
                       (scores.T > scores.C ? 'T' : 'C') +
                       (scores.S > scores.D ? 'S' : 'D');
    
    showResult(personality);
}

function showResult(personalityType) {
    const result = personalities[personalityType];
    
    document.getElementById("result").innerHTML = `
        <div class="result-container">
            <div class="result-avatar" style="background: linear-gradient(45deg, ${result.color}, #4bc88b);">
                <div class="personality-code">${result.code}</div>
            </div>
            
            <h2 class="result-title">${result.name}</h2>
            <p class="result-subtitle">${result.desc}</p>
            <p class="result-description">${result.fullDesc}</p>
            
            <div class="traits-container">
                <h3>Your Key Traits:</h3>
                <div class="traits-grid">
                    ${result.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
                </div>
            </div>
            
            <div class="result-actions">
                <button id="restart-btn" class="result-btn">
                    🔄 Take Quiz Again
                </button>
                <button id="download-btn" class="result-btn">
                    📱 Download Result
                </button>
                <button id="facebook-btn" class="result-btn">
                    📘 Share on Facebook
                </button>
            </div>
            
            <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <div class="logo" style="width: 50px; height: 50px; margin: 0 auto 0.5rem;">
                    <img src="assets/img/logo.png" alt="EARIST Logo" style="height: 60px; width: auto;">
                </div>
                <div style="font-size: 0.8rem; color: #4bc88b;">EARIST-CS Personality Test</div>
            </div>
        </div>
    `;

    document.getElementById("result-modal").style.display = "flex";
    setupModalButtons(personalityType, result);
}

function setupModalButtons(personalityType, result) {
    const resultModal = document.getElementById('result-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const facebookBtn = document.getElementById('facebook-btn');

    closeModalBtn.onclick = () => {
        resultModal.style.display = 'none';
    };

    restartBtn.onclick = () => {
        resultModal.style.display = 'none';
        currentQuestion = 0;
        userAnswers.length = 0;
        Object.keys(scores).forEach(key => scores[key] = 0);
        renderQuestion(currentQuestion);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    downloadBtn.onclick = () => {
        downloadResultImage(result);
    };

    facebookBtn.onclick = () => {
        shareToFacebook(personalityType, result);
    };
}

function downloadResultImage(result) {
    const resultElement = document.querySelector('.result-container');
    
    // Create a canvas for the result image
    html2canvas(resultElement, {
        backgroundColor: '#0f4c3a',
        scale: 2,
        logging: false,
        useCORS: true
    }).then(canvas => {
        // Create download link
        const link = document.createElement('a');
        link.download = `earist-cs-personality-${result.code.toLowerCase()}.png`;
        link.href = canvas.toDataURL();
        link.click();
    }).catch(error => {
        console.error('Error generating image:', error);
        alert('Sorry, there was an error generating the image. Please try again.');
    });
}

function shareToFacebook(personalityType, result) {
    const shareText = `I just discovered I'm "${result.name}" (${personalityType}) in the EARIST-CS Personality Test! ${result.fullDesc}`;
    const shareUrl = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${encodeURIComponent(shareText)}`;
    
    window.open(facebookShareUrl, '_blank', 'width=600,height=400');
}

// Add shake animation keyframes
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);

// Start the quiz
renderQuestion(currentQuestion);

window.onclick = e => {
    const modal = document.getElementById('result-modal');
    if (e.target === modal) modal.style.display = 'none';
};