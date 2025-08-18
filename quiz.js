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
                ">${personality.code}</div>
                
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
                    ">Compatible Personalities:</h3>
                    
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
                                        <img src="assets/thumbnails/${comp.type}.png" 
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

const questions = [
    // Social Energy (E vs I) - 5 questions
    {
        q: "I feel more alive when coding with friends, even if it turns into a chit-chat session.",
        dimension: "EI",
        type: "E"
    }/*,
    {
        q: "I enjoy presenting the demo rather than staying quiet in the back.",
        dimension: "EI",
        type: "E"
    },
    {
        q: "I'm more productive when coding alone without interruptions.",
        dimension: "EI",
        type: "I"
    },
    {
        q: "I'd rather submit my output on Google Classroom than give a live presentation.",
        dimension: "EI",
        type: "I"
    },
    {
        q: "I prefer short chat updates over long meetings that go nowhere.",
        dimension: "EI",
        type: "I"
    },

    // Work Style (Prototyper vs Refiner) - 4 questions
    {
        q: "I can start building a system even without a plan—just wing it.",
        dimension: "PR",
        type: "P"
    },
    {
        q: "I don't mind messy code as long as it works.",
        dimension: "PR",
        type: "P"
    },
    {
        q: "I still improve my code even if it already passes the requirements.",
        dimension: "PR",
        type: "R"
    },
    {
        q: "I feel more comfortable when my code has comments, flowcharts, and a clean repo.",
        dimension: "PR",
        type: "R"
    },

    // Problem Approach (Technical vs Creative) - 5 questions
    {
        q: "I'd rather solve algorithm and backend problems than do UI/UX design.",
        dimension: "TC",
        type: "T"
    },
    {
        q: "I enjoy debugging logic errors more than picking a color palette.",
        dimension: "TC",
        type: "T"
    },
    {
        q: "I get excited making a UI that looks better than the official school website.",
        dimension: "TC",
        type: "C"
    },
    {
        q: "I add animations even if they're optional, as long as it looks good.",
        dimension: "TC",
        type: "C"
    },
    {
        q: "I feel more proud when the demo looks smooth and aesthetic rather than hardcore backend.",
        dimension: "TC",
        type: "C"
    },

    // Workflow Preference (Spontaneous vs Disciplined) - 4 questions
    {
        q: "I can finish an entire project in one night before the defense (with an energy drink).",
        dimension: "SD",
        type: "S"
    },
    {
        q: "I'd rather explore options first than stick to a strict plan right away.",
        dimension: "SD",
        type: "S"
    },
    {
        q: "I like finishing tasks way ahead of deadlines so I can relax while others cram.",
        dimension: "SD",
        type: "D"
    },
    {
        q: "I use GitHub projects, trackers, or calendars to keep my workflow organized.",
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
        color: "#ff6b35",
        compatibility: [
            {
                type: "IRTD",
                reason: "The Zero-Bug Coder provides the stability and quality control that complements your rapid prototyping style.",
                relationship: "Perfect Balance"
            },
            {
                type: "ERCD",
                reason: "The Pixel Perfectionist can polish your quick prototypes into beautiful, production-ready applications.",
                relationship: "Creative Partnership"
            },
            {
                type: "IPCD",
                reason: "The Peaceful Designer works quietly to create consistent designs while you energize the team.",
                relationship: "Complementary Strengths"
            }
        ]
    },
    EPTD: {
        name: "The Sprint Master", 
        code: "EPTD",
        desc: "Extroverted • Prototyper • Technical • Disciplined",
        fullDesc: "Always leading sprints, loves project trackers but still codes fast. You combine rapid prototyping with organized project management.",
        traits: ["Project leader", "Fast developer", "Process optimizer", "Team coordinator"],
        color: "#4ecdc4",
        compatibility: [
            {
                type: "IRTD",
                reason: "Both value discipline and quality, creating a powerhouse team for delivering bug-free projects on time.",
                relationship: "Disciplined Duo"
            },
            {
                type: "EPCS",
                reason: "The Demo Wizard brings creative flair to your organized technical approach, making impressive presentations.",
                relationship: "Leadership Synergy"
            },
            {
                type: "IPCD",
                reason: "The Peaceful Designer provides consistent visual direction while you handle project coordination.",
                relationship: "Organized Partnership"
            }
        ]
    },
    EPCS: {
        name: "The Demo Wizard",
        code: "EPCS", 
        desc: "Extroverted • Prototyper • Creative • Spontaneous",
        fullDesc: "Makes flashy demos that wow the audience, even if half is placeholder code. You excel at creating impressive prototypes quickly.",
        traits: ["Demo master", "Creative prototyper", "Presentation pro", "Rapid designer"],
        color: "#45b7d1",
        compatibility: [
            {
                type: "IRTS",
                reason: "The Debug Ninja can fix your demo code behind the scenes while you focus on the creative presentation.",
                relationship: "Demo Dream Team"
            },
            {
                type: "IPTD",
                reason: "The Silent Deliverer builds robust backends that support your flashy frontend demonstrations.",
                relationship: "Frontend-Backend Balance"
            },
            {
                type: "ERCD",
                reason: "The Pixel Perfectionist refines your creative ideas into polished, professional designs.",
                relationship: "Creative Excellence"
            }
        ]
    },
    EPCD: {
        name: "The Design Director",
        code: "EPCD",
        desc: "Extroverted • Prototyper • Creative • Disciplined", 
        fullDesc: "The 'design lead' who also organizes deadlines and Figma boards. You balance creative vision with structured project management.",
        traits: ["Design leader", "Creative organizer", "Vision setter", "Team motivator"],
        color: "#96ceb4",
        compatibility: [
            {
                type: "IPTD",
                reason: "The Silent Deliverer provides reliable technical implementation for your creative vision and organized plans.",
                relationship: "Vision & Execution"
            },
            {
                type: "ERTS",
                reason: "The Coding Comedian brings humor and technical expertise while respecting your design leadership.",
                relationship: "Creative Leadership"
            },
            {
                type: "IRCD",
                reason: "The Aesthetic Architect shares your love for beautiful, structured design and attention to detail.",
                relationship: "Design Harmony"
            }
        ]
    },
    ERTS: {
        name: "The Coding Comedian",
        code: "ERTS",
        desc: "Extroverted • Refiner • Technical • Spontaneous",
        fullDesc: "Fixes your code mid-presentation but also cracks jokes while doing it. You bring humor and technical expertise to any team.",
        traits: ["Code optimizer", "Team comedian", "Live debugger", "Morale booster"],
        color: "#feca57",
        compatibility: [
            {
                type: "IPCS",
                reason: "The Creative Experimenter appreciates your humor while you help optimize their experimental code.",
                relationship: "Fun & Function"
            },
            {
                type: "EPTD",
                reason: "The Sprint Master provides structure while you keep the team's spirits high during intense development cycles.",
                relationship: "Productive Energy"
            },
            {
                type: "IRCD",
                reason: "The Aesthetic Architect creates beautiful code while you ensure it's optimized and the team stays motivated.",
                relationship: "Beauty & Optimization"
            }
        ]
    },
    ERTD: {
        name: "The Code Guardian", 
        code: "ERTD",
        desc: "Extroverted • Refiner • Technical • Disciplined",
        fullDesc: "Project manager vibes, merges all pull requests after thorough review. You maintain code quality while leading technical discussions.",
        traits: ["Quality enforcer", "Code reviewer", "Technical leader", "Standard setter"],
        color: "#ff9ff3",
        compatibility: [
            {
                type: "EPCS",
                reason: "The Demo Wizard creates impressive prototypes while you ensure code quality and maintainability.",
                relationship: "Quality & Innovation"
            },
            {
                type: "IPTS",
                reason: "The Solo Hacker delivers quick solutions while you provide code review and quality standards.",
                relationship: "Speed & Quality"
            },
            {
                type: "IPCD",
                reason: "The Peaceful Designer creates consistent visuals while you maintain technical excellence.",
                relationship: "Excellence Partnership"
            }
        ]
    },
    ERCS: {
        name: "The Overnight Redesigner",
        code: "ERCS",
        desc: "Extroverted • Refiner • Creative • Spontaneous", 
        fullDesc: "Can redesign the UI in one night after feedback, still smiling. You adapt quickly to creative challenges with endless enthusiasm.",
        traits: ["Rapid redesigner", "Feedback implementer", "Creative adapter", "Positive energy"],
        color: "#54a0ff",
        compatibility: [
            {
                type: "IPTD",
                reason: "The Silent Deliverer provides stable backend support while you rapidly iterate on frontend designs.",
                relationship: "Adaptive Partnership"
            },
            {
                type: "IRTS",
                reason: "The Debug Ninja quietly fixes issues while you focus on creative improvements and user feedback.",
                relationship: "Creative Problem Solving"
            },
            {
                type: "EPCD",
                reason: "The Design Director provides vision and structure while you handle rapid design iterations.",
                relationship: "Design Evolution"
            }
        ]
    },
    ERCD: {
        name: "The Pixel Perfectionist",
        code: "ERCD", 
        desc: "Extroverted • Refiner • Creative • Disciplined",
        fullDesc: "Polished UI, pixel-perfect, and follows every UX best practice. You create beautiful, refined interfaces while maintaining team collaboration.",
        traits: ["UX expert", "Detail perfectionist", "Design standards keeper", "Quality advocate"],
        color: "#5f27cd",
        compatibility: [
            {
                type: "IPTD",
                reason: "The Silent Deliverer builds reliable systems that perfectly support your meticulous design standards.",
                relationship: "Perfect Execution"
            },
            {
                type: "IPTS",
                reason: "The Solo Hacker creates rapid prototypes that you can refine into pixel-perfect implementations.",
                relationship: "Prototype to Perfection"
            },
            {
                type: "EPTS",
                reason: "The Lab Leader brings collaborative energy while you ensure every detail meets the highest standards.",
                relationship: "Energy & Excellence"
            }
        ]
    },
    IPTS: {
        name: "The Solo Hacker",
        code: "IPTS",
        desc: "Introverted • Prototyper • Technical • Spontaneous",
        fullDesc: "Solo hacker who can finish a minimum viable product overnight. You work best independently and deliver impressive results quickly.",
        traits: ["Independent coder", "MVP creator", "Night owl developer", "Problem solver"],
        color: "#00d2d3",
        compatibility: [
            {
                type: "ERCD",
                reason: "The Pixel Perfectionist can take your quick MVPs and polish them into beautiful, user-friendly applications.",
                relationship: "MVP to Masterpiece"
            },
            {
                type: "EPTD",
                reason: "The Sprint Master provides project structure and team coordination while respecting your independent work style.",
                relationship: "Independence & Structure"
            },
            {
                type: "ERCS",
                reason: "The Overnight Redesigner shares your ability to work quickly and can improve your prototypes with better UX.",
                relationship: "Rapid Development"
            }
        ]
    },
    IPTD: {
        name: "The Silent Deliverer",
        code: "IPTD", 
        desc: "Introverted • Prototyper • Technical • Disciplined",
        fullDesc: "Quiet but deadly — delivers a perfectly working backend on time. You combine independent work style with reliable execution.",
        traits: ["Reliable deliverer", "Backend specialist", "Quiet achiever", "Deadline keeper"],
        color: "#ff9f43",
        compatibility: [
            {
                type: "EPCS",
                reason: "The Demo Wizard creates impressive frontends while you provide the rock-solid backend infrastructure.",
                relationship: "Frontend-Backend Harmony"
            },
            {
                type: "ERCS",
                reason: "The Overnight Redesigner handles UI iterations while you maintain stable, reliable backend services.",
                relationship: "Stable Innovation"
            },
            {
                type: "EPCD",
                reason: "The Design Director leads creative vision while you quietly deliver the technical foundation.",
                relationship: "Vision & Foundation"
            }
        ]
    },
    IPCS: {
        name: "The Creative Experimenter",
        code: "IPCS",
        desc: "Introverted • Prototyper • Creative • Spontaneous", 
        fullDesc: "Makes mini-games or experiments just for fun, often late-night coder. You explore creative ideas independently with passion.",
        traits: ["Creative explorer", "Game developer", "Experimental coder", "Passion projecter"],
        color: "#ee5a6f",
        compatibility: [
            {
                type: "ERTS",
                reason: "The Coding Comedian appreciates your creative experiments and helps optimize your innovative code.",
                relationship: "Innovation & Optimization"
            },
            {
                type: "EPTD",
                reason: "The Sprint Master can help structure your creative experiments into organized, deliverable projects.",
                relationship: "Creativity & Organization"
            },
            {
                type: "IRCD",
                reason: "The Aesthetic Architect shares your creative passion and can help make your experiments visually stunning.",
                relationship: "Creative Synergy"
            }
        ]
    },
    IPCD: {
        name: "The Peaceful Designer",
        code: "IPCD",
        desc: "Introverted • Prototyper • Creative • Disciplined",
        fullDesc: "Crafts beautiful, consistent designs alone in peaceful silence. You create polished creative work through focused, independent effort.",
        traits: ["Consistent designer", "Peaceful creator", "Detail focused", "Independent artist"],
        color: "#0abde3",
        compatibility: [
            {
                type: "EPTS",
                reason: "The Lab Leader provides collaborative energy and team coordination while respecting your need for focused design time.",
                relationship: "Energy & Focus"
            },
            {
                type: "IPTD",
                reason: "The Silent Deliverer shares your disciplined, independent work style and provides reliable technical support.",
                relationship: "Quiet Excellence"
            },
            {
                type: "ERTD",
                reason: "The Code Guardian ensures technical quality while you maintain design consistency and visual standards.",
                relationship: "Quality & Beauty"
            }
        ]
    },
    IRTS: {
        name: "The Debug Ninja",
        code: "IRTS", 
        desc: "Introverted • Refiner • Technical • Spontaneous",
        fullDesc: "Appears last minute to debug everything and disappears again. You're the mysterious problem-solver who saves the day.",
        traits: ["Debug master", "Problem fixer", "Mysterious helper", "Last-minute hero"],
        color: "#1dd1a1",
        compatibility: [
            {
                type: "EPCS",
                reason: "The Demo Wizard creates impressive presentations while you ensure everything works perfectly behind the scenes.",
                relationship: "Performance & Polish"
            },
            {
                type: "ERCS",
                reason: "The Overnight Redesigner rapidly implements changes while you quietly fix any issues that arise.",
                relationship: "Rapid Problem Solving"
            },
            {
                type: "IPCS",
                reason: "The Creative Experimenter creates innovative projects while you help debug and optimize their experimental code.",
                relationship: "Innovation Support"
            }
        ]
    },
    IRTD: {
        name: "The Zero-Bug Coder",
        code: "IRTD",
        desc: "Introverted • Refiner • Technical • Disciplined", 
        fullDesc: "Methodical coder, zero bugs, zero drama. You write impeccable code through careful planning and systematic execution.",
        traits: ["Bug-free coder", "Methodical programmer", "Quality focused", "Drama-free developer"],
        color: "#ffd32a",
        compatibility: [
            {
                type: "EPTS",
                reason: "The Lab Leader brings collaborative energy while you provide the technical foundation and quality assurance.",
                relationship: "Energy & Stability"
            },
            {
                type: "EPCD",
                reason: "The Design Director leads creative vision while you ensure flawless technical implementation.",
                relationship: "Vision & Precision"
            },
            {
                type: "ERCS",
                reason: "The Overnight Redesigner handles rapid UI changes while you maintain code quality and system stability.",
                relationship: "Change & Stability"
            }
        ]
    },
    IRCS: {
        name: "The Quiet Redesigner",
        code: "IRCS",
        desc: "Introverted • Refiner • Creative • Spontaneous",
        fullDesc: "Will suddenly redesign the project banner during a break. You contribute creative improvements quietly and unexpectedly.",
        traits: ["Surprise improver", "Quiet creative", "Banner artist", "Spontaneous designer"],
        color: "#ff5252",
        compatibility: [
            {
                type: "IRCD",
                reason: "The Aesthetic Architect shares your creative vision and attention to detail, creating beautifully cohesive designs together.",
                relationship: "Creative Harmony"
            },
            {
                type: "EPTD",
                reason: "The Sprint Master provides project structure while appreciating your spontaneous creative contributions.",
                relationship: "Structure & Surprise"
            },
            {
                type: "IRTS",
                reason: "The Debug Ninja quietly fixes technical issues while you focus on unexpected creative improvements.",
                relationship: "Quiet Collaboration"
            }
        ]
    },
    IRCD: {
        name: "The Aesthetic Architect", 
        code: "IRCD",
        desc: "Introverted • Refiner • Creative • Disciplined",
        fullDesc: "Meticulous artist and coder — everything is neat, structured, and aesthetic. You perfect the intersection of beauty and functionality.",
        traits: ["Meticulous creator", "Aesthetic coder", "Structure lover", "Beauty engineer"],
        color: "#7b1fa2",
        compatibility: [
            {
                type: "IRCS",
                reason: "The Quiet Redesigner brings spontaneous creative ideas while you provide structured, methodical design implementation.",
                relationship: "Structured Creativity"
            },
            {
                type: "IPTD",
                reason: "The Silent Deliverer provides reliable technical foundation while you create beautiful, well-architected interfaces.",
                relationship: "Beauty & Reliability"
            },
            {
                type: "EPCD",
                reason: "The Design Director shares your passion for beautiful design while providing leadership and team coordination.",
                relationship: "Design Leadership"
            }
        ]
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

// Simplified Facebook sharing function (now shows under construction)
function shareToFacebook(personalityType, result) {
    console.log("🚧 Facebook sharing is under construction");
    showUnderConstructionModal();
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
    const baseUrl = window.location.origin + window.location.pathname;
    
    // Multiple parameters to force Facebook to treat as new content
    const newURL = `${baseUrl}?result=${personalityType}&v=${timestamp}&r=${randomId}&s=${sessionId}&fb=1`;

    // Image URL with cache busting
    const imageUrl = `${window.location.origin}/assets/thumbnails/${personalityType}.png?v=${timestamp}&r=${randomId}&cb=${Date.now()}`;
    
    const title = `I'm ${result.name} - COMSA Developer Personality Test`;
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
        addMetaTag('og:site_name', 'COMSA Developer Personality Test');
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
            window.history.pushState({personalityType}, '', newURL);
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
                ">🎯 All COMSA Developer Personalities</h2>
                
                <p style="
                    text-align: center;
                    margin: 0 0 40px; 
                    color: #5a6c7d; 
                    font-size: 16px; 
                    line-height: 1.6;
                ">Discover all 16 unique developer personality types and their characteristics.</p>
                
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
                            ">${personality.code}</div>
                            
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
            
            <!-- Compatible Personalities Section - 3 Column Layout -->
            <div class="compatible-section">
                <h3>Compatible Personalities:</h3>
                <div class="compatible-personalities-grid">
                    ${result.compatibility.map(comp => {
                        const compatiblePersonality = personalities[comp.type];
                        return `
                            <div class="compatible-item-card" onclick="showPersonalityDetails('${comp.type}')">
                                <div class="compatible-avatar" style="background: linear-gradient(135deg, ${compatiblePersonality.color}, ${compatiblePersonality.color}aa);">
                                    ${comp.type}
                                </div>
                                <div class="compatible-info-card">
                                    <div class="compatible-name">${compatiblePersonality.name}</div>
                                    <div class="compatible-desc-short">${compatiblePersonality.desc.split(' • ')[0]} • ${compatiblePersonality.desc.split(' • ')[1]}</div>
                                    <div class="compatible-relationship">${comp.relationship}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
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
                <button id="other-personality-btn" class="result-btn">
                    🔄 Check Other Personalities
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

// ================================
// MODAL BUTTON SETUP
// ================================

function setupModalButtons(personalityType, result) {
    const resultModal = document.getElementById('result-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const restartBtn = document.getElementById('restart-btn');
    const downloadBtn = document.getElementById('download-btn');
    const facebookBtn = document.getElementById('facebook-btn');
    const otherPersonalityBtn = document.getElementById('other-personality-btn');
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
            
            // Reset URL and OG tags to default
            const defaultURL = window.location.origin + window.location.pathname;
            if (window.history && window.history.pushState) {
                window.history.pushState({}, '', defaultURL);
            }
            document.title = "COMSA Developer Personality Test";
            
            // Reset OG tags
            removeAllMetaTags();
            addMetaTag('og:title', 'COMSA Developer Personality Test');
            addMetaTag('og:description', 'Discover your coding personality!');
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

    // Facebook sharing - now shows "Under Construction"
    if (facebookBtn) {
        facebookBtn.onclick = () => {
            shareToFacebook(personalityType, result);
        };
    }

    // Other personalities functionality
    if (otherPersonalityBtn) {
        otherPersonalityBtn.onclick = () => {
            showPersonalityGallery();
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
                    ">Compatible Personalities:</h3>
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
        COMSA Developer Personality Test
    </div>
    <div style="font-size: 0.9rem; opacity: 0.6;">
        Discover your unique coding personality
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
            link.download = `COMSA-${personalityCode}-Personality-${Date.now()}.png`;
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
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        color: white;
        margin-bottom: 1rem;
        flex-shrink: 0;
        border: 3px solid rgba(255,255,255,0.3);
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
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
            width: 60px;
            height: 60px;
            font-size: 12px;
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

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeDefaultOGTags();
    
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
// SOLUTION 1: Fix your existing window.onload function
window.onload = function () {
  // Reset variables
  currentQuestion = 0;
  userAnswers.length = 0;
  Object.keys(scores).forEach(key => scores[key] = 0);

  // Hide result modal if it's showing
  const resultModal = document.getElementById('result-modal');
  if (resultModal) {
    resultModal.style.display = 'none';
  }

  // Reset URL to clean state (remove any query parameters)
  if (window.history && window.history.pushState) {
    const cleanURL = window.location.origin + window.location.pathname;
    window.history.pushState({}, '', cleanURL);
  }

  // Reset document title
  document.title = "COMSA Developer Personality Test";

  // Reset OG tags to default
  removeAllMetaTags();
  addMetaTag('og:title', 'COMSA Developer Personality Test');
  addMetaTag('og:description', 'Discover your coding personality!');
  addMetaTag('og:image', `${window.location.origin}/assets/thumbnails/default.png`);
  addMetaTag('og:url', window.location.origin + window.location.pathname);

  // Show first question
  renderQuestion(0);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// SOLUTION 2: Alternative using DOMContentLoaded (more reliable)
document.addEventListener('DOMContentLoaded', function() {
  // Only reset if there are no URL parameters (to preserve shared links)
  const urlParams = new URLSearchParams(window.location.search);
  const hasResultParam = urlParams.get('result');
  
  if (!hasResultParam) {
    // Reset everything to initial state
    currentQuestion = 0;
    userAnswers.length = 0;
    Object.keys(scores).forEach(key => scores[key] = 0);
    
    // Hide any open modals
    const resultModal = document.getElementById('result-modal');
    if (resultModal) {
      resultModal.style.display = 'none';
    }
    
    // Initialize default OG tags
    initializeDefaultOGTags();
    
    // Show first question
    renderQuestion(0);
  } else {
    // If there's a result parameter, show that result instead
    checkURLParameters();
  }
});

// SOLUTION 3: Using beforeunload to detect refresh (optional)
window.addEventListener('beforeunload', function() {
  // Store a flag that indicates the page is being refreshed
  sessionStorage.setItem('pageRefreshed', 'true');
});

window.addEventListener('load', function() {
  // Check if page was refreshed
  if (sessionStorage.getItem('pageRefreshed') === 'true') {
    sessionStorage.removeItem('pageRefreshed');
    
    // Reset to start
    resetToStart();
  }
});

// SOLUTION 4: Complete reset function (recommended)
function resetToStart() {
  // Reset all quiz variables
  currentQuestion = 0;
  userAnswers.length = 0;
  Object.keys(scores).forEach(key => scores[key] = 0);
  
  // Hide result modal
  const resultModal = document.getElementById('result-modal');
  if (resultModal) {
    resultModal.style.display = 'none';
  }
  
  // Clean URL
  if (window.history && window.history.pushState) {
    const cleanURL = window.location.origin + window.location.pathname;
    window.history.pushState({}, '', cleanURL);
  }
  
  // Reset document title
  document.title = "COMSA Developer Personality Test";
  
  // Reset meta tags
  removeAllMetaTags();
  addMetaTag('og:title', 'COMSA Developer Personality Test');
  addMetaTag('og:description', 'Discover your coding personality!');
  
  // Show first question
  renderQuestion(0);
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
  
  console.log('🔄 Quiz reset to start');
}

// SOLUTION 5: Enhanced version that preserves shared links but resets manual refreshes
document.addEventListener('DOMContentLoaded', function() {
  initializeDefaultOGTags();
  
  // Check if this is a shared result link
  const urlParams = new URLSearchParams(window.location.search);
  const resultParam = urlParams.get('result');
  
  if (resultParam && personalities[resultParam]) {
    // This is a shared result link - show the result
    console.log(`📊 Showing shared result: ${resultParam}`);
    showResult(resultParam);
  } else {
    // This is a fresh start or refresh - reset everything
    resetToStart();
  }
});

// SOLUTION 6: Detect if user manually refreshed vs navigated
let isManualRefresh = false;

// Detect manual refresh
window.addEventListener('beforeunload', function() {
  isManualRefresh = true;
});

// Handle page load
window.addEventListener('load', function() {
  if (isManualRefresh) {
    // Manual refresh detected
    resetToStart();
  } else {
    // Normal navigation - preserve state if needed
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.get('result')) {
      resetToStart();
    }
  }
  isManualRefresh = false;
});

// RECOMMENDED IMPLEMENTATION:
// Replace your existing window.onload at the end of your file with this:

window.addEventListener('load', function() {
  // Reset quiz state
  currentQuestion = 0;
  userAnswers.length = 0;
  Object.keys(scores).forEach(key => scores[key] = 0);
  
  // Hide any open modals
  const resultModal = document.getElementById('result-modal');
  if (resultModal) {
    resultModal.style.display = 'none';
  }
  
  // Check for shared result links
  const urlParams = new URLSearchParams(window.location.search);
  const resultParam = urlParams.get('result');
  
  if (resultParam && personalities[resultParam]) {
    // Show shared result
    showResult(resultParam);
  } else {
    // Clean URL and start fresh
    if (window.history && window.history.pushState) {
      const cleanURL = window.location.origin + window.location.pathname;
      window.history.pushState({}, '', cleanURL);
    }
    
    // Reset title and meta tags
    document.title = "COMSA Developer Personality Test";
    removeAllMetaTags();
    addMetaTag('og:title', 'COMSA Developer Personality Test');
    addMetaTag('og:description', 'Discover your coding personality!');
    
    // Show first question
    renderQuestion(0);
  }
  
  // Always scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
});
