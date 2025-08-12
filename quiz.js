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
          q: "Okay lang sakin yung medyo sabog ang code basta ‘Hello World’ gumagana.",
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

  // Alternative approach using html2canvas with a visible container
  downloadBtn.onclick = () => {
      // Get personality data
      const personalityCode = document.querySelector('.personality-code')?.textContent || 'XXXX';
      const personalityName = document.querySelector('.result-title')?.textContent || 'Unknown';
      const personalityDesc = document.querySelector('.result-subtitle')?.textContent || '';
      const personalityFullDesc = document.querySelector('.result-description')?.textContent || '';
      const traits = Array.from(document.querySelectorAll('.trait-tag')).map(tag => tag.textContent);
      
      // Create visible container (this helps html2canvas work better)
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
                  COMSA Personality Test
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

      facebookBtn.onclick = () => {
          shareToFacebook(personalityType, result);
      };

      // Replace your existing Facebook sharing code with this optimized version

function shareToFacebook(personalityType, result) {
    // Get personality data from the current result display
    const personalityCode = document.querySelector('.personality-code')?.textContent || personalityType;
    const personalityName = document.querySelector('.result-title')?.textContent || result.name;
    const personalityDesc = document.querySelector('.result-subtitle')?.textContent || result.desc;
    const personalityFullDesc = document.querySelector('.result-description')?.textContent || result.fullDesc;
    const traits = Array.from(document.querySelectorAll('.trait-tag')).map(tag => tag.textContent);
    
    // Create a comprehensive, visually appealing share text
    const shareText = `🎯 I just discovered my EARIST-CS Developer Personality!

━━━━━━━━━━━━━━━━━━━━
🏷️ TYPE: "${personalityName}"
🔤 CODE: ${personalityType}
━━━━━━━━━━━━━━━━━━━━

📝 DESCRIPTION:
${personalityDesc}

💡 WHAT THIS MEANS:
${personalityFullDesc}

✨ MY KEY TRAITS:
${traits.map((trait, i) => `   ${i + 1}. ${trait}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━
🎮 Want to discover YOUR developer personality?
👇 Take the EARIST-CS Personality Test here!
${window.location.href}

#EARISTCS #DeveloperPersonality #CodingLife #ProgrammerTest #TechPersonality`;

    // Use Facebook's share dialog
    const shareUrl = encodeURIComponent(window.location.href);
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${encodeURIComponent(shareText)}`;
    
    // Open Facebook share dialog
    const shareWindow = window.open(facebookShareUrl, 'facebookShare', 'width=600,height=400,scrollbars=yes,resizable=yes');
    
    // Optional: Show additional sharing options
    showAdditionalShareOptions(personalityType, result, shareText);
}

function showAdditionalShareOptions(personalityType, result, shareText) {
    // Create a popup with additional sharing options including image download
    const popup = document.createElement('div');
    popup.innerHTML = `
        <div style="
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease-in;
        " id="share-options-popup">
            <div style="
                background: white;
                padding: 30px;
                border-radius: 20px;
                max-width: 450px;
                width: 90%;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                position: relative;
            ">
                <h3 style="
                    margin: 0 0 20px; 
                    color: #333;
                    font-size: 1.5rem;
                    font-weight: bold;
                ">📤 Share Your Result</h3>
                
                <p style="
                    margin: 0 0 25px; 
                    color: #666; 
                    font-size: 14px;
                    line-height: 1.4;
                ">
                    Your Facebook post is ready! Want to make it even more engaging? 
                    Download the visual result card to attach to your post.
                </p>
                
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <button onclick="generateAndDownloadImage('${personalityType}', ${JSON.stringify(result).replace(/"/g, '&quot;')})" style="
                        padding: 15px 25px;
                        background: linear-gradient(45deg, #35b173ff, #4bc88b);
                        color: white;
                        border: none;
                        border-radius: 12px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(53, 177, 115, 0.3);
                    " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        🖼️ Download Visual Result Card
                    </button>
                    
                    <button onclick="copyShareText()" style="
                        padding: 15px 25px;
                        background: linear-gradient(45deg, #4267B2, #5578c4);
                        color: white;
                        border: none;
                        border-radius: 12px;
                        cursor: pointer;
                        font-size: 16px;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 15px rgba(66, 103, 178, 0.3);
                    " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        📋 Copy Share Text
                    </button>
                    
                    <button onclick="closeSharePopup()" style="
                        padding: 12px 25px;
                        background: #f8f9fa;
                        color: #666;
                        border: 1px solid #dee2e6;
                        border-radius: 12px;
                        cursor: pointer;
                        font-size: 14px;
                        transition: all 0.3s ease;
                    " onmouseover="this.style.background='#e9ecef'" onmouseout="this.style.background='#f8f9fa'">
                        Done
                    </button>
                </div>
                
                <div style="
                    margin-top: 20px;
                    padding-top: 15px;
                    border-top: 1px solid #eee;
                    font-size: 12px;
                    color: #999;
                ">
                    💡 Tip: Attach the downloaded image to your Facebook post for maximum engagement!
                </div>
            </div>
        </div>
    `;
    
    // Add fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(popup);
    
    // Store share text globally for copying
    window.currentShareText = shareText;
    
    // Auto-close after 15 seconds
    setTimeout(() => {
        if (document.getElementById('share-options-popup')) {
            closeSharePopup();
        }
    }, 15000);
}

function generateAndDownloadImage(personalityType, result) {
    // Get personality data
    const personalityCode = document.querySelector('.personality-code')?.textContent || personalityType;
    const personalityName = document.querySelector('.result-title')?.textContent || result.name;
    const personalityDesc = document.querySelector('.result-subtitle')?.textContent || result.desc;
    const personalityFullDesc = document.querySelector('.result-description')?.textContent || result.fullDesc;
    const traits = Array.from(document.querySelectorAll('.trait-tag')).map(tag => tag.textContent);
    
    // Create optimized visual card for Facebook sharing
    const shareContainer = document.createElement('div');
    shareContainer.style.position = 'absolute';
    shareContainer.style.left = '-9999px';
    shareContainer.innerHTML = `
        <div style="
            width: 600px;
            height: 600px;
            padding: 40px;
            background: linear-gradient(135deg, ${result.color} 0%, #35b173ff 50%, #18663bff 100%);
            color: white;
            font-family: 'Segoe UI', Arial, sans-serif;
            text-align: center;
            border-radius: 0;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        ">
            <!-- Background Pattern -->
            <div style="
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
            "></div>
            
            <!-- Content -->
            <div style="position: relative; z-index: 2;">
                <!-- Personality Badge -->
                <div style="
                    width: 120px;
                    height: 120px;
                    margin: 0 auto 25px;
                    background: rgba(255,255,255,0.15);
                    border: 3px solid rgba(255,255,255,0.3);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 28px;
                    font-weight: bold;
                    letter-spacing: 2px;
                ">${personalityCode}</div>
                
                <!-- Title -->
                <h1 style="
                    margin: 0 0 15px; 
                    font-size: 2.5rem; 
                    font-weight: bold;
                    line-height: 1.1;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                ">${personalityName}</h1>
                
                <!-- Subtitle -->
                <p style="
                    margin: 0 0 25px; 
                    font-size: 1.2rem; 
                    opacity: 0.9;
                    line-height: 1.3;
                    font-weight: 500;
                ">${personalityDesc}</p>
                
                <!-- Key Traits -->
                <div style="margin-bottom: 30px;">
                    <h3 style="
                        margin: 0 0 18px; 
                        font-size: 1.3rem;
                        font-weight: bold;
                    ">✨ Key Traits</h3>
                    <div style="
                        display: flex; 
                        flex-wrap: wrap; 
                        justify-content: center; 
                        gap: 12px;
                        max-width: 500px;
                        margin: 0 auto;
                    ">
                        ${traits.slice(0, 4).map(trait => `
                            <span style="
                                background: rgba(255,255,255,0.2);
                                backdrop-filter: blur(10px);
                                padding: 10px 18px;
                                border-radius: 25px;
                                font-size: 0.9rem;
                                font-weight: 600;
                                white-space: nowrap;
                                border: 1px solid rgba(255,255,255,0.1);
                            ">${trait}</span>
                        `).join('')}
                    </div>
                </div>
                
                <!-- Call to Action -->
                <div style="
                    margin-top: 35px;
                    padding: 20px;
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 15px;
                    border: 1px solid rgba(255,255,255,0.2);
                ">
                    <div style="
                        font-size: 1.1rem;
                        font-weight: bold;
                        margin-bottom: 8px;
                    ">🎯 Discover Your Developer Personality!</div>
                    <div style="
                        font-size: 0.9rem;
                        opacity: 0.8;
                        font-weight: 500;
                    ">EARIST-CS Personality Test</div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(shareContainer);
    
    // Generate and download image
    setTimeout(() => {
        if (typeof html2canvas !== 'undefined') {
            html2canvas(shareContainer.firstElementChild, {
                backgroundColor: null,
                scale: 2,
                logging: false,
                useCORS: true,
                allowTaint: true,
                width: 600,
                height: 600
            }).then(canvas => {
                // Download the image
                const link = document.createElement('a');
                link.download = `EARIST-CS-${personalityCode}-Facebook-Share.png`;
                link.href = canvas.toDataURL('image/png', 1.0);
                link.click();
                
                // Show success message
                showSuccessMessage('✅ Image downloaded! Attach it to your Facebook post for maximum engagement.');
                
                document.body.removeChild(shareContainer);
            }).catch(error => {
                console.error('Image generation failed:', error);
                document.body.removeChild(shareContainer);
                showErrorMessage('❌ Image generation failed. Try using the text-only share instead.');
            });
        } else {
            document.body.removeChild(shareContainer);
            showErrorMessage('❌ Image generation not available. Make sure html2canvas is loaded.');
        }
    }, 100);
}

function copyShareText() {
    if (window.currentShareText) {
        navigator.clipboard.writeText(window.currentShareText).then(() => {
            showSuccessMessage('✅ Share text copied! You can paste it directly into your Facebook post.');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.currentShareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showSuccessMessage('✅ Share text copied to clipboard!');
        });
    }
}

function closeSharePopup() {
    const popup = document.getElementById('share-options-popup');
    if (popup) {
        popup.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 300);
    }
    delete window.currentShareText;
}

function showSuccessMessage(message) {
    const toast = document.createElement('div');
    toast.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: 500;
            z-index: 10001;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 20px rgba(40, 167, 69, 0.3);
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 4000);
}

function showErrorMessage(message) {
    const toast = document.createElement('div');
    toast.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dc3545;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            font-weight: 500;
            z-index: 10001;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 20px rgba(220, 53, 69, 0.3);
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 4000);
}

// Add necessary CSS animations
const shareAnimations = document.createElement('style');
shareAnimations.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.9); }
    }
`;
document.head.appendChild(shareAnimations);
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