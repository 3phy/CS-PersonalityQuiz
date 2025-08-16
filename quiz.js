    const questions = [
        // Social Energy (E vs I) - 4 questions 
        {
            q: "Mas gusto ko mag-code sa bahay kasama tropa… kahit ending chikahan lang.",
            dimension: "EI",
            type: "E"
        }/*,
        {
            q: "Mas okay sakin magpasa ng idea sa group chat bago mag-code (kahit seen-zoned minsan).",
            dimension: "EI",
            type: "E"
        },
        {
            q: "Mas productive ako sa lab kapag walang ibang tao at tahimik (walang nag-ML).",
            dimension: "EI",
            type: "I"
        },
        {
            q: "Mas gusto ko magpasa ng PDF or PPT sa gclass kaysa mag-present sa harap ng class.",
            dimension: "EI",
            type: "I"
        },
        {
            q: "Nakakapagod ang 3-hour meeting na wala namang napagkasunduan.",
            dimension: "EI",
            type: "I"
        },

        // Work Style (P vs R) - 4 questions
        {
            q: "Mas trip ko gumawa agad ng prototype kahit walang flowchart (bahala na si Batman).",
            dimension: "PR",
            type: "P"
        },
        {
            q: "Okay lang sakin yung medyo sabog ang code basta 'Hello World' gumagana.",
            dimension: "PR",
            type: "P"
        },
        {
            q: "Mas gusto ko subok-subok muna kahit magulo kaysa magplano nang matagal.",
            dimension: "PR",
            type: "P"
        },
        {
            q: "Inaayos ko pa rin ang code kahit pasado na kay sir Arjo (para dagdag points).",
            dimension: "PR",
            type: "R"
        },
        {
            q: "Sinusulat ko ng malinis at may comments ang code para maintindihan ni classmate(ChatGPT daw).",
            dimension: "PR",
            type: "R"
        },

        // Problem Approach (T vs C) - 4 questions
        {
            q: "Hilig ko ang algorithm problems pag si sir Bungay (may halong love advice).",
            dimension: "TC",
            type: "T"
        },
        {
            q: "Mas gusto ko backend at database kaysa mag-ayos ng kulay sa CSS.",
            dimension: "TC",
            type: "T"
        },
        {
            q: "Enjoy ako kapag gumagawa ng UI na mas maganda pa sa school website.",
            dimension: "TC",
            type: "C"
        },
        {
            q: "Masaya ako maglagay ng animations kahit di naman kailangan, basta aesthetic.",
            dimension: "TC",
            type: "C"
        },

        // Workflow Preference (S vs D) - 4 questions
        {
            q: "Kayang-kaya ko gumawa ng buong system isang gabi bago defense (with energy drink).",
            dimension: "SD",
            type: "S"
        },
        {
            q: "Mas gusto ko open lang options kaysa planado lahat (kasi madalas nababago ni sir Jovel).",
            dimension: "SD",
            type: "S"
        },
        {
            q: "Gumagamit ako ng GitHub/Git kahit minsan ako lang ang nagco-commit.",
            dimension: "SD",
            type: "D"
        },
        {
            q: "Mas gusto ko tapusin ang tasks way before deadline para chill habang cramming sila.",
            dimension: "SD",
            type: "D"
        }*/
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

    // REPLACE your existing updateOGImageAndURL function with this enhanced version
function updateOGImageAndURL(personalityType) {
    const result = personalities[personalityType];
    if (!result) return;

    // Create timestamp to force Facebook to treat as new URL
    const timestamp = Date.now();
    const newURL = `${window.location.origin}/?result=${personalityType}&t=${timestamp}`;

    // Update all necessary OG tags
    const imageUrl = `${window.location.origin}/assets/thumbnails/${personalityType}.png`;
    const title = `I'm ${result.name} - EARIST-CS Developer Personality Test`;
    const description = `${result.desc} - ${result.fullDesc.substring(0, 120)}...`;

    // Remove existing and add new OG tags
    removeExistingOGTags();
    addOGTag('og:title', title);
    addOGTag('og:description', description);
    addOGTag('og:image', imageUrl);
    addOGTag('og:image:width', '1200');
    addOGTag('og:image:height', '630');
    addOGTag('og:image:type', 'image/png');
    addOGTag('og:url', newURL);
    addOGTag('og:type', 'website');
    addOGTag('og:site_name', 'EARIST-CS Personality Test');
    
    // Twitter Card tags for better fallback
    addOGTag('twitter:card', 'summary_large_image', 'name');
    addOGTag('twitter:title', title, 'name');
    addOGTag('twitter:description', description, 'name');
    addOGTag('twitter:image', imageUrl, 'name');

    // Update page title
    document.title = title;

    // Update URL for better sharing
    if (window.history && window.history.pushState) {
        window.history.pushState({personalityType}, '', newURL);
    }

    console.log(`Updated OG tags for ${personalityType}`);
    console.log(`Image URL: ${imageUrl}`);
    console.log(`Share URL: ${newURL}`);
}

// ADD these new helper functions
function removeExistingOGTags() {
    const ogTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]');
    ogTags.forEach(tag => tag.remove());
}

