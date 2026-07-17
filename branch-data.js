const questions = [
    {
        kind: "INTERESTS",
        q: "If you could build your first big project with a mentor, which idea sounds most exciting?",
        options: [
            { text: "A well-organized software system with many features working together", branch: "SWEN", related: "CLUD" },
            { text: "A website people can open and use in any browser", branch: "WEB", related: "UIUX" },
            { text: "A phone app that helps with everyday tasks", branch: "MOBI", related: "UIUX" },
            { text: "A game with characters, rules, and levels", branch: "GAME", related: "CGXR" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "Given a collection of school information, what would you be most curious to do with it?",
        options: [
            { text: "Teach a computer to make a useful prediction from it", branch: "AIML", related: "DATA" },
            { text: "Discover trends and explain them with clear charts", branch: "DATA", related: "DBEN" },
            { text: "Organize it so people can find accurate information quickly", branch: "DBEN", related: "SWEN" },
            { text: "Find the fastest step-by-step way to solve a related puzzle", branch: "ALGO", related: "AIML" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "When you use an online service, which behind-the-scenes question interests you most?",
        options: [
            { text: "How are accounts and personal information protected?", branch: "CYBR", related: "NETW" },
            { text: "How does it stay online when many people use it at once?", branch: "CLUD", related: "DVOP" },
            { text: "How are updates tested and released without breaking anything?", branch: "DVOP", related: "CLUD" },
            { text: "How do messages travel between phones, computers, and servers?", branch: "NETW", related: "CYBR" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "At a technology fair, which demonstration would you visit first?",
        options: [
            { text: "An app that feels simple and enjoyable for anyone to use", branch: "UIUX", related: "WEB" },
            { text: "Small sensors controlling lights and appliances", branch: "IOT", related: "NETW" },
            { text: "A robot that can move and complete a task", branch: "ROBO", related: "AIML" },
            { text: "A virtual or augmented reality world you can explore", branch: "CGXR", related: "GAME" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "When an app has a problem, which question would you naturally ask first?",
        options: [
            { text: "Which part of the system is causing the other parts to fail?", branch: "SWEN", related: "DVOP" },
            { text: "Could a computer learn to recognize when this problem happens?", branch: "AIML", related: "DATA" },
            { text: "Could someone be misusing the app or accessing it unfairly?", branch: "CYBR", related: "SWEN" },
            { text: "At what point does the user become confused or stuck?", branch: "UIUX", related: "WEB" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "For a smart campus project, which part would you volunteer to explore?",
        options: [
            { text: "Create the website students would visit", branch: "WEB", related: "UIUX" },
            { text: "Study student activity and turn it into useful insights", branch: "DATA", related: "DBEN" },
            { text: "Keep the project available online even during busy hours", branch: "CLUD", related: "DVOP" },
            { text: "Connect attendance scanners, sensors, or smart devices", branch: "IOT", related: "NETW" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "Which beginner task would feel most satisfying to complete?",
        options: [
            { text: "Make a phone app smoother and easier to use", branch: "MOBI", related: "UIUX" },
            { text: "Arrange a messy list of records into a clear system", branch: "DBEN", related: "DATA" },
            { text: "Automate repeated steps whenever code is updated", branch: "DVOP", related: "SWEN" },
            { text: "Program a simple machine to move accurately", branch: "ROBO", related: "IOT" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "At a coding club activity, which challenge station would you choose?",
        options: [
            { text: "Build a small playable game", branch: "GAME", related: "CGXR" },
            { text: "Solve a difficult logic and strategy puzzle", branch: "ALGO", related: "AIML" },
            { text: "Connect several devices so they can communicate", branch: "NETW", related: "IOT" },
            { text: "Create an impressive interactive 3D scene", branch: "CGXR", related: "GAME" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "Which role would you most like to learn in a student portal project?",
        options: [
            { text: "Plan how all the features and code should fit together", branch: "SWEN", related: "DBEN" },
            { text: "Study how students use the portal and where they struggle", branch: "DATA", related: "UIUX" },
            { text: "Watch for errors and help the portal recover quickly", branch: "DVOP", related: "CLUD" },
            { text: "Create an interactive 3D map of the campus", branch: "CGXR", related: "WEB" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "Which technology mystery sounds most interesting to investigate?",
        options: [
            { text: "Why a button or page on a website does not work", branch: "WEB", related: "SWEN" },
            { text: "Why saved information is slow, missing, or duplicated", branch: "DBEN", related: "DVOP" },
            { text: "Why two devices cannot connect or exchange messages", branch: "NETW", related: "CYBR" },
            { text: "Why a robot moves in the wrong direction", branch: "ROBO", related: "IOT" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "If you could add one feature to a digital campus assistant, which would you choose?",
        options: [
            { text: "A helpful mobile app with timely notifications", branch: "MOBI", related: "UIUX" },
            { text: "An assistant that understands questions and learns what students need", branch: "AIML", related: "DATA" },
            { text: "A service that stays fast even during enrollment", branch: "CLUD", related: "DVOP" },
            { text: "A clear design that new students understand immediately", branch: "UIUX", related: "MOBI" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "Which topic would you most likely watch a beginner tutorial about?",
        options: [
            { text: "How games create challenges, rewards, and player progress", branch: "GAME", related: "DATA" },
            { text: "How ethical hackers find weaknesses and protect systems", branch: "CYBR", related: "NETW" },
            { text: "How tiny devices sense and respond to the real world", branch: "IOT", related: "NETW" },
            { text: "How to solve a problem using fewer and smarter steps", branch: "ALGO", related: "SWEN" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "In a first-year group project, which role would you be most willing to try?",
        options: [
            { text: "Plan the program's main parts and keep the code organized", branch: "SWEN", related: "DVOP" },
            { text: "Decide how the project's information should be stored", branch: "DBEN", related: "DATA" },
            { text: "Help put the project online so teammates can access it", branch: "CLUD", related: "CYBR" },
            { text: "Connect simple motors, sensors, and controls", branch: "ROBO", related: "IOT" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "For a beginner innovation showcase, which project would you most like to present?",
        options: [
            { text: "A useful web experience anyone can open and share", branch: "WEB", related: "UIUX" },
            { text: "A smart tool that changes its response for each user", branch: "AIML", related: "DATA" },
            { text: "A project that can test and publish updates automatically", branch: "DVOP", related: "CLUD" },
            { text: "A virtual environment that feels exciting to explore", branch: "CGXR", related: "GAME" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "Imagine your class is creating a simple health app. Which part interests you most?",
        options: [
            { text: "Make it useful and reliable on a phone", branch: "MOBI", related: "CYBR" },
            { text: "Use anonymous information to discover health trends", branch: "DATA", related: "AIML" },
            { text: "Protect private information from people who should not see it", branch: "CYBR", related: "DBEN" },
            { text: "Help clinics exchange information through reliable connections", branch: "NETW", related: "CYBR" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "If you could try one introductory elective, which would you choose?",
        options: [
            { text: "Game design, game engines, and interactive stories", branch: "GAME", related: "CGXR" },
            { text: "User research, interface design, and accessibility", branch: "UIUX", related: "WEB" },
            { text: "Microcontrollers, sensors, and simple electronics", branch: "IOT", related: "ROBO" },
            { text: "Logic, problem solving, and efficient solutions", branch: "ALGO", related: "AIML" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "Which type of problem would make you curious instead of frustrated?",
        options: [
            { text: "Two program features interfere with each other", branch: "SWEN", related: "DVOP" },
            { text: "A suspicious login appears in a student account", branch: "CYBR", related: "NETW" },
            { text: "A sensor keeps giving inaccurate readings", branch: "IOT", related: "ROBO" },
            { text: "Players find an unfair shortcut in a game", branch: "GAME", related: "DATA" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "For a nationwide education project, which contribution sounds most meaningful to you?",
        options: [
            { text: "Build learning pages that work in any browser", branch: "WEB", related: "UIUX" },
            { text: "Keep online lessons available to students in many regions", branch: "CLUD", related: "NETW" },
            { text: "Create simple assistive robots for hands-on learning", branch: "ROBO", related: "AIML" },
            { text: "Study learning results and suggest improvements", branch: "DATA", related: "AIML" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "Which repeated activity would you most like a computer to handle for you?",
        options: [
            { text: "Keep information updated across several phones", branch: "MOBI", related: "CLUD" },
            { text: "Check and publish every new code change", branch: "DVOP", related: "SWEN" },
            { text: "Create and arrange many objects in a 3D scene", branch: "CGXR", related: "GAME" },
            { text: "Compare many choices and find the best one", branch: "ALGO", related: "AIML" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "Which learning style would help you understand a complicated technology?",
        options: [
            { text: "An intelligent helper that adjusts explanations to my questions", branch: "AIML", related: "UIUX" },
            { text: "A clear visual guide I can click through step by step", branch: "UIUX", related: "WEB" },
            { text: "A neatly organized set of topics and examples", branch: "DBEN", related: "DATA" },
            { text: "A map showing how every device and message is connected", branch: "NETW", related: "IOT" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "Which beginner internship poster would catch your attention first?",
        options: [
            { text: "Learn to build dependable software used by many people", branch: "SWEN", related: "CLUD" },
            { text: "Learn what users need and design a product for them", branch: "UIUX", related: "WEB" },
            { text: "Learn how computers connect and communicate securely", branch: "NETW", related: "CYBR" },
            { text: "Learn how computers recognize patterns and make predictions", branch: "AIML", related: "DATA" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "You have a free weekend and a beginner kit. Which would you open first?",
        options: [
            { text: "A guide for building my first interactive website", branch: "WEB", related: "SWEN" },
            { text: "A small electronics kit with sensors and lights", branch: "IOT", related: "ROBO" },
            { text: "A book of logic puzzles and problem-solving strategies", branch: "ALGO", related: "AIML" },
            { text: "A safe ethical-hacking challenge for beginners", branch: "CYBR", related: "NETW" }
        ]
    },
    {
        kind: "INTERESTS",
        q: "Which beginner-friendly community project would you most like to help create?",
        options: [
            { text: "A mobile guide that works even with a weak signal", branch: "MOBI", related: "NETW" },
            { text: "A small robot that helps with a repeated physical task", branch: "ROBO", related: "IOT" },
            { text: "A dashboard that explains community survey results", branch: "DATA", related: "DBEN" },
            { text: "An online service that stays available and updates safely", branch: "DVOP", related: "CLUD" }
        ]
    },
    {
        kind: "PREFERENCES",
        q: "At the end of your first major project, which result would make you proudest?",
        options: [
            { text: "People have fun playing a world I helped create", branch: "GAME", related: "CGXR" },
            { text: "People are amazed by an interactive 3D experience", branch: "CGXR", related: "UIUX" },
            { text: "Everyone can find correct information quickly", branch: "DBEN", related: "SWEN" },
            { text: "The project stays fast and available when many people use it", branch: "CLUD", related: "DVOP" }
        ]
    }
];

const personalities = {
    SWEN: {
        code: "SWEN",
        branch: "Software Engineering",
        name: "The System Architect",
        desc: "Architecture • Scalable Systems • Reliable Software",
        fullDesc: "You naturally see how features, modules, and people fit into one dependable system. You enjoy turning messy requirements into maintainable software that can evolve for years.",
        traits: ["System thinker", "Clean-code builder", "Architecture minded", "Long-term planner"],
        color: "#ff6b35",
        compatibility: [
            { type: "DVOP", relationship: "Ships your systems reliably" },
            { type: "DBEN", relationship: "Builds the data foundation" },
            { type: "CLUD", relationship: "Scales your architecture" }
        ]
    },
    WEB: {
        code: "WEB",
        branch: "Web Development",
        name: "The Web Weaver",
        desc: "Browser Technology • Responsive Interfaces • Full-Stack Products",
        fullDesc: "You like building experiences people can open, use, and share instantly. From polished interfaces to powerful APIs, you connect design and engineering through the web.",
        traits: ["Fast prototyper", "Browser savvy", "Full-stack curious", "User focused"],
        color: "#4ecdc4",
        compatibility: [
            { type: "UIUX", relationship: "Shapes the ideal experience" },
            { type: "DBEN", relationship: "Powers your application data" },
            { type: "CLUD", relationship: "Keeps the site available" }
        ]
    },
    MOBI: {
        code: "MOBI",
        branch: "Mobile Development",
        name: "The Pocket App Builder",
        desc: "Device APIs • Mobile Experiences • On-the-Go Products",
        fullDesc: "You want useful technology to travel with the user. You care about smooth gestures, efficient performance, thoughtful notifications, and apps that feel native to real life.",
        traits: ["Device minded", "Experience driven", "Performance aware", "Practical creator"],
        color: "#45b7d1",
        compatibility: [
            { type: "UIUX", relationship: "Perfects every interaction" },
            { type: "CLUD", relationship: "Supports your mobile backend" },
            { type: "SWEN", relationship: "Strengthens app architecture" }
        ]
    },
    AIML: {
        code: "AIML",
        branch: "AI and Machine Learning",
        name: "The Machine Whisperer",
        desc: "Intelligent Systems • Prediction • Learning Models",
        fullDesc: "You are fascinated by systems that learn instead of following only fixed rules. You enjoy experimenting with models, features, and feedback until machines reveal useful behavior.",
        traits: ["Experimental thinker", "Model builder", "Pattern learner", "Future focused"],
        color: "#96ceb4",
        compatibility: [
            { type: "DATA", relationship: "Finds the signal in the data" },
            { type: "ROBO", relationship: "Gives intelligence a body" },
            { type: "ALGO", relationship: "Sharpens the underlying logic" }
        ]
    },
    DATA: {
        code: "DATA",
        branch: "Data Science",
        name: "The Pattern Seeker",
        desc: "Analytics • Visualization • Evidence-Based Decisions",
        fullDesc: "You turn raw information into stories, explanations, and decisions. You enjoy asking the right questions, testing assumptions, and making hidden patterns understandable.",
        traits: ["Analytical", "Evidence driven", "Insight hunter", "Visual storyteller"],
        color: "#feca57",
        compatibility: [
            { type: "AIML", relationship: "Learns from your discoveries" },
            { type: "DBEN", relationship: "Organizes your source of truth" },
            { type: "ALGO", relationship: "Optimizes your analysis" }
        ]
    },
    CYBR: {
        code: "CYBR",
        branch: "Cybersecurity",
        name: "The Digital Guardian",
        desc: "Ethical Hacking • Threat Defense • Digital Trust",
        fullDesc: "You instinctively ask what could go wrong and how to prevent it. You enjoy thinking like an attacker, protecting trust boundaries, and making systems resilient against real threats.",
        traits: ["Threat hunter", "Trust skeptic", "Detail vigilant", "Defense minded"],
        color: "#ff9ff3",
        compatibility: [
            { type: "NETW", relationship: "Maps the paths you defend" },
            { type: "CLUD", relationship: "Secures modern infrastructure" },
            { type: "SWEN", relationship: "Builds security into software" }
        ]
    },
    CLUD: {
        code: "CLUD",
        branch: "Cloud Computing",
        name: "The Cloud Commander",
        desc: "Distributed Systems • Scalability • Cloud Infrastructure",
        fullDesc: "You think beyond one machine. You enjoy designing elastic services, balancing reliability and cost, and keeping systems available even when demand suddenly explodes.",
        traits: ["Scale strategist", "Reliability minded", "Distributed thinker", "Resource optimizer"],
        color: "#54a0ff",
        compatibility: [
            { type: "DVOP", relationship: "Automates cloud operations" },
            { type: "NETW", relationship: "Connects every service" },
            { type: "CYBR", relationship: "Protects cloud workloads" }
        ]
    },
    DVOP: {
        code: "DVOP",
        branch: "DevOps and Site Reliability",
        name: "The Pipeline Master",
        desc: "Automation • Observability • Reliable Delivery",
        fullDesc: "You remove friction between code and production. You enjoy automating repetitive work, observing live systems, and designing recovery paths before failures happen.",
        traits: ["Automation first", "Calm under pressure", "Observability focused", "Continuous improver"],
        color: "#5f27cd",
        compatibility: [
            { type: "CLUD", relationship: "Provides scalable infrastructure" },
            { type: "SWEN", relationship: "Creates software worth shipping" },
            { type: "CYBR", relationship: "Hardens the delivery path" }
        ]
    },
    GAME: {
        code: "GAME",
        branch: "Game Development",
        name: "The World Builder",
        desc: "Interactive Systems • Gameplay • Digital Worlds",
        fullDesc: "You combine code, art, rules, and emotion to create experiences people want to explore. You care about responsive mechanics, satisfying feedback, and memorable worlds.",
        traits: ["Playful designer", "Systems creative", "Iteration driven", "Story minded"],
        color: "#00d2d3",
        compatibility: [
            { type: "CGXR", relationship: "Builds immersive visuals" },
            { type: "AIML", relationship: "Creates intelligent behavior" },
            { type: "SWEN", relationship: "Keeps game systems maintainable" }
        ]
    },
    UIUX: {
        code: "UIUX",
        branch: "UI and UX Design",
        name: "The Experience Designer",
        desc: "Human-Computer Interaction • Product Design • Accessibility",
        fullDesc: "You notice where people hesitate, get confused, or feel delighted. You translate research and empathy into clear flows, beautiful interfaces, and inclusive digital experiences.",
        traits: ["Empathetic", "Visual communicator", "Flow obsessed", "Accessibility aware"],
        color: "#ff9f43",
        compatibility: [
            { type: "WEB", relationship: "Brings experiences to browsers" },
            { type: "MOBI", relationship: "Puts interactions in users' hands" },
            { type: "CGXR", relationship: "Expands the visual possibilities" }
        ]
    },
    DBEN: {
        code: "DBEN",
        branch: "Database Engineering",
        name: "The Data Keeper",
        desc: "Data Integrity • Query Performance • Reliable Storage",
        fullDesc: "You like information to be organized, accurate, fast, and recoverable. You think carefully about schemas, constraints, indexes, and the long life of important data.",
        traits: ["Structured thinker", "Integrity guardian", "Query optimizer", "Consistency focused"],
        color: "#ee5a6f",
        compatibility: [
            { type: "DATA", relationship: "Turns stored data into insight" },
            { type: "SWEN", relationship: "Uses your reliable foundation" },
            { type: "CLUD", relationship: "Scales data services" }
        ]
    },
    NETW: {
        code: "NETW",
        branch: "Network Engineering",
        name: "The Network Navigator",
        desc: "Connectivity • Protocols • Communication Systems",
        fullDesc: "You want to understand how every message reaches its destination. You enjoy designing dependable connections, diagnosing invisible bottlenecks, and keeping devices communicating securely.",
        traits: ["Connection mapper", "Protocol fluent", "Diagnostic thinker", "Infrastructure aware"],
        color: "#0abde3",
        compatibility: [
            { type: "CYBR", relationship: "Secures every connection" },
            { type: "CLUD", relationship: "Runs services across the network" },
            { type: "IOT", relationship: "Connects the physical world" }
        ]
    },
    IOT: {
        code: "IOT",
        branch: "IoT and Embedded Systems",
        name: "The Connected Inventor",
        desc: "Sensors • Embedded Computing • Connected Devices",
        fullDesc: "You enjoy making software interact with the physical world. Limited memory, power, and connectivity feel like creative constraints rather than obstacles.",
        traits: ["Hands-on builder", "Hardware curious", "Efficiency minded", "Real-world problem solver"],
        color: "#1dd1a1",
        compatibility: [
            { type: "ROBO", relationship: "Turns signals into movement" },
            { type: "NETW", relationship: "Connects every device" },
            { type: "CLUD", relationship: "Processes device data at scale" }
        ]
    },
    ROBO: {
        code: "ROBO",
        branch: "Robotics",
        name: "The Automation Engineer",
        desc: "Control Systems • Automation • Autonomous Machines",
        fullDesc: "You want algorithms to move, sense, and act in the real world. You enjoy combining mechanics, electronics, control, and intelligence into machines that accomplish meaningful tasks.",
        traits: ["Multidisciplinary", "Control thinker", "Precision builder", "Automation driven"],
        color: "#ffd32a",
        compatibility: [
            { type: "AIML", relationship: "Adds adaptive intelligence" },
            { type: "IOT", relationship: "Connects sensors and controllers" },
            { type: "ALGO", relationship: "Plans efficient behavior" }
        ]
    },
    CGXR: {
        code: "CGXR",
        branch: "Computer Graphics and AR/VR",
        name: "The Reality Shaper",
        desc: "3D Systems • Immersive Technology • Spatial Computing",
        fullDesc: "You are drawn to the boundary between computation and perception. You enjoy rendering, simulation, spatial interaction, and building digital worlds that feel tangible.",
        traits: ["Spatial thinker", "Visual technologist", "Immersion focused", "Math creative"],
        color: "#ff5252",
        compatibility: [
            { type: "GAME", relationship: "Turns visuals into playable worlds" },
            { type: "UIUX", relationship: "Makes spatial interaction intuitive" },
            { type: "AIML", relationship: "Adds intelligent perception" }
        ]
    },
    ALGO: {
        code: "ALGO",
        branch: "Algorithms and Research",
        name: "The Algorithm Strategist",
        desc: "Theory • Optimization • Computational Problem Solving",
        fullDesc: "You enjoy going beneath tools and frameworks to understand why solutions work. Hard puzzles, elegant proofs, and more efficient methods keep you thinking long after class.",
        traits: ["Abstract thinker", "Complexity aware", "Proof driven", "Optimization focused"],
        color: "#7b1fa2",
        compatibility: [
            { type: "AIML", relationship: "Applies advanced methods" },
            { type: "DATA", relationship: "Provides meaningful problems" },
            { type: "SWEN", relationship: "Turns theory into robust systems" }
        ]
    }
};
