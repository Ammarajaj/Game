// (هذا الكود جاهز للنسخ واللصق مباشرة)
// --- تعريف بنك الأسئلة ---
const allQuestions = [
    // المستوى 1: سهل
    {
        level: 1,
        description: "أتاك مريض شاب لفحص روتيني. قمت باختبار منعكساته.",
        image: "https://i.imgur.com/3J2gY7c.png", // صورة ساق
        hotspots: [
            { id: "patellar_tendon", tool: "hammer", top: "55%", left: "50%", width: "15%", height: "15%", info: "تم تحفيز منعكس الرضفة بنجاح." }
        ],
        choices: ["منعكس أخيل طبيعي", "منعكس الرضفة طبيعي", "علامة بابنسكي إيجابية", "رمع الكاحل", "منعكس ثلاثي الرؤوس طبيعي"],
        correctAnswer: "منعكس الرضفة طبيعي",
        points: 10
    },
    // المستوى 2: متوسط
    {
        level: 2,
        description: "مريض عمره 70 عاماً، يعاني من سعال وزلة تنفسية مترقية.",
        image: "https://i.imgur.com/xG5gO3j.png", // صورة صدر
        hotspots: [
            { id: "lung_base_left", tool: "stethoscope", top: "75%", left: "60%", width: "15%", height: "20%", info: "تُسمع خراخر ناعمة في نهاية الشهيق." },
            { id: "aortic_area", tool: "stethoscope", top: "25%", left: "55%", width: "10%", height: "15%", info: "الأصوات القلبية طبيعية." }
        ],
        choices: ["ذات رئة فصية", "ربو قصبي", "وذمة رئة (بسبب قصور قلب)", "انصباب جنب", "توسع قصبات"],
        correctAnswer: "وذمة رئة (بسبب قصور قلب)",
        points: 20
    },
    // المستوى 3: صعب
    {
        level: 3,
        description: "شاب يعاني من حمى، صداع شديد، وصلابة في النقرة.",
        image: "https://i.imgur.com/3J2gY7c.png", // صورة ساق (نفس الصورة، استخدام مختلف)
        hotspots: [
            // علامة كيرنيغ: ألم عند بسط الركبة وهي مثنية على الفخذ
            { id: "kernig_sign", tool: "hand", top: "50%", left: "50%", width: "20%", height: "20%", info: "عند محاولة بسط الركبة، أبدى المريض مقاومة وألماً شديداً في الظهر." }
        ],
        choices: ["علامة روسينغ", "علامة مورفي", "علامة كيرنيغ", "علامة كولن", "علامة تروسو"],
        correctAnswer: "علامة كيرنيغ",
        points: 50
    },
    // المستوى 4: مستحيل
    {
        level: 4,
        description: "مريضة لاحظت فجأة عدم قدرتها على إغماض عينها اليسرى أو الابتسام بشكل متناظر.",
        image: "https://i.imgur.com/2v3gY0k.png", // صورة وجه
        hotspots: [
            { id: "forehead_left", tool: "hand", top: "15%", left: "60%", width: "25%", height: "15%", info: "عند الطلب منها رفع حاجبيها، لم يرتفع الحاجب الأيسر (تجعد الجبهة غائب)." }
        ],
        choices: ["شلل العصب الوجهي المركزي الأيمن", "شلل العصب الوجهي المحيطي الأيسر (شلل بيل)", "شلل العصب الثالث", "شلل العصب الوجهي المركزي الأيسر", "تكزز"],
        correctAnswer: "شلل العصب الوجهي المحيطي الأيسر (شلل بيل)",
        points: 100
    }
    // ... يمكن إضافة المزيد من الأسئلة هنا ...
];

// --- متغيرات اللعبة ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedTool = null;

// --- عناصر الواجهة ---
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const diagnosisScreen = document.getElementById('diagnosis-screen');
const gameOverScreen = document.getElementById('game-over-screen');
// ... (بقية العناصر) ...
// (الكود الكامل للـ JS طويل جداً لوضعه هنا، لكنه سيحتوي على الدوال التالية)
// function startGame() { ... }
// function setupQuestions() { ... }
// function loadQuestion(question) { ... }
// function selectTool(tool) { ... }
// function handleHotspotClick(info) { ... }
// function showDiagnosisScreen() { ... }
// function checkAnswer(selectedChoice) { ... }
// function gameOver(reason) { ... }
// function restartGame() { ... }

// الكود الكامل للـ JavaScript (جاهز للنسخ)
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const diagnoseButton = document.getElementById('diagnose-button');

    const scoreDisplay = document.getElementById('score');
    const caseDescription = document.getElementById('case-description');
    const caseImage = document.getElementById('case-image');
    const imageContainer = document.getElementById('image-container');
    const infoPopup = document.getElementById('info-popup');
    const choicesContainer = document.getElementById('choices-container');
    const gameOverReason = document.getElementById('game-over-reason');
    
    const tools = document.querySelectorAll('.tool');

    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    function setupQuestions() {
        currentQuestions = [];
        for (let i = 1; i <= 4; i++) {
            const questionsOfLevel = allQuestions.filter(q => q.level === i);
            // اختيار سؤال عشوائي من كل مستوى
            currentQuestions.push(questionsOfLevel[Math.floor(Math.random() * questionsOfLevel.length)]);
        }
    }

    function startGame() {
        setupQuestions();
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.textContent = score;
        selectedTool = null;
        loadQuestion(currentQuestions[0]);
        showScreen('game-screen');
    }

    function loadQuestion(question) {
        caseDescription.textContent = question.description;
        caseImage.src = question.image;
        
        // إزالة النقاط الساخنة القديمة
        imageContainer.querySelectorAll('.hotspot').forEach(h => h.remove());

        // إضافة النقاط الساخنة الجديدة
        question.hotspots.forEach(spot => {
            const hotspotEl = document.createElement('div');
            hotspotEl.className = 'hotspot';
            hotspotEl.style.top = spot.top;
            hotspotEl.style.left = spot.left;
            hotspotEl.style.width = spot.width;
            hotspotEl.style.height = spot.height;
            
            hotspotEl.addEventListener('click', () => {
                if (selectedTool === spot.tool) {
                    showInfo(spot.info);
                } else {
                    gameOver(`أداة خاطئة! الأداة الصحيحة كانت تتطلب استخدام ${spot.tool === 'hand' ? 'اليد' : 'أداة أخرى'}.`);
                }
            });
            imageContainer.appendChild(hotspotEl);
        });
        
        // إزالة التحديد من الأدوات
        tools.forEach(t => t.classList.remove('selected'));
        selectedTool = null;
    }

    function showInfo(text) {
        infoPopup.textContent = text;
        infoPopup.style.display = 'block';
        setTimeout(() => {
            infoPopup.style.display = 'none';
        }, 3000); // إخفاء الرسالة بعد 3 ثوان
    }

    function showDiagnosisScreen() {
        const question = currentQuestions[currentQuestionIndex];
        choicesContainer.innerHTML = ''; // مسح الخيارات القديمة
        
        // خلط الخيارات لعرضها بترتيب عشوائي
        const shuffledChoices = [...question.choices].sort(() => Math.random() - 0.5);

        shuffledChoices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice;
            button.onclick = () => checkAnswer(choice);
            choicesContainer.appendChild(button);
        });
        showScreen('diagnosis-screen');
    }

    function checkAnswer(selectedChoice) {
        const question = currentQuestions[currentQuestionIndex];
        if (selectedChoice === question.correctAnswer) {
            // إجابة صحيحة
            score += question.points;
            scoreDisplay.textContent = score;
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                loadQuestion(currentQuestions[currentQuestionIndex]);
                showScreen('game-screen');
            } else {
                // فاز باللعبة
                gameOver(`تهانينا! لقد أصبحت المشخّص الصامت وأكملت كل الحالات بنجاح! مجموع نقاطك: ${score}`);
                // تغيير لون شاشة الفوز
                gameOverScreen.style.backgroundColor = '#d4edda';
                gameOverScreen.querySelector('h1').style.color = '#155724';
            }
        } else {
            // إجابة خاطئة
            gameOver(`تشخيص خاطئ! الإجابة الصحيحة كانت: "${question.correctAnswer}"`);
        }
    }

    function gameOver(reason) {
        gameOverReason.textContent = reason;
        showScreen('game-over-screen');
        // إعادة لون شاشة الخسارة الافتراضي
        gameOverScreen.style.backgroundColor = '#ffdddd';
        gameOverScreen.querySelector('h1').style.color = '#d93025';
    }

    // ربط الأحداث
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', startGame);
    diagnoseButton.addEventListener('click', showDiagnosisScreen);
    tools.forEach(toolEl => {
        toolEl.addEventListener('click', () => {
            tools.forEach(t => t.classList.remove('selected'));
            toolEl.classList.add('selected');
            selectedTool = toolEl.dataset.tool;
        });
    });
});

