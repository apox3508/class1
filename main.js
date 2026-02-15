
const generateBtn = document.querySelector('.generate-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');

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
