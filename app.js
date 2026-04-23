// Estat de l'aplicació
let currentQuestionIndex = 0;
let answers = {}; 

function saveState() {
    localStorage.setItem('ecoAuditoriaState', JSON.stringify({
        answers: answers,
        currentQuestionIndex: currentQuestionIndex
    }));
}

// Elements del DOM
const welcomeView = document.getElementById('welcome-view');
const auditView = document.getElementById('audit-view');
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

// Inicialització
document.addEventListener('DOMContentLoaded', () => {
    // Comprovar si hi ha sessió guardada al localstorage
    const savedStateStr = localStorage.getItem('ecoAuditoriaState');
    if (savedStateStr) {
        const resumeContainer = document.getElementById('resume-container');
        const resumeBtn = document.getElementById('resume-btn');
        if (resumeContainer && resumeBtn) {
            resumeContainer.classList.remove('hidden');
            resumeBtn.addEventListener('click', () => {
                const savedState = JSON.parse(savedStateStr);
                answers = savedState.answers || {};
                currentQuestionIndex = savedState.currentQuestionIndex || 0;
                startAudit();
            });
        }
    }

    // Afegir aleatorietat a les opcions de cada pregunta una sola vegada a l'inici
    questions.forEach(q => {
        for (let i = q.options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [q.options[i], q.options[j]] = [q.options[j], q.options[i]];
        }
    });

    // Esdeveniment d'inici
    startBtn.addEventListener('click', startAudit);
    
    // Esdeveniments de navegació
    nextBtn.addEventListener('click', () => navigate(1));
    prevBtn.addEventListener('click', () => navigate(-1));
    finishBtn.addEventListener('click', finishAudit);
});

