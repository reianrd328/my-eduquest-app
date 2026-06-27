// Complete Database for Grades 1 to 6
const testDatabase = {
    1: [
        // Math & Shapes with Image Choices
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
        { q: "What season comes after Winter, when flowers start to bloom?", options: ["Summer", "Fall", "Spring", "Winter"], answer: 2 },
        { q: "What is the giant star in the sky that keeps our planet warm during the day?", options: ["The Moon", "The Sun", "Mars", "North Star"], answer: 1 },
        { q: "True or False: An apple grows on a tree, but a carrot grows under the dirt.", options: ["True", "False"], answer: 0 },
        { q: "What body part does a bird use to fly?", options: ["Legs", "Tail", "Beak", "Wings"], answer: 3 },
        { q: "What happens to water if you put it in a freezer?", options: ["It boils", "It turns into ice", "It disappears", "It turns green"], answer: 1 },
        // Community & Daily Life
        { q: "What does the Red color on a traffic light mean?", options: ["Go", "Slow Down", "Stop", "Turn Right"], answer: 2 },
        { q: "Who is the person at school whose job is to help you learn new things?", options: ["Doctor", "Teacher", "Pilot", "Chef"], answer: 1 },
        { q: "Why do we wear a helmet when we ride a bicycle?", options: ["To stay warm", "To look cool", "To protect our head", "To ride faster"], answer: 2 },
        { q: "What are the two magic words you should say when someone gives you a gift?", options: ["Give me", "Thank you", "Goodbye", "No thanks"], answer: 1 },
        { q: "Where does garbage go when you are finished cleaning up your room?", options: ["Under the bed", "In the trash can", "Out the window", "On the floor"], answer: 1 }
    ],
    2: [
        { q: "What is the place value of the 7 in the number 73?", options: ["Ones", "Tens", "Hundreds"], answer: 1 },
        { q: "If a clock's big hand is on the 12 and the small hand is on the 4, what time is it?", options: ["12 o'clock", "4 o'clock", "3 o'clock", "12:04"], answer: 1 },
        { q: "What is 50 + 20?", options: ["60", "80", "70", "90"], answer: 2 },
        { q: "How many cents are in one dollar?", options: ["50 cents", "100 cents", "10 cents", "200 cents"], answer: 1 },
        { q: "If you have 14 stickers and lose 6, how many do you have left?", options: ["8", "7", "9", "6"], answer: 0 },
        { q: "Which word needs a capital letter: 'We went to the park on monday.'", options: ["park", "monday", "went", "to"], answer: 1 },
        { q: "What is the plural form of the word 'child'?", options: ["Childs", "Children", "Childrens", "Childes"], answer: 1 },
        { q: "What are the vowels in the alphabet?", options: ["B, C, D, F", "A, E, I, O, U", "X, Y, Z", "M, N, O, P"], answer: 1 },
        { q: "What is a compound word?", options: ["A word with numbers", "A joined word like sunflower", "A short word", "An action word"], answer: 1 },
        { q: "What is the opposite of the word 'heavy'?", options: ["Hard", "Dark", "Light", "Small"], answer: 2 },
        { q: "What does a caterpillar turn into after its chrysalis stage?", options: ["Frog", "Bee", "Butterfly", "Ant"], answer: 2 },
        { q: "Name the three states of matter.", options: ["Ice, Water, Steam", "Solid, liquid, and gas", "Hard, Soft, Smooth", "Hot, Cold, Warm"], answer: 1 },
        { q: "Which planet do we live on?", options: ["Mars", "Jupiter", "Earth", "Saturn"], answer: 2 },
        { q: "What adaptation helps a polar bear stay warm in the snow?", options: ["Thick fur and blubber", "Long legs", "Green skin", "Big ears"], answer: 0 },
        { q: "What part of a plant drinks water up from the soil?", options: ["Leaves", "Flowers", "The roots", "Stem"], answer: 2 },
        { q: "What map symbol shows the directions North, South, East, and West?", options: ["Scale", "Legend", "A compass rose", "Grid"], answer: 2 },
        { q: "What do we call a person who travels to space in a rocket ship?", options: ["Pilot", "An astronaut", "Sailor", "Driver"], answer: 1 },
        { q: "What historical figure is famous for his top hat and freeing enslaved people?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Ben Franklin"], answer: 1 },
        { q: "What continent do you live on?", options: ["Africa", "Asia", "Europe", "North America"], answer: 1 }, // Defaulted to Asia based on target demographic
        { q: "What is the job of a community lifeguard?", options: ["To sell tickets", "To clean the beach", "To keep people safe while swimming", "To teach fishing"], answer: 2 }
    ],
    3: [
        { q: "Solve this multiplication problem: 3 × 8 = ?", options: ["21", "24", "18", "32"], answer: 1 },
        { q: "What is the top number of a fraction called?", options: ["The numerator", "Denominator", "Integer", "Quotient"], answer: 0 },
        { q: "If a box has 4 rows of chocolates, and each row has 5, how many total?", options: ["9", "15", "20", "25"], answer: 2 },
        { q: "Round the number 47 to the nearest ten.", options: ["40", "50", "45", "60"], answer: 1 },
        { q: "How many sides does a hexagon have?", options: ["5", "8", "6", "4"], answer: 2 },
        { q: "In 'The fast horse jumped', which word is the adjective?", options: ["horse", "jumped", "The", "Fast"], answer: 3 },
        { q: "What do you call a word that means the same thing as another word?", options: ["Antonym", "A synonym", "Homophone", "Verb"], answer: 1 },
        { q: "Identify the verb in: 'Sophia swam across the pool.'", options: ["Sophia", "Swam", "Across", "Pool"], answer: 1 },
        { q: "What prefix can you add to 'happy' to make it mean 'not happy'?", options: ["Dis-", "In-", "Un-", "Mis-"], answer: 2 },
        { q: "Which punctuation mark shows excitement or strong feeling?", options: [".", "?", "!", ":"], answer: 2 },
        { q: "What force pulls objects down toward the center of the Earth?", options: ["Magnetism", "Wind", "Gravity", "Friction"], answer: 2 },
        { q: "What do you call an animal that eats only meat?", options: ["Herbivore", "A carnivore", "Omnivore", "Producer"], answer: 1 },
        { q: "Which planet is the closest to the Sun?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2 },
        { q: "What is it called when water turns from a liquid into a gas?", options: ["Condensation", "Evaporation", "Freezing", "Precipitation"], answer: 1 },
        { q: "True or False: Reptiles are cold-blooded animals.", options: ["True", "False"], answer: 0 },
        { q: "Who was the first President of the United States?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], answer: 2 },
        { q: "What type of map shows mountains, rivers, and lakes?", options: ["A physical map", "Political map", "Weather map", "Road map"], answer: 0 },
        { q: "What do we call a community located right outside a major city?", options: ["Rural", "A suburb", "Metropolis", "Colony"], answer: 1 },
        { q: "What ancient civilization built the Great Pyramids?", options: ["Romans", "Greeks", "The ancient Egyptians", "Aztecs"], answer: 2 },
        { q: "What are the three branches of the US Government?", options: ["State, Local, Federal", "Legislative, Executive, and Judicial", "President, Mayor, Governor", "Police, Army, Navy"], answer: 1 }
    ],
    4: [
        { q: "What is 144 ÷ 12?", options: ["10", "11", "12", "14"], answer: 2 },
        { q: "What do you call an angle that is exactly 90 degrees?", options: ["Acute angle", "Obtuse angle", "A right angle", "Straight angle"], answer: 2 },
        { q: "Find the area of a rectangle with a length of 6 cm and width of 4 cm.", options: ["10 cm²", "24 square centimeters", "20 cm²", "12 cm²"], answer: 1 },
        { q: "What is the value of the digit 9 in the number 94,203?", options: ["9,000", "900", "90,000", "900,000"], answer: 2 },
        { q: "Write 3/10 as a decimal.", options: ["0.03", "0.3", "3.0", "0.003"], answer: 1 },
        { q: "What is a story written about a real person's life by that exact person?", options: ["Biography", "An autobiography", "Fantasy", "Historical fiction"], answer: 1 },
        { q: "In 'They ran quickly to the bus', what part of speech is 'quickly'?", options: ["Noun", "Adjective", "An adverb", "Verb"], answer: 2 },
        { q: "What figure of speech compares two things using 'like' or 'as'?", options: ["A simile", "Metaphor", "Idiom", "Personification"], answer: 0 },
        { q: "Correct the mistake: 'I can see there house from here.'", options: ["they're", "their", "here", "sea"], answer: 1 },
        { q: "What is the main message or moral lesson of a story called?", options: ["Plot", "Setting", "Conflict", "The theme"], answer: 3 },
        { q: "What green pigment do plants use to absorb sunlight?", options: ["Cytoplasm", "Chlorophyll", "Sap", "Xylem"], answer: 1 },
        { q: "What type of rock is formed from cooled volcanic lava?", options: ["Sedimentary", "Metamorphic", "Igneous rock", "Fossil"], answer: 2 },
        { q: "What path does an electrical current follow to power a device?", options: ["A circuit", "Wire", "Generator", "Switch"], answer: 0 },
        { q: "What type of consumer eats both plants and animals?", options: ["Herbivore", "Carnivore", "An omnivore", "Decomposer"], answer: 2 },
        { q: "What resource do we classify as 'fossil fuels'?", options: ["Renewable", "Non-renewable resources", "Inexhaustible", "Synthetic"], answer: 1 },
        { q: "What document, signed in 1776, declared colonies free from British rule?", options: ["The Constitution", "The Bill of Rights", "The Declaration of Independence", "Magna Carta"], answer: 2 },
        { q: "What is the capital city of the United States?", options: ["New York", "Washington, D.C.", "Los Angeles", "Philadelphia"], answer: 1 },
        { q: "What major global water feature covers more than 30% of Earth's surface?", options: ["Atlantic Ocean", "Indian Ocean", "The Pacific Ocean", "Arctic Ocean"], answer: 2 },
        { q: "What do we call a system of government where the people vote for leaders?", options: ["Monarchy", "A democracy", "Dictatorship", "Oligarchy"], answer: 1 },
        { q: "What is the name of the forced migration of Native Americans in the 1830s?", options: ["The Trail of Tears", "Oregon Trail", "Great Migration", "Gold Rush"], answer: 0 }
    ],
    5: [
        { q: "Solve: 0.6 × 0.3 = ?", options: ["1.8", "0.18", "0.018", "18"], answer: 1 },
        { q: "In 5 × (4 + 2), which operation do you perform first?", options: ["Multiplication", "Addition inside parentheses", "Subtraction", "Division"], answer: 1 },
        { q: "Reduce the fraction 8/12 to its simplest form.", options: ["4/6", "2/3", "3/4", "1/2"], answer: 1 },
        { q: "How many milliliters are in 2 liters of water?", options: ["200 mL", "2,000 milliliters", "20,000 mL", "20 mL"], answer: 1 },
        { q: "What do you call a triangle that has three sides of completely different lengths?", options: ["Isosceles", "Equilateral", "A scalene triangle", "Right"], answer: 2 },
        { q: "What part of speech connects words or phrases, like 'and' or 'but'?", options: ["Preposition", "A conjunction", "Interjection", "Pronoun"], answer: 1 },
        { q: "What is a comparison that states one thing IS another without using 'like' or 'as'?", options: ["Simile", "A metaphor", "Hyperbole", "Alliteration"], answer: 1 },
        { q: "Identify the conjunction in: 'I wanted to go swimming, but it started raining.'", options: ["swimming", "started", "but", "it"], answer: 2 },
        { q: "What type of pronoun is used to show ownership, like 'mine' or 'yours'?", options: ["A possessive pronoun", "Reflexive pronoun", "Relative pronoun", "Object pronoun"], answer: 0 },
        { q: "What do we call a word that mimics the sound it represents, like 'buzz'?", options: ["Idiom", "Personification", "Onomatopoeia", "Metaphor"], answer: 2 },
        { q: "What structural system consists of 206 bones?", options: ["Muscular system", "The skeletal system", "Nervous system", "Circulatory system"], answer: 1 },
        { q: "What is the scientific name for the thigh bone, the longest bone in the body?", options: ["Radius", "The femur", "Tibia", "Humerus"], answer: 1 },
        { q: "Which human body system breaks down food to absorb nutrients?", options: ["Respiratory system", "The digestive system", "Immune system", "Endocrine system"], answer: 1 },
        { q: "What gas do humans breathe out as waste that plants need?", options: ["Oxygen", "Nitrogen", "Carbon dioxide (CO2)", "Hydrogen"], answer: 2 },
        { q: "What layer of the Earth is located directly beneath the crust?", options: ["The mantle", "Inner core", "Outer core", "Atmosphere"], answer: 0 },
        { q: "What is the supreme law of the United States, written in 1787?", options: ["The US Constitution", "Declaration of Independence", "Emancipation Proclamation", "Articles of Confederation"], answer: 0 },
        { q: "What are the first ten amendments to the US Constitution called?", options: ["The Preamble", "The Bill of Rights", "The Articles", "The Amendments"], answer: 1 },
        { q: "Which historical trade route connected China and the Mediterranean?", options: ["Trans-Saharan route", "The Silk Road", "Spice Route", "Oregon Trail"], answer: 1 },
        { q: "What major economic downturn event began worldwide in 1929?", options: ["World War I", "The Great Depression", "Industrial Revolution", "Cold War"], answer: 1 },
        { q: "What canal, opened in 1914, connects the Atlantic and Pacific Oceans?", options: ["Suez Canal", "Erie Canal", "The Panama Canal", "Kiel Canal"], answer: 2 }
    ],
    6: [
        { q: "Find the ratio of 4 apples to 12 oranges in simplest form.", options: ["1:2", "1:3", "2:3", "4:12"], answer: 1 },
        { q: "Solve for x: 3x + 5 = 20.", options: ["x = 4", "x = 6", "x = 5", "x = 15"], answer: 2 },
        { q: "What is the absolute value of -15?", options: ["-15", "15", "0", "1"], answer: 1 },
        { q: "What is 5³ (five cubed)?", options: ["15", "25", "125", "75"], answer: 2 },
        { q: "What do we call the middle number in an ordered data set?", options: ["Mean", "The median", "Mode", "Range"], answer: 1 },
        { q: "What is an exaggeration used for emphasis or humor?", options: ["A hyperbole", "Understatement", "Irony", "Metaphor"], answer: 0 },
        { q: "In a story, what do we call the main character facing the conflict?", options: ["Antagonist", "The protagonist", "Supporting character", "Narrator"], answer: 1 },
        { q: "What type of phrase contains a subject and verb but cannot stand alone?", options: ["Independent clause", "A dependent clause", "Prepositional phrase", "Noun phrase"], answer: 1 },
        { q: "What point of view uses pronouns like 'I', 'me', and 'we'?", options: ["First-person point of view", "Second-person", "Third-person limited", "Third-person omniscient"], answer: 0 },
        { q: "What punctuation mark is used to introduce a list?", options: [";", ",", "-", "A colon (:)"], answer: 3 },
        { q: "What are the tiny, microscopic building blocks of all living organisms?", options: ["Atoms", "Cells", "Molecules", "Tissue"], answer: 1 },
        { q: "Which organelle is known as the 'powerhouse of the cell'?", options: ["Nucleus", "Ribosome", "The mitochondria", "Vacuole"], answer: 2 },
        { q: "What physics law states an object at rest stays at rest unless acted upon?", options: ["Newton's First Law (Inertia)", "Newton's Second Law", "Law of Gravity", "Thermodynamics"], answer: 0 },
        { q: "What type of energy is stored energy waiting to be released?", options: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"], answer: 1 },
        { q: "What scale measures how acidic or basic a liquid substance is?", options: ["Richter scale", "Celsius scale", "The pH scale", "Barometric scale"], answer: 2 },
        { q: "What ancient civilization is credited with inventing democracy?", options: ["The Romans", "The ancient Greeks", "The Egyptians", "The Persians"], answer: 1 },
        { q: "What global conflict took place between 1914 and 1918?", options: ["World War II", "Civil War", "World War I", "Vietnam War"], answer: 2 },
        { q: "What do historians call the period between the fall of Rome and the Renaissance?", options: ["The Stone Age", "The Middle Ages", "Bronze Age", "Iron Age"], answer: 1 },
        { q: "What international organization was formed right after WWII to preserve peace?", options: ["League of Nations", "The United Nations (UN)", "NATO", "European Union"], answer: 1 },
        { q: "What economic market relies on supply and demand and private properties?", options: ["Socialism", "Communism", "Capitalism", "Feudalism"], answer: 2 }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let userScore = 0;
let activeGrade = 1;

function startTest(gradeNum) {
    activeGrade = gradeNum;
    currentQuestions = testDatabase[gradeNum] || [];
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
        
        // If Grade 1 AND the option string ends with a standard image extension, render an image element
        if (activeGrade === 1 && (opt.match(/\.(jpeg|jpg|gif|png|webp)$/i) || opt.startsWith('http'))) {
            let img = document.createElement("img");
            img.src = opt;
            img.alt = "Choice Image";
            img.style.maxWidth = "120px";
            img.style.maxHeight = "120px";
            img.style.borderRadius = "12px";
            btn.appendChild(img);
        } else {
            // Otherwise, render text as normal
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