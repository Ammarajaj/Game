document.addEventListener('DOMContentLoaded', () => {
    // --- عناصر الواجهة ---
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const diagnosisScreen = document.getElementById('diagnosis-screen');
    const gameOverScreen = document.getElementById('game-over-screen');
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

    // --- الصورة المدمجة والثابتة ---
    // هذه الصورة ستبقى ثابتة طوال اللعبة
    const bodyImageBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAA1B9+zAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAP+lSURBVHhe7N15mFzVle/x3wQCCySIgAgCiCIiIu4V11xzzbV1dXV1dXXB1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1d1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1d-";

    // --- بنك الأسئلة ---
    const allQuestions = [
        // المستوى 1: سهل
        {
            level: 1,
            description: "أتاك مريض شاب لفحص روتيني. قمت باختبار منعكساته.",
            hotspots: [
                { id: "patellar_tendon", tool: "hammer", top: "72%", left: "42%", width: "5%", height: "5%", info: "تم تحفيز منعكس الرضفة بنجاح." }
            ],
            choices: ["منعكس أخيل طبيعي", "منعكس الرضفة طبيعي", "علامة بابنسكي إيجابية", "رمع الكاحل", "منعكس ثلاثي الرؤوس طبيعي"],
            correctAnswer: "منعكس الرضفة طبيعي",
            points: 10
        },
        // المستوى 2: متوسط
        {
            level: 2,
            description: "مريض عمره 70 عاماً، يعاني من سعال وزلة تنفسية مترقية.",
            hotspots: [
                { id: "lung_base_left", tool: "stethoscope", top: "45%", left: "43%", width: "6%", height: "8%", info: "تُسمع خراخر ناعمة في نهاية الشهيق." },
                { id: "aortic_area", tool: "stethoscope", top: "28%", left: "48%", width: "4%", height: "4%", info: "الأصوات القلبية طبيعية." }
            ],
            choices: ["ذات رئة فصية", "ربو قصبي", "وذمة رئة (بسبب قصور قلب)", "انصباب جنب", "توسع قصبات"],
            correctAnswer: "وذمة رئة (بسبب قصور قلب)",
            points: 20
        },
        // المستوى 3: صعب
        {
            level: 3,
            description: "شاب يعاني من حمى، صداع شديد، وصلابة في النقرة.",
            hotspots: [
                { id: "kernig_sign", tool: "hand", top: "65%", left: "42%", width: "8%", height: "10%", info: "عند محاولة بسط الركبة، أبدى المريض مقاومة وألماً شديداً في الظهر." }
            ],
            choices: ["علامة روسينغ", "علامة مورفي", "علامة كيرنيغ", "علامة كولن", "علامة تروسو"],
            correctAnswer: "علامة كيرنيغ",
            points: 50
        },
        // المستوى 4: مستحيل
        {
            level: 4,
            description: "مريضة لاحظت فجأة عدم قدرتها على إغماض عينها اليسرى أو الابتسام بشكل متناظر.",
            hotspots: [
                { id: "forehead_left", tool: "hand", top: "18%", left: "53%", width: "4%", height: "3%", info: "عند الطلب منها رفع حاجبيها، لم يرتفع الحاجب الأيسر (تجعد الجبهة غائب)." }
            ],
            choices: ["شلل العصب الوجهي المركزي الأيمن", "شلل العصب الوجهي المحيطي الأيسر (شلل بيل)", "شلل العصب الثالث", "شلل العصب الوجهي المركزي الأيسر", "تكزز"],
            correctAnswer: "شلل العصب الوجهي المحيطي الأيسر (شلل بيل)",
            points: 100
        }
    ];

    // --- متغيرات اللعبة ---
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedTool = null;

    // --- دوال اللعبة ---
    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    function setupQuestions() {
        currentQuestions = [];
        const levels = [1, 2, 3, 4];
        levels.forEach(level => {
            const questionsOfLevel = allQuestions.filter(q => q.level === level);
            if (questionsOfLevel.length > 0) {
                currentQuestions.push(questionsOfLevel[Math.floor(Math.random() * questionsOfLevel.length)]);
            }
        });
    }

    function startGame() {
        setupQuestions();
        currentQuestionIndex = 0;
        score = 0;
        scoreDisplay.textContent = score;
        selectedTool = null;
        // تحميل الصورة الثابتة مرة واحدة
        caseImage.src = bodyImageBase64;
        loadQuestion(currentQuestions[0]);
        showScreen('game-screen');
    }

    function loadQuestion(question) {
        if (!question) {
            // فاز باللعبة
            gameOver(`تهانينا! لقد أصبحت المشخّص الصامت وأكملت كل الحالات بنجاح! مجموع نقاطك: ${score}`, true);
            return;
        }
        caseDescription.textContent = question.description;
        
        // إزالة النقاط الساخنة القديمة
        imageContainer.querySelectorAll('.hotspot').forEach(h => h.remove());

        // إضافة النقاط الساخنة الجديدة للسؤال الحالي
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
                    const toolNames = {hand: "اليد", stethoscope: "السماعة", magnifier: "العدسة", hammer: "المطرقة", pen: "القلم"};
                    const correctToolName = toolNames[spot.tool] || "الأداة الصحيحة";
                    gameOver(`أداة خاطئة! كان يجب استخدام ${correctToolName}.`);
                }
            });
            imageContainer.appendChild(hotspotEl);
        });
        
        tools.forEach(t => t.classList.remove('selected'));
        selectedTool = null;
    }

    function showInfo(text) {
        infoPopup.textContent = text;
        infoPopup.style.display = 'block';
        setTimeout(() => {
            infoPopup.style.display = 'none';
        }, 3500);
    }

    function showDiagnosisScreen() {
        const question = currentQuestions[currentQuestionIndex];
        if (!question) return;
        choicesContainer.innerHTML = '';
        
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
            score += question.points;
            scoreDisplay.textContent = score;
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                loadQuestion(currentQuestions[currentQuestionIndex]);
                showScreen('game-screen');
            } else {
                gameOver(`تهانينا! لقد أصبحت المشخّص الصامت وأكملت كل الحالات بنجاح! مجموع نقاطك: ${score}`, true);
            }
        } else {
            gameOver(`تشخيص خاطئ! الإجابة الصحيحة كانت: "${question.correctAnswer}"`);
        }
    }

    function gameOver(reason, isWin = false) {
        gameOverReason.textContent = reason;
        if (isWin) {
            gameOverScreen.style.backgroundColor = '#d4edda';
            gameOverScreen.querySelector('h1').style.color = '#155724';
            gameOverScreen.querySelector('h1').textContent = "لقد فزت!";
        } else {
            gameOverScreen.style.backgroundColor = '#ffdddd';
            gameOverScreen.querySelector('h1').style.color = '#d93025';
            gameOverScreen.querySelector('h1').textContent = "لقد خسرت!";
        }
        showScreen('game-over-screen');
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