function startAudit() {
    welcomeView.classList.add('fade-out');
    setTimeout(() => {
        welcomeView.classList.add('hidden');
        auditView.classList.remove('hidden');
        setTimeout(() => {
            auditView.classList.remove('opacity-0', 'scale-95');
            auditView.classList.add('opacity-100', 'scale-100');
            renderQuestion();
        }, 50);
    }, 400);
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    
    progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
    const percent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${percent}%`;

    questionContainer.innerHTML = '';
    
    // Mostrar Grup i Subgrup
    const groupLabel = document.createElement('p');
    groupLabel.className = "text-sm font-bold text-cheste-red tracking-wide uppercase mb-1 fade-in";
    groupLabel.textContent = q.group;
    questionContainer.appendChild(groupLabel);

    const subgroupLabel = document.createElement('p');
    subgroupLabel.className = "text-md font-semibold text-gray-500 mb-4 fade-in";
    subgroupLabel.textContent = q.subgroup;
    questionContainer.appendChild(subgroupLabel);

    const titleObj = document.createElement('h4');
    titleObj.className = "text-2xl text-gray-800 font-bold mb-6 leading-snug fade-in";
    titleObj.textContent = q.text;
    questionContainer.appendChild(titleObj);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = "space-y-4 fade-in";
    optionsContainer.style.animationDelay = "0.1s";

    q.options.forEach((opt, index) => {
        const labelEl = document.createElement('label');
        labelEl.className = "custom-radio-container block";
        
        const inputEl = document.createElement('input');
        inputEl.type = "radio";
        inputEl.name = `question_${q.id}`;
        inputEl.value = opt.value;
        inputEl.className = "peer sr-only";
        
        if (answers[q.id] === opt.value) {
            inputEl.checked = true;
        }

        const panelEl = document.createElement('div');
        panelEl.className = "flex items-center p-4 border-2 border-gray-100 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200";
        
        const radioCircle = document.createElement('div');
        radioCircle.className = "w-6 h-6 flex-shrink-0 mr-4 border-2 border-gray-300 rounded-full flex items-center justify-center bg-white";
        
        const innerDot = document.createElement('div');
        innerDot.innerHTML = `<svg class="custom-radio-icon w-4 h-4 text-cheste-red" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`;
        radioCircle.appendChild(innerDot);

        const textSpan = document.createElement('span');
        textSpan.className = "text-gray-700 font-medium text-lg";
        // Eliminar "(X pts)" del text que veu l'usuari
        textSpan.textContent = opt.label.replace(/\s*\(\d+\s*pts\)/g, '');

        inputEl.addEventListener('change', (e) => {
            answers[q.id] = e.target.value;
            saveState(); // Guardem persistència
            updateButtons();
        });

        panelEl.appendChild(radioCircle);
        panelEl.appendChild(textSpan);
        labelEl.appendChild(inputEl);
        labelEl.appendChild(panelEl);

        optionsContainer.appendChild(labelEl);
    });

    questionContainer.appendChild(optionsContainer);
    
    updateButtons();
}

function updateButtons() {
    const q = questions[currentQuestionIndex];
    const hasAnswer = answers[q.id] !== undefined;

    if (currentQuestionIndex === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
        finishBtn.disabled = !hasAnswer;
        if (!hasAnswer) {
            finishBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            finishBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    } else {
        finishBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        nextBtn.disabled = !hasAnswer;
        if (!hasAnswer) {
            nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }
}

function navigate(direction) {
    questionContainer.classList.add('fade-out');
    setTimeout(() => {
        currentQuestionIndex += direction;
        saveState(); // Guardem persistència de navegació
        questionContainer.classList.remove('fade-out');
        renderQuestion();
    }, 300);
}

function finishAudit() {
    questionContainer.innerHTML = '';
    progressText.textContent = "Completat";
    progressBar.classList.add('bg-green-500');
    progressBar.classList.remove('from-cheste-red', 'to-cheste-red-light');
    
    prevBtn.classList.add('hidden');
    finishBtn.classList.add('hidden');

    // Netejar la sessió guardada en acabar
    localStorage.removeItem('ecoAuditoriaState');

    let totalScore = 0;
    const scoresByGroup = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0 };

    for (let currentId in answers) {
        const val = parseInt(answers[currentId]);
        totalScore += val;
        
        const q = questions.find(q => q.id == currentId);
        if (q && q.group.includes('GRUP A')) scoresByGroup['A'] += val;
        if (q && q.group.includes('GRUP B')) scoresByGroup['B'] += val;
        if (q && q.group.includes('GRUP C')) scoresByGroup['C'] += val;
        if (q && q.group.includes('GRUP D')) scoresByGroup['D'] += val;
        if (q && q.group.includes('GRUP E')) scoresByGroup['E'] += val;
    }
    const maxScore = questions.length * 10;
    const percentage = ((totalScore / maxScore) * 100).toFixed(1);

    const resultDiv = document.createElement('div');
    resultDiv.className = "text-center fade-in w-full max-w-2xl mx-auto";
    resultDiv.innerHTML = `
        <div class="inline-block p-4 rounded-full bg-green-50 text-green-600 mb-6 shadow-sm">
            <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </div>
        <h3 class="text-3xl font-extrabold text-gray-900 mb-2">Moltes gràcies!</h3>
        <p class="text-xl font-bold text-cheste-red mb-4">Puntuació obtinguda: ${totalScore} / ${maxScore} pts (${percentage}%)</p>
        <p class="text-lg text-gray-600 mb-8">L'auditoria s'ha completat de manera satisfactòria segons la Matriu del Bé Comú 5.0 adaptada al CIPFP Cheste. Aquests resultats serviran per construir un centre més ètic, sostenible i solidari.</p>
        
        <div class="relative w-full aspect-square md:aspect-video mb-8">
            <canvas id="radarChart"></canvas>
        </div>

        <div id="recommendationsList" class="mt-8 text-left bg-gray-50 p-6 rounded-xl border border-gray-100 hidden">
            <h4 class="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Pla d'Acció: Recomanacions de Millora</h4>
            <div id="recommendationsContent" class="space-y-4"></div>
        </div>

        <button onclick="location.reload()" class="mt-8 px-6 py-3 font-semibold text-white bg-cheste-red rounded-full hover:bg-cheste-red-dark transition-colors">Tornar a l'inici</button>
    `;
    questionContainer.appendChild(resultDiv);

    // Logic per afegir les recomanacions dinàmica
    const recContainer = resultDiv.querySelector('#recommendationsList');
    const recContent = resultDiv.querySelector('#recommendationsContent');
    let hasRecs = false;

    // Utilitzar keys per ordenar pel ID (1 a 40)
    for (let currentId in answers) {
        const val = parseInt(answers[currentId]);
        if (val < 10) {
            hasRecs = true;
            const q = questions.find(q => q.id == currentId);
            if (q && q.recommendation) {
                const item = document.createElement('div');
                item.className = "flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-cheste-red";
                item.innerHTML = \`
                    <div class="flex-shrink-0 mr-3 text-cheste-red mt-0.5">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">\${q.subgroup}</p>
                        <p class="text-sm text-gray-800 font-medium">\${q.recommendation}</p>
                    </div>
                \`;
                recContent.appendChild(item);
            }
        }
    }

    if (hasRecs) {
        recContainer.classList.remove('hidden');
    }
    
    // Generar el gràfic quan està afegit al DOM
    setTimeout(() => {
        const ctx = document.getElementById('radarChart').getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Grup A: Proveïdors', 'Grup B: Financers', 'Grup C: Personal', 'Grup D: Alumnat', 'Grup E: Entorn Social'],
                datasets: [{
                    label: 'Puntuació',
                    data: [
                        scoresByGroup['A'],
                        scoresByGroup['B'],
                        scoresByGroup['C'],
                        scoresByGroup['D'],
                        scoresByGroup['E']
                    ],
                    backgroundColor: 'rgba(204, 0, 0, 0.2)',
                    borderColor: '#cc0000',
                    pointBackgroundColor: '#cc0000',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#cc0000',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        min: 0,
                        suggestedMin: 0,
                        angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                        grid: { color: 'rgba(0, 0, 0, 0.1)' },
                        pointLabels: {
                            font: { size: 13, family: "'Inter', sans-serif", weight: '600' },
                            color: '#4B5563'
                        },
                        ticks: {
                            min: 0,
                            beginAtZero: true,
                            max: 80,
                            stepSize: 20,
                            backdropColor: 'transparent'
                        }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }, 50);
}
