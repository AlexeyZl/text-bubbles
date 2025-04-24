const words = [
    { value: "15+", label: "лет опыта", description: "в организации деловых и конгрессно-выставочных мероприятий" }, 
    { value: "150000+", label: "кв.м выставочных площадей", description: "застроено за период с 2009 по 2024 годы" }, 
    { value: "5000+", label: "человек", description: "среднее количество участников мероприятий"}, 
    { value: "100", label: "млн. просмотров", description: "новостей о наших мероприятиях"  }
];

const cloud = document.getElementById("cloud");
let activeWord = null;

function createWord(wordData, isActive = false) {
    const word = document.createElement("div");
    word.className = isActive ? "word active" : "word inactive";
    word.innerHTML = `<h4>${wordData.value}</h4><p>${wordData.label}</p><p class="word-desc">${wordData.description}</p>`;
    // word.style.top = `${Math.random() * 80}%`;
    // word.style.left = `${Math.random() * 80}%`;
    word.addEventListener("click", () => setActiveWord(word));
    cloud.appendChild(word);
    moveWord(word);

    return word;
}

function moveWord(word) {
function randomMove() {
word.style.transform = `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px)`;
}

// Форсируем изменение, чтобы браузер не "задерживал" первую анимацию
requestAnimationFrame(() => {
randomMove(); // Первое движение сразу
});

setInterval(randomMove, 3000); // Потом продолжаем каждые 3 секунды
}

function setActiveWord(newActiveWord) {
    if (activeWord) {
        activeWord.classList.replace("active", "inactive");
    }
    newActiveWord.classList.replace("inactive", "active");
    activeWord = newActiveWord;
}


words.forEach((wordData, index) => {
    const wordElement = createWord(wordData, index === 0);
    if (index === 0) activeWord = wordElement;
});

function setRandomActiveWord() {
const allWords = document.querySelectorAll(".word");
if (allWords.length === 0) return; // Если слов нет, ничего не делаем

const randomIndex = Math.floor(Math.random() * allWords.length);
const randomWord = allWords[randomIndex];

setActiveWord(randomWord);
}

// Запускаем смену активного слова каждые 6 секунд
setInterval(setRandomActiveWord, 6000);