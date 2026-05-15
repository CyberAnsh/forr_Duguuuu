// 💌 LETTER CONTENT (WITH FORMATTING)
const letterContent = `Dear Duguuuuuuuu,

I dont't know you realize or not how much you mean to me, but I want to take this moment to express my feelings for you.
somehow you have become the most important person in my life, and I am so grateful to have you by my side. almost every thought of you brings a smile to my face.

Somwtimes it's smallest things about you that stay in my mind the longest, your smile, the way you tal, the way you get annoyed, even the little things you probably don't even notice about yourself. Somehow, they all matter to me more than they should.
You have this way of making ordinary moments feel special. A simple conversation with you change my entire mood, No matter how bad my day is going hearing from you or seeing your name pop up on my phone somehow makes everything feel lighter. You have this incredible ability to make me feel loved and appreciated, even in the smallest ways.

And honestly sometimes I catch myself smiling at my phone beacuse of something you said or replaying our conversations in my head for no reason other than they makes me happy

You may never fully understand how comforting your presence feels to me. There's something about you feel different, sometimes peaceful, sometimes warm, and sometimes I never want to lose

I don't need grand moments or perfect words to tell you this, I just want you to know that you're genuinely special to me, more than I can explain, and probably more than you realize. 

And if my attention ever feels a little extra, or if I care a little too much, maybe it's because somehow like you is impossible not to care about.

You inspire me to be better, love deeper, and believe in magic.

You are my forever,
my reason to smile.

Forever yours,
❤️

Will you be mine forever?
`;

// ELEMENTS
const btnLetter = document.getElementById("btn__letter");
const boxLetter = document.querySelector(".box__letter");
const letterBorder = document.querySelector(".letter__border");
const textLetter = document.querySelector(".text__letter p");
const titleLetter = document.querySelector(".title__letter");
const closeBtn = document.querySelector(".close");

let index = 0;
let typingInterval;

// 🖋️ TYPEWRITER FUNCTION
function startTyping() {
    textLetter.innerHTML = "";
    index = 0;

    typingInterval = setInterval(() => {
        if (index < letterContent.length) {
            const char = letterContent[index];

            if (char === "\n") {
                textLetter.innerHTML += "<br>";
            } else {
                textLetter.innerHTML += char;
            }

            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 30);
}

// 💌 OPEN LETTER
let letterOpen = false;
let gifsAnimated = false;
btnLetter.addEventListener("click", () => {
    if (letterOpen) return; // Prevent double opening
    letterOpen = true;
    gifsAnimated = false; // Reset for new opening
    
    boxLetter.style.display = "block";

    setTimeout(() => {
        letterBorder.style.display = "block";
    }, 600);

    // TITLE TYPE
    titleLetter.innerHTML = "To You 💌";
    let tIndex = 0;

    // HEART + GIF ANIMATIONS (only once)
    setTimeout(() => {
        if (!gifsAnimated) {
            gifsAnimated = true;
            document.getElementById("heart__letter")?.classList.add("animationOp");
            document.querySelectorAll(".left-gif")?.forEach(img => 
                img.classList.add("animationOp")
            );
        }
    }, 1200);

    // START TYPING
    setTimeout(startTyping, 2500);
});

// ❌ CLOSE LETTER
closeBtn.addEventListener("click", () => {
    clearInterval(typingInterval);

    textLetter.innerHTML = "";
    titleLetter.innerHTML = "";

    document.getElementById("heart__letter")?.classList.remove("animationOp");
    document.querySelectorAll(".left-gif")?.forEach(img => 
        img.classList.remove("animationOp")
    );

    letterBorder.style.display = "none";
    boxLetter.style.display = "none";
    
    letterOpen = false; // Allow opening again
});