function addOGTag(property, content, attributeType = 'property') {
    const meta = document.createElement('meta');
    meta.setAttribute(attributeType, property);
    meta.content = content;
    document.head.appendChild(meta);
}

// REPLACE your existing shareToFacebook function with this enhanced version
function shareToFacebook(personalityType, result) {
    // Ensure OG tags are updated first
    updateOGImageAndURL(personalityType);
    
    // Wait a moment for tags to be processed
    setTimeout(() => {
        const shareUrl = window.location.href;
        const shareText = buildShareText(personalityType, result);
        
        // Method 1: Facebook Share Dialog
        const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        
        // Open Facebook share
        const popup = window.open(fbShareUrl, 'facebookShare', 'width=600,height=450,scrollbars=yes,resizable=yes');
        
        // Fallback: If popup blocked or fails
        if (!popup || popup.closed) {
            // Show manual sharing instructions
            showSharingInstructions(shareUrl, shareText);
        }
        
        // Alternative method: Try to refresh Facebook cache
        setTimeout(() => {
            refreshFacebookCacheManually(shareUrl);
        }, 2000);
        
        console.log(`Sharing to Facebook with URL: ${shareUrl}`);
    }, 500);
}

// ADD these new functions for enhanced sharing experience
function showSharingInstructions(url, text) {
    const instructionModal = document.createElement('div');
    instructionModal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: Arial, sans-serif;
        ">
            <div style="
                background: white;
                padding: 30px;
                border-radius: 15px;
                max-width: 500px;
                text-align: center;
                color: #333;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            ">
                <h3 style="margin-top: 0; color: #1877f2;">Share Your Result! 🎯</h3>
                <p style="margin: 20px 0; line-height: 1.5;">
                    Copy this link and paste it in your Facebook post:
                </p>
                
                <div style="
                    background: #f8f9fa;
                    padding: 15px;
                    border-radius: 8px;
                    margin: 15px 0;
                    border: 1px solid #dee2e6;
                    word-break: break-all;
                    font-size: 14px;
                    color: #495057;
                ">${url}</div>
                
                <button onclick="copyToClipboardAndClose('${url}', this)" style="
                    background: #1877f2;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                    margin: 10px 5px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                ">📋 Copy Link</button>
                
                <button onclick="openFacebookPost()" style="
                    background: #42a5f5;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                    margin: 10px 5px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                ">📘 Open Facebook</button>
                
                <br>
                
                <button onclick="this.closest('div').parentElement.remove()" style="
                    background: #6c757d;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    margin-top: 15px;
                ">Close</button>
                
                <p style="
                    margin-top: 20px;
                    font-size: 12px;
                    color: #6c757d;
                    line-height: 1.4;
                ">
                    💡 Tip: After pasting the link, wait for Facebook to load the preview with your result image!
                </p>
            </div>
        </div>
    `;
    
    document.body.appendChild(instructionModal);
}

function copyToClipboardAndClose(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = '✅ Copied!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.closest('div').parentElement.remove();
        }, 1500);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.textContent = '✅ Copied!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.closest('div').parentElement.remove();
        }, 1500);
    });
}

function openFacebookPost() {
    const facebookUrl = `https://www.facebook.com/`;
    window.open(facebookUrl, '_blank');
}

