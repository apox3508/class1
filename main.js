
const generateBtn = document.querySelector('.generate-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const themeToggleBtn = document.querySelector('.theme-toggle-btn');

const THEME_KEY = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function applyTheme(theme) {
    document.body.dataset.theme = theme;
    themeToggleBtn.textContent = theme === DARK_THEME ? 'Light Mode' : 'Dark Mode';
}

function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === DARK_THEME || savedTheme === LIGHT_THEME) {
        return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME;
}

applyTheme(getInitialTheme());

themeToggleBtn.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    applyTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
});

generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numberEl.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
        lottoNumbersContainer.appendChild(numberEl);
    });
});

const styleSheet = document.styleSheets[0];
const keyframes = `@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
