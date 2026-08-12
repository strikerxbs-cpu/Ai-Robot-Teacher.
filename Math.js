const mathQuestions = [
  {
    question: "12 + 8 = কত?",
    options: ["18", "20", "22", "24"],
    answer: 1
  },
  {
    question: "25 - 9 = কত?",
    options: ["14", "15", "16", "17"],
    answer: 2
  },
  {
    question: "7 × 8 = কত?",
    options: ["48", "54", "56", "64"],
    answer: 2
  },
  {
    question: "72 ÷ 8 = কত?",
    options: ["7", "8", "9", "10"],
    answer: 2
  },
  {
    question: "15 + 27 = কত?",
    options: ["40", "41", "42", "43"],
    answer: 2
  },
  {
    question: "50 - 18 = কত?",
    options: ["30", "31", "32", "33"],
    answer: 2
  },
  {
    question: "9 × 9 = কত?",
    options: ["72", "81", "90", "99"],
    answer: 1
  },
  {
    question: "96 ÷ 12 = কত?",
    options: ["6", "7", "8", "9"],
    answer: 2
  },
  {
    question: "80-এর 25% কত?",
    options: ["15", "20", "25", "30"],
    answer: 1
  },
  {
    question: "20-এর 3/4 কত?",
    options: ["10", "12", "15", "18"],
    answer: 2
  },
  {
    question: "2³ = কত?",
    options: ["4", "6", "8", "9"],
    answer: 2
  },
  {
    question: "√81 = কত?",
    options: ["7", "8", "9", "10"],
    answer: 2
  },
  {
    question: "4 ও 6-এর ল.সা.গু কত?",
    options: ["8", "10", "12", "24"],
    answer: 2
  },
  {
    question: "18 ও 24-এর গ.সা.গু কত?",
    options: ["3", "6", "9", "12"],
    answer: 1
  },
  {
    question: "1/2 + 1/4 = কত?",
    options: ["1/4", "1/2", "3/4", "1"],
    answer: 2
  },
  {
    question: "5/6 - 1/6 = কত?",
    options: ["1/3", "1/2", "2/3", "5/6"],
    answer: 2
  },
  {
    question: "250-এর 10% কত?",
    options: ["15", "20", "25", "30"],
    answer: 2
  },
  {
    question: "একটি ত্রিভুজের কয়টি বাহু?",
    options: ["2", "3", "4", "5"],
    answer: 1
  },
  {
    question: "একটি বর্গের কয়টি সমান বাহু?",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "1000 মিটার = কত কিলোমিটার?",
    options: ["0.1", "1", "10", "100"],
    answer: 1
  },
  {
    question: "3 × 15 = কত?",
    options: ["35", "40", "45", "50"],
    answer: 2
  },
  {
    question: "144 ÷ 12 = কত?",
    options: ["10", "11", "12", "13"],
    answer: 2
  },
  {
    question: "18 + 35 = কত?",
    options: ["51", "52", "53", "54"],
    answer: 2
  },
  {
    question: "90 - 47 = কত?",
    options: ["41", "42", "43", "44"],
    answer: 2
  },
  {
    question: "11 × 12 = কত?",
    options: ["121", "132", "142", "144"],
    answer: 1
  },
  {
    question: "225 ÷ 15 = কত?",
    options: ["12", "13", "14", "15"],
    answer: 3
  },
  {
    question: "150-এর 20% কত?",
    options: ["20", "25", "30", "35"],
    answer: 2
  },
  {
    question: "50-এর 2/5 কত?",
    options: ["15", "20", "25", "30"],
    answer: 1
  },
  {
    question: "5² = কত?",
    options: ["10", "15", "20", "25"],
    answer: 3
  },
  {
    question: "√144 = কত?",
    options: ["10", "11", "12", "14"],
    answer: 2
  },
  {
    question: "5 ও 8-এর ল.সা.গু কত?",
    options: ["20", "30", "40", "45"],
    answer: 2
  },
  {
    question: "36 ও 48-এর গ.সা.গু কত?",
    options: ["6", "8", "12", "16"],
    answer: 2
  },
  {
    question: "2/3 + 1/3 = কত?",
    options: ["1/2", "2/3", "1", "4/3"],
    answer: 2
  },
  {
    question: "7/8 - 3/8 = কত?",
    options: ["1/4", "1/2", "3/4", "5/8"],
    answer: 1
  },
  {
    question: "200-এর 15% কত?",
    options: ["20", "25", "30", "35"],
    answer: 2
  },
  {
    question: "একটি আয়তের কয়টি বাহু?",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "একটি পঞ্চভুজের কয়টি বাহু?",
    options: ["4", "5", "6", "7"],
    answer: 1
  },
  {
    question: "একটি ষড়ভুজের কয়টি বাহু?",
    options: ["5", "6", "7", "8"],
    answer: 1
  },
  {
    question: "1 ঘণ্টায় কত মিনিট?",
    options: ["30", "45", "60", "90"],
    answer: 2
  },
  {
    question: "2.5 + 1.5 = কত?",
    options: ["3", "4", "5", "6"],
    answer: 1
  },
  {
    question: "7.5 - 2.5 = কত?",
    options: ["4", "5", "6", "7"],
    answer: 1
  },
  {
    question: "0.5 × 10 = কত?",
    options: ["2", "5", "10", "15"],
    answer: 1
  },
  {
    question: "3.6 ÷ 0.6 = কত?",
    options: ["4", "5", "6", "7"],
    answer: 2
  },
  {
    question: "একটি অনুপাতে 2:3 হলে প্রথম অংশ 10, দ্বিতীয় অংশ কত?",
    options: ["12", "15", "18", "20"],
    answer: 1
  },
  {
    question: "10, 20 ও 30-এর গড় কত?",
    options: ["15", "20", "25", "30"],
    answer: 1
  },
  {
    question: "বর্গের এক বাহু 5 সেমি হলে পরিসীমা কত?",
    options: ["10 সেমি", "15 সেমি", "20 সেমি", "25 সেমি"],
    answer: 2
  },
  {
    question: "আয়তের দৈর্ঘ্য 8 সেমি এবং প্রস্থ 5 সেমি হলে ক্ষেত্রফল কত?",
    options: ["13 বর্গসেমি", "26 বর্গসেমি", "40 বর্গসেমি", "80 বর্গসেমি"],
    answer: 2
  },
  {
    question: "3/4-এর অর্ধেক কত?",
    options: ["1/4", "3/8", "1/2", "5/8"],
    answer: 1
  },
  {
    question: "25% কে ভগ্নাংশে প্রকাশ করলে কত?",
    options: ["1/2", "1/3", "1/4", "3/4"],
    answer: 2
  },
  {
    question: "0.75 কে ভগ্নাংশে প্রকাশ করলে কত?",
    options: ["1/2", "2/3", "3/4", "4/5"],
    answer: 2
  },
  {
    question: "2 কিলোমিটার = কত মিটার?",
    options: ["200", "1000", "1500", "2000"],
    answer: 3
  },
  {
    question: "500 সেন্টিমিটার = কত মিটার?",
    options: ["2", "5", "10", "50"],
    answer: 1
  },
  {
    question: "1 ডজন = কতটি?",
    options: ["10", "11", "12", "15"],
    answer: 2
  },
  {
    question: "21, 23 ও 25-এর মধ্যে মৌলিক সংখ্যা কোনটি?",
    options: ["21", "23", "25", "সবগুলো"],
    answer: 1
  },
  {
    question: "সবচেয়ে ছোট মৌলিক সংখ্যা কোনটি?",
    options: ["0", "1", "2", "3"],
    answer: 2
  },
  {
    question: "35-এর পর 7-এর পরবর্তী গুণিতক কোনটি?",
    options: ["36", "40", "42", "49"],
    answer: 2
  },
  {
    question: "x + 5 = 12 হলে x-এর মান কত?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "3x = 21 হলে x-এর মান কত?",
    options: ["5", "6", "7", "8"],
    answer: 2
  },
  {
    question: "15-এর বর্গ কত?",
    options: ["125", "200", "225", "250"],
    answer: 2
  },
  {
    question: "একটি সংখ্যার 1/4 = 12 হলে সংখ্যাটি কত?",
    options: ["24", "36", "48", "60"],
    answer: 2
  },
  {
    question: "একটি আয়তের দৈর্ঘ্য 10 সেমি ও প্রস্থ 4 সেমি হলে পরিসীমা কত?",
    options: ["14 সেমি", "20 সেমি", "28 সেমি", "40 সেমি"],
    answer: 2
  }
];
