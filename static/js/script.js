// ==========================================
// 1. HARDCODED TRIVIA DATABASE (GRADES 1 - 6)
// ==========================================
const testDatabase = {
    1: [
        // Math & Shapes with Image Choice Compatibility
        { q: "If you have 5 crayons and you give 2 to a friend, how many crayons do you have left?", options: ["3", "2", "5", "4"], answer: 0 },
        { q: "What shape is a coin, a clock, and a pizza?", options: ["Square", "Triangle", "Circle", "Star"], answer: 2 },
        { q: "Can you count by 10s up to 50?", options: ["10, 20, 30", "10, 20, 30, 40, 50", "5, 10, 15", "100, 200"], answer: 1 },
        { q: "Which number is bigger: 12 or 21?", options: ["12", "21"], answer: 1 },
        { q: "What shape has 4 sides that are all exactly the same size?", options: ["Rectangle", "Triangle", "Square", "Circle"], answer: 2 },
        // Reading & Phonics
        { q: "What is the opposite of the word 'hot'?", options: ["Warm", "Cold", "Spicy", "Sun"], answer: 1 },
        { q: "Change the first letter of the word 'map' to a /c/ sound. What new word do you get?", options: ["Cap", "Cat", "Can", "Cup"], answer: 0 },
        { q: "Which of these words is an action word (a verb)?", options: ["Apple", "Happy", "Jump", "Tree"], answer: 2 },
        { q: "What punctuation mark goes at the end of a question?", options: [".", "?", "!", ","], answer: 1 },
        { q: "What two letters make the 'shh' sound in the word 'ship'?", options: ["CH", "TH", "PH", "SH"], answer: 3 },
        // Science & Our World
        { q: "What season comes after Winter, when flowers start to bloom and the weather gets warmer?", options: ["Summer", "Fall", "Spring", "Winter"], answer: 2 },
        { q: "What is the giant star in the sky that keeps our planet warm during the day?", options: ["The Moon", "The Sun", "Mars", "North Star"], answer: 1 },
        { q: "True or False: An apple grows on a tree, but a carrot grows under the dirt.", options: ["True", "False"], answer: 0 },
        { q: "What body part does a bird use to fly?", options: ["Legs", "Tail", "Beak", "Wings"], answer: 3 },
        { q: "What happens to water if you put it in a freezer?", options: ["It boils", "It turns into ice", "It disappears", "It turns green"], answer: 1 },
        // Community & Daily Life
        { q: "What do the colors on a traffic light mean?", options: ["Red means Stop, Yellow means Slow Down, and Green means Go", "Go fast", "Turn off your engine", "Watch out for birds"], answer: 0 },
        { q: "Who is the person at school whose job is to help you learn new things every day?", options: ["Doctor", "Teacher", "Pilot", "Chef"], answer: 1 },
        { q: "Why do we wear a helmet when we ride a bicycle or a scooter?", options: ["To stay warm", "To look cool", "To protect our head and stay safe", "To ride faster"], answer: 2 },
        { q: "What are the two magic words you should say when someone gives you a gift?", options: ["Give me", "Thank you!", "Goodbye", "No thanks"], answer: 1 },
        { q: "Where does garbage go when you are finished cleaning up your room?", options: ["Under the bed", "In the trash can (or rubbish bin)", "Out the window", "On the floor"], answer: 1 }
    ],
    2: [
        { q: "What is the place value of the 7 in the number 73?", options: ["Ones", "The tens place.", "Hundreds"], answer: 1 },
        { q: "If a clock's big hand is on the 12 and the small hand is on the 4, what time is it?", options: ["12 o'clock", "4 o'clock.", "3 o'clock", "12:04"], answer: 1 },
        { q: "What is 50 + 20?", options: ["60", "80", "70.", "90"], answer: 2 },
        { q: "How many cents are in one dollar?", options: ["50 cents", "100 cents.", "10 cents", "200 cents"], answer: 1 },
        { q: "If you have 14 stickers and lose 6, how many do you have left?", options: ["8 stickers.", "7 stickers", "9 stickers", "6 stickers"], answer: 0 },
        { q: "Which word in this sentence needs a capital letter: 'We went to the park on monday.'", options: ["park", "Monday", "went", "to"], answer: 1 },
        { q: "What is the plural form of the word 'child'?", options: ["Childs", "Children.", "Childrens", "Childes"], answer: 1 },
        { q: "What are the vowels in the alphabet?", options: ["B, C, D, F", "A, E, I, O, U", "X, Y, Z", "M, N, O, P"], answer: 1 },
        { q: "What is a compound word?", options: ["A word with numbers", "A word made by joining two smaller words together", "A short word", "An action word"], answer: 1 },
        { q: "What is the opposite of the word 'heavy'?", options: ["Hard", "Dark", "Light.", "Small"], answer: 2 },
        { q: "What does a caterpillar turn into after its chrysalis stage?", options: ["Frog", "Bee", "Butterfly.", "Ant"], answer: 2 },
        { q: "Name the three states of matter.", options: ["Ice, Water, Steam", "Solid, liquid, and gas.", "Hard, Soft, Smooth", "Hot, Cold, Warm"], answer: 1 },
        { q: "Which planet do we live on?", options: ["Mars", "Jupiter", "Earth.", "Saturn"], answer: 2 },
        { q: "What adaptation helps a polar bear stay warm in the snow?", options: ["Thick fur and a layer of blubber.", "Long legs", "Green skin", "Big ears"], answer: 0 },
        { q: "What part of a plant drinks water up from the soil?", options: ["Leaves", "Flowers", "The roots.", "Stem"], answer: 2 },
        { q: "What map symbol usually shows the directions North, South, East, and West?", options: ["Scale", "Legend", "A compass rose.", "Grid"], answer: 2 },
        { q: "What do we call a person who travels to space in a rocket ship?", options: ["Pilot", "An astronaut.", "Sailor", "Driver"], answer: 1 },
        { q: "What historical American figure is famous for his top hat and freeing enslaved people during the Civil War?", options: ["George Washington", "Abraham Lincoln.", "Thomas Jefferson", "Ben Franklin"], answer: 1 },
        { q: "What continent do you live on?", options: ["Africa", "Asia", "Europe", "North America"], answer: 1 },
        { q: "What is the job of a community lifeguard?", options: ["To sell tickets", "To clean the beach", "To keep people safe while they are swimming.", "To teach fishing"], answer: 2 }
    ],
    3: [
        { q: "Solve this multiplication problem: 3 × 8 = ?", options: ["21", "24.", "18", "32"], answer: 1 },
        { q: "What is the top number of a fraction called?", options: ["The numerator.", "Denominator", "Integer", "Quotient"], answer: 0 },
        { q: "If a box has 4 rows of chocolates, and each row has 5 chocolates, how many are there in total?", options: ["9", "15", "20 chocolates", "25"], answer: 2 },
        { q: "Round the number 47 to the nearest ten.", options: ["40", "50.", "45", "60"], answer: 1 },
        { q: "How many sides does a hexagon have?", options: ["5", "8", "6 sides.", "4"], answer: 2 },
        { q: "In the sentence 'The fast horse jumped,' which word is the adjective?", options: ["horse", "jumped", "The", "Fast"], answer: 3 },
        { q: "What do you call a word that means the same thing as another word, like 'large' and 'big'?", options: ["Antonym", "A synonym.", "Homophone", "Verb"], answer: 1 },
        { q: "Identify the verb in this sentence: 'Sophia swam across the pool.'", options: ["Sophia", "Swam.", "Across", "Pool"], answer: 1 },
        { q: "What prefix can you add to the word 'happy' to make it mean 'not happy'?", options: ["Dis-", "In-", "Un- (unhappy).", "Mis-"], answer: 2 },
        { q: "Which punctuation mark shows excitement or strong feeling?", options: [".", "?", "An exclamation point (!).", ":"], answer: 2 },
        { q: "What force pulls objects down toward the center of the Earth?", options: ["Magnetism", "Wind", "Gravity.", "Friction"], answer: 2 },
        { q: "What do you call an animal that eats only meat?", options: ["Herbivore", "A carnivore.", "Omnivore", "Producer"], answer: 1 },
        { q: "Which planet is the closest to the Sun?", options: ["Venus", "Earth", "Mercury.", "Mars"], answer: 2 },
        { q: "What is it called when water turns from a liquid into a gas because of heat?", options: ["Condensation", "Evaporation.", "Freezing", "Precipitation"], answer: 1 },
        { q: "True or False: Reptiles are cold-blooded animals.", options: ["True.", "False"], answer: 0 },
        { q: "Who was the first President of the United States?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington.", "John Adams"], answer: 2 },
        { q: "What type of map shows mountains, rivers, and lakes?", options: ["A physical map.", "Political map", "Weather map", "Road map"], answer: 0 },
        { q: "What do we call a community located right outside a major city, where people often live and commute?", options: ["Rural", "A suburb", "Metropolis", "Colony"], answer: 1 },
        { q: "What ancient civilization built the Great Pyramids?", options: ["Romans", "Greeks", "The ancient Egyptians.", "Aztecs"], answer: 2 },
        { q: "What are the three branches of the US Government?", options: ["State, Local, Federal", "Legislative, Executive, and Judicial.", "President, Mayor, Governor", "Police, Army, Navy"], answer: 1 }
    ],
    4: [
        { q: "What is 144 ÷ 12?", options: ["10", "11", "12.", "14"], answer: 2 },
        { q: "What do you call an angle that is exactly 90 degrees?", options: ["Acute angle", "Obtuse angle", "A right angle.", "Straight angle"], answer: 2 },
        { q: "Find the area of a rectangle with a length of 6 cm and a width of 4 cm.", options: ["10 cm²", "24 square centimeters", "20 cm²", "12 cm²"], answer: 1 },
        { q: "What is the value of the digit 9 in the number 94,203?", options: ["9,000", "900", "90,000", "900,000"], answer: 2 },
        { q: "Write 3/10 as a decimal.", options: ["0.03", "0.3.", "3.0", "0.003"], answer: 1 },
        { q: "What is a story written about a real person's life, written by that exact person?", options: ["Biography", "An autobiography.", "Fantasy", "Historical fiction"], answer: 1 },
        { q: "In the sentence 'They ran quickly to the bus,' what part of speech is 'quickly'?", options: ["Noun", "Adjective", "An adverb.", "Verb"], answer: 2 },
        { q: "What figure of speech compares two things using 'like' or 'as'?", options: ["A simile", "Metaphor", "Idiom", "Personification"], answer: 0 },
        { q: "Correct the homophone mistake in this sentence: 'I can see there house from here.'", options: ["they're", "their", "here", "sea"], answer: 1 },
        { q: "What is the main message or moral lesson of a story called?", options: ["Plot", "Setting", "Conflict", "The theme."], answer: 3 },
        { q: "What green pigment do plants use to absorb sunlight during photosynthesis?", options: ["Cytoplasm", "Chlorophyll.", "Sap", "Xylem"], answer: 1 },
        { q: "What type of rock is formed from cooled volcanic lava?", options: ["Sedimentary", "Metamorphic", "Igneous rock.", "Fossil"], answer: 2 },
        { q: "What path does an electrical current follow to power a device?", options: ["A circuit.", "Wire", "Generator", "Switch"], answer: 0 },
        { q: "What type of consumer eats both plants and animals?", options: ["Herbivore", "Carnivore", "An omnivore.", "Decomposer"], answer: 2 },
        { q: "What resource do we classify as 'fossil fuels' (like coal or oil) because they take millions of years to form?", options: ["Renewable", "Non-renewable resources.", "Inexhaustible", "Synthetic"], answer: 1 },
        { q: "What document, signed in 1776, declared the American colonies free from British rule?", options: ["The Constitution", "The Bill of Rights", "The Declaration of Independence.", "Magna Carta"], answer: 2 },
        { q: "What is the capital city of the United States?", options: ["New York", "Washington, D.C.", "Los Angeles", "Philadelphia"], answer: 1 },
        { q: "What major global water feature covers more than 30% of the Earth's surface?", options: ["Atlantic Ocean", "Indian Ocean", "The Pacific Ocean.", "Arctic Ocean"], answer: 2 },
        { q: "What do we call a system of government where the people vote to choose their leaders?", options: ["Monarchy", "A democracy.", "Dictatorship", "Oligarchy"], answer: 1 },
        { q: "What is the name of the long, difficult journey Native Americans were forced to take to Oklahoma in the 1830s?", options: ["The Trail of Tears.", "Oregon Trail", "Great Migration", "Gold Rush"], answer: 0 }
    ],
    5: [
        { q: "Solve: 0.6 × 0.3 = ?", options: ["1.8", "0.18.", "0.018", "18"], answer: 1 },
        { q: "In the expression 5 × (4 + 2), which operation do you perform first according to the order of operations?", options: ["Multiplication", "Addition inside the parentheses", "Subtraction", "Division"], answer: 1 },
        { q: "Reduce the fraction 8/12 to its simplest form.", options: ["4/6", "2/3", "3/4", "1/2"], answer: 1 },
        { q: "How many milliliters are in 2 liters of water?", options: ["200 mL", "2,000 milliliters.", "20,000 mL", "20 mL"], answer: 1 },
        { q: "What do you call a triangle that has three sides of completely different lengths?", options: ["Isosceles", "Equilateral", "A scalene triangle.", "Right"], answer: 2 },
        { q: "What part of speech connects words or phrases, like 'and,' 'but,' or 'or'?", options: ["Preposition", "A conjunction.", "Interjection", "Pronoun"], answer: 1 },
        { q: "What is a metaphor?", options: ["Simile", "A comparison that states one thing is another thing without using 'like' or 'as'", "Hyperbole", "Alliteration"], answer: 1 },
        { q: "Identify the conjunction in this sentence: 'I wanted to go swimming, but it started raining.'", options: ["swimming", "started", "but", "it"], answer: 2 },
        { q: "What type of pronoun is used to show ownership, like 'mine,' 'yours,' or 'hers'?", options: ["A possessive pronoun.", "Reflexive pronoun", "Relative pronoun", "Object pronoun"], answer: 0 },
        { q: "What do we call a word that mimics the sound it represents, like 'buzz' or 'hiss'?", options: ["Idiom", "Personification", "Onomatopoeia.", "Metaphor"], answer: 2 },
        { q: "What structural system consists of 206 bones that protect our organs and give our body shape?", options: ["Muscular system", "The skeletal system.", "Nervous system", "Circulatory system"], answer: 1 },
        { q: "Looking at the skeletal diagram above, what is the scientific name for the thigh bone, which is also the longest bone in the body?", options: ["Radius", "The femur.", "Tibia", "Humerus"], answer: 1 },
        { q: "Which human body system breaks down food so our body can absorb nutrients?", options: ["Respiratory system", "The digestive system.", "Immune system", "Endocrine system"], answer: 1 },
        { q: "What gas do humans breathe out as waste that plants need to survive?", options: ["Oxygen", "Nitrogen", "Carbon dioxide (CO2).", "Hydrogen"], answer: 2 },
        { q: "What layer of the Earth is located directly beneath the crust?", options: ["The mantle.", "Inner core", "Outer core", "Atmosphere"], answer: 0 },
        { q: "What is the supreme law of the United States, written in 1787?", options: ["The US Constitution.", "Declaration of Independence", "Emancipation Proclamation", "Articles of Confederation"], answer: 0 },
        { q: "What are the first ten amendments to the US Constitution called?", options: ["The Preamble", "The Bill of Rights.", "The Articles", "The Amendments"], answer: 1 },
        { q: "Which continuous trade route historically connected China and the Mediterranean, allowing for the exchange of goods and culture?", options: ["Trans-Saharan route", "The Silk Road.", "Spice Route", "Oregon Trail"], answer: 1 },
        { q: "What major event began in 1929 and caused a massive economic downturn worldwide?", options: ["World War I", "The Great Depression.", "Industrial Revolution", "Cold War"], answer: 1 },
        { q: "What canal, opened in 1914, connects the Atlantic and Pacific Oceans to shorten shipping routes?", options: ["Suez Canal", "Erie Canal", "The Panama Canal.", "Kiel Canal"], answer: 2 }
    ],
    6: [
        { q: "Find the ratio of apples to oranges if you have 4 apples and 12 oranges, written in simplest form.", options: ["1:2", "1:3", "2:3", "4:12"], answer: 1 },
        { q: "Solve for x: 3x + 5 = 20.", options: ["x = 4", "x = 6", "x = 5.", "x = 15"], answer: 2 },
        { q: "What is the absolute value of -15?", options: ["-15", "15.", "0", "1"], answer: 1 },
        { q: "What is 5³ (five cubed)?", options: ["15", "25", "125.", "75"], answer: 2 },
        { q: "What do we call the middle number in a data set when the numbers are listed in order from least to greatest?", options: ["Mean", "The median.", "Mode", "Range"], answer: 1 },
        { q: "What is the term for an exaggeration used for emphasis or humor, like 'I've told you a million times'?", options: ["A hyperbole.", "Understatement", "Irony", "Metaphor"], answer: 0 },
        { q: "In a story, what do we call the main character who faces the central conflict?", options: ["Antagonist", "The protagonist.", "Supporting character", "Narrator"], answer: 1 },
        { q: "What type of phrase contains a subject and a verb but cannot stand alone as a complete sentence?", options: ["Independent clause", "A dependent clause.", "Prepositional phrase", "Noun phrase"], answer: 1 },
        { q: "What is the perspective of a story called when the narrator uses pronouns like 'I,' 'me,' and 'we'?", options: ["First-person point of view.", "Second-person", "Third-person limited", "Third-person omniscient"], answer: 0 },
        { q: "What punctuation mark is used to introduce a list or emphasize a quote?", options: [";", ",", "-", "A colon (:)"], answer: 3 },
        { q: "What are the tiny, microscopic building blocks that make up all living organisms?", options: ["Atoms", "Cells.", "Molecules", "Tissue"], answer: 1 },
        { q: "Which organelle is known as the 'powerhouse of the cell' because it generates energy?", options: ["Nucleus", "Ribosome", "The mitochondria.", "Vacuole"], answer: 2 },
        { q: "What law of physics states that an object at rest stays at rest unless acted upon by an outside force?", options: ["Newton's First Law of Motion (Inertia).", "Newton's Second Law", "Law of Gravity", "Thermodynamics"], answer: 0 },
        { q: "What type of energy is stored energy waiting to be released, like a rock sitting at the top of a hill?", options: ["Kinetic energy", "Potential energy.", "Thermal energy", "Chemical energy"], answer: 1 },
        { q: "What scale is used to measure how acidic or basic a liquid substance is?", options: ["Richter scale", "Celsius scale", "The pH scale.", "Barometric scale"], answer: 2 },
        { q: "What ancient civilization is credited with inventing the concept of democracy?", options: ["The Romans", "The ancient Greeks.", "The Egyptians", "The Persians"], answer: 1 },
        { q: "What global conflict took place between 1914 and 1918?", options: ["World War II", "Civil War", "World War I.", "Vietnam War"], answer: 2 },
        { q: "What do historians call the period of European history between the fall of the Roman Empire and the Renaissance?", options: ["The Stone Age", "The Middle Ages (or Medieval Period).", "Bronze Age", "Iron Age"], answer: 1 },
        { q: "What international organization was formed right after World War II to maintain global peace and security?", options: ["League of Nations", "The United Nations (UN).", "NATO", "European Union"], answer: 1 },
        { q: "What economic system relies on supply and demand in a free market, where private businesses own property?", options: ["Socialism", "Communism", "Capitalism.", "Feudalism"], answer: 2 }
    ]
};

// ==========================================
// 2. AUTOMATIC GENERATOR ENGINE MECHANICS
// ==========================================

// A. Math Auto-Generator
function generateRandomMath(grade) {
    let num1, num2, questionText, correctAnswer, wrongAnswers;

    if (grade === 1) {
        num1 = Math.floor(Math.random() * 9) + 1; 
        num2 = Math.floor(Math.random() * 9) + 1; 
        questionText = `What is ${num1} + ${num2}?`;
        correctAnswer = num1 + num2;
        wrongAnswers = [correctAnswer + 1, correctAnswer - 1, correctAnswer + 2];
    } else if (grade === 2) {
        num1 = Math.floor(Math.random() * 40) + 10; 
        num2 = Math.floor(Math.random() * 40) + 10; 
        questionText = `Solve this: ${num1} + ${num2}`;
        correctAnswer = num1 + num2;
        wrongAnswers = [correctAnswer + 10, correctAnswer - 10, correctAnswer + 2];
    } else if (grade === 3) {
        num1 = Math.floor(Math.random() * 8) + 2; 
        num2 = Math.floor(Math.random() * 9) + 1; 
        questionText = `What is ${num1} × ${num2}?`;
        correctAnswer = num1 * num2;
        wrongAnswers = [correctAnswer + num1, correctAnswer - num1, correctAnswer + 2];
    } else {
        num1 = Math.floor(Math.random() * 12) + 1;
        questionText = `Solve for x: x - ${num1} = 10`;
        correctAnswer = 10 + num1;
        wrongAnswers = [correctAnswer + 5, correctAnswer - 2, 10];
    }

    let optionsSet = new Set([correctAnswer]);
    wrongAnswers.forEach(w => { if (w > 0 && optionsSet.size < 4) optionsSet.add(w); });
    while(optionsSet.size < 4) { optionsSet.add(correctAnswer + Math.floor(Math.random() * 5) + 3); }

    let shuffledOptions = Array.from(optionsSet).sort(() => Math.random() - 0.5);
    return { q: questionText, options: shuffledOptions.map(String), answer: shuffledOptions.indexOf(correctAnswer) };
}

// B. Language Arts Auto-Generator
function generateRandomLanguageArts(grade) {
    const wordBank = [
        { word: "tall", ans: "short", choices: ["big", "short", "heavy", "long"] },
        { word: "fast", ans: "slow", choices: ["quick", "slow", "weak", "bright"] },
        { word: "happy", ans: "sad", choices: ["angry", "sad", "silly", "sleepy"] },
        { word: "dark", ans: "light", choices: ["black", "light", "cold", "soft"] },
        { word: "noisy", ans: "quiet", choices: ["loud", "quiet", "clean", "rough"] },
        { word: "clean", ans: "dirty", choices: ["fresh", "dirty", "old", "smart"] }
    ];

    let item = wordBank[Math.floor(Math.random() * wordBank.length)];
    let questionText = `What is the opposite of the word "${item.word}"?`;
    let shuffledOptions = [...item.choices].sort(() => Math.random() - 0.5);

    return { q: questionText, options: shuffledOptions, answer: shuffledOptions.indexOf(item.ans) };
}

// C. Science Auto-Generator
function generateRandomScience(grade) {
    const groups = [
        { name: "Ice Cubes", ans: "Solid", choices: ["Solid", "Liquid", "Gas", "Plasma"] },
        { name: "Orange Juice", ans: "Liquid", choices: ["Solid", "Liquid", "Gas", "Plasma"] },
        { name: "Steam from a kettle", ans: "Gas", choices: ["Solid", "Liquid", "Gas", "Plasma"] },
        { name: "A stone block", ans: "Solid", choices: ["Solid", "Liquid", "Gas", "Plasma"] }
    ];

    let item = groups[Math.floor(Math.random() * groups.length)];
    let questionText = `Which state of matter does "${item.name}" belong to?`;

    return { q: questionText, options: item.choices, answer: item.choices.indexOf(item.ans) };
}

// ==========================================
// 3. GAME RUNTIME CONTROL VARIABLES & FUNCTIONS
// ==========================================
let currentQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let activeGrade = 1;

function startTest(gradeNum) {
    activeGrade = gradeNum;
    
    // 1. Load static trivia questions pool
    let pool = [...(testDatabase[gradeNum] || [])];
    
    // 2. Add auto-generated components to create full endless variety
    for (let i = 0; i < 4; i++) { pool.push(generateRandomMath(gradeNum)); }
    for (let i = 0; i < 3; i++) { pool.push(generateRandomLanguageArts(gradeNum)); }
    for (let i = 0; i < 3; i++) { pool.push(generateRandomScience(gradeNum)); }
    
    // 3. Shuffle everything completely and slice to standard 20 count
    let shuffledPool = pool.sort(() => Math.random() - 0.5);
    currentQuestions = shuffledPool.slice(0, 20);
    
    currentQuestionIndex = 0;
    userScore = 0;
    
    document.getElementById("arena-title").innerText = `Grade ${gradeNum} Quest! 🧩`;
    document.getElementById("grade-selection").classList.add("hidden");
    document.getElementById("test-arena").classList.remove("hidden");
    
    showQuestion();
}

function showQuestion() {
    document.getElementById("next-btn").classList.add("hidden");
    let qData = currentQuestions[currentQuestionIndex];
    
    let progressPercent = (currentQuestionIndex / currentQuestions.length) * 100;
    document.getElementById("progress-bar").style.width = `${progressPercent}%`;

    document.getElementById("question-text").innerText = qData.q;
    
    let optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    
    qData.options.forEach((opt, idx) => {
        let btn = document.createElement("button");
        btn.className = "option-btn";
        
        // Image detector logic: Render image tags seamlessly if extensions are found
        if (activeGrade === 1 && (opt.match(/\.(jpeg|jpg|gif|png|webp)$/i) || opt.startsWith('http'))) {
            let img = document.createElement("img");
            img.src = opt;
            img.alt = "Choice Graphic";
            img.style.maxWidth = "110px";
            img.style.maxHeight = "110px";
            img.style.borderRadius = "8px";
            btn.appendChild(img);
        } else {
            btn.innerText = opt;
        }
        
        btn.onclick = () => selectAnswer(btn, idx, qData.answer);
        optionsContainer.appendChild(btn);
    });
}

function selectAnswer(selectedBtn, chosenIdx, correctIdx) {
    let allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.disabled = true);

    if (chosenIdx === correctIdx) {
        selectedBtn.classList.add("correct");
        userScore++;
    } else {
        selectedBtn.classList.add("wrong");
        allButtons[correctIdx].classList.add("correct");
    }
    
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        document.getElementById("test-arena").classList.add("hidden");
        document.getElementById("score-screen").classList.remove("hidden");
        document.getElementById("final-score").innerText = userScore;
        document.getElementById("total-score").innerText = currentQuestions.length;
    }
}

function goBack() {
    document.getElementById("test-arena").classList.add("hidden");
    document.getElementById("score-screen").classList.add("hidden");
    document.getElementById("grade-selection").classList.remove("hidden");
}
