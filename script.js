let words = {
            "Mr": "Ino",
            "One": "kele",
            "Food": "Khune",
            "Faith": "Mehli",
            "Chicken": "Efü",
            "Thanks": "Krala"
        };
        let wordKeys = Object.keys(words);
        let currentIndex = 0;
        let selectedLetters = [];
        let gameContainer = document.getElementById("gameContainer");
        let emojiElement = document.getElementById("emoji");

        function startGame() {
            let word = wordKeys[currentIndex];
            let translation = words[word];
            document.getElementById("wordDisplay").innerHTML = `<strong>${word}</strong>`;
            selectedLetters = [];
            document.getElementById("answerBox").innerText = "";
            document.getElementById("result").innerText = "";
            emojiElement.innerText = "😐";
            generateLetters(translation);
        }

        function generateLetters(word) {
            gameContainer.innerHTML = "";
            let shuffledLetters = word.split('').sort(() => Math.random() - 0.5);
            shuffledLetters.forEach(letter => createLetter(letter));
        }

        function createLetter(letter) {
            let span = document.createElement("span");
            span.classList.add("letter");
            span.innerText = letter;
            span.onclick = function() { selectLetter(span, letter); };
            gameContainer.appendChild(span);
        }

        function selectLetter(span, letter) {
            span.classList.add("selected");
            selectedLetters.push(letter);
            updateAnswerBox();
            checkPartialWord();
        }

        function updateAnswerBox() {
            let answerBox = document.getElementById("answerBox");
            answerBox.innerText = selectedLetters.join(" ");
        }

        function checkPartialWord() {
            let word = wordKeys[currentIndex];
            let translation = words[word];
            let partialAnswer = selectedLetters.join('');
            if (translation.startsWith(partialAnswer)) {
                emojiElement.innerText = "🙂";
            } else {
                emojiElement.innerText = "☹️";
            }
            checkWord();
        }

        function checkWord() {
            let word = wordKeys[currentIndex];
            let translation = words[word];
            let result = document.getElementById("result");
            if (selectedLetters.join('') === translation) {
                result.innerHTML = "<div class='correct'>Correct!</div>";
                emojiElement.innerText = "😃";
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % wordKeys.length;
                    startGame();
                }, 2000);
            }
        }

        function undoLast() {
            if (selectedLetters.length > 0) {
                selectedLetters.pop();
                updateAnswerBox();
                checkPartialWord();
            }
        }

        function restartWord() {
            startGame();
        }

        startGame();
