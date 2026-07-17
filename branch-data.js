const questions = [
    {
        kind: "LIKINGS",
        q: "Kapag pumipili ka ng personal project, alin ang pinaka-gusto mong buuin kahit walang grade?",
        options: [
            { text: "A scalable platform na kayang lumaki with thousands of users", branch: "SWEN", related: "CLUD" },
            { text: "A polished website na mabilis, responsive, at madaling gamitin", branch: "WEB", related: "UIUX" },
            { text: "A mobile app na useful kahit nasaan ang user", branch: "MOBI", related: "UIUX" },
            { text: "An immersive game world with its own mechanics and story", branch: "GAME", related: "CGXR" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Sa mga data task na na-try o napanood mo, alin ang pinaka-na-enjoy mong gawin?",
        options: [
            { text: "Train a model that can predict what happens next", branch: "AIML", related: "DATA" },
            { text: "Find patterns and explain them through visualizations", branch: "DATA", related: "DBEN" },
            { text: "Design a reliable structure for storing and querying everything", branch: "DBEN", related: "SWEN" },
            { text: "Create a faster algorithm for processing the data", branch: "ALGO", related: "AIML" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Kapag may mabagal o sirang online system, anong investigation ang natural mong inuuna?",
        options: [
            { text: "Check whether an attacker or suspicious request caused it", branch: "CYBR", related: "NETW" },
            { text: "Inspect cloud resources and scale the infrastructure", branch: "CLUD", related: "DVOP" },
            { text: "Trace the deployment pipeline, logs, and monitoring alerts", branch: "DVOP", related: "CLUD" },
            { text: "Analyze packets, routes, and connection bottlenecks", branch: "NETW", related: "CYBR" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Sa innovation fair, aling demo ang kusang nakaka-curious sa iyo?",
        options: [
            { text: "A prototype with an incredibly intuitive user experience", branch: "UIUX", related: "WEB" },
            { text: "Smart sensors controlling appliances around a room", branch: "IOT", related: "NETW" },
            { text: "A robot that can navigate and perform tasks by itself", branch: "ROBO", related: "AIML" },
            { text: "A realistic AR world with interactive 3D objects", branch: "CGXR", related: "GAME" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Kapag may mysterious bug, aling problem-solving style ang madalas mong gamitin?",
        options: [
            { text: "Map the whole architecture and isolate the failing component", branch: "SWEN", related: "DVOP" },
            { text: "Use the logs as training signals to detect the hidden pattern", branch: "AIML", related: "DATA" },
            { text: "Think like an attacker and test every trust boundary", branch: "CYBR", related: "SWEN" },
            { text: "Replay the exact user journey and find where the experience breaks", branch: "UIUX", related: "WEB" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Kung gagawa ng campus information system, aling part ang pinaka-gusto mong hawakan?",
        options: [
            { text: "Build the public-facing site and interactive pages", branch: "WEB", related: "UIUX" },
            { text: "Turn member activity into useful reports and insights", branch: "DATA", related: "DBEN" },
            { text: "Host it reliably so traffic spikes never take it down", branch: "CLUD", related: "DVOP" },
            { text: "Connect attendance scanners and smart devices to the system", branch: "IOT", related: "NETW" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Sa past project mo, aling production task ang pinaka-komportable kang gawin?",
        options: [
            { text: "Optimize battery, gestures, and performance on phones", branch: "MOBI", related: "UIUX" },
            { text: "Normalize the records and speed up slow queries", branch: "DBEN", related: "DATA" },
            { text: "Automate testing, builds, releases, and rollback", branch: "DVOP", related: "SWEN" },
            { text: "Program the physical mechanism to move accurately", branch: "ROBO", related: "IOT" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Sa overnight hackathon, aling challenge ang pipiliin mo dahil genuinely fun ito para sa iyo?",
        options: [
            { text: "Create a fun playable level before sunrise", branch: "GAME", related: "CGXR" },
            { text: "Solve the hardest optimization puzzle on the board", branch: "ALGO", related: "AIML" },
            { text: "Build a resilient network for devices in different rooms", branch: "NETW", related: "IOT" },
            { text: "Make a visually impressive real-time 3D experience", branch: "CGXR", related: "GAME" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Batay sa strengths na naipakita mo sa school projects, saan ka pinaka-fit sa student portal?",
        options: [
            { text: "Design clean modules that remain maintainable for years", branch: "SWEN", related: "DBEN" },
            { text: "Study usage trends and discover where students struggle", branch: "DATA", related: "UIUX" },
            { text: "Create health checks and automatic recovery for every service", branch: "DVOP", related: "CLUD" },
            { text: "Build an interactive 3D campus map", branch: "CGXR", related: "WEB" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Kapag gumagana locally pero pumapalya remotely, ano ang una mong chine-check?",
        options: [
            { text: "Browser behavior, API calls, and frontend errors", branch: "WEB", related: "SWEN" },
            { text: "Connection pools, indexes, and database locks", branch: "DBEN", related: "DVOP" },
            { text: "DNS, routing, ports, and packet flow", branch: "NETW", related: "CYBR" },
            { text: "Sensor calibration and the machine's control loop", branch: "ROBO", related: "IOT" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Kung bubuo ka ng digital campus assistant, aling core feature ang pinaka-exciting sa iyo?",
        options: [
            { text: "A smooth mobile experience with useful notifications", branch: "MOBI", related: "UIUX" },
            { text: "A conversational assistant that learns what users need", branch: "AIML", related: "DATA" },
            { text: "A backend that automatically scales during enrollment", branch: "CLUD", related: "DVOP" },
            { text: "A flow so simple that first-time users never get lost", branch: "UIUX", related: "MOBI" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Aling technical challenge ang kaya mong gawin nang matagal dahil nae-enjoy mo ito?",
        options: [
            { text: "Balance difficulty, rewards, and player progression", branch: "GAME", related: "DATA" },
            { text: "Find and exploit a vulnerability before anyone else does", branch: "CYBR", related: "NETW" },
            { text: "Make tiny devices communicate using limited power", branch: "IOT", related: "NETW" },
            { text: "Prove why a solution is correct and efficient", branch: "ALGO", related: "SWEN" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Sa mga group project mo, anong responsibility ang madalas mong inaako o mahusay mong nagagawa?",
        options: [
            { text: "Define the architecture and coding standards", branch: "SWEN", related: "DVOP" },
            { text: "Own the data model, integrity rules, and backup plan", branch: "DBEN", related: "DATA" },
            { text: "Prepare secure cloud environments for every stage", branch: "CLUD", related: "CYBR" },
            { text: "Integrate motors, sensors, and control software", branch: "ROBO", related: "IOT" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Sa open-ended innovation contest, anong demo ang gusto mong ipakita?",
        options: [
            { text: "A web experience people can instantly try and share", branch: "WEB", related: "UIUX" },
            { text: "An intelligent tool that adapts to each user", branch: "AIML", related: "DATA" },
            { text: "A one-click pipeline that safely ships every update", branch: "DVOP", related: "CLUD" },
            { text: "A virtual environment that feels physically real", branch: "CGXR", related: "GAME" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Kapag may sensitive information ang app, saan ka karaniwang pinaka-maingat?",
        options: [
            { text: "Secure local storage and permissions on the phone", branch: "MOBI", related: "CYBR" },
            { text: "Use anonymized information to discover health trends", branch: "DATA", related: "AIML" },
            { text: "Threat-model every entry point and encrypt the data", branch: "CYBR", related: "DBEN" },
            { text: "Create reliable, private communication between facilities", branch: "NETW", related: "CYBR" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Kung libre mong mami-master ang isang difficult elective, ano ang pipiliin mo?",
        options: [
            { text: "Game engines, physics, and interactive storytelling", branch: "GAME", related: "CGXR" },
            { text: "Human-computer interaction and product design", branch: "UIUX", related: "WEB" },
            { text: "Embedded programming and real-time electronics", branch: "IOT", related: "ROBO" },
            { text: "Advanced algorithms and computational complexity", branch: "ALGO", related: "AIML" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Aling klase ng prototype problem ang pinaka-confident kang i-troubleshoot?",
        options: [
            { text: "A race condition hidden across multiple modules", branch: "SWEN", related: "DVOP" },
            { text: "An unauthorized device secretly accessing the system", branch: "CYBR", related: "NETW" },
            { text: "A sensor sending noisy readings at random times", branch: "IOT", related: "ROBO" },
            { text: "A game mechanic that players keep exploiting", branch: "GAME", related: "DATA" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Sa nationwide education project, aling contribution ang pinaka-meaningful para sa iyo?",
        options: [
            { text: "Build accessible learning pages for any browser", branch: "WEB", related: "UIUX" },
            { text: "Design regional cloud infrastructure that stays available", branch: "CLUD", related: "NETW" },
            { text: "Create assistive robots for hands-on learning", branch: "ROBO", related: "AIML" },
            { text: "Measure learning outcomes and recommend improvements", branch: "DATA", related: "AIML" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Sa mga repetitive task na naranasan mo, alin ang una mong gustong i-automate?",
        options: [
            { text: "Syncing information and workflows across mobile devices", branch: "MOBI", related: "CLUD" },
            { text: "Building, testing, and releasing every code change", branch: "DVOP", related: "SWEN" },
            { text: "Generating and optimizing complex 3D scenes", branch: "CGXR", related: "GAME" },
            { text: "Finding the fastest solution among millions of possibilities", branch: "ALGO", related: "AIML" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Kapag nagpapaliwanag ka ng complicated system, aling paraan ang madalas mong gamitin?",
        options: [
            { text: "Let an intelligent assistant adapt the explanation", branch: "AIML", related: "UIUX" },
            { text: "Turn it into a clear visual flow with helpful interactions", branch: "UIUX", related: "WEB" },
            { text: "Show how information is organized and connected", branch: "DBEN", related: "DATA" },
            { text: "Draw how every device and message travels through the network", branch: "NETW", related: "IOT" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Aling internship description ang babasahin mo at mapapasabing “gusto ko ito”?",
        options: [
            { text: "Design robust services used by millions of people", branch: "SWEN", related: "CLUD" },
            { text: "Research users and shape a product they will love", branch: "UIUX", related: "WEB" },
            { text: "Build and protect high-speed communication systems", branch: "NETW", related: "CYBR" },
            { text: "Develop models that learn from real-world behavior", branch: "AIML", related: "DATA" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Kapag may free weekend ka, anong topic ang kusa mong pinag-aaralan?",
        options: [
            { text: "A modern web framework and browser APIs", branch: "WEB", related: "SWEN" },
            { text: "A microcontroller kit with sensors and wireless modules", branch: "IOT", related: "ROBO" },
            { text: "A course on graph theory and optimization", branch: "ALGO", related: "AIML" },
            { text: "A capture-the-flag cybersecurity challenge", branch: "CYBR", related: "NETW" }
        ]
    },
    {
        kind: "EXPERIENCE",
        q: "Batay sa skills na na-build mo na, anong community capstone ang kaya mong simulan ngayon?",
        options: [
            { text: "A mobile service that works even with weak connectivity", branch: "MOBI", related: "NETW" },
            { text: "A robot that assists with repetitive physical work", branch: "ROBO", related: "IOT" },
            { text: "A decision dashboard built from community data", branch: "DATA", related: "DBEN" },
            { text: "A continuously deployed platform with near-zero downtime", branch: "DVOP", related: "CLUD" }
        ]
    },
    {
        kind: "LIKINGS",
        q: "Sa mga output na nagawa o nakita mo, alin ang nagbibigay sa iyo ng pinakamalaking satisfaction?",
        options: [
            { text: "People are genuinely having fun in a world you created", branch: "GAME", related: "CGXR" },
            { text: "The visuals and interactions make the impossible feel real", branch: "CGXR", related: "UIUX" },
            { text: "Every record is accurate, fast, and recoverable", branch: "DBEN", related: "SWEN" },
            { text: "The service stays fast and available under huge demand", branch: "CLUD", related: "DVOP" }
        ]
    }
];

const personalities = {
    SWEN: {
        code: "SWEN",
        branch: "Software Engineering",
        name: "The System Architect",
        desc: "Software Engineering • Architecture • Scalable Systems",
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
        desc: "Web Development • Browser Technology • Interactive Products",
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
        desc: "Mobile Development • Device APIs • Everyday Experiences",
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
        desc: "AI and Machine Learning • Intelligent Systems • Prediction",
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
        desc: "Data Science • Analytics • Evidence-Based Decisions",
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
        desc: "Cybersecurity • Ethical Hacking • Digital Defense",
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
        desc: "Cloud Computing • Distributed Systems • Scalability",
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
        desc: "DevOps and SRE • Automation • Reliable Delivery",
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
        desc: "Game Development • Interactive Systems • Play",
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
        desc: "UI/UX Design • Human-Computer Interaction • Product Thinking",
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
        desc: "Database Engineering • Data Integrity • Query Performance",
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
        desc: "Network Engineering • Connectivity • Communication Systems",
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
        desc: "IoT and Embedded Systems • Sensors • Edge Computing",
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
        desc: "Robotics • Control Systems • Autonomous Machines",
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
        desc: "Computer Graphics and AR/VR • 3D Systems • Immersion",
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
        desc: "Algorithms and Research • Theory • Computational Problem Solving",
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