function refreshFacebookCacheManually(url) {
    // Open Facebook's sharing debugger to refresh cache
    const debugUrl = `https://developers.facebook.com/tools/debug/sharing/?q=${encodeURIComponent(url)}`;
    console.log(`To refresh Facebook cache, visit: ${debugUrl}`);
    
    // Optionally auto-open debugger (uncomment if you want automatic cache refresh)
    // setTimeout(() => {
    //     window.open(debugUrl, 'fbDebugger', 'width=800,height=600,scrollbars=yes');
    // }, 3000);
}

// REPLACE your existing setupModalButtons function with this updated version
function setupModalButtons(personalityType, result) {
    const resultModal = document.getElementById('result-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const facebookBtn = document.getElementById('facebook-btn');
    const copyLinkBtn = document.getElementById('copy-link-btn');

    closeModalBtn.onclick = () => {
        resultModal.style.display = 'none';
    };

    restartBtn.onclick = () => {
        resultModal.style.display = 'none';
        currentQuestion = 0;
        userAnswers.length = 0;
        Object.keys(scores).forEach(key => scores[key] = 0);
        
        // Reset URL and OG tags to default
        const defaultURL = window.location.origin;
        if (window.history && window.history.pushState) {
            window.history.pushState({}, '', defaultURL);
        }
        document.title = "What Kind of Programmer Are You?";
        
        // Reset OG tags to default
        removeExistingOGTags();
        addOGTag('og:title', 'EARIST-CS Developer Personality Test');
        addOGTag('og:description', 'Discover your unique programming personality with this fun quiz designed for EARIST Computer Science students!');
        addOGTag('og:image', `${window.location.origin}/assets/thumbnails/default.png`);
        addOGTag('og:url', defaultURL);
        addOGTag('og:type', 'website');
        
        renderQuestion(currentQuestion);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Keep your existing download button functionality
    downloadBtn.onclick = () => {
        // Your existing download code here
        const personalityCode = document.querySelector('.personality-code')?.textContent || 'XXXX';
        const personalityName = document.querySelector('.result-title')?.textContent || 'Unknown';
        const personalityDesc = document.querySelector('.result-subtitle')?.textContent || '';
        const personalityFullDesc = document.querySelector('.result-description')?.textContent || '';
        const traits = Array.from(document.querySelectorAll('.trait-tag')).map(tag => tag.textContent);

        // Create visible container for html2canvas
        const downloadContainer = document.createElement('div');
        downloadContainer.id = 'download-container';
        downloadContainer.innerHTML = `
            <div style="
                width: 600px;
                min-height: 700px;
                padding: 40px;
                margin: 20px auto;
                background: linear-gradient(135deg, #35b173ff 0%, #18663bff 100%);
                color: white;
                font-family: Arial, sans-serif;
                text-align: center;
                border-radius: 20px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                position: relative;
            ">
                <div style="
                    width: 120px;
                    height: 120px;
                    margin: 0 auto 30px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    font-weight: bold;
                ">${personalityCode}</div>
                
                <h1 style="
                    margin: 0 0 15px;
                    font-size: 2.5rem;
                    font-weight: bold;
                    line-height: 1.2;
                ">${personalityName}</h1>
                
                <p style="
                    margin: 0 0 25px;
                    font-size: 1.2rem;
                    opacity: 0.9;
                    line-height: 1.4;
                ">${personalityDesc}</p>
                
                <p style="
                    margin: 0 0 35px;
                    font-size: 1rem;
                    line-height: 1.6;
                    opacity: 0.8;
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                ">${personalityFullDesc}</p>
                
                <div style="margin-bottom: 40px;">
                    <h3 style="
                        margin: 0 0 20px;
                        font-size: 1.4rem;
                        font-weight: bold;
                    ">Key Traits:</h3>
                    
                    <div style="
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 12px;
                        max-width: 500px;
                        margin: 0 auto;
                    ">
                        ${traits.map(trait => `
                            <span style="
                                background: rgba(255,255,255,0.2);
                                padding: 10px 20px;
                                border-radius: 25px;
                                font-size: 0.95rem;
                                font-weight: 500;
                                white-space: nowrap;
                            ">${trait}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div style="
                    margin-top: 40px;
                    padding-top: 25px;
                    border-top: 1px solid rgba(255,255,255,0.2);
                    font-size: 1rem;
                    opacity: 0.7;
                    font-weight: 500;
                ">
                    EARIST-CS Personality Test
                </div>
            </div>
        `;

        // Add to page temporarily
        document.body.appendChild(downloadContainer);
        downloadContainer.offsetHeight;

        // Wait a moment then capture
        setTimeout(() => {
            html2canvas(downloadContainer.firstElementChild, {
                backgroundColor: null,
                scale: 2,
                logging: false,
                useCORS: true,
                allowTaint: true,
                height: downloadContainer.firstElementChild.offsetHeight,
                width: downloadContainer.firstElementChild.offsetWidth,
                scrollX: 0,
                scrollY: 0
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `EARIST-CS-${personalityCode}-${Date.now()}.png`;
                link.href = canvas.toDataURL('image/png', 1.0);
                link.click();

                document.body.removeChild(downloadContainer);
                console.log('Download successful with html2canvas!');
            }).catch(error => {
                console.error('html2canvas failed:', error);
                document.body.removeChild(downloadContainer);
                alert('Download failed. Please try again.');
            });
        }, 500);
    };

    // UPDATED: Enhanced Facebook button with new sharing method
    facebookBtn.onclick = () => {
        shareToFacebook(personalityType, result);
    };

    // Enhanced copy link button
    if (copyLinkBtn) {
        copyLinkBtn.onclick = async () => {
            const shareUrl = window.location.href;
            try {
                await navigator.clipboard.writeText(shareUrl);
                copyLinkBtn.textContent = '✅ Copied!';
                copyLinkBtn.style.background = '#28a745';
                setTimeout(() => {
                    copyLinkBtn.textContent = '🔗 Copy Link';
                    copyLinkBtn.style.background = '';
                }, 2000);
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = shareUrl;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                copyLinkBtn.textContent = '✅ Copied!';
                copyLinkBtn.style.background = '#28a745';
                setTimeout(() => {
                    copyLinkBtn.textContent = '🔗 Copy Link';
                    copyLinkBtn.style.background = '';
                }, 2000);
            }
        };
    }
}

    // Add shake animation keyframes
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        
        @keyframes slideIn { 
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.9); }
        }
    `;
    document.head.appendChild(shakeStyle);

    // NEW: Check URL parameters on page load to show specific result
    function checkURLParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        const resultParam = urlParams.get('result');
        
        if (resultParam && personalities[resultParam]) {
            // If someone visits a direct result URL, show that result immediately
            console.log(`Showing result from URL parameter: ${resultParam}`);
            showResult(resultParam);
            return true;
        }
        return false;
    }

    // NEW: Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.personalityType) {
            showResult(event.state.personalityType);
        } else {
            // Back to quiz
            document.getElementById('result-modal').style.display = 'none';
        }
    });

    // Start the quiz
    if (!checkURLParameters()) {
        renderQuestion(currentQuestion);
    }

    // Close modal when clicking outside
    window.onclick = e => {
        const modal = document.getElementById('result-modal');
        if (e.target === modal) modal.style.display = 'none';
    };