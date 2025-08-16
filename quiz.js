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

function showResult(personalityType) {
    const result = personalities[personalityType];
    
    // Update Open Graph image for better Facebook sharing
    updateOGImage(personalityType);
    
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

// Helper function to update Open Graph image meta tag
function updateOGImage(personalityType) {
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
    }
    ogImage.content = `${window.location.origin}/assets/thumbnails/${personalityType}.png`;
}

// Helper function to check if image exists
async function checkImageExists(imageUrl) {
    try {
        const response = await fetch(imageUrl, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        console.error("Error checking image:", error);
        return false;
    }
}

// Helper function to convert image URL to base64
async function imageUrlToBase64(imageUrl) {
    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blob = await response.blob();
        
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result.split(',')[1];
                resolve(base64String);
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error("Error converting image to base64:", error);
        return null;
    }
}

// Helper function to build share text (extracted for reusability)
function buildShareText(personalityType, result) {
    const personalityCode = document.querySelector('.personality-code')?.textContent || personalityType;
    const personalityName = document.querySelector('.result-title')?.textContent || result.name;
    const personalityDesc = document.querySelector('.result-subtitle')?.textContent || result.desc;
    const personalityFullDesc = document.querySelector('.result-description')?.textContent || result.fullDesc;
    const traits = Array.from(document.querySelectorAll('.trait-tag')).map(tag => tag.textContent);

    return `🎯 I just discovered my ComsaPeeps Personality!

🏷️ TYPE: "${personalityName}"
🔤 CODE: ${personalityCode}

📝 DESCRIPTION:
${personalityDesc}

💡 WHAT THIS MEANS:
${personalityFullDesc}

✨ MY KEY TRAITS:
${traits.map((t, i) => `${i + 1}. ${t}`).join('\n')}

🎮 Try it yourself here: ${window.location.href}

#EARISTCS #DeveloperPersonality #${personalityCode}`;
}

// Facebook sharing with direct thumbnail (simpler method)
async function shareToFacebook(personalityType, result) {
    try {
        console.log("Preparing Facebook share with thumbnail...");
        
        // Get the thumbnail image URL from your assets folder
        const thumbnailUrl = `${window.location.origin}/assets/thumbnails/${personalityType}.png`;
        
        // Verify the image exists (optional but recommended)
        const imageExists = await checkImageExists(thumbnailUrl);
        
        if (!imageExists) {
            console.warn(`Thumbnail not found: ${thumbnailUrl}, trying fallback`);
            // Fallback to a default thumbnail if specific one doesn't exist
            const fallbackUrl = `${window.location.origin}/assets/thumbnails/default.png`;
            const fallbackExists = await checkImageExists(fallbackUrl);
            
            if (!fallbackExists) {
                alert("Thumbnail images not found. Please make sure you have thumbnail images in /assets/thumbnails/ folder.");
                // Fall back to Imgur method
                shareToFacebookWithImgur(personalityType, result);
                return;
            }
        }
        
        // Build share text with personality info
        const shareText = buildShareText(personalityType, result);
        
        // Create Facebook share URL
        const shareUrl = window.location.href;
        const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        
        // Open Facebook share dialog
        window.open(fbShareUrl, 'facebookShare', 'width=600,height=400,scrollbars=yes,resizable=yes');
        
        console.log("Facebook share dialog opened with thumbnail:", thumbnailUrl);
        
    } catch (err) {
        console.error("Error in shareToFacebook:", err);
        // Fallback to Imgur method
        shareToFacebookWithImgur(personalityType, result);
    }
}

// Alternative: Upload thumbnail to Imgur for guaranteed sharing
async function shareToFacebookWithImgur(personalityType, result) {
    try {
        console.log("Preparing Facebook share via Imgur...");
        
        // Get thumbnail from your assets folder
        const thumbnailUrl = `${window.location.origin}/assets/thumbnails/${personalityType}.png`;
        
        // Convert image to base64
        const imageBase64 = await imageUrlToBase64(thumbnailUrl);
        
        if (!imageBase64) {
            alert("Could not load thumbnail image. Please check if the file exists.");
            return;
        }
        
        // Upload to Imgur (replace with your Client ID)
        const clientId = "38112d6d0d6762305504f48bc102ee2e";
        
        console.log("Uploading thumbnail to Imgur...");
        const res = await fetch("https://api.imgur.com/3/image", {
            method: "POST",
            headers: {
                Authorization: `Client-ID ${clientId}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                image: imageBase64, 
                type: "base64",
                title: `${personalityType} Personality Result`,
                description: `EARIST-CS Personality Test Result: ${result.name}`
            })
        });

        if (!res.ok) {
            const text = await res.text();
            console.error("Imgur upload failed:", res.status, text);
            alert(`Image upload failed with status ${res.status}`);
            return;
        }

        const data = await res.json();
        
        if (!data.success || !data.data?.link) {
            alert(`Image upload failed: ${data.data?.error || 'Unknown error'}`);
            return;
        }

        const uploadedImageUrl = data.data.link;
        console.log("Thumbnail uploaded to Imgur:", uploadedImageUrl);
        
        // Build share text and open Facebook
        const shareText = buildShareText(personalityType, result);
        const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(uploadedImageUrl)}&quote=${encodeURIComponent(shareText)}`;
        
        window.open(fbShareUrl, 'facebookShare', 'width=600,height=400,scrollbars=yes,resizable=yes');
        
    } catch (err) {
        console.error("Error in shareToFacebookWithImgur:", err);
        alert("An error occurred while sharing. Please try again.");
    }
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

    // Download button using html2canvas for creating result image
    downloadBtn.onclick = () => {
        // Get personality data
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
        
        // Force layout calculation
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
                // Download the image
                const link = document.createElement('a');
                link.download = `EARIST-CS-${personalityCode}-${Date.now()}.png`;
                link.href = canvas.toDataURL('image/png', 1.0);
                link.click();
                
                // Remove temporary container
                document.body.removeChild(downloadContainer);
                console.log('Download successful with html2canvas!');
                
            }).catch(error => {
                console.error('html2canvas failed:', error);
                document.body.removeChild(downloadContainer);
                alert('Download failed. Please try the other method.');
            });
        }, 500);
    };

    // Updated Facebook button to use thumbnail images
    facebookBtn.onclick = () => {
        // Use the method that works best for you:
        // Option 1: Direct thumbnail sharing (simpler, but may not always work)
        shareToFacebook(personalityType, result);
        
        // Option 2: Upload thumbnail to Imgur first (more reliable)
        // Uncomment the line below and comment the line above if you prefer Imgur method
        // shareToFacebookWithImgur(personalityType, result);
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

// Start the quiz
renderQuestion(currentQuestion);

// Close modal when clicking outside
window.onclick = e => {
    const modal = document.getElementById('result-modal');
    if (e.target === modal) modal.style.display = 'none';
};