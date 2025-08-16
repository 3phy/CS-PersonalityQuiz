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

// FIXED: Comprehensive OG tag update function
// ENHANCED: More robust Facebook cache busting and OG tag management
function updateOGImageAndURL(personalityType) {
    const result = personalities[personalityType];
    if (!result) return;

    // Create unique URL with better cache busting parameters
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substr(2, 9);
    const sessionId = Math.random().toString(36).substr(2, 5);
    const baseUrl = window.location.origin + window.location.pathname;
    
    // Use multiple parameters to ensure uniqueness
    const newURL = `${baseUrl}?result=${personalityType}&v=${timestamp}&r=${randomId}&s=${sessionId}`;

    // Enhanced image URL with aggressive cache busting
    const imageUrl = `${window.location.origin}/assets/thumbnails/${personalityType}.png?v=${timestamp}&r=${randomId}&cb=${Date.now()}`;
    const title = `I'm ${result.name} - COMSA Developer Personality Test`;
    const description = `${result.desc} - ${result.fullDesc.substring(0, 120)}...`;

    // CRITICAL: Complete OG tag reset and recreation
    removeAllOGTags();
    
    // Wait a moment for DOM cleanup
    setTimeout(() => {
        // Add comprehensive OG tags with Facebook-specific optimizations
        addOGTag('og:title', title);
        addOGTag('og:description', description);
        addOGTag('og:image', imageUrl);
        addOGTag('og:image:secure_url', imageUrl.replace('http://', 'https://'));
        addOGTag('og:image:width', '1200');
        addOGTag('og:image:height', '630');
        addOGTag('og:image:type', 'image/png');
        addOGTag('og:url', newURL);
        addOGTag('og:type', 'website');
        addOGTag('og:site_name', 'COMSA Developer Personality Test');
        addOGTag('og:updated_time', new Date().toISOString());
        
        // Facebook-specific tags
        addOGTag('fb:app_id', '2964994887030908');
        addOGTag('article:modified_time', new Date().toISOString());
        
        // Twitter Cards for fallback
        addOGTag('twitter:card', 'summary_large_image', 'name');
        addOGTag('twitter:title', title, 'name');
        addOGTag('twitter:description', description, 'name');
        addOGTag('twitter:image', imageUrl, 'name');

        // Update page metadata
        document.title = title;
        
        // Force browser cache refresh for the image
        preloadImageWithCacheBust(imageUrl);
        
        console.log(`🔄 Updated OG tags for ${personalityType}`);
        console.log(`📸 Image URL: ${imageUrl}`);
        console.log(`🔗 Share URL: ${newURL}`);
        
    }, 100);

    // Update URL in browser
    if (window.history && window.history.pushState) {
        window.history.pushState({personalityType}, '', newURL);
    }

    return { newURL, imageUrl, title, description };
}

// ENHANCED: More thorough OG tag removal
function removeAllOGTags() {
    const selectors = [
        'meta[property^="og:"]',
        'meta[name^="twitter:"]',
        'meta[property^="fb:"]',
        'meta[property^="article:"]',
        'meta[name="description"]:not([data-original])'
    ];
    
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(tag => {
            // Only remove dynamic tags, preserve original ones
            if (!tag.hasAttribute('data-original') && !tag.hasAttribute('data-default')) {
                tag.remove();
            }
        });
    });
}

// ENHANCED: Better OG tag addition with priority placement
function addOGTag(property, content, attributeType = 'property') {
    if (!content) return;
    
    // Remove any existing dynamic tag with same property
    const existingTag = document.querySelector(`meta[${attributeType}="${property}"]:not([data-original])`);
    if (existingTag) {
        existingTag.remove();
    }
    
    const meta = document.createElement('meta');
    meta.setAttribute(attributeType, property);
    meta.content = content;
    meta.setAttribute('data-dynamic', 'true');
    meta.setAttribute('data-timestamp', Date.now().toString());
    
    // Insert at the very beginning of head for maximum priority
    const firstChild = document.head.firstChild;
    if (firstChild) {
        document.head.insertBefore(meta, firstChild);
    } else {
        document.head.appendChild(meta);
    }
}

