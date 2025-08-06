 const questions = [
            {
                q: "What time do you usually code best?",
                a: ["Morning with coffee ☕", "Late at night 🌙", "During panic mode 😱", "All day every day 🚀"],
                type: ["coffee", "midnight", "error", "wizard"]
            },
            {
                q: "Your first reaction to a bug is:",
                a: ["Google it 🔍", "Blame semicolons 🤔", "Meditate 🧘", "Rewrite everything 🔥"],
                type: ["stack", "vandal", "philosopher", "refactor"]
            },
            {
                q: "Your IDE of choice?",
                a: ["VS Code 💻", "Vim ⌨️", "Notepad++ 📝", "Wait, what's an IDE? 🤷"],
                type: ["wizard", "hacker", "meme", "gambler"]
            },
            {
                q: "How do you name your variables?",
                a: ["Meaningful names 📚", "a, b, z 🔤", "temp123_final 🎲", "Destructive names 💣"],
                type: ["philosopher", "vandal", "gambler", "error"]
            },
            {
                q: "What do you do when your code finally works?",
                a: ["Celebrate! 🎉", "Panic internally 😰", "Push to production 🚀", "Cry tears of joy 😭"],
                type: ["meme", "wizard", "gambler", "stack"]
            },
            {
                q: "Pick your debugging style:",
                a: ["console.log everything 📝", "Rubber duck method 🦆", "Intense staring 👁️", "Comment/uncomment chaos 🔄"],
                type: ["wizard", "wizard", "error", "refactor"]
            },
            {
                q: "What music do you code to?",
                a: ["Lo-fi hip hop 🎵", "Heavy metal 🤘", "Classical music 🎼", "Pure silence 🤫"],
                type: ["philosopher", "hacker", "wizard", "stack"]
            },
            {
                q: "Your dream job?",
                a: ["Google developer 🌟", "Game developer 🎮", "Ethical hacker 🕵️", "Meme generator 😂"],
                type: ["wizard", "refactor", "hacker", "meme"]
            },
            {
                q: "Most used command?",
                a: ["git commit -m 'final' 📝", "Ctrl + Z ⏪", "StackOverflow search 🔍", "npm install 📦"],
                type: ["gambler", "error", "stack", "coffee"]
            },
            {
                q: "How do you handle group projects?",
                a: ["Do everything myself 💪", "Mysteriously disappear 👻", "Make the fancy slides 📊", "Merge chaos master 🌪️"],
                type: ["wizard", "hacker", "meme", "gambler"]
            },
            {
                q: "Favorite error message?",
                a: ["Segmentation fault 💥", "NullPointerException 🎯", "Expected semicolon 🔣", "404: Motivation not found 😴"],
                type: ["error", "stack", "vandal", "philosopher"]
            },
            {
                q: "Your coding flex?",
                a: ["Code works on first try ✨", "Readable spaghetti code 🍝", "Fix bugs randomly 🎲", "Git push without testing 🚀"],
                type: ["wizard", "refactor", "stack", "gambler"]
            },
            {
                q: "Relationship with StackOverflow?",
                a: ["We're practically dating 💕", "I owe them my career 🙏", "It's my browser homepage 🏠", "I copy my own old answers 🔄"],
                type: ["stack", "stack", "stack", "meme"]
            },
            {
                q: "Break time activity?",
                a: ["Scroll social media endlessly 📱", "Coffee brewing ritual ☕", "Chat with AI assistants 🤖", "Refactor my life choices 🔄"],
                type: ["meme", "coffee", "wizard", "refactor"]
            },
            {
                q: "Favorite programming language?",
                a: ["Python 🐍", "JavaScript 🌐", "C++ ⚡", "HTML (yes, it counts!) 📄"],
                type: ["wizard", "meme", "hacker", "philosopher"]
            }
        ];

        const personalities = {
            stack: {
                name: "The StackOverflow Summoner",
                desc: "You conjure answers out of thin air—aka, copy-paste from StackOverflow. Who needs deep understanding when the magical spells work perfectly?",
                emoji: "🔍",
                color: "#ff6b35"
            },
            wizard: {
                name: "The Debugging Wizard",
                desc: "You're the Gandalf of bugs, wielding console logs and developer intuition like ancient magic wands. 'You shall not pass!' you tell each error.",
                emoji: "🧙‍♂️",
                color: "#4ecdc4"
            },
            coffee: {
                name: "The Coffee Compiler",
                desc: "Your entire system runs on premium espresso and pure hope. Without caffeine flowing through your veins, both your code and soul refuse to execute.",
                emoji: "☕",
                color: "#8b4513"
            },
            midnight: {
                name: "The Midnight Coder",
                desc: "You rise with the moon and deploy at dawn, coding in the shadows like a digital vampire. Sunlight is your kryptonite, dark mode is your sanctuary.",
                emoji: "🌙",
                color: "#6a5acd"
            },
            gambler: {
                name: "The Git Gambler",
                desc: "Every commit is a high-stakes bet, every merge is beautiful chaos. You live dangerously on the bleeding edge of version control madness.",
                emoji: "🎲",
                color: "#ff1744"
            },
            vandal: {
                name: "The Variable Vandal",
                desc: "Your code reads like abstract art—beautiful to you, incomprehensible to others. Future maintainers will either worship or curse your creative genius.",
                emoji: "🎨",
                color: "#9c27b0"
            },
            error: {
                name: "The Error Whisperer",
                desc: "You don't just fix bugs—you communicate with them on a spiritual level. Through tears, caffeine, and raw determination, you speak their ancient language.",
                emoji: "👁️",
                color: "#f44336"
            },
            refactor: {
                name: "The Infinite Refactorer",
                desc: "You're trapped in an endless cycle of 'making it better.' Your code sparkles like a diamond, but somehow still manages to crash spectacularly.",
                emoji: "♻️",
                color: "#4caf50"
            },
            meme: {
                name: "The Meme Developer",
                desc: "You code for laughs, vibes, and internet points. Your GitHub repositories are 50% functional code, 50% hilarious comments and memes.",
                emoji: "😂",
                color: "#ff9800"
            },
            hacker: {
                name: "The Hacker Wannabe",
                desc: "You rock a hoodie, run Kali Linux, and tell everyone you're 'in cybersecurity.' You definitely know at least three WiFi password jokes.",
                emoji: "🕵️",
                color: "#2196f3"
            },
            philosopher: {
                name: "The Frontend Philosopher",
                desc: "You make interfaces beautiful until CSS breaks your soul. Every styling bug becomes an existential crisis about the nature of digital reality.",
                emoji: "🎭",
                color: "#e91e63"
            }
        };

        let currentQuestion = 0;
        const userAnswers = [];

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
            
            // Add loading state
            container.classList.add('loading');
            
            setTimeout(() => {
                container.innerHTML = '';
                
                const qDiv = document.createElement("div");
                qDiv.className = "question";
                qDiv.innerHTML = `<h3>${index + 1}. ${q.q}</h3>`;

                const optionsContainer = document.createElement("div");
                optionsContainer.className = "options-container";

                q.a.forEach((text, i) => {
                    const btn = document.createElement("button");
                    btn.className = "option";
                    btn.innerText = text;
                    btn.setAttribute("data-type", q.type[i]);
                    btn.type = "button";

                    btn.onclick = () => selectOption(btn, q.type[i], index, optionsContainer);
                    optionsContainer.appendChild(btn);
                });

                qDiv.appendChild(optionsContainer);
                container.appendChild(qDiv);

                // Show previously selected answer
                if (userAnswers[index]) {
                    const selectedBtn = Array.from(container.querySelectorAll(".option"))
                        .find(btn => btn.getAttribute("data-type") === userAnswers[index]);
                    
                    if (selectedBtn) {
                        selectedBtn.classList.add('selected');
                    }
                }

                updateProgress();
                updateButtons();
                container.classList.remove('loading');
            }, 150);
        }

        function selectOption(selectedBtn, type, questionIndex, optionsContainer) {
            // Remove selection from all options
            optionsContainer.querySelectorAll('.option').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Add selection to clicked option
            selectedBtn.classList.add('selected');
            userAnswers[questionIndex] = type;
            
            // Auto-advance after a short delay
            setTimeout(() => {
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    renderQuestion(currentQuestion);
                } else {
                    showResult();
                }
            }, 600);
        }

        function updateButtons() {
            nextBtn.textContent = (currentQuestion === questions.length - 1) ? "Get My Result 🎯" : "Next →";
            backBtn.disabled = (currentQuestion === 0);
        }

        nextBtn.addEventListener("click", () => {
            if (!userAnswers[currentQuestion]) {
                // Add shake animation to indicate missing answer
                container.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => container.style.animation = '', 500);
                return;
            }

            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
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
                <div class="result-container">
                    <div class="result-avatar" style="background: linear-gradient(45deg, ${result.color}, #4bc88b);">
                        ${result.emoji}
                    </div>
                    
                    <h2 class="result-title">You are: ${result.name}</h2>
                    <p class="result-description">${result.desc}</p>
                    
                    <div class="result-actions">
                        <button id="restart-btn" class="result-btn">
                            🔄 Start Over
                        </button>
                        <button id="download-btn" class="result-btn">
                            📱 Download Image
                        </button>
                        <button id="facebook-btn" class="result-btn">
                            📘 Share on Facebook
                        </button>
                    </div>
                    
                    <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                        <div class="logo" style="width: 50px; height: 50px; margin: 0 auto 0.5rem;">
                            <img src="assets/img/logo.png" alt="COMSA Logo" style="height: 30px; width: auto;">
                        </div>
                        <div style="font-size: 0.8rem; color: #4bc88b;">Created with COMSA</div>
                    </div>
                </div>
            `;

            document.getElementById("result-modal").style.display = "flex";
            
            // Add event listeners for new buttons
            setupModalButtons();
        }

        function setupModalButtons() {
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
                renderQuestion(currentQuestion);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };

            downloadBtn.onclick = () => {
                const resultContainer = document.querySelector('.result-container');
                if (typeof html2canvas !== 'undefined') {
                    html2canvas(resultContainer, {
                        backgroundColor: '#0f4c3a',
                        scale: 2,
                        width: 600,
                        height: 800
                    }).then(canvas => {
                        const link = document.createElement("a");
                        link.download = "my-programmer-personality.png";
                        link.href = canvas.toDataURL("image/png");
                        link.click();
                    });
                } else {
                    alert('Screenshot feature is loading... Please try again in a moment!');
                }
            };

            facebookBtn.onclick = () => {
                const resultContainer = document.querySelector('.result-container');
                const resultTitle = document.querySelector('.result-title').textContent;
                const resultDesc = document.querySelector('.result-description').textContent;
                
                if (typeof html2canvas !== 'undefined') {
                    html2canvas(resultContainer, {
                        backgroundColor: '#0f4c3a',
                        scale: 2,
                        width: 600,
                        height: 800
                    }).then(canvas => {
                        // Convert to blob and create a temporary URL
                        canvas.toBlob((blob) => {
                            // For now, we'll show a share dialog with Facebook URL
                            const shareText = encodeURIComponent(`${resultTitle}\n\n${resultDesc}\n\nTake the quiz: ${window.location.href}`);
                            const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${shareText}`;
                            
                            // Open Facebook share dialog
                            window.open(facebookUrl, 'facebook-share', 'width=626,height=436,toolbar=no,menubar=no,scrollbars=no,resizable=yes');
                            
                            // Also download the image for manual sharing
                            const link = document.createElement("a");
                            link.download = "programmer-quiz-result.png";
                            link.href = canvas.toDataURL("image/png");
                            link.click();
                            
                            alert('🎉 Image downloaded! You can now upload it to your Facebook post.');
                        }, 'image/png');
                    });
                } else {
                    // Fallback text sharing
                    const shareText = encodeURIComponent(`${resultTitle}\n\n${resultDesc}\n\nTake the quiz: ${window.location.href}`);
                    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${shareText}`;
                    window.open(facebookUrl, 'facebook-share', 'width=626,height=436,toolbar=no,menubar=no,scrollbars=no,resizable=yes');
                }
            };
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