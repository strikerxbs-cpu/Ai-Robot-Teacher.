const englishQuestions = [
  {
    question: "What is the plural of 'child'?",
    options: ["childs", "children", "childes", "childrens"],
    answer: 1
  },
  {
    question: "What is the plural of 'man'?",
    options: ["mans", "men", "manes", "mens"],
    answer: 1
  },
  {
    question: "What is the plural of 'woman'?",
    options: ["womans", "women", "womens", "womanes"],
    answer: 1
  },
  {
    question: "What is the plural of 'mouse'?",
    options: ["mouses", "mouse", "mice", "mices"],
    answer: 2
  },
  {
    question: "What is the plural of 'tooth'?",
    options: ["tooths", "teeth", "toothes", "tooth"],
    answer: 1
  },
  {
    question: "What is the plural of 'foot'?",
    options: ["foots", "feet", "feets", "foot"],
    answer: 1
  },
  {
    question: "What is the past tense of 'go'?",
    options: ["goed", "gone", "went", "going"],
    answer: 2
  },
  {
    question: "What is the past tense of 'eat'?",
    options: ["eated", "ate", "eaten", "eating"],
    answer: 1
  },
  {
    question: "What is the past tense of 'see'?",
    options: ["seed", "seen", "saw", "seeing"],
    answer: 2
  },
  {
    question: "What is the past tense of 'write'?",
    options: ["writed", "wrote", "written", "writing"],
    answer: 1
  },
  {
    question: "What is the past tense of 'come'?",
    options: ["came", "comed", "coming", "come"],
    answer: 0
  },
  {
    question: "What is the past tense of 'take'?",
    options: ["taked", "took", "taken", "taking"],
    answer: 1
  },
  {
    question: "What is the opposite of 'hot'?",
    options: ["warm", "cold", "cooling", "heat"],
    answer: 1
  },
  {
    question: "What is the opposite of 'early'?",
    options: ["soon", "fast", "late", "quick"],
    answer: 2
  },
  {
    question: "What is the opposite of 'easy'?",
    options: ["simple", "hard", "light", "soft"],
    answer: 1
  },
  {
    question: "What is the opposite of 'clean'?",
    options: ["dirty", "clear", "fresh", "bright"],
    answer: 0
  },
  {
    question: "What is the opposite of 'strong'?",
    options: ["powerful", "weak", "brave", "hard"],
    answer: 1
  },
  {
    question: "What is the opposite of 'old'?",
    options: ["ancient", "young", "new", "past"],
    answer: 2
  },
  {
    question: "What is a synonym of 'big'?",
    options: ["small", "large", "short", "thin"],
    answer: 1
  },
  {
    question: "What is a synonym of 'quick'?",
    options: ["slow", "fast", "late", "weak"],
    answer: 1
  },
  {
    question: "What is a synonym of 'happy'?",
    options: ["sad", "angry", "glad", "afraid"],
    answer: 2
  },
  {
    question: "What is a synonym of 'smart'?",
    options: ["clever", "weak", "slow", "sad"],
    answer: 0
  },
  {
    question: "What is a synonym of 'begin'?",
    options: ["finish", "start", "stop", "end"],
    answer: 1
  },
  {
    question: "What is a synonym of 'silent'?",
    options: ["loud", "quiet", "noisy", "bright"],
    answer: 1
  },
  {
    question: "What is the comparative form of 'good'?",
    options: ["gooder", "best", "better", "more good"],
    answer: 2
  },
  {
    question: "What is the superlative form of 'good'?",
    options: ["goodest", "better", "best", "more good"],
    answer: 2
  },
  {
    question: "What is the comparative form of 'bad'?",
    options: ["badder", "worst", "worse", "more bad"],
    answer: 2
  },
  {
    question: "What is the superlative form of 'bad'?",
    options: ["badest", "worse", "worst", "more bad"],
    answer: 2
  },
  {
    question: "What is the comparative form of 'tall'?",
    options: ["tallest", "taller", "more tall", "talling"],
    answer: 1
  },
  {
    question: "What is the superlative form of 'small'?",
    options: ["smaller", "smallest", "more small", "small"],
    answer: 1
  },
  {
    question: "Choose the correct article: ___ apple",
    options: ["a", "an", "the", "no article"],
    answer: 1
  },
  {
    question: "Choose the correct article: ___ book",
    options: ["an", "a", "thee", "no"],
    answer: 1
  },
  {
    question: "Choose the correct article: ___ hour",
    options: ["a", "an", "the", "no article"],
    answer: 1
  },
  {
    question: "Choose the correct article: ___ university",
    options: ["an", "a", "thee", "none"],
    answer: 1
  },
  {
    question: "What is the past participle of 'write'?",
    options: ["wrote", "writing", "written", "writes"],
    answer: 2
  },
  {
    question: "What is the past participle of 'eat'?",
    options: ["ate", "eating", "eaten", "eats"],
    answer: 2
  },
  {
    question: "What is the noun form of 'beautiful'?",
    options: ["beautify", "beauty", "beautifully", "beautified"],
    answer: 1
  },
  {
    question: "What is the noun form of 'kind'?",
    options: ["kindness", "kindly", "kinder", "kinded"],
    answer: 0
  },
  {
    question: "What is the adjective form of 'danger'?",
    options: ["dangerous", "dangerously", "endanger", "danger"],
    answer: 0
  },
  {
    question: "What is the adjective form of 'care'?",
    options: ["caringly", "careful", "carefully", "cared"],
    answer: 1
  },
  {
    question: "What is the opposite of 'always'?",
    options: ["often", "sometimes", "never", "usually"],
    answer: 2
  },
  {
    question: "What is the opposite of 'inside'?",
    options: ["under", "outside", "beside", "between"],
    answer: 1
  },
  {
    question: "What is the plural of 'leaf'?",
    options: ["leafs", "leaves", "leafes", "leaf"],
    answer: 1
  },
  {
    question: "What is the plural of 'knife'?",
    options: ["knifes", "knives", "knife", "knivies"],
    answer: 1
  },
  {
    question: "What is the past tense of 'make'?",
    options: ["maked", "made", "making", "make"],
    answer: 1
  },
  {
    question: "What is the past tense of 'buy'?",
    options: ["buyed", "bought", "buying", "buys"],
    answer: 1
  },
  {
    question: "What is the past tense of 'bring'?",
    options: ["bringed", "brought", "bringing", "brang"],
    answer: 1
  },
  {
    question: "What is the past tense of 'speak'?",
    options: ["speaked", "spoken", "spoke", "speaking"],
    answer: 2
  },
  {
    question: "What is the comparative form of 'fast'?",
    options: ["fastest", "faster", "more fast", "fast"],
    answer: 1
  },
  {
    question: "What is the superlative form of 'fast'?",
    options: ["faster", "fastest", "most fast", "fastly"],
    answer: 1
  },
  {
    question: "Which one is a pronoun?",
    options: ["Rahim", "book", "he", "beautiful"],
    answer: 2
  },
  {
    question: "Which one is a verb?",
    options: ["blue", "run", "table", "school"],
    answer: 1
  },
  {
    question: "Which one is an adjective?",
    options: ["beautiful", "run", "school", "quickly"],
    answer: 0
  },
  {
    question: "Which one is a noun?",
    options: ["quickly", "run", "honesty", "beautiful"],
    answer: 2
  },
  {
    question: "What is the opposite of 'victory'?",
    options: ["success", "defeat", "winner", "prize"],
    answer: 1
  },
  {
    question: "What is a synonym of 'help'?",
    options: ["harm", "assist", "stop", "refuse"],
    answer: 1
  },
  {
    question: "What is a synonym of 'start'?",
    options: ["finish", "begin", "stop", "close"],
    answer: 1
  },
  {
    question: "What is the opposite of 'accept'?",
    options: ["receive", "reject", "allow", "agree"],
    answer: 1
  },
  {
    question: "What is the opposite of 'possible'?",
    options: ["easy", "impossible", "probable", "likely"],
    answer: 1
  },
  {
    question: "What is the past tense of 'read'?",
    options: ["read", "red", "reading", "reads"],
    answer: 0
  },
  {
    question: "What is the past tense of 'drink'?",
    options: ["drank", "drunk", "drinked", "drinking"],
    answer: 0
  }
];