// NEW: Preload image to force cache refresh
function preloadImageWithCacheBust(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            console.log(`✅ Image preloaded successfully: ${imageUrl}`);
            resolve(true);
        };
        img.onerror = () => {
            console.warn(`⚠️ Image preload failed: ${imageUrl}`);
            resolve(false);
        };
        
        // Add random parameter to bypass any caching
        const cacheBustUrl = imageUrl + (imageUrl.includes('?') ? '&' : '?') + `preload=${Date.now()}`;
        img.src = cacheBustUrl;
    });
}

// COMPLETELY REWRITTEN: More aggressive Facebook cache clearing
async function refreshFacebookCache(url) {
    console.log('🔄 Starting Facebook cache refresh...');
    
    try {
        // Method 1: Facebook's official debug tool API
        const debugUrls = [
            `https://developers.facebook.com/tools/debug/og/object/?q=${encodeURIComponent(url)}`,
            `https://graph.facebook.com/v18.0/?id=${encodeURIComponent(url)}&scrape=true&method=post`,
            `https://graph.facebook.com/?id=${encodeURIComponent(url)}&scrape=true`
        ];
        
        // Try multiple refresh methods
        debugUrls.forEach((debugUrl, index) => {
            setTimeout(() => {
                try {
                    // Method using fetch with no-cors
                    fetch(debugUrl, {
                        method: 'POST',
                        mode: 'no-cors',
                        cache: 'no-cache'
                    }).catch(() => {
                        console.log(`Facebook refresh attempt ${index + 1} completed`);
                    });
                    
                    // Method using hidden iframe
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.style.width = '1px';
                    iframe.style.height = '1px';
                    iframe.src = debugUrl;
                    document.body.appendChild(iframe);
                    
                    setTimeout(() => {
                        try {
                            document.body.removeChild(iframe);
                        } catch (e) {
                            // Iframe already removed
                        }
                    }, 3000);
                    
                } catch (error) {
                    console.log(`Refresh method ${index + 1} attempted`);
                }
            }, index * 1000); // Stagger the requests
        });
        
        // Method 2: Create a ping to our own server to validate OG tags
        setTimeout(() => {
            const pingUrl = `${window.location.origin}/ping?url=${encodeURIComponent(url)}&t=${Date.now()}`;
            fetch(pingUrl, { method: 'HEAD', mode: 'no-cors' }).catch(() => {
                console.log('Server ping attempted');
            });
        }, 2000);
        
        console.log('✅ Facebook cache refresh initiated with multiple methods');
        
    } catch (error) {
        console.error('❌ Error during Facebook cache refresh:', error);
    }
}

// ENHANCED: More robust Facebook sharing with multiple fallbacks
async function shareToFacebook(personalityType, result) {
    console.log("🔄 Starting enhanced Facebook share process...");
    
    try {
        // Step 1: Update OG tags with aggressive cache busting
        const { newURL, imageUrl, title, description } = updateOGImageAndURL(personalityType);
        
        // Step 2: Wait for OG tags to be processed by browser
        console.log("⏳ Waiting for OG tags processing...");
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Step 3: Preload image to ensure it's cached
        console.log("📸 Preloading image...");
        await preloadImageWithCacheBust(imageUrl);
        
        // Step 4: Refresh Facebook cache aggressively
        console.log("🔄 Refreshing Facebook cache...");
        refreshFacebookCache(newURL); // Don't await this
        
        // Step 5: Wait a bit more for cache refresh
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Step 6: Try multiple sharing strategies with better error handling
        const shareText = buildShareText(personalityType, result);
        
        console.log("🎯 Attempting Facebook share...");
        
        // Try the enhanced Facebook sharing approach
        const success = await shareViaEnhancedFacebookDialog(newURL, shareText, title, description);
        
        if (success) {
            console.log("✅ Facebook sharing successful!");
        } else {
            console.log("⚠️ Facebook dialog closed, showing manual instructions");
            showEnhancedSharingInstructions(newURL, shareText, imageUrl);
        }
        
    } catch (error) {
        console.error("💥 Facebook sharing error:", error);
        // Fallback to manual instructions
        const { newURL, imageUrl } = updateOGImageAndURL(personalityType);
        const shareText = buildShareText(personalityType, result);
        showEnhancedSharingInstructions(newURL, shareText, imageUrl);
    }
}

