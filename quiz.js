// Show detailed view of a specific personality
function showPersonalityDetails(personalityCode) {
    const personality = personalities[personalityCode];
    if (!personality) return;
    
    const modal = document.createElement('div');
    modal.innerHTML = `
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
            z-index: 10001;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.3s ease-out;
            overflow-y: auto;
            padding: 20px;
        ">
            <div style="
                background: linear-gradient(135deg, ${personality.color}, ${personality.color}dd);
                padding: 40px 30px;
                border-radius: 24px;
                max-width: 800px;
                max-height: 95vh;
                overflow-y: auto;
                color: white;
                box-shadow: 0 30px 80px rgba(0,0,0,0.4);
                position: relative;
                text-align: center;
                width: 100%;
            ">
                <button onclick="this.closest('div').parentElement.remove()" style="
                    position: absolute;
                    top: 20px;
                    right: 25px;
                    background: rgba(255,255,255,0.2);
                    border: none;
                    font-size: 24px;
                    color: white;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                    backdrop-filter: blur(10px);
                    z-index: 10002;
                " onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">×</button>
                
                <div style="
                    width: 100px;
                    height: 100px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: bold;
                    margin: 0 auto 30px;
                    backdrop-filter: blur(10px);
                ">
                    <img src="assets/thumbnails/${personality.code}-128.png"
                         alt="${personality.name}"
                         style="width: 100%; height: 100%; object-fit: contain;"
                         onerror="this.style.display='none'; this.parentElement.textContent='${personality.code}';">
                </div>
                
                <h2 style="
                    margin: 0 0 15px; 
                    font-size: 32px; 
                    font-weight: 700;
                    line-height: 1.2;
                ">${personality.name}</h2>
                
                <p style="
                    margin: 0 0 25px; 
                    font-size: 18px; 
                    opacity: 0.9;
                    line-height: 1.4;
                    font-weight: 500;
                ">${personality.desc}</p>
                
                <p style="
                    margin: 0 0 35px; 
                    font-size: 16px; 
                    line-height: 1.6; 
                    opacity: 0.85;
                ">${personality.fullDesc}</p>
                
                <div style="margin-bottom: 40px;">
                    <h3 style="
                        margin: 0 0 20px; 
                        font-size: 20px;
                        font-weight: 700;
                    ">Your Key Traits:</h3>
                    <div style="
                        display: flex; 
                        flex-wrap: wrap; 
                        justify-content: center; 
                        gap: 12px;
                    ">
                        ${personality.traits.map(trait => `
                            <span style="
                                background: rgba(255,255,255,0.2);
                                padding: 10px 18px;
                                border-radius: 25px;
                                font-size: 14px;
                                font-weight: 600;
                                white-space: nowrap;
                                backdrop-filter: blur(10px);
                            ">${trait}</span>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Compatible Personalities Section -->
                <div style="margin-bottom: 40px;">
                    <h3 style="
                        margin: 0 0 25px; 
                        font-size: 20px;
                        font-weight: 700;
                        text-align: center;
                    ">Related CS Branches:</h3>
                    
                    <div style="
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                        flex-wrap: wrap;
                        margin-bottom: 20px;
                    ">
                        ${personality.compatibility.map(comp => {
                            const compatiblePersonality = personalities[comp.type];
                            return `
                                <div style="
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    cursor: pointer;
                                    transition: all 0.3s ease;
                                    gap: 8px;
                                " onclick="event.stopPropagation(); this.closest('div').parentElement.remove(); showPersonalityDetails('${comp.type}')" onmouseover="this.style.transform='translateY(-3px) scale(1.05)'" onmouseout="this.style.transform='translateY(0) scale(1)'">
                                    <!-- Compatible Personality Avatar -->
                                    <div style="
                                        width: 80px;
                                        height: 80px;
                                        background: linear-gradient(135deg, ${compatiblePersonality.color}, ${compatiblePersonality.color}aa);
                                        border-radius: 50%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 16px;
                                        font-weight: bold;
                                        color: white;
                                        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
                                        border: 3px solid rgba(255,255,255,0.3);
                                        backdrop-filter: blur(10px);
                                        overflow: hidden;
                                    ">
                                        <img src="assets/thumbnails/${comp.type}-128.png"
                                             alt="${compatiblePersonality.name}" 
                                             style="
                                                width: 100%;
                                                height: 100%;
                                                object-fit: cover;
                                                border-radius: 50%;
                                             "
                                             onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size: 16px; font-weight: bold; color: white;\\'>${comp.type}</span>';">
                                    </div>
                                    
                                    <!-- Name and Description -->
                                    <div style="text-align: center;">
                                        <div style="
                                            font-size: 14px;
                                            font-weight: 700;
                                            color: white;
                                            margin-bottom: 2px;
                                        ">${compatiblePersonality.name}</div>
                                        <div style="
                                            font-size: 11px;
                                            opacity: 0.8;
                                            color: white;
                                            line-height: 1.3;
                                            max-width: 120px;
                                        ">${compatiblePersonality.desc.split(' • ')[0]} • ${compatiblePersonality.desc.split(' • ')[1]}</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto-remove after clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// COMPLETE FACEBOOK SHARING SOLUTION
// Replace your existing JavaScript with this enhanced version

// Quiz questions and branch profiles are defined in branch-data.js.

let currentQuestion = 0;
const userAnswers = [];
const branchOrder = Object.keys(personalities);
const scores = Object.fromEntries(branchOrder.map(code => [code, 0]));
let lastRankedTypes = [];
let autoAdvanceTimer = null;
let reviewMode = false;

const form = document.getElementById("quiz-form");
const container = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const progress = document.getElementById("progress");
const progressFill = document.getElementById("progress-fill");
const introScreen = document.getElementById("intro-screen");
const outcomePreviewGrid = document.getElementById("outcome-preview-grid");
const startQuizBtn = document.getElementById("start-quiz-btn");
const gameStartOverlay = document.getElementById("game-start-overlay");
const introCharacterStage = document.getElementById("intro-character-stage");
const loadingCharacterStage = document.getElementById("loading-character-stage");

const CANONICAL_SITE_URL = 'https://comsa-quiz.vercel.app';
const SHARE_ASSET_VERSION = '20260717-fb3';

function getSiteBaseUrl() {
    const host = window.location.hostname;
    // Facebook cannot scrape localhost/private LAN URLs
    if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local')) {
        return CANONICAL_SITE_URL;
    }
    return window.location.origin;
}

function updateProgress() {
    const percentage = ((currentQuestion + 1) / questions.length) * 100;
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    progressFill.style.width = `${percentage}%`;
}

function renderOutcomePreviews() {
    if (!outcomePreviewGrid || outcomePreviewGrid.childElementCount) return;

    outcomePreviewGrid.innerHTML = Object.values(personalities).map(personality => `
        <article class="outcome-preview-card" onclick="showPersonalityDetails('${personality.code}')">
            <div class="outcome-preview-character" style="--outcome-color: ${personality.color};">
                <img src="assets/thumbnails/${personality.code}-128.png?v=${SHARE_ASSET_VERSION}"
                     alt="${personality.name}"
                     loading="lazy">
            </div>
            <span class="outcome-preview-code">${personality.code}</span>
            <h3>${personality.name}</h3>
            <h4>${personality.branch}</h4>
            <p>${personality.fullDesc}</p>
            <span class="outcome-preview-link">View details</span>
        </article>
    `).join('');
}

function renderCharacterStages() {
    const stages = [introCharacterStage, loadingCharacterStage].filter(Boolean);
    if (!stages.length || stages.every(stage => stage.childElementCount)) return;

    const cast = Object.values(personalities);
    const rows = [
        { className: 'stage-row-back', startIndex: 0, characters: cast.slice(0, 5) },
        { className: 'stage-row-middle', startIndex: 5, characters: cast.slice(5, 11) },
        { className: 'stage-row-front', startIndex: 11, characters: cast.slice(11) }
    ];

    const stageMarkup = rows.map(row => `
        <div class="character-stage-row ${row.className}">
            ${row.characters.map((personality, characterIndex) => {
                const castIndex = row.startIndex + characterIndex;
                return `
                    <span class="stage-character" style="--cast-index: ${castIndex}; --cast-color: ${personality.color};">
                        <img src="assets/thumbnails/${personality.code}-hd.png?v=20260717-stage4"
                             alt=""
                             draggable="false">
                    </span>
                `;
            }).join('')}
        </div>
    `).join('');

    stages.forEach(stage => {
        if (!stage.childElementCount) stage.innerHTML = stageMarkup;
    });
}

function showIntroScreen() {
    renderCharacterStages();
    if (introCharacterStage) introCharacterStage.style.display = 'block';
    renderOutcomePreviews();
    form.style.display = 'none';
    introScreen.style.display = 'block';
    gameStartOverlay.classList.remove('is-active');
    gameStartOverlay.setAttribute('aria-hidden', 'true');
    startQuizBtn.disabled = false;
}

function startQuiz() {
    if (startQuizBtn.disabled) return;

    startQuizBtn.disabled = true;
    gameStartOverlay.classList.add('is-active');
    gameStartOverlay.setAttribute('aria-hidden', 'false');

    if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }

    const transitionDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 250 : 1900;

    setTimeout(() => {
        currentQuestion = 0;
        userAnswers.length = 0;
        Object.keys(scores).forEach(key => scores[key] = 0);
        lastRankedTypes = [];
        reviewMode = false;

        introScreen.style.display = 'none';
        if (introCharacterStage) introCharacterStage.style.display = 'none';
        form.style.display = 'block';
        gameStartOverlay.classList.remove('is-active');
        gameStartOverlay.setAttribute('aria-hidden', 'true');
        startQuizBtn.disabled = false;

        if (window.history && window.history.replaceState) {
            window.history.replaceState({}, '', window.location.pathname);
        }

        renderQuestion(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, transitionDuration);
}

if (startQuizBtn) {
    startQuizBtn.addEventListener('click', startQuiz);
}

function renderQuestion(index) {
    const q = questions[index];
    
    container.classList.add('loading');
    
    setTimeout(() => {
        container.innerHTML = '';
        
        const qDiv = document.createElement("div");
        qDiv.className = "question";
        qDiv.innerHTML = `
            <span class="question-kind">${q.kind || 'INTERESTS & PREFERENCES'}</span>
            <h3>${index + 1}. ${q.q}</h3>
        `;

        const choicesContainer = document.createElement("div");
        choicesContainer.className = "branch-choices";

        q.options.forEach((answer, optionIndex) => {
            const option = document.createElement("div");
            option.className = "branch-choice";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `question_${index}`;
            radio.value = optionIndex;
            radio.id = `q${index}_${optionIndex}`;

            const label = document.createElement("label");
            label.setAttribute("for", `q${index}_${optionIndex}`);
            label.innerHTML = `
                <span class="choice-letter">${String.fromCharCode(65 + optionIndex)}</span>
                <span class="choice-text">${answer.text}</span>
            `;

            option.appendChild(radio);
            option.appendChild(label);

            radio.addEventListener('change', () => selectOption(optionIndex, index));
            choicesContainer.appendChild(option);
        });

        qDiv.appendChild(choicesContainer);
        container.appendChild(qDiv);

        // Show previously selected answer
        if (userAnswers[index] !== undefined) {
            const selectedRadio = container.querySelector(`input[value="${userAnswers[index]}"]`);
            if (selectedRadio) {
                selectedRadio.checked = true;
                selectedRadio.closest('.branch-choice').classList.add('selected');
            }
        }

        updateProgress();
        updateButtons();
        container.classList.remove('loading');
    }, 150);
}

function allQuestionsAnswered() {
    if (userAnswers.length < questions.length) return false;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === undefined) return false;
    }
    return true;
}

function selectOption(value, questionIndex) {
    // Remove previous selection styling
    container.querySelectorAll('.branch-choice').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection styling
    const selectedOption = container.querySelector(`input[value="${value}"]`).parentElement;
    selectedOption.classList.add('selected');
    
    userAnswers[questionIndex] = value;
    
    if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }

    // Auto-advance / auto-finish after a short delay
    autoAdvanceTimer = setTimeout(() => {
        autoAdvanceTimer = null;

        // If user has already answered everything, immediately show result.
        if (allQuestionsAnswered()) {
            calculateResult();
            return;
        }

        // Otherwise proceed to the next question as usual.
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            reviewMode = reviewMode && userAnswers[currentQuestion] !== undefined;
            renderQuestion(currentQuestion);
        }
    }, 800);
}

function updateButtons() {
    nextBtn.textContent = (currentQuestion === questions.length - 1) ? "Get My Result 🎯" : "Next →";
    const canReviewForward = reviewMode && userAnswers[currentQuestion] !== undefined;
    nextBtn.style.display = canReviewForward ? "inline-flex" : "none";
    backBtn.disabled = (currentQuestion === 0);
}

nextBtn.addEventListener("click", () => {
    if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }

    if (userAnswers[currentQuestion] === undefined) {
        container.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => container.style.animation = '', 500);
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        reviewMode = userAnswers[currentQuestion] !== undefined;
        renderQuestion(currentQuestion);
    } else {
        calculateResult();
    }
});

backBtn.addEventListener("click", () => {
    if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }

    if (currentQuestion > 0) {
        reviewMode = true;
        currentQuestion--;
        renderQuestion(currentQuestion);
    }
});

function calculateResult() {
    // Reset scores
    Object.keys(scores).forEach(key => scores[key] = 0);
    const primaryCounts = Object.fromEntries(branchOrder.map(code => [code, 0]));

    // Every selected answer gives three points to its primary branch and
    // one point to a closely related branch.
    questions.forEach((question, index) => {
        const selectedIndex = userAnswers[index];
        const selectedOption = question.options[selectedIndex];
        if (!selectedOption) return;

        scores[selectedOption.branch] += 3;
        primaryCounts[selectedOption.branch] += 1;
        if (selectedOption.related && scores[selectedOption.related] !== undefined) {
            scores[selectedOption.related] += 1;
        }
    });

    // Stable ordering makes ties deterministic: total score, primary choices,
    // then the published branch order.
    lastRankedTypes = [...branchOrder].sort((a, b) =>
        scores[b] - scores[a] ||
        primaryCounts[b] - primaryCounts[a] ||
        branchOrder.indexOf(a) - branchOrder.indexOf(b)
    );

    showResult(lastRankedTypes[0], lastRankedTypes);
}

// ================================
// FACEBOOK SHARING - UNDER CONSTRUCTION
// ================================

// Show "Under Construction" modal for Facebook sharing
function showUnderConstructionModal() {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.3s ease-out;
        ">
            <div style="
                background: linear-gradient(135deg, #ffffff, #f8f9fa);
                padding: 50px 40px;
                border-radius: 24px;
                max-width: 500px;
                text-align: center;
                color: #333;
                box-shadow: 0 30px 80px rgba(0,0,0,0.25);
                position: relative;
                transform: scale(0.8);
                animation: popIn 0.4s ease-out 0.1s forwards;
            ">
                <button onclick="this.closest('div').parentElement.remove()" style="
                    position: absolute;
                    top: 20px;
                    right: 25px;
                    background: none;
                    border: none;
                    font-size: 28px;
                    color: #666;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                " onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='none'">×</button>
                
                <div style="
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(135deg, #ff6b35, #f39c12);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 30px;
                    font-size: 40px;
                    color: white;
                    box-shadow: 0 15px 35px rgba(255, 107, 53, 0.4);
                    animation: bounce 2s infinite;
                ">🚧</div>
                
                <h2 style="
                    margin: 0 0 20px; 
                    color: #2c3e50; 
                    font-size: 32px; 
                    font-weight: 700;
                    line-height: 1.2;
                ">Under Construction!</h2>
                
                <p style="
                    margin: 0 0 30px; 
                    color: #5a6c7d; 
                    font-size: 18px; 
                    line-height: 1.6;
                    font-weight: 400;
                ">We're working hard to bring you Facebook sharing functionality. Stay tuned for updates!</p>
                
                <div style="
                    background: linear-gradient(135deg, #e8f4fd, #f0f8ff);
                    padding: 25px;
                    border-radius: 15px;
                    margin: 30px 0;
                    border: 2px solid #bee5eb;
                ">
                    <h4 style="
                        color: #0c5460; 
                        margin: 0 0 15px; 
                        font-size: 16px;
                        font-weight: 600;
                    ">🔧 In the meantime:</h4>
                    <ul style="
                        margin: 0; 
                        padding-left: 20px; 
                        color: #0c5460; 
                        font-size: 14px;
                        line-height: 1.8;
                        text-align: left;
                    ">
                        <li>Download your result as an image</li>
                        <li>Copy the link to share manually</li>
                        <li>Take a screenshot to share on social media</li>
                    </ul>
                </div>
                
                <button onclick="this.closest('div').parentElement.remove()" style="
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 12px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: 600;
                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
                    transition: all 0.3s ease;
                    min-width: 140px;
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 35px rgba(102, 126, 234, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 25px rgba(102, 126, 234, 0.3)'">Got it! 👍</button>
            </div>
        </div>
    `;
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes popIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
            40%, 43% { transform: translateY(-10px); }
            70% { transform: translateY(-5px); }
            90% { transform: translateY(-2px); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(modal);
    
    // Auto-remove after clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
            style.remove();
        }
    });
    
    // Remove styles when modal is removed
    setTimeout(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.removedNodes.forEach((node) => {
                    if (node === modal && style.parentNode) {
                        style.remove();
                        observer.disconnect();
                    }
                });
            });
        });
        observer.observe(document.body, { childList: true });
    }, 100);
}

function shareToFacebook(personalityType) {
    // Always share the production URL so Facebook can scrape OG tags/thumbnail
    const sharePageUrl = `${CANONICAL_SITE_URL}/share/${encodeURIComponent(personalityType)}.html?v=${SHARE_ASSET_VERSION}`;
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(sharePageUrl)}`;

    window.open(fbShareUrl, '_blank', 'noopener,noreferrer,width=600,height=700');
}

// Remove all dynamic meta tags
function removeAllMetaTags() {
    const selectors = [
        'meta[property^="og:"]',
        'meta[name^="twitter:"]',
        'meta[property^="fb:"]',
        'meta[property^="article:"]'
    ];
    
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(tag => {
            if (!tag.hasAttribute('data-original')) {
                tag.remove();
            }
        });
    });
}

// Add meta tag with priority placement
function addMetaTag(property, content, attributeType = 'property') {
    if (!content) return;
    
    const meta = document.createElement('meta');
    meta.setAttribute(attributeType, property);
    meta.content = content;
    meta.setAttribute('data-dynamic', 'true');
    meta.setAttribute('data-timestamp', Date.now().toString());
    
    // Insert at the very beginning of head
    const firstChild = document.head.firstChild;
    if (firstChild) {
        document.head.insertBefore(meta, firstChild);
    } else {
        document.head.appendChild(meta);
    }
}

// MAIN FUNCTION: Update OG tags and URL
function updateOGImageAndURL(personalityType) {
    const result = personalities[personalityType];
    if (!result) return;

    // Create unique URL with aggressive cache busting
    const timestamp = Date.now();
    const randomId = Math.random().toString(36).substr(2, 9);
    const sessionId = Math.random().toString(36).substr(2, 5);
    const baseUrl = getSiteBaseUrl() + window.location.pathname;
    
    // Multiple parameters to force Facebook to treat as new content
    const newURL = `${baseUrl}?result=${personalityType}&v=${timestamp}&r=${randomId}&s=${sessionId}&fb=1`;

    // Image URL with cache busting
    const imageUrl = `${getSiteBaseUrl()}/assets/thumbnails/${personalityType}-facebook.png?v=${SHARE_ASSET_VERSION}`;
    
    const title = `${result.branch}: ${result.name} - COMSA CS Branch Quiz`;
    const description = `${result.desc} - ${result.fullDesc.substring(0, 120)}...`;

    console.log(`🔄 Updating OG tags for ${personalityType}`);
    console.log(`📸 Image URL: ${imageUrl}`);
    console.log(`🔗 Share URL: ${newURL}`);

    // Step 1: Remove all existing OG tags
    removeAllMetaTags();
    
    // Step 2: Wait for cleanup then add new tags
    setTimeout(() => {
        // Essential OG tags for Facebook
        addMetaTag('og:title', title);
        addMetaTag('og:description', description);
        addMetaTag('og:image', imageUrl);
        addMetaTag('og:image:secure_url', imageUrl.replace('http://', 'https://'));
        addMetaTag('og:image:width', '1200');
        addMetaTag('og:image:height', '630');
        addMetaTag('og:image:type', 'image/png');
        addMetaTag('og:url', newURL);
        addMetaTag('og:type', 'website');
        addMetaTag('og:site_name', 'COMSA Computer Science Branch Quiz');
        addMetaTag('og:updated_time', new Date().toISOString());
        
        // Facebook specific tags
        addMetaTag('fb:app_id', '2964994887030908');
        addMetaTag('article:modified_time', new Date().toISOString());
        
        // Twitter Cards for fallback
        addMetaTag('twitter:card', 'summary_large_image', 'name');
        addMetaTag('twitter:title', title, 'name');
        addMetaTag('twitter:description', description, 'name');
        addMetaTag('twitter:image', imageUrl, 'name');

        // Update page title
        document.title = title;
        
        // Update URL in browser
        if (window.history && window.history.pushState) {
            const historyURL = `${window.location.pathname}${new URL(newURL).search}`;
            window.history.pushState({personalityType}, '', historyURL);
        }
        
        console.log('✅ OG tags updated successfully');
        
    }, 100);

    return { newURL, imageUrl, title, description };
}

// Show personality gallery modal
function showPersonalityGallery() {
    const modal = document.createElement('div');
    modal.innerHTML = `
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
            backdrop-filter: blur(10px);
            animation: fadeIn 0.3s ease-out;
            overflow-y: auto;
        ">
            <div style="
                background: linear-gradient(135deg, #ffffff, #f8f9fa);
                padding: 40px 30px;
                border-radius: 24px;
                max-width: 95vw;
                max-height: 95vh;
                overflow-y: auto;
                color: #333;
                box-shadow: 0 30px 80px rgba(0,0,0,0.25);
                position: relative;
                margin: 20px;
            ">
                <button onclick="this.closest('div').parentElement.remove()" style="
                    position: absolute;
                    top: 20px;
                    right: 25px;
                    background: none;
                    border: none;
                    font-size: 28px;
                    color: #666;
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s ease;
                    z-index: 10001;
                " onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background='none'">×</button>
                
                <h2 style="
                    text-align: center;
                    margin: 0 0 30px; 
                    color: #2c3e50; 
                    font-size: 28px; 
                    font-weight: 700;
                    line-height: 1.2;
                ">All Computer Science Branches</h2>
                
                <p style="
                    text-align: center;
                    margin: 0 0 40px; 
                    color: #5a6c7d; 
                    font-size: 16px; 
                    line-height: 1.6;
                ">Explore all 16 computer science branches and discover where your interests can take you.</p>
                
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                ">
                    ${Object.entries(personalities).map(([code, personality]) => `
                        <div onclick="showPersonalityDetails('${code}')" style="
                            background: linear-gradient(135deg, ${personality.color}, ${personality.color}dd);
                            padding: 25px;
                            border-radius: 16px;
                            color: white;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                            position: relative;
                            overflow: hidden;
                        " onmouseover="this.style.transform='translateY(-5px) scale(1.02)'; this.style.boxShadow='0 15px 40px rgba(0,0,0,0.25)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 8px 25px rgba(0,0,0,0.15)'">
                            <div style="
                                width: 60px;
                                height: 60px;
                                background: rgba(255,255,255,0.2);
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 14px;
                                font-weight: bold;
                                margin: 0 auto 15px;
                                backdrop-filter: blur(10px);
                                overflow: hidden;
                            ">
                                <img src="assets/thumbnails/${personality.code}-128.png"
                                     alt="${personality.name}"
                                     style="width: 100%; height: 100%; object-fit: contain;"
                                     onerror="this.style.display='none'; this.parentElement.textContent='${personality.code}';">
                            </div>
                            
                            <h3 style="
                                margin: 0 0 10px;
                                font-size: 18px;
                                font-weight: 700;
                                text-align: center;
                                line-height: 1.3;
                            ">${personality.name}</h3>
                            
                            <p style="
                                margin: 0 0 15px;
                                font-size: 12px;
                                opacity: 0.9;
                                text-align: center;
                                line-height: 1.4;
                                font-weight: 500;
                            ">${personality.desc}</p>
                            
                            <p style="
                                margin: 0;
                                font-size: 11px;
                                opacity: 0.8;
                                text-align: center;
                                line-height: 1.4;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                overflow: hidden;
                            ">${personality.fullDesc}</p>
                            
                            <div style="
                                position: absolute;
                                bottom: 10px;
                                right: 15px;
                                font-size: 12px;
                                opacity: 0.7;
                                font-weight: 600;
                            ">Click to view →</div>
                        </div>
                    `).join('')}
                </div>

                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto-remove after clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// ================================
// MAIN RESULT DISPLAY FUNCTION
// ================================
function showResult(personalityType, rankedTypes = []) {
    const result = personalities[personalityType];
    if (!result) return;
    const closestMatches = rankedTypes
        .filter(type => type !== personalityType)
        .slice(0, 3)
        .map(type => ({
            type,
            relationship: `Quiz match: ${scores[type]} points`
        }));
    const compatibilityList = closestMatches.length
        ? closestMatches
        : (Array.isArray(result.compatibility) ? result.compatibility : []);
    const shareUrl = `${getSiteBaseUrl()}/share/${encodeURIComponent(personalityType)}.html?v=${SHARE_ASSET_VERSION}`;
    
    // Update OG tags and URL before showing result
    updateOGImageAndURL(personalityType);
    
    document.getElementById("result").innerHTML = `
        <div class="result-container">
            <div class="result-avatar" style="background: linear-gradient(45deg, ${result.color}, #4bc88b); overflow: hidden;">
                <img src="assets/thumbnails/${result.code}-128.png"
                     alt="${result.name}"
                     style="width: 100%; height: 100%; object-fit: contain;"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="personality-code" style="display: none;">${result.code}</div>
            </div>
            
            <h2 class="result-title">${result.name}</h2>
            <p class="result-branch">${result.branch}</p>
            <p class="result-subtitle">${result.desc}</p>
            <p class="result-description">${result.fullDesc}</p>
            
            <div class="traits-container">
                <h3>Your Key Traits:</h3>
                <div class="traits-grid">
                    ${result.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
                </div>
            </div>
            
            <!-- Compatible Personalities Section - 3 Column Layout -->
            ${compatibilityList.length ? `
                <div class="compatible-section">
                    <h3>${closestMatches.length ? 'Your Closest CS Branches:' : 'Related CS Branches:'}</h3>
                    <div class="compatible-personalities-grid">
                        ${compatibilityList.map(comp => {
                            const compatiblePersonality = personalities[comp.type];
                            if (!compatiblePersonality) return '';
                            const descParts = (compatiblePersonality.desc || '').split(' • ');
                            const shortDesc = descParts.length >= 2 ? `${descParts[0]} • ${descParts[1]}` : (compatiblePersonality.desc || '');
                            return `
                                <div class="compatible-item-card" onclick="showPersonalityDetails('${comp.type}')">
                                    <div class="compatible-avatar" style="background: linear-gradient(135deg, ${compatiblePersonality.color}, ${compatiblePersonality.color}aa);">
                                        <img src="assets/thumbnails/${comp.type}-128.png?v=${SHARE_ASSET_VERSION}"
                                             alt="${compatiblePersonality.name}"
                                             loading="lazy">
                                    </div>
                                    <div class="compatible-info-card">
                                        <div class="compatible-name">${compatiblePersonality.name}</div>
                                        <div class="compatible-desc-short">${shortDesc}</div>
                                        <div class="compatible-relationship">${comp.relationship || ''}</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            ` : ''}
            
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
                <button id="home-btn" class="result-btn">
                    ⌂ Back to Home
                </button>
            </div>
            
            <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <div class="logo" style="width: 50px; height: 50px; margin: 0 auto 0.5rem;">
                    <img src="assets/img/logo.png" alt="COMSA Logo" style="height: 60px; width: auto;">
                </div>
                <div style="font-size: 0.8rem; color: #4bc88b;">COMSA Personality Test</div>
                <div style="font-size: 0.7rem; opacity: 0.7; margin-top: 0.5rem;">
                    Share URL: ${shareUrl}
                </div>
            </div>
        </div>
    `;

    document.getElementById("result-modal").style.display = "flex";
    setupModalButtons(personalityType, result);
}

// ================================
// MODAL BUTTON SETUP
// ================================

function setupModalButtons(personalityType, result) {
    const resultModal = document.getElementById('result-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const facebookBtn = document.getElementById('facebook-btn');
    const homeBtn = document.getElementById('home-btn');
    const compatibilityBtn = document.getElementById('compatibility-btn');

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
            lastRankedTypes = [];
            reviewMode = false;
            introScreen.style.display = 'none';
            if (introCharacterStage) introCharacterStage.style.display = 'none';
            form.style.display = 'block';
            
            // Reset URL and OG tags to default
            const defaultURL = window.location.origin + window.location.pathname;
            if (window.history && window.history.pushState) {
                window.history.pushState({}, '', defaultURL);
            }
            document.title = "COMSA Computer Science Branch Quiz";
            
            // Reset OG tags
            removeAllMetaTags();
            addMetaTag('og:title', 'COMSA Computer Science Branch Quiz');
            addMetaTag('og:description', 'Discover the computer science specialization that fits you best.');
            addMetaTag('og:image', `${window.location.origin}/assets/thumbnails/default.png`);
            addMetaTag('og:url', defaultURL);
            
            renderQuestion(currentQuestion);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // Download functionality with improved error handling
    if (downloadBtn) {
        downloadBtn.onclick = async () => {
            try {
                // Show loading state
                downloadBtn.disabled = true;
                downloadBtn.textContent = '📷 Generating...';
                
                await createAndDownloadResult(personalityType, result);
                
                // Reset button state
                downloadBtn.disabled = false;
                downloadBtn.textContent = '📱 Download Result';
                
            } catch (error) {
                console.error('Download failed:', error);
                
                // Reset button state
                downloadBtn.disabled = false;
                downloadBtn.textContent = '📱 Download Result';
                
                // Show fallback option
                const fallbackModal = document.createElement('div');
                fallbackModal.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background: rgba(0,0,0,0.85);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 10002;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
                    ">
                        <div style="
                            background: white;
                            padding: 40px;
                            border-radius: 20px;
                            max-width: 400px;
                            text-align: center;
                            color: #333;
                        ">
                            <h3 style="margin: 0 0 20px; color: #e74c3c;">Download Failed</h3>
                            <p style="margin: 0 0 30px; line-height: 1.6;">
                                We couldn't generate the download. You can:
                            </p>
                            <ul style="text-align: left; margin: 0 0 30px; line-height: 1.8;">
                                <li>Take a screenshot of your result</li>
                                <li>Copy the page URL to share</li>
                                <li>Try the download again later</li>
                            </ul>
                            <button onclick="this.closest('div').parentElement.remove()" style="
                                background: #3498db;
                                color: white;
                                border: none;
                                padding: 12px 24px;
                                border-radius: 8px;
                                cursor: pointer;
                                font-size: 16px;
                                font-weight: 600;
                            ">Got it</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(fallbackModal);
                
                setTimeout(() => {
                    if (fallbackModal.parentNode) {
                        fallbackModal.remove();
                    }
                }, 5000);
            }
        };
    }

    // Facebook sharing
    if (facebookBtn) {
        facebookBtn.onclick = () => {
            shareToFacebook(personalityType);
        };
    }

    // Return to the outcome cover page.
    if (homeBtn) {
        homeBtn.onclick = () => {
            if (autoAdvanceTimer) {
                clearTimeout(autoAdvanceTimer);
                autoAdvanceTimer = null;
            }

            resultModal.style.display = 'none';
            currentQuestion = 0;
            userAnswers.length = 0;
            Object.keys(scores).forEach(key => scores[key] = 0);
            lastRankedTypes = [];
            reviewMode = false;

            showIntroScreen();

            if (window.history && window.history.replaceState) {
                window.history.replaceState({}, '', window.location.pathname);
            }

            document.title = 'COMSA Computer Science Branch Quiz';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // Compatibility functionality
    if (compatibilityBtn) {
        compatibilityBtn.onclick = () => {
            showPersonalityDetails(personalityType);
        };
    }
}

// ================================
// ENHANCED DOWNLOAD FUNCTIONALITY WITH HTML2CANVAS FALLBACK
// ================================

// Function to load html2canvas library dynamically
function loadHtml2Canvas() {
    return new Promise((resolve, reject) => {
        // Check if html2canvas is already loaded
        if (window.html2canvas) {
            resolve(window.html2canvas);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = () => {
            if (window.html2canvas) {
                resolve(window.html2canvas);
            } else {
                reject(new Error('html2canvas failed to load'));
            }
        };
        script.onerror = () => reject(new Error('Failed to load html2canvas script'));
        document.head.appendChild(script);
    });
}

async function createAndDownloadResult(personalityType, result) {
    try {
        // Load html2canvas library
        const html2canvas = await loadHtml2Canvas();
        
        const personalityCode = result.code;
        const personalityName = result.name;
        const personalityDesc = result.desc;
        const personalityFullDesc = result.fullDesc;
        const traits = result.traits;
        const compatibility = result.compatibility;
        
        const downloadContainer = document.createElement('div');
        downloadContainer.style.position = 'absolute';
        downloadContainer.style.left = '-9999px';
        downloadContainer.style.top = '0';
        downloadContainer.innerHTML = `
            <div style="
                width: 800px;
                min-height: 1000px;
                padding: 50px;
                background: linear-gradient(135deg, ${result.color}, #4bc88b);
                color: white;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
                text-align: center;
                border-radius: 20px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
                position: relative;
                box-sizing: border-box;
            ">
                <div style="
                    width: 150px;
                    height: 150px;
                    margin: 0 auto 40px;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 36px;
                    font-weight: bold;
                    backdrop-filter: blur(10px);
                    border: 4px solid rgba(255,255,255,0.3);
                ">${personalityCode}</div>
                
                <h1 style="
                    margin: 0 0 20px; 
                    font-size: 3rem; 
                    font-weight: 700;
                    line-height: 1.2;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
                ">${personalityName}</h1>
                
                <p style="
                    margin: 0 0 30px; 
                    font-size: 1.4rem; 
                    opacity: 0.9;
                    line-height: 1.4;
                    font-weight: 500;
                ">${personalityDesc}</p>
                
                <p style="
                    margin: 0 0 40px; 
                    font-size: 1.1rem; 
                    line-height: 1.6; 
                    opacity: 0.85;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                ">${personalityFullDesc}</p>
                
                <div style="margin-bottom: 50px;">
                    <h3 style="
                        margin: 0 0 25px; 
                        font-size: 1.8rem;
                        font-weight: 700;
                        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    ">Key Traits:</h3>
                    <div style="
                        display: flex; 
                        flex-wrap: wrap; 
                        justify-content: center; 
                        gap: 15px;
                        max-width: 600px;
                        margin: 0 auto;
                    ">
                        ${traits.map(trait => `
                            <span style="
                                background: rgba(255,255,255,0.25);
                                padding: 12px 24px;
                                border-radius: 30px;
                                font-size: 1rem;
                                font-weight: 600;
                                white-space: nowrap;
                                backdrop-filter: blur(10px);
                                border: 2px solid rgba(255,255,255,0.2);
                                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                            ">${trait}</span>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Compatible Personalities Section - 3 Column Grid -->
                <div style="margin-bottom: 50px;">
                    <h3 style="
                        margin: 0 0 30px; 
                        font-size: 1.8rem;
                        font-weight: 700;
                        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
                    ">Related CS Branches:</h3>
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                        max-width: 700px;
                        margin: 0 auto;
                    ">
                        ${compatibility.map(comp => {
                            const compatiblePersonality = personalities[comp.type];
                            return `
                                <div style="
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    background: rgba(255,255,255,0.15);
                                    padding: 25px 15px;
                                    border-radius: 20px;
                                    backdrop-filter: blur(10px);
                                    border: 2px solid rgba(255,255,255,0.2);
                                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                                    text-align: center;
                                    min-height: 280px;
                                    justify-content: space-between;
                                ">
                                    <div style="
                                        width: 80px;
                                        height: 80px;
                                        background: linear-gradient(135deg, ${compatiblePersonality.color}, ${compatiblePersonality.color}aa);
                                        border-radius: 50%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        font-size: 14px;
                                        font-weight: bold;
                                        color: white;
                                        margin-bottom: 15px;
                                        border: 3px solid rgba(255,255,255,0.3);
                                        box-shadow: 0 6px 20px rgba(0,0,0,0.2);
                                    ">${comp.type}</div>
                                    <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                        <div>
                                            <div style="
                                                font-size: 1.1rem;
                                                font-weight: 700;
                                                margin-bottom: 8px;
                                                line-height: 1.2;
                                            ">${compatiblePersonality.name}</div>
                                            <div style="
                                                font-size: 0.8rem;
                                                opacity: 0.8;
                                                margin-bottom: 15px;
                                                line-height: 1.3;
                                            ">${compatiblePersonality.desc.split(' • ')[0]}<br>${compatiblePersonality.desc.split(' • ')[1]}</div>
                                        </div>
                                        <div style="
                                            font-size: 0.75rem;
                                            opacity: 0.9;
                                            font-weight: 600;
                                            background: rgba(255,255,255,0.25);
                                            padding: 6px 12px;
                                            border-radius: 12px;
                                            line-height: 1.2;
                                            margin-top: auto;
                                        ">${comp.relationship}</div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div style="
                    margin-top: 50px;
                    padding-top: 30px;
                    border-top: 2px solid rgba(255,255,255,0.3);
                    font-size: 1.2rem;
                    opacity: 0.8;
                    font-weight: 600;
                ">          
                    <div style="margin-bottom: 10px;">
        <img src="assets/img/logo.png" alt="COMSA Logo" style="height: 60px; width: auto; vertical-align: middle; margin-right: 8px;">
        COMSA Computer Science Branch Quiz
    </div>
    <div style="font-size: 0.9rem; opacity: 0.6;">
        Discover your ideal computer science specialization
    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(downloadContainer);
        
        try {
            // Wait for fonts and images to load
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const canvas = await html2canvas(downloadContainer.firstElementChild, {
                backgroundColor: null,
                scale: 2,
                logging: false,
                useCORS: true,
                allowTaint: false,
                width: 800,
                height: downloadContainer.firstElementChild.offsetHeight,
                onclone: (clonedDoc) => {
                    // Ensure all styles are preserved in the cloned document
                    const clonedElement = clonedDoc.querySelector('div');
                    if (clonedElement) {
                        clonedElement.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';
                    }
                }
            });
            
            const link = document.createElement('a');
            link.download = `COMSA-${personalityCode}-CS-Branch-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            
            // Create a temporary click event
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            
            link.dispatchEvent(clickEvent);
            
            console.log('✅ Download successful!');
            
        } finally {
            document.body.removeChild(downloadContainer);
        }
        
    } catch (error) {
        console.error('Download failed:', error);
        throw error; // Re-throw to be handled by the calling function
    }
}

// ================================
// INITIALIZATION AND EVENT HANDLERS
// ================================

// Initialize default OG tags
function initializeDefaultOGTags() {
    document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(tag => {
        tag.setAttribute('data-original', 'true');
    });
}

// Check URL parameters on page load
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
        const modal = document.getElementById('result-modal');
        if (modal) modal.style.display = 'none';
    }
});

// Add CSS animations
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
    
    /* Additional styles for compatibility section */
    .compatible-section {
        margin: 2rem 0;
        padding: 1.5rem;
        background: rgba(255,255,255,0.1);
        border-radius: 15px;
        backdrop-filter: blur(10px);
    }
    
    .compatible-personalities {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .compatible-item {
        display: flex;
        align-items: center;
        background: rgba(255,255,255,0.1);
        padding: 1rem;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid rgba(255,255,255,0.2);
    }
    
    .compatible-item:hover {
        background: rgba(255,255,255,0.2);
        transform: translateY(-2px);
    }
    
    .compatible-avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        color: white;
        margin-right: 1rem;
        flex-shrink: 0;
        border: 2px solid rgba(255,255,255,0.3);
    }
    
    .compatible-info {
        flex: 1;
        text-align: left;
    }
    
    .compatible-name {
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
    }
    
    .compatible-desc {
        font-size: 0.85rem;
        opacity: 0.8;
        margin-bottom: 0.5rem;
        line-height: 1.3;
    }
    
    .compatible-relationship {
        font-size: 0.75rem;
        opacity: 0.7;
        font-weight: 600;
        background: rgba(255,255,255,0.2);
        padding: 0.2rem 0.6rem;
        border-radius: 10px;
        display: inline-block;
    }
`;
document.head.appendChild(shakeStyle);

// ================================
// UPDATED CSS FOR 3-COLUMN LAYOUT
// ================================

// Updated CSS for 3-column compatible personalities layout
const updatedStyles = `
    /* Compatible Personalities 3-Column Grid Styles */
    .compatible-section {
        margin: 2rem 0;
        padding: 1.5rem;
        background: rgba(255,255,255,0.1);
        border-radius: 15px;
        backdrop-filter: blur(10px);
    }
    
    .compatible-personalities-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-top: 1.5rem;
    }
    
    .compatible-item-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(255,255,255,0.1);
        padding: 1.5rem 1rem;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 2px solid rgba(255,255,255,0.2);
        text-align: center;
        min-height: 220px;
        justify-content: space-between;
    }
    
    .compatible-item-card:hover {
        background: rgba(255,255,255,0.2);
        transform: translateY(-5px) scale(1.02);
        box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    }
    
    .compatible-avatar {
        width: 104px;
        height: 104px;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        flex-shrink: 0;
        border: 3px solid rgba(255,255,255,0.3);
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        overflow: hidden;
        padding: 4px;
    }

    .compatible-avatar img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 5px 8px rgba(0,0,0,0.24));
    }
    
    .compatible-info-card {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
    }
    
    .compatible-name {
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        line-height: 1.2;
    }
    
    .compatible-desc-short {
        font-size: 0.8rem;
        opacity: 0.8;
        margin-bottom: 1rem;
        line-height: 1.3;
    }
    
    .compatible-relationship {
        font-size: 0.75rem;
        opacity: 0.9;
        font-weight: 600;
        background: rgba(255,255,255,0.25);
        padding: 0.4rem 0.8rem;
        border-radius: 12px;
        margin-top: auto;
        line-height: 1.2;
    }
    
    /* Responsive design for smaller screens */
    @media (max-width: 768px) {
        .compatible-personalities-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .compatible-item-card {
            min-height: 180px;
            padding: 1.2rem 0.8rem;
        }
        
        .compatible-avatar {
            width: 88px;
            height: 88px;
        }
    }
    
    @media (max-width: 480px) {
        .compatible-section {
            padding: 1rem;
        }
        
        .compatible-item-card {
            min-height: 160px;
            padding: 1rem 0.6rem;
        }
    }
`;

// Add the updated styles to the existing style element or create a new one
const existingStyle = document.querySelector('style');
if (existingStyle) {
    existingStyle.textContent += '\n' + updatedStyles;
} else {
    const newStyle = document.createElement('style');
    newStyle.textContent = updatedStyles;
    document.head.appendChild(newStyle);
}

// Add the updated styles to the existing style element
shakeStyle.textContent += '\n' + updatedStyles;

// Initialize the quiz exactly once. Shared result URLs take precedence;
// otherwise the visitor starts with a clean quiz state.
document.addEventListener('DOMContentLoaded', function() {
    initializeDefaultOGTags();

    currentQuestion = 0;
    userAnswers.length = 0;
    Object.keys(scores).forEach(key => scores[key] = 0);
    lastRankedTypes = [];
    reviewMode = false;

    const urlParams = new URLSearchParams(window.location.search);
    const resultParam = urlParams.get('result');

    if (resultParam && personalities[resultParam]) {
        showIntroScreen();
        showResult(resultParam);
    } else {
        const resultModal = document.getElementById('result-modal');
        if (resultModal) resultModal.style.display = 'none';

        if (resultParam && window.history && window.history.replaceState) {
            window.history.replaceState({}, '', window.location.pathname);
        }

        showIntroScreen();
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
});

// Close the result modal only when its backdrop is clicked.
window.addEventListener('click', event => {
    const modal = document.getElementById('result-modal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});
