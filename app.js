const questions = [
  {
    question: "भारत की राजधानी क्या है?",
    options: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
    answer: 1,
    hint: "यहां संसद भवन स्थित है।",
  },
  {
    question: "तिरंगे के बीच में कौन सा चक्र होता है?",
    options: ["सूर्य चक्र", "अशोक चक्र", "धर्म चक्र", "विजय चक्र"],
    answer: 1,
    hint: "यह सारनाथ के सिंह स्तंभ से जुड़ा है।",
  },
  {
    question: "हिंदी दिवस कब मनाया जाता है?",
    options: ["15 अगस्त", "26 जनवरी", "14 सितंबर", "2 अक्टूबर"],
    answer: 2,
    hint: "यह सितंबर महीने में आता है।",
  },
  {
    question: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
    options: ["मॉनिटर", "कीबोर्ड", "सीपीयू", "माउस"],
    answer: 2,
    hint: "यह निर्देशों को प्रोसेस करता है।",
  },
  {
    question: "रामायण के रचयिता कौन माने जाते हैं?",
    options: ["वेदव्यास", "कालिदास", "वाल्मीकि", "तुलसीदास"],
    answer: 2,
    hint: "इन्हें आदि कवि भी कहा जाता है।",
  },
  {
    question: "सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    options: ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
    answer: 1,
    hint: "इस ग्रह पर एक विशाल लाल धब्बा है।",
  },
  {
    question: "भारत का राष्ट्रीय पशु कौन है?",
    options: ["सिंह", "हाथी", "बाघ", "हिरण"],
    answer: 2,
    hint: "यह धारियों वाला शक्तिशाली जीव है।",
  },
  {
    question: "स्वतंत्र भारत के पहले प्रधानमंत्री कौन थे?",
    options: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद"],
    answer: 1,
    hint: "बच्चे उन्हें चाचा कहते थे।",
  },
  {
    question: "जल का रासायनिक सूत्र क्या है?",
    options: ["CO2", "O2", "H2O", "NaCl"],
    answer: 2,
    hint: "इसमें हाइड्रोजन और ऑक्सीजन होते हैं।",
  },
  {
    question: "कौन बनेगा करोड़पति किस तरह का कार्यक्रम है?",
    options: ["नृत्य प्रतियोगिता", "प्रश्नोत्तरी कार्यक्रम", "खाना बनाने का शो", "समाचार कार्यक्रम"],
    answer: 1,
    hint: "इसमें सवालों के जवाब देकर इनाम जीता जाता है।",
  },
  {
    question: "भारत का राष्ट्रीय पक्षी कौन है?",
    options: ["मोर", "तोता", "कबूतर", "गरुड़"],
    answer: 0,
    hint: "बरसात में इसका नृत्य प्रसिद्ध है।",
  },
  {
    question: "महात्मा गांधी का जन्म किस राज्य में हुआ था?",
    options: ["महाराष्ट्र", "गुजरात", "उत्तर प्रदेश", "बिहार"],
    answer: 1,
    hint: "पोरबंदर इसी राज्य में है।",
  },
  {
    question: "पृथ्वी सूर्य के चारों ओर एक चक्कर लगभग कितने दिनों में लगाती है?",
    options: ["24 दिन", "30 दिन", "365 दिन", "100 दिन"],
    answer: 2,
    hint: "इसी से एक वर्ष बनता है।",
  },
  {
    question: "भारत का राष्ट्रीय खेल पारंपरिक रूप से किसे माना जाता है?",
    options: ["क्रिकेट", "हॉकी", "कबड्डी", "फुटबॉल"],
    answer: 1,
    hint: "ओलंपिक में भारत ने इस खेल में कई स्वर्ण पदक जीते हैं।",
  },
  {
    question: "सबसे छोटी अभाज्य संख्या कौन सी है?",
    options: ["0", "1", "2", "3"],
    answer: 2,
    hint: "यह एकमात्र सम अभाज्य संख्या है।",
  },
  {
    question: "भारतीय संविधान कब लागू हुआ?",
    options: ["15 अगस्त 1947", "26 जनवरी 1950", "2 अक्टूबर 1949", "14 नवंबर 1950"],
    answer: 1,
    hint: "इस दिन गणतंत्र दिवस मनाया जाता है।",
  },
];

const prizes = ["₹1,000", "₹2,000", "₹5,000", "₹10,000", "₹20,000", "₹40,000", "₹80,000", "₹1,60,000", "₹3,20,000", "₹6,40,000", "₹12,50,000", "₹25,00,000", "₹50,00,000", "₹1,00,00,000", "₹3,00,00,000", "₹7,00,00,000"];
const letters = ["A", "B", "C", "D"];

let current = 0;
let selected = false;
let seconds = 30;
let timerId = null;
let fiftyUsed = false;
let hintUsed = false;
let correctCount = 0;
let audioContext = null;
let musicNodes = [];
let musicOn = false;

const questionCount = document.querySelector("#questionCount");
const currentPrize = document.querySelector("#currentPrize");
const timer = document.querySelector("#timer");
const questionText = document.querySelector("#questionText");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextBtn = document.querySelector("#nextBtn");
const restartBtn = document.querySelector("#restartBtn");
const fiftyBtn = document.querySelector("#fiftyBtn");
const hintBtn = document.querySelector("#hintBtn");
const soundBtn = document.querySelector("#soundBtn");
const soundIcon = document.querySelector("#soundIcon");
const prizeList = document.querySelector("#prizeList");

function renderPrizeList() {
  prizeList.innerHTML = prizes
    .map((prize, index) => {
      const className = index === current ? "active" : index < current ? "passed" : "";
      return `<li class="${className}"><span>${index + 1}</span><span>${prize}</span></li>`;
    })
    .join("");
}

function startTimer() {
  clearInterval(timerId);
  seconds = 30;
  timer.textContent = seconds;
  timerId = setInterval(() => {
    seconds -= 1;
    timer.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(timerId);
      revealAnswer(-1);
    }
  }, 1000);
}

function renderQuestion() {
  const item = questions[current];
  selected = false;
  feedback.textContent = "";
  nextBtn.disabled = true;
  nextBtn.textContent = "अगला";
  nextBtn.dataset.action = "next";
  questionCount.textContent = `प्रश्न ${current + 1} / ${questions.length}`;
  currentPrize.textContent = prizes[current];
  questionText.textContent = item.question;
  answers.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.type = "button";
    button.innerHTML = `<span class="label">${letters[index]}</span><span>${option}</span>`;
    button.addEventListener("click", () => revealAnswer(index));
    answers.appendChild(button);
  });

  renderPrizeList();
  startTimer();
}

function revealAnswer(choice) {
  if (selected) return;
  selected = true;
  clearInterval(timerId);

  const item = questions[current];
  const buttons = [...document.querySelectorAll(".answer")];
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    if (index === choice && choice !== item.answer) button.classList.add("wrong");
  });

  if (choice === item.answer) {
    correctCount += 1;
    feedback.textContent = `सही जवाब! आपने ${prizes[current]} जीत लिए।`;
    nextBtn.disabled = false;
    playSting(true);
  } else {
    feedback.textContent = choice === -1 ? `समय समाप्त! सही जवाब था: ${item.options[item.answer]}।` : `गलत जवाब। सही जवाब है: ${item.options[item.answer]}।`;
    nextBtn.disabled = false;
    playSting(false);
  }
}

function nextQuestion() {
  if (!selected) return;

  if (current === questions.length - 1) {
    finishGame();
    return;
  }

  current += 1;
  renderQuestion();
}

function finishGame() {
  clearInterval(timerId);
  const wonAll = correctCount === questions.length;
  questionText.textContent = wonAll ? "बधाई हो! आपने सभी जवाब सही दिए।" : "खेल समाप्त";
  answers.innerHTML = "";
  feedback.textContent = `आपका स्कोर ${correctCount} / ${questions.length} है।`;
  nextBtn.textContent = "फिर खेलें";
  nextBtn.dataset.action = "restart";
  nextBtn.disabled = false;
}

function useFifty() {
  if (fiftyUsed || selected) return;
  fiftyUsed = true;
  fiftyBtn.disabled = true;
  const item = questions[current];
  const wrongIndexes = item.options.map((_, index) => index).filter((index) => index !== item.answer).slice(0, 2);
  [...document.querySelectorAll(".answer")].forEach((button, index) => {
    if (wrongIndexes.includes(index)) button.classList.add("hidden-option");
  });
}

function useHint() {
  if (hintUsed || selected) return;
  hintUsed = true;
  hintBtn.disabled = true;
  feedback.textContent = `संकेत: ${questions[current].hint}`;
}

function restartGame() {
  current = 0;
  correctCount = 0;
  fiftyUsed = false;
  hintUsed = false;
  fiftyBtn.disabled = false;
  hintBtn.disabled = false;
  nextBtn.textContent = "अगला";
  nextBtn.dataset.action = "next";
  renderQuestion();
}

function createOscillator(freq, type, gainValue, destination, start, stop) {
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(gainValue, start + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, stop);
  osc.connect(gain).connect(destination);
  osc.start(start);
  osc.stop(stop);
  musicNodes.push(osc, gain);
}

function scheduleQuizLoop() {
  if (!musicOn || !audioContext) return;
  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  master.gain.value = 0.18;
  master.connect(audioContext.destination);
  musicNodes.push(master);

  const notes = [146.83, 174.61, 196, 220, 196, 174.61, 164.81, 146.83];
  notes.forEach((note, index) => {
    const start = now + index * 0.42;
    createOscillator(note, "sawtooth", 0.06, master, start, start + 0.34);
    createOscillator(note * 2, "triangle", 0.025, master, start + 0.05, start + 0.28);
  });

  setTimeout(scheduleQuizLoop, 3400);
}

function stopMusic() {
  musicOn = false;
  musicNodes.forEach((node) => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch {
      // Already stopped.
    }
  });
  musicNodes = [];
  soundIcon.textContent = "♪";
  soundBtn.setAttribute("aria-label", "संगीत चालू करें");
}

function toggleMusic() {
  if (musicOn) {
    stopMusic();
    return;
  }

  audioContext = audioContext || new AudioContext();
  musicOn = true;
  soundIcon.textContent = "■";
  soundBtn.setAttribute("aria-label", "संगीत बंद करें");
  scheduleQuizLoop();
}

function playSting(success) {
  if (!musicOn || !audioContext) return;
  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  master.gain.value = 0.22;
  master.connect(audioContext.destination);
  const notes = success ? [392, 523.25, 659.25] : [220, 185, 146.83];
  notes.forEach((note, index) => {
    createOscillator(note, "triangle", 0.08, master, now + index * 0.12, now + index * 0.12 + 0.22);
  });
  setTimeout(() => master.disconnect(), 900);
}

nextBtn.addEventListener("click", () => {
  if (nextBtn.dataset.action === "restart") {
    restartGame();
    return;
  }
  nextQuestion();
});
restartBtn.addEventListener("click", restartGame);
fiftyBtn.addEventListener("click", useFifty);
hintBtn.addEventListener("click", useHint);
soundBtn.addEventListener("click", toggleMusic);

renderQuestion();
