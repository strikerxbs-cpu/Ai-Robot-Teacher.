const ictQuestions = [
  {
    question: "ICT-এর পূর্ণরূপ কী?",
    options: [
      "Information and Communication Technology",
      "Internet Computer Technology",
      "Information Computer Transfer",
      "International Communication Tool"
    ],
    answer: 0
  },
  {
    question: "কম্পিউটারের মস্তিষ্ক বলা হয় কোন অংশকে?",
    options: ["Monitor", "CPU", "Keyboard", "Mouse"],
    answer: 1
  },
  {
    question: "CPU-এর পূর্ণরূপ কী?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Computer Processing User"
    ],
    answer: 0
  },
  {
    question: "কোনটি ইনপুট ডিভাইস?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: 2
  },
  {
    question: "কোনটি আউটপুট ডিভাইস?",
    options: ["Keyboard", "Mouse", "Scanner", "Monitor"],
    answer: 3
  },
  {
    question: "কম্পিউটারে লেখা টাইপ করতে কোন ডিভাইস ব্যবহার করা হয়?",
    options: ["Mouse", "Keyboard", "Printer", "Speaker"],
    answer: 1
  },
  {
    question: "মাউসের প্রধান কাজ কী?",
    options: [
      "শব্দ তৈরি করা",
      "পয়েন্ট ও নির্বাচন করা",
      "কাগজ ছাপানো",
      "বিদ্যুৎ তৈরি করা"
    ],
    answer: 1
  },
  {
    question: "কোনটি স্টোরেজ ডিভাইস?",
    options: ["Hard Disk", "Monitor", "Keyboard", "Speaker"],
    answer: 0
  },
  {
    question: "RAM-এর পূর্ণরূপ কী?",
    options: [
      "Random Access Memory",
      "Read Access Machine",
      "Rapid Action Memory",
      "Random Application Module"
    ],
    answer: 0
  },
  {
    question: "ROM-এর পূর্ণরূপ কী?",
    options: [
      "Read Only Memory",
      "Random Only Machine",
      "Read Open Memory",
      "Rapid Output Memory"
    ],
    answer: 0
  },
  {
    question: "১ কিলোবাইট সাধারণভাবে কত বাইট ধরা হয়?",
    options: ["100 bytes", "512 bytes", "1024 bytes", "2048 bytes"],
    answer: 2
  },
  {
    question: "ইন্টারনেট কী?",
    options: [
      "একটি মাত্র কম্পিউটার",
      "বিশ্বব্যাপী সংযুক্ত নেটওয়ার্কসমূহের ব্যবস্থা",
      "একটি কীবোর্ড",
      "একটি প্রিন্টার"
    ],
    answer: 1
  },
  {
    question: "ওয়েবসাইট দেখার জন্য কোন সফটওয়্যার ব্যবহার করা হয়?",
    options: ["Browser", "Calculator", "Paint", "Notepad"],
    answer: 0
  },
  {
    question: "নিচের কোনটি একটি ওয়েব ব্রাউজার?",
    options: ["Chrome", "Windows", "Android", "Linux"],
    answer: 0
  },
  {
    question: "URL-এর পূর্ণরূপ কী?",
    options: [
      "Uniform Resource Locator",
      "Universal Record Link",
      "User Resource Line",
      "Uniform Read Location"
    ],
    answer: 0
  },
  {
    question: "WWW-এর পূর্ণরূপ কী?",
    options: [
      "World Wide Web",
      "World Web Window",
      "Wide World Website",
      "Web World Work"
    ],
    answer: 0
  },
  {
    question: "ই-মেইল কী কাজে ব্যবহৃত হয়?",
    options: [
      "ইলেকট্রনিক বার্তা পাঠাতে",
      "শুধু ছবি আঁকতে",
      "কম্পিউটার পরিষ্কার করতে",
      "বিদ্যুৎ মাপতে"
    ],
    answer: 0
  },
  {
    question: "ই-মেইল ঠিকানায় কোন চিহ্নটি অবশ্যই থাকে?",
    options: ["#", "@", "$", "&"],
    answer: 1
  },
  {
    question: "অনলাইনে তথ্য খোঁজার জন্য কোনটি ব্যবহার করা হয়?",
    options: ["Search Engine", "Printer", "Keyboard", "Speaker"],
    answer: 0
  },
  {
    question: "নিচের কোনটি Search Engine?",
    options: ["Google", "Windows", "Bluetooth", "USB"],
    answer: 0
  },
  {
    question: "কম্পিউটারের স্থায়ীভাবে তথ্য সংরক্ষণের জন্য কোনটি ব্যবহৃত হয়?",
    options: ["RAM", "Hard Drive", "Mouse", "Monitor"],
    answer: 1
  },
  {
    question: "USB-এর পূর্ণরূপ কী?",
    options: [
      "Universal Serial Bus",
      "United System Board",
      "Universal Storage Box",
      "User Serial Backup"
    ],
    answer: 0
  },
  {
    question: "Wi-Fi কী?",
    options: [
      "এক ধরনের বেতার নেটওয়ার্ক প্রযুক্তি",
      "একটি প্রিন্টার",
      "একটি অপারেটিং সিস্টেম",
      "একটি কীবোর্ড"
    ],
    answer: 0
  },
  {
    question: "Bluetooth সাধারণত কী কাজে ব্যবহৃত হয়?",
    options: [
      "স্বল্প দূরত্বে ডিভাইসের মধ্যে তথ্য আদান-প্রদান",
      "বিদ্যুৎ উৎপাদন",
      "ছবি প্রিন্ট করা",
      "কম্পিউটার ঠান্ডা করা"
    ],
    answer: 0
  },
  {
    question: "Android কী?",
    options: [
      "একটি মোবাইল অপারেটিং সিস্টেম",
      "একটি ওয়েবসাইট",
      "একটি কীবোর্ড",
      "একটি সার্চ ইঞ্জিন"
    ],
    answer: 0
  },
  {
    question: "Windows কী?",
    options: [
      "অপারেটিং সিস্টেম",
      "মাউস",
      "প্রিন্টার",
      "ব্রাউজার"
    ],
    answer: 0
  },
  {
    question: "Linux কী?",
    options: [
      "একটি অপারেটিং সিস্টেম",
      "একটি ওয়েব ক্যামেরা",
      "একটি কেবল",
      "একটি সার্চ ইঞ্জিন"
    ],
    answer: 0
  },
  {
    question: "অপারেটিং সিস্টেমের প্রধান কাজ কী?",
    options: [
      "কম্পিউটারের হার্ডওয়্যার ও সফটওয়্যার পরিচালনা করা",
      "শুধু গান বাজানো",
      "শুধু ছবি তোলা",
      "শুধু ইন্টারনেট বন্ধ করা"
    ],
    answer: 0
  },
  {
    question: "কম্পিউটার ভাইরাস কী?",
    options: [
      "ক্ষতিকর প্রোগ্রাম বা কোড",
      "এক ধরনের মনিটর",
      "এক ধরনের কীবোর্ড",
      "এক ধরনের প্রিন্টার"
    ],
    answer: 0
  },
  {
    question: "Antivirus-এর কাজ কী?",
    options: [
      "ক্ষতিকর সফটওয়্যার শনাক্ত ও প্রতিরোধে সাহায্য করা",
      "কম্পিউটার দ্রুত চার্জ করা",
      "ছবি আঁকা",
      "ইন্টারনেটের গতি মাপা"
    ],
    answer: 0
  },
  {
    question: "শক্তিশালী Password কেমন হওয়া ভালো?",
    options: [
      "শুধু নিজের নাম",
      "শুধু 123456",
      "বিভিন্ন ধরনের অক্ষর, সংখ্যা ও চিহ্নের মিশ্রণ",
      "শুধু জন্মতারিখ"
    ],
    answer: 2
  },
  {
    question: "Password অন্যের সঙ্গে কী করা উচিত?",
    options: ["শেয়ার করা", "প্রকাশ করা", "গোপন রাখা", "সবার কাছে লেখা"],
    answer: 2
  },
  {
    question: "Phishing কী?",
    options: [
      "প্রতারণার মাধ্যমে তথ্য হাতিয়ে নেওয়ার চেষ্টা",
      "এক ধরনের গেম",
      "এক ধরনের প্রিন্টার",
      "এক ধরনের ছবি"
    ],
    answer: 0
  },
  {
    question: "Cyber Security বলতে কী বোঝায়?",
    options: [
      "ডিজিটাল সিস্টেম ও তথ্যকে নিরাপদ রাখা",
      "কম্পিউটার আঁকা",
      "গান শোনা",
      "ছবি তোলা"
    ],
    answer: 0
  },
  {
    question: "Cloud Storage কী?",
    options: [
      "ইন্টারনেটভিত্তিকভাবে তথ্য সংরক্ষণের ব্যবস্থা",
      "কম্পিউটারের কীবোর্ড",
      "এক ধরনের প্রিন্টার",
      "একটি ব্যাটারি"
    ],
    answer: 0
  },
  {
    question: "Google Drive কী ধরনের সেবা?",
    options: [
      "Cloud Storage",
      "Antivirus",
      "Operating System",
      "Keyboard"
    ],
    answer: 0
  },
  {
    question: "QR Code কী?",
    options: [
      "তথ্য দ্রুত স্ক্যান করার একটি দ্বিমাত্রিক কোড",
      "এক ধরনের কীবোর্ড",
      "এক ধরনের ভাইরাস",
      "একটি অপারেটিং সিস্টেম"
    ],
    answer: 0
  },
  {
    question: "QR Code স্ক্যান করতে সাধারণত কী ব্যবহার করা যায়?",
    options: ["ক্যামেরা", "স্পিকার", "প্রিন্টার", "মাউস"],
    answer: 0
  },
  {
    question: "HTML-এর পূর্ণরূপ কী?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Tool Making Language",
      "Home Text Markup Link"
    ],
    answer: 0
  },
  {
    question: "CSS মূলত কী কাজে ব্যবহৃত হয়?",
    options: [
      "ওয়েবপেজের ডিজাইন ও স্টাইল নির্ধারণে",
      "ডেটা মুছে ফেলতে",
      "কম্পিউটার চালু করতে",
      "শুধু গান বাজাতে"
    ],
    answer: 0
  },
  {
    question: "JavaScript সাধারণত ওয়েবপেজে কী যোগ করতে ব্যবহৃত হয়?",
    options: [
      "ইন্টার‌্যাক্টিভ আচরণ ও কার্যকারিতা",
      "শুধু বিদ্যুৎ",
      "শুধু কাগজ",
      "শুধু কীবোর্ড"
    ],
    answer: 0
  },
  {
    question: "HTML-এ সবচেয়ে বড় শিরোনামের জন্য কোন tag ব্যবহৃত হয়?",
    options: ["<h1>", "<h6>", "<p>", "<title>"],
    answer: 0
  },
  {
    question: "HTML-এ paragraph-এর জন্য কোন tag ব্যবহৃত হয়?",
    options: ["<p>", "<h1>", "<img>", "<br>"],
    answer: 0
  },
  {
    question: "ওয়েবপেজে ছবি যোগ করতে কোন HTML tag ব্যবহৃত হয়?",
    options: ["<image>", "<img>", "<picturetext>", "<photo>"],
    answer: 1
  },
  {
    question: "CSS-এ text-এর রঙ পরিবর্তন করতে কোন property ব্যবহৃত হয়?",
    options: ["font-size", "color", "background", "text-width"],
    answer: 1
  },
  {
    question: "CSS-এ লেখার আকার পরিবর্তন করতে কোন property ব্যবহৃত হয়?",
    options: ["font-size", "color", "border", "display"],
    answer: 0
  },
  {
    question: "কম্পিউটারে Copy করার shortcut কোনটি?",
    options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
    answer: 1
  },
  {
    question: "Paste করার shortcut কোনটি?",
    options: ["Ctrl + P", "Ctrl + C", "Ctrl + V", "Ctrl + A"],
    answer: 2
  },
  {
    question: "কোন shortcut দিয়ে কোনো লেখা Cut করা হয়?",
    options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + S"],
    answer: 0
  },
  {
    question: "Save করার shortcut কোনটি?",
    options: ["Ctrl + A", "Ctrl + S", "Ctrl + Z", "Ctrl + F"],
    answer: 1
  },
  {
    question: "Undo করার shortcut কোনটি?",
    options: ["Ctrl + U", "Ctrl + Y", "Ctrl + Z", "Ctrl + D"],
    answer: 2
  },
  {
    question: "Select All করার shortcut কোনটি?",
    options: ["Ctrl + A", "Ctrl + S", "Ctrl + X", "Ctrl + E"],
    answer: 0
  },
  {
    question: "কম্পিউটার থেকে কাগজে তথ্য ছাপাতে কোন ডিভাইস ব্যবহৃত হয়?",
    options: ["Scanner", "Printer", "Monitor", "Mouse"],
    answer: 1
  },
  {
    question: "কাগজের ছবি বা লেখা ডিজিটাল রূপে নিতে কোন ডিভাইস ব্যবহার করা হয়?",
    options: ["Scanner", "Speaker", "Printer", "Projector"],
    answer: 0
  },
  {
    question: "ভিডিও কলের জন্য কোন ডিভাইস প্রয়োজন হতে পারে?",
    options: ["Webcam", "Printer", "Scanner", "Plotter"],
    answer: 0
  },
  {
    question: "নিচের কোনটি সামাজিক যোগাযোগমাধ্যম?",
    options: ["Facebook", "Calculator", "Notepad", "Paint"],
    answer: 0
  },
  {
    question: "নিরাপদভাবে ইন্টারনেট ব্যবহারের একটি ভালো অভ্যাস কোনটি?",
    options: [
      "অজানা লিংকে ক্লিক করা",
      "Password সবাইকে দেওয়া",
      "অজানা ব্যক্তির কাছে ব্যক্তিগত তথ্য না দেওয়া",
      "সব Password একই রাখা"
    ],
    answer: 2
  },
  {
    question: "Backup-এর উদ্দেশ্য কী?",
    options: [
      "তথ্যের অতিরিক্ত কপি সংরক্ষণ করা",
      "কম্পিউটার বন্ধ করা",
      "ইন্টারনেট ধীর করা",
      "স্ক্রিনের আলো বাড়ানো"
    ],
    answer: 0
  },
  {
    question: "AI-এর পূর্ণরূপ কী?",
    options: [
      "Artificial Intelligence",
      "Automatic Internet",
      "Advanced Information",
      "Artificial Internet"
    ],
    answer: 0
  },
  {
    question: "AI কী করতে পারে?",
    options: [
      "তথ্য বিশ্লেষণ ও বিভিন্ন কাজে সহায়তা করতে",
      "শুধু কাগজ ছাপাতে",
      "শুধু বিদ্যুৎ তৈরি করতে",
      "শুধু কম্পিউটার বন্ধ করতে"
    ],
    answer: 0
  }
];