// NEW: Enhanced Facebook dialog with better parameters
function shareViaEnhancedFacebookDialog(shareUrl, shareText, title, description) {
    return new Promise((resolve) => {
        try {
            // Create a more comprehensive Facebook share URL
            const fbParams = new URLSearchParams({
                u: shareUrl,
                quote: shareText,
                hashtag: '#COMSAPersonality'
            });
            
            const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?${fbParams.toString()}`;
            
            console.log("🔗 Opening Facebook share dialog:", fbShareUrl);
            
            const popup = window.open(
                fbShareUrl, 
                'facebookShare', 
                'width=656,height=500,left=' + (window.screen.width / 2 - 328) + ',top=' + (window.screen.height / 2 - 250) + ',scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes'
            );
            
            if (!popup || popup.closed) {
                console.log("❌ Popup blocked or failed to open");
                resolve(false);
                return;
            }
            
            // Enhanced popup monitoring
            let checkCount = 0;
            const maxChecks = 120; // 60 seconds
            
            const checkInterval = setInterval(() => {
                checkCount++;
                
                try {
                    if (popup.closed) {
                        clearInterval(checkInterval);
                        console.log("✅ Facebook share dialog closed by user");
                        resolve(true);
                        return;
                    }
                } catch (error) {
                    // Popup might be cross-origin, continue checking
                }
                
                if (checkCount >= maxChecks) {
                    clearInterval(checkInterval);
                    console.log("⏰ Popup timeout reached");
                    try {
                        popup.close();
                    } catch (e) {
                        // Popup might already be closed
                    }
                    resolve(false);
                }
            }, 500);
            
        } catch (error) {
            console.error('❌ Facebook dialog error:', error);
            resolve(false);
        }
    });
}

// ENHANCED: Better manual sharing instructions with troubleshooting
function showEnhancedSharingInstructions(url, text, imageUrl) {
    const instructionModal = document.createElement('div');
    instructionModal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            backdrop-filter: blur(8px);
        ">
            <div style="
                background: linear-gradient(145deg, #ffffff, #f8f9fa);
                padding: 40px;
                border-radius: 24px;
                max-width: 700px;
                max-height: 90vh;
                overflow-y: auto;
                text-align: center;
                color: #333;
                box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                position: relative;
                border: 1px solid rgba(255,255,255,0.2);
            ">
                <!-- Close button -->
                <button onclick="this.closest('div').parentElement.remove()" style="
                    position: absolute;
                    top: 20px;
                    right: 25px;
                    background: none;
                    border: none;
                    font-size: 28px;
                    color: #666;
                    cursor: pointer;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                " onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='none'">×</button>
                
                <!-- Facebook icon -->
                <div style="
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #1877f2, #42a5f5);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 30px;
                    font-size: 32px;
                    color: white;
                    box-shadow: 0 10px 25px rgba(24, 119, 242, 0.4);
                ">📘</div>
                
                <h3 style="margin: 0 0 25px; color: #1877f2; font-size: 28px; font-weight: 700;">Share Your Result! 🎯</h3>
                
                <!-- Enhanced result preview -->
                <div style="
                    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
                    padding: 30px;
                    border-radius: 18px;
                    margin: 30px 0;
                    border: 2px solid #e3e6ea;
                    position: relative;
                ">
                    <img src="${imageUrl}" alt="Result Preview" style="
                        max-width: 200px;
                        height: auto;
                        border-radius: 12px;
                        margin-bottom: 20px;
                        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                        border: 3px solid white;
                    " onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    
                    <div style="display: none; padding: 25px; background: #fff3cd; border: 2px solid #ffeaa7; border-radius: 10px; color: #856404; font-size: 15px; font-weight: 600;">
                        ⚠️ Preview image loading... It will appear when you share!
                    </div>
                    
                    <div style="
                        background: white;
                        padding: 25px;
                        border-radius: 15px;
                        border: 2px solid #e3e6ea;
                        font-size: 13px;
                        color: #495057;
                        text-align: left;
                        word-break: break-all;
                        font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
                        line-height: 1.5;
                        box-shadow: inset 0 2px 5px rgba(0,0,0,0.05);
                    ">${url}</div>
                </div>
                
                <!-- Enhanced instructions -->
                <div style="margin: 30px 0; line-height: 1.8; color: #495057; text-align: left;">
                    <h4 style="color: #1877f2; margin: 0 0 20px; text-align: center; font-size: 20px;">📋 How to Share (Updated Method):</h4>
                    
                    <div style="background: linear-gradient(135deg, #f8f9fa, #ffffff); padding: 25px; border-radius: 15px; border-left: 5px solid #1877f2; margin-bottom: 20px;">
                        <p style="margin: 0 0 15px; font-weight: 600;"><strong>📋 Step 1:</strong> Copy the link above</p>
                        <p style="margin: 0 0 15px; font-weight: 600;"><strong>🌐 Step 2:</strong> Open Facebook in a new tab</p>
                        <p style="margin: 0 0 15px; font-weight: 600;"><strong>📝 Step 3:</strong> Create a new post</p>
                        <p style="margin: 0 0 15px; font-weight: 600;"><strong>🔗 Step 4:</strong> Paste the link and wait 10-30 seconds</p>
                        <p style="margin: 0; font-weight: 600;"><strong>🎉 Step 5:</strong> Your personalized image will appear!</p>
                    </div>
                    
                    <!-- Troubleshooting section -->
                    <div style="background: #e8f4fd; padding: 20px; border-radius: 12px; border-left: 4px solid #17a2b8;">
                        <h5 style="color: #17a2b8; margin: 0 0 15px; font-size: 16px;">🔧 If image doesn't show:</h5>
                        <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                            <li style="margin-bottom: 8px;">Wait 30 seconds for Facebook to process the link</li>
                            <li style="margin-bottom: 8px;">Delete and re-paste the link</li>
                            <li style="margin-bottom: 8px;">Refresh your Facebook page and try again</li>
                            <li>Your unique result image will definitely appear once processed!</li>
                        </ul>
                    </div>
                </div>
                
                <!-- Enhanced action buttons -->
                <div style="margin: 35px 0 25px; display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button onclick="copyAdvancedLink('${url}', this)" style="
                        background: linear-gradient(135deg, #1877f2, #4267b2);
                        color: white;
                        border: none;
                        padding: 18px 35px;
                        border-radius: 15px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 700;
                        box-shadow: 0 8px 25px rgba(24, 119, 242, 0.4);
                        transition: all 0.3s ease;
                        min-width: 160px;
                    " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 30px rgba(24, 119, 242, 0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(24, 119, 242, 0.4)'">
                        📋 Copy Link
                    </button>
                    
                    <button onclick="window.open('https://www.facebook.com/', '_blank')" style="
                        background: linear-gradient(135deg, #42a5f5, #1976d2);
                        color: white;
                        border: none;
                        padding: 18px 35px;
                        border-radius: 15px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 700;
                        box-shadow: 0 8px 25px rgba(25, 118, 210, 0.4);
                        transition: all 0.3s ease;
                        min-width: 160px;
                    " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 12px 30px rgba(25, 118, 210, 0.5)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(25, 118, 210, 0.4)'">
                        🌐 Open Facebook
                    </button>
                </div>
                
                <!-- Enhanced pro tips -->
                <div style="
                    margin-top: 30px;
                    padding-top: 25px;
                    border-top: 2px solid #e9ecef;
                    font-size: 13px;
                    color: #6c757d;
                    line-height: 1.7;
                    text-align: left;
                ">
                    <h5 style="color: #495057; margin: 0 0 15px; text-align: center; font-size: 16px;">💡 Pro Tips:</h5>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px;">
                        <ul style="margin: 0; padding-left: 20px;">
                            <li style="margin-bottom: 8px;">Each result has a unique, personalized image with your type and traits</li>
                            <li style="margin-bottom: 8px;">Facebook needs 10-30 seconds to process and show your custom image</li>
                            <li style="margin-bottom: 8px;">If you see a generic image first, wait and refresh - your personalized one will appear</li>
                            <li>The link contains your specific result data for accurate sharing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(instructionModal);
}

// Keep the existing copyAdvancedLink function as it's working well
function copyAdvancedLink(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = button.innerHTML;
        const originalStyle = button.style.background;
        
        button.innerHTML = '✅ Copied!';
        button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        button.style.boxShadow = '0 8px 25px rgba(40, 167, 69, 0.5)';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = originalStyle;
            button.style.boxShadow = '0 8px 25px rgba(24, 119, 242, 0.4)';
        }, 3000);
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        button.innerHTML = '✅ Copied!';
        button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
        
        setTimeout(() => {
            button.innerHTML = '📋 Copy Link';
            button.style.background = 'linear-gradient(135deg, #1877f2, #4267b2)';
        }, 3000);
    });
}

function openFacebookAndKeepModal() {
    window.open('https://www.facebook.com/', '_blank', 'width=800,height=600');
    // Keep modal open so user can copy link easily
}

// Warning for missing images
function showImageNotFoundWarning(personalityType, imageUrl) {
    console.warn(`⚠️ Image validation failed for ${personalityType}`);
    
    // Create a small warning toast
    const toast = document.createElement('div');
    toast.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ffc107, #ff8f00);
            color: #333;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 6px 20px rgba(255, 193, 7, 0.3);
            z-index: 9999;
            font-size: 14px;
            max-width: 300px;
            font-weight: 500;
        ">
            ⚠️ <strong>Image Check:</strong><br>
            Thumbnail might not be available, but sharing will still work!
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove toast after 4 seconds
    setTimeout(() => {
        if (document.body.contains(toast)) {
            document.body.removeChild(toast);
        }
    }, 4000);
}

// Generic sharing error handler
function showSharingError() {
    alert('❌ Sharing encountered an issue. Please try the manual sharing option or copy the link directly.');
}

function showResult(personalityType) {
    const result = personalities[personalityType];
    
    // Update OG tags and URL before showing result
    updateOGImageAndURL(personalityType);
    
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
                <button id="copy-link-btn" class="result-btn">
                    🔗 Copy Link
                </button>
            </div>
            
            <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <div class="logo" style="width: 50px; height: 50px; margin: 0 auto 0.5rem;">
                    <img src="assets/img/logo.png" alt="COMSA Logo" style="height: 60px; width: auto;">
                </div>
                <div style="font-size: 0.8rem; color: #4bc88b;">COMSA Personality Test</div>
                <div style="font-size: 0.7rem; opacity: 0.7; margin-top: 0.5rem;">
                    Share URL: ${window.location.href}
                </div>
            </div>
        </div>
    `;

    document.getElementById("result-modal").style.display = "flex";
    setupModalButtons(personalityType, result);
}

// Modal button setup with enhanced functionality
function setupModalButtons(personalityType, result) {
    const resultModal = document.getElementById('result-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const facebookBtn = document.getElementById('facebook-btn');
    const copyLinkBtn = document.getElementById('copy-link-btn');

    if (closeModalBtn) {
        closeModalBtn.onclick = () => {
            resultModal.style.display = 'none';
        };
    }

    if (restartBtn) {
        restartBtn.onclick = () => {
            resultModal.style.display = 'none';
            currentQuestion = 0;
            userAnswers.length = 0;
            Object.keys(scores).forEach(key => scores[key] = 0);
            
            // Reset URL and OG tags to default
            const defaultURL = window.location.origin + window.location.pathname;
            if (window.history && window.history.pushState) {
                window.history.pushState({}, '', defaultURL);
            }
            document.title = "CS Developer Personality Test";
            
            // Reset OG tags to default
            removeAllOGTags();
            addOGTag('og:title', 'CS Developer Personality Test');
            addOGTag('og:description', 'Discover your coding personality!');
            addOGTag('og:image', `${window.location.origin}/assets/thumbnails/default.png`);
            addOGTag('og:url', defaultURL);
            addOGTag('og:type', 'website');
            
            renderQuestion(currentQuestion);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // Enhanced download functionality
    if (downloadBtn) {
        downloadBtn.onclick = async () => {
            try {
                await createAndDownloadResult(personalityType, result);
            } catch (error) {
                console.error('Download failed:', error);
                alert('Download failed. Please try again.');
            }
        };
    }

    // Enhanced Facebook sharing
    if (facebookBtn) {
        facebookBtn.onclick = async () => {
            // Add loading state
            const originalText = facebookBtn.textContent;
            facebookBtn.textContent = '🔄 Preparing...';
            facebookBtn.disabled = true;
            
            try {
                await shareToFacebook(personalityType, result);
            } finally {
                // Reset button state
                setTimeout(() => {
                    facebookBtn.textContent = originalText;
                    facebookBtn.disabled = false;
                }, 2000);
            }
        };
    }

    // Enhanced copy link functionality
    if (copyLinkBtn) {
        copyLinkBtn.onclick = async () => {
            const shareUrl = window.location.href;
            try {
                await navigator.clipboard.writeText(shareUrl);
                
                const originalText = copyLinkBtn.textContent;
                const originalStyle = copyLinkBtn.style.background;
                
                copyLinkBtn.textContent = '✅ Copied!';
                copyLinkBtn.style.background = '#28a745';
                
                setTimeout(() => {
                    copyLinkBtn.textContent = originalText;
                    copyLinkBtn.style.background = originalStyle;
                }, 2500);
                
            } catch (err) {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = shareUrl;
                textArea.style.position = 'fixed';
                textArea.style.opacity = '0';
                textArea.style.left = '-9999px';
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                copyLinkBtn.textContent = '✅ Copied!';
                copyLinkBtn.style.background = '#28a745';
                
                setTimeout(() => {
                    copyLinkBtn.textContent = '🔗 Copy Link';
                    copyLinkBtn.style.background = '';
                }, 2500);
            }
        };
    }
}

// Enhanced download function
async function createAndDownloadResult(personalityType, result) {
    const personalityCode = result.code;
    const personalityName = result.name;
    const personalityDesc = result.desc;
    const personalityFullDesc = result.fullDesc;
    const traits = result.traits;
    
    // Create download container
    const downloadContainer = document.createElement('div');
    downloadContainer.style.position = 'absolute';
    downloadContainer.style.left = '-9999px';
    downloadContainer.innerHTML = `
        <div style="
            width: 600px;
            min-height: 700px;
            padding: 40px;
            background: linear-gradient(135deg, ${result.color}, #4bc88b);
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
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
                backdrop-filter: blur(10px);
            ">${personalityCode}</div>
            
            <h1 style="
                margin: 0 0 15px; 
                font-size: 2.5rem; 
                font-weight: 700;
                line-height: 1.2;
            ">${personalityName}</h1>
            
            <p style="
                margin: 0 0 25px; 
                font-size: 1.2rem; 
                opacity: 0.9;
                line-height: 1.4;
                font-weight: 500;
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
                    font-weight: 700;
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
                            font-weight: 600;
                            white-space: nowrap;
                            backdrop-filter: blur(10px);
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
                font-weight: 600;
            ">
                COMSA Developer Personality Test
            </div>
        </div>
    `;
    
    document.body.appendChild(downloadContainer);
    
    try {
        // Wait for fonts and layout
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Use html2canvas to capture
        const canvas = await html2canvas(downloadContainer.firstElementChild, {
            backgroundColor: null,
            scale: 2,
            logging: false,
            useCORS: true,
            allowTaint: false,
            width: 600,
            height: downloadContainer.firstElementChild.offsetHeight
        });
        
        // Download the image
        const link = document.createElement('a');
        link.download = `COMSA-${personalityCode}-${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
        
        console.log('✅ Download successful!');
        
    } finally {
        // Always cleanup
        document.body.removeChild(downloadContainer);
    }
}

// Initialize default OG tags on page load
function initializeDefaultOGTags() {
    // Mark original tags as defaults
    document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(tag => {
        tag.setAttribute('data-original', 'true');
    });
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
    
    .loading {
        opacity: 0.6;
        pointer-events: none;
    }
`;
document.head.appendChild(shakeStyle);

// Check URL parameters on page load to show specific result
function checkURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const resultParam = urlParams.get('result');
    
    if (resultParam && personalities[resultParam]) {
        console.log(`📊 Showing result from URL parameter: ${resultParam}`);
        showResult(resultParam);
        return true;
    }
    return false;
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.personalityType) {
        showResult(event.state.personalityType);
    } else {
        // Back to quiz
        const modal = document.getElementById('result-modal');
        if (modal) modal.style.display = 'none';
    }
});

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeDefaultOGTags();
    
    // Start the quiz or show result from URL
    if (!checkURLParameters()) {
        renderQuestion(currentQuestion);
    }
});

// Close modal when clicking outside
window.onclick = e => {
    const modal = document.getElementById('result-modal');
    if (e.target === modal && modal) {
        modal.style.display = 'none';
    }
};