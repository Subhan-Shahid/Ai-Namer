
const menuToggle = document.getElementById('menuToggle');
const menuContainer = document.getElementById('menuContainer');

menuToggle.addEventListener('click', () => {
  menuContainer.classList.toggle('active');
});




function generateIslBoy(){
  const names = ["Ahmad", "Yusuf", "Ibrahim", "Hassan", "Omar", "Zayd", "Ali", "Bilal", "Khalid", "Tariq", "Ahmad", "Yusuf", "Ibrahim", "Ismail", "Musa", "Isa", "Muhammad", "Ali", "Hasan", "Husayn",
  "Umar", "Uthman", "Bilal", "Salman", "Zayd", "Zubair", "Anas", "Taha", "Luqman", "Ayman",
  "Nuh", "Harun", "Idris", "Zakariya", "Yahya", "Saad", "Ammar", "Khalid", "Faris", "Rami",
  "Rayyan", "Hamza", "Adeel", "Danish", "Imran", "Samir", "Junaid", "Ahsan", "Faizan", "Mahir",
  "Rauf", "Adnan", "Basim", "Hadi", "Ilyas", "Sami", "Tariq", "Ayyub", "Kamil", "Naeem",
  "Fawwaz", "Nabil", "Saif", "Waleed", "Zain", "Azlan", "Ehsan", "Kareem", "Tarek", "Shayan",
  "Sufyan", "Ayaan", "Rehan", "Zayan", "Arham", "Huzaifa", "Owais", "Azaan", "Daniyal", "Arafat",
  "Zarar", "Ayaz", "Mehmood", "Shahzaib", "Muneeb", "Mirza", "Rayan", "Noman", "Jibrael", "Ammar",
  "Fahad", "Imad", "Samiullah", "Harith", "Yunus", "Hashim", "Usama", "Irfan", "Jamal", "Miqdad",
  "Sabir", "Zeeshan", "Wasim", "Tameem", "Rashid", "Mustafa", "Ghaith", "Barirah", "Muaz", "Ashar"];
  const randomislName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomislName}`;
}


function generateHinBoy(){
  const names = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Krishna", "Lakshya", "Rohan", "Karan", "Aryan", "Shivansh", "Ayaan", "Ansh", "Dhruv", "Reyansh", "Kabir", "Ishaan",
  "Hriday", "Rudra", "Yash", "Siddharth", "Tanay", "Aarush", "Devansh", "Lakshay", "Nirvaan", "Omkar",
  "Parth", "Samarth", "Tanishq", "Udayveer", "Vanshika", "Yugantar", "Zaidan", "Arnav", "Bhavya", "Chaitanya",
  "Darsh", "Ekansh", "Fardeen", "Gauransh", "Hritik", "Ishvik", "Jashan", "Kiaan", "Laksh", "Manan",
  "Nishant", "Ojas", "Pranav", "Qasim", "Ritvik", "Suryansh", "Taarak", "Utsav", "Vivan", "Yug",
  "Zoravar", "Aviraj", "Bhuvan", "Chirag", "Dev", "Eshan", "Firoz", "Gurveer", "Himanshu", "Ishaanvi",
  "Jatin", "Kunal", "Lalit", "Mohit", "Nikhil", "Om", "Puneet", "Quadir", "Raghav", "Sahil",
  "Tarun", "Umesh", "Vikrant", "Waman"];
  const randomHinName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomHinName}`;
}

function generateChrisBoy(){
  const names = ["Liam", "Noah", "Oliver", "Elijah", "James", "William", "Benjamin", "Lucas", "Henry", "Alexander",
  "Mason", "Michael", "Ethan", "Daniel", "Jacob", "Logan", "Jackson", "Levi", "Mateo", "David",
  "John", "Owen", "Samuel", "Matthew", "Joseph", "Carter", "Wyatt", "Julian", "Luke", "Grayson",
  "Isaac", "Gabriel", "Anthony", "Dylan", "Leo", "Lincoln", "Jaxon", "Asher", "Christopher", "Josiah",
  "Andrew", "Theodore", "Caleb", "Ryan", "Nathan", "Adrian", "Christian", "Maverick", "Colton", "Elias",
  "Aaron", "Ezekiel", "Charles", "Connor", "Dominic", "Jaxson", "Hunter", "Cameron", "Santiago", "Jeremiah",
  "Evan", "Eli", "Jameson", "Easton", "Nathaniel", "Emmett", "Elliot", "Miles", "Sawyer", "Axel"];
  const randomChrisName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomChrisName}`;
}


function generateSikhBoy(){
  const names = ["Aarav", "Armaan", "Harpreet", "Jaspreet", "Karan", "Manpreet", "Navdeep", "Prabhjot", "Rajveer", "Sukhman",
  "Tejinder", "Vikramjeet", "Yuvraj", "Gurvinder", "Harman", "Jagdeep", "Karamveer", "Lovepreet", "Mandeep", "Nirmal",
  "Pardeep", "Ravinder", "Sandeep", "Taranveer", "Udayveer", "Vaneet", "Waris", "Xavierjeet", "Yashdeep", "Zorawar", "Ajeet",
  "Baljeet", "Charanjit", "Daljit", "Ekamveer", "Fateh", "Gurpreet", "Hardeep", "Inderjit", "Jagjit", "Kamaldeep",
  "Lakhwinder", "Manjot", "Nishan", "Omveer", "Pritam", "Qasim", "Ranjit", "Sukhdeep", "Tajinder", "Umesh", "Vishal",
  "Wajid", "Xarvesh", "Yogesh", "Zorawar", "Aman", "Bikram", "Chirag", "Devinder", "Eshaan", "Firoz",];
  const randomSikhName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomSikhName}`;
}





function generateIslGirl(){
  const names = ["Fatima", "Aisha", "Zainab", "Maryam", "Hafsa", "Khadija", "Layla", "Sara", "Yasmin", "Amina",
  "Hana", "Rania", "Nadia", "Samira", "Laila", "Zara", "Mariam", "Aaliyah", "Safa", "Yara",
  "Huda", "Rana", "Nawal", "Sana", "Lina", "Zayna", "Maha", "Amani", "Sahar", "Yasmeen","AbdAaliyaha", "AbdAaliyahiyah", "AbdAaliyahiyyah", "AbdAaliyahat", "AbdAaliyaheen", "AbdAaliyahina", "AbdAaliyahira", "AbdAminaah", "AbdAminaiya", "AbdAminah", "AbdAminat", "AbdAminiyah", "AbdAminiyyah", "AbdAsmaeen", "AbdAsmaeenah", "AbdAsmaiira", "AbdFatimaa", "AbdFatimaah", "AbdFatimah", "AbdFatimat", "AbdFatimiyyah", "AbdFatimina", "AbdFatimira", "AbdHafsaiya", "AbdHafsah", "AbdHafsat", "AbdHafsiyyah", "AbdHafsina", "AbdHafsira", "AbdKhadijaha", "AbdKhadijahiyah", "AbdKhadijahiyyah", "AbdKhadijahina", "AbdKhadijahira", "AbdLaylaah", "AbdLaylaiya", "AbdLaylatah", "AbdLaylina", "AbdLaylira", "AbdLubnaah", "AbdLubnayah", "AbdLubnina", "AbdLubnira", "AbdMaryamah", "AbdMaryamaiya", "AbdMaryamat", "AbdMaryamiyyah", "AbdMaryamina", "AbdMaryamira",
"AbdMariamah", "AbdMariamiyah", "AbdMariamiyyah", "AbdMariamina", "AbdMiriamira", "AbdNusaybah", "AbdNusaybahiya", "AbdNusaybat", "AbdNusaybiyah", "AbdNusaybiyyah", "AbdRuqayyah", "AbdRuqayyaiya", "AbdRuqayyat", "AbdRuqayyiyyah", "AbdRuqayyina", "AbdRuqayyira", "AbdSafiyyah", "AbdSafiyyahiya", "AbdSafiyyat", "AbdSafiyyina", "AbdSafiyyira", "AbdSalmaah", "AbdSalmaiyah", "AbdSalmaat", "AbdSalmayyah", "AbdSalmaina", "AbdSalmaira", "AbdShaheemah", "AbdShaheemiya", "AbdShaheemiyyah", "AbdShaheemina", "AbdShaheemira", "AbdSuhailah", "AbdSuhailaiya", "AbdSuhailat", "AbdSuhailiyyah", "AbdSuhailina", "AbdSuhailira", "AbdSumayyah", "AbdSumayyahiya", "AbdSumayyiyyah", "AbdSumayyina", "AbdSumayyira", "AbdYasminah", "AbdYasminiyah", "AbdYasminiyyah", "AbdYasminina", "AbdYasminira",
"AbdZainabah", "AbdZainabiyah", "AbdZainabiyyah", "AbdZainabina", "AbdZainabira", "AlAaliyaha", "AlAaliyahiyah", "AlAaliyahiyyah", "AlAaliyahat", "AlAaliyaheen", "AlAaliyahina", "AlAaliyahira", "AlAminaah", "AlAminaiya", "AlAminah", "AlAminat", "AlAminiyah", "AlAminiyyah", "AlAsmaeen", "AlAsmaeenah", "AlAsmaiira", "AlFatimaa", "AlFatimaah", "AlFatimah", "AlFatimat", "AlFatimiyyah", "AlFatimina", "AlFatimira", "AlHafsaiya", "AlHafsah", "AlHafsat", "AlHafsiyyah", "AlHafsina", "AlHafsira", "AlKhadijaha", "AlKhadijahiyah", "AlKhadijahiyyah", "AlKhadijahina", "AlKhadijahira", "AlLaylaah", "AlLaylaiya", "AlLaylatah", "AlLaylina", "AlLaylira", "AlLubnaah", "AlLubnayah", "AlLubnina", "AlLubnira", "AlMaryamah", "AlMaryamaiya", "AlMaryamat", "AlMaryamiyya"];
  const randomislName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomislName}`;
}


function generateHinGirl(){
  const names = ["Anjali", "Annapurna", "AnuAnjalimala", "AnuAnjalishree", "AnuAnjaliya", "AnuAnnapurnarekha",
"AnuAnnapurnashree", "AnuAnnapurnaya", "AnuAshajaya", "AnuAshamala", "AnuBhavnanika", "AnuBhavnaya",
"AnuCharujaya", "AnuCharushree", "AnuCharuvani", "AnuDeepashree", "AnuDeepaya", "AnuDevikajaya",
"AnuDevikapriya", "AnuDevikarekha", "AnuDevikashree", "AnuDevikavani", "AnuDivyajaya", "AnuDivyashree",
"AnuDivyavani", "AnuDurgaashree", "AnuDurgaaya", "AnuGaurishree", "AnuGaurivani", "AnuIshajaya",
"AnuIshamala", "AnuIshayaka", "AnuJayapriya", "AnuJayashree", "AnuJayavani", "AnuKavyajaya",
"AnuKavyarekha", "AnuKavyashree", "AnuKavyavani", "AnuLakshmijaya", "AnuLakshmipriya", "AnuLakshmishree",
"AnuLakshmivani", "AnuLatamala", "AnuLatapriya", "AnuLatashree", "AnuLatavani", "AnuMeerapriya",
"AnuMeerashree", "AnuNainajaya", "AnuNainapriya", "AnuNainashree", "AnuNainavani", "AnuNehamala",
"AnuNehashree", "AnuOjasvimalika", "AnuParvatishree", "AnuParvativani", "AnuPoojamala", "AnuPoojapriya",
"AnuPoojashree", "AnuPoojavani", "AnuRadhamala", "AnuRadhapriya", "AnuRadhashree", "AnuRadhavani",
"AnuRanikshi", "AnuRaniyani", "AnuRitikashree", "AnuRitikatara", "AnuSaanlakshmipriya", "AnuSaanmeerapriya",
"AnuSanDeepashree", "AnuSandeepaya", "AnuSaraswatijaya", "AnuSaraswatipriya", "AnuSaraswatishree",
"AnuSaraswativani", "AnuShalinipriya", "AnuShalinishree", "AnuSitapriya", "AnuSitashree", "AnuSitavani",
"AnuSujayashree", "AnuSujayavani", "AnuTanvishree", "AnuTanvivani", "AnuUmajaya", "AnuUmashree",
"AnuUmavani", "AnuVaishnavishree", "AnuVaishnavivani", "AnuYamunapriya", "AnuYamunashree", "AnuYamunavani",
"AnuZeenatpriya", "AnuZeenatshree", "BhavAnjalishree", "BhavAshamala", "BhavCharujaya", "BhavCharuvani",
"BhavDevikashree", "BhavDivyamala", "BhavGaurivani", "BhavIshayaka", "BhavJayapriya", "BhavKavyarekha",
"BhavLakshmipriya", "BhavLakshmishree", "BhavLakshmivani", "BhavMeerashree", "BhavParvatishree",
"BhavPoojavani", "BhavRadhamala", "BhavRadhashree", "BhavRitikatara", "BhavSaanlakshmipriya",
"BhavSaraswatishree", "BhavShalinipriya", "BhavSitapriya", "BhavSujayashree", "BhavTanvishree",
"BhavUmajaya", "BhavVaishnavivani", "BhavYamunashree", "BhavZeenatshree", "CharuAnjalishree",
"CharuAshajaya", "CharuAshamala", "CharuBhavnaya", "CharuDevikapriya", "CharuDevikashree",
"CharuDivyashree", "CharuDurgaaya", "CharuGaurishree", "CharuIshajaya", "CharuJayashree",
"CharuKavyarekha", "CharuLakshmipriya", "CharuLatavani", "CharuMeerapriya", "CharuNainapriya",
"CharuNehashree", "CharuParvatishree", "CharuPoojamala", "CharuRadhamala", "CharuRadhapriya",
"CharuRanikshi", "CharuRitikatara", "CharuSaanmeerapriya", "CharuSaraswatipriya", "CharuShalinishree",
"CharuSitapriya", "CharuSujayashree", "CharuTanvishree", "CharuUmashree", "CharuVaishnavivani",
"CharuYamunapriya", "CharuZeenatpriya", "DeepaAnjali", "DeepaBhavna", "DeepaCharu", "DeepaDevika",
"DeepaEsha", "DeepaGayatri", "DeepaIsha", "DeepaJaya", "DeepaKavya", "DeepaLata", "DeepaMira",
"DeepaNaina", "DeepaOjasvi", "DeepaPallavi", "DeepaRitika", "DeepaShalini", "DeepaTanvi", "DeepaUma",
"DeepaVaishnavi", "DeepaYamuna", "DeepaZeenat", "DeviAnjali", "DeviAshamala", "DeviCharujaya",
"DeviDevikashree", "DeviDivyamala", "DeviDurgaaya", "DeviGaurivani", "DeviIshayaka", "DeviJayapriya",
"DeviKavyarekha", "DeviLakshmipriya", "DeviLakshmishree", "DeviLakshmivani", "DeviMeerapriya",
"DeviParvatishree", "DeviPoojavani", "DeviRadhamala", "DeviRadhashree", "DeviRitikatara",
"DeviSaanlakshmipriya", "DeviSaraswatishree", "DeviShalinipriya", "DeviSitapriya", "DeviSujayashree",
"DeviTanvishree", "DeviUmajaya", "DeviVaishnavivani", "DeviYamunashree", "DeviZeenatshree"];
  const randomHinName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomHinName}`;
}

function generateChrisGirl(){
  const names = ["Mary", "Anna", "Elizabeth", "Sarah", "Rachel", "Leah", "Rebecca", "Esther", "Martha", "Ruth",
"Naomi", "Deborah", "Joanna", "Phoebe", "Lydia", "Priscilla", "Chloe", "Grace", "Hope", "Faith",
"Charity", "Joy", "Gloria", "Angela", "Veronica", "Clara", "Julia", "Judith", "Magdalene", "Helena",
"Victoria", "Beatrice", "Catherine", "Agnes", "Theresa", "Christina", "Irene", "Lucia", "Miriam", "Gabrielle",
"AnnElizabetha", "MaryGraceine", "JoAnnaiah", "ChristSarahlyn", "HopeAnnaelle", "FaithRachelita", "MarieEstherina",
"GraceLeahlyn", "MaryRebeccaia", "AnnEstherelle", "ElMarthaina", "ChristRuthlyn", "GraceNaomia", "FaithDeborahlyn",
"HopeJoannaa", "MaryPhoebey", "AnnLydiaine", "JoPriscillaa", "GraceChloeelle", "FaithHopeina", "ElJoyette",
"MaryGloriaia", "AnnAngelaine", "ChristVeronicaia", "MarieClaraina", "FaithJuliaette", "GraceJudithina",
"MaryMagdalenea", "AnnHelenaia", "HopeVictoriaelle", "JoBeatriceia", "ElCatherineina", "GraceAgneslyn",
"FaithTheresaa", "MaryChristinaelle", "AnnIreneia", "ChristLucialyn", "HopeMiriamina", "JoGabriellea",
"ElMarya", "GraceAnnaine", "FaithElizabethia", "MarieSarahlyn", "MaryRachelina", "AnnLeahette",
"JoRebeccaelle", "ChristEstherlyn", "HopeMarthaia", "ElRuthina", "GraceNaomia", "FaithDeboraha",
"MaryJoannaelle", "AnnPhoebeina", "ChristLydiaia", "HopePriscillaa", "JoChloeelle", "FaithHopeina",
"MarieJoyette", "MaryGloriaina", "AnnAngelaa", "GraceVeronicaelle", "JoClaraia", "FaithJuliaine",
"ChristJudithlyn", "HopeMagdaleneia", "ElHelenaa", "AnnVictoriaine", "MaryBeatriceia", "JoCatherineina",
"GraceAgneslyn", "FaithTheresaia", "MarieChristinaelle", "AnnIreneina", "JoLuciaa", "HopeMiriama",
"FaithGabrielleine", "ElAnnabella", "GraceMariella", "MaryRosaline", "HopeEvangelina", "ChristAnnette",
"FaithJoella", "JoGracelyn", "ElFaithlyn", "GraceCharityelle", "MaryChristelle", "AnnGlorianna",
"JoAngelina", "HopeVeronique", "FaithClarine", "MarieJulissa", "MaryJudelina", "ChristMaggiea",
"AnnVictorine", "JoBeatricia", "ElCatherlyn", "GraceAgnella", "FaithTessina", "HopeChriselle",
"AnnIrenique", "JoLucille", "ChristMirelle", "MaryGabbiea", "ElAnnabelle", "MarieMarianne",
"HopeRosalia", "AnnEvangelia", "FaithAngelise", "GraceVeralyne", "MaryClaribel", "JoJuliet",
"ChristJudessa", "AnnMagdalia", "FaithVictoriella", "HopeBeatricelle", "GraceCatarina", "MaryAgnetha",
"JoTherina", "Christiannelle", "ElIrenna", "FaithLucindra", "HopeMirianda", "MaryGabrielina",
"AnnSabrinia", "JoTamarissa", "GraceAdelina", "FaithAnastasia", "HopeCelestine", "ElJustina",
"MaryMarisela", "AnnFelicia", "JoCarmeline", "FaithEvangelynn", "GraceGlorianna", "MaryAurorine",
"JoLucindelle", "ChristAngeletta", "HopeSeraphina", "FaithVeritya", "AnnBlesselyn", "ElRedemptra",
"MaryDivinelle", "GraceTrinita", "JoBenedicta", "HopeSolomia", "FaithAllegria", "ChristNaomelle",
"AnnPhoebella", "JoLydele", "GraceJoyelle", "HopeRebekka", "MaryElisette", "FaithGracinda",
"AnnRosalinde", "JoCarissima", "ChristElysette", "HopeAletheia", "MaryAimeena", "FaithMirielle",
"AnnDominique", "JoHeavenly", "GraceTranquilla", "HopeVirtuosa", "ChristBelissima", "MaryPascalina",
"FaithJubilina", "GraceCherissa", "HopeSalomea", "JoAngeleene", "MaryGabina", "AnnMarcella",
"FaithPetronelle", "ChristMadalena", "HopeArabella", "GraceCelestelle", "AnnPacifica", "JoRosaline",
"ElEmmanuella", "MaryElyana", "FaithCoralie", "GraceJustyne", "HopeMarcelina", "AnnBenigna",
"JoLiliana", "ChristSophielyn", "FaithLucelle", "GraceBlessina", "MaryPiety", "AnnAngelisse",
"JoLumina", "HopeMisericordia", "ChristFidelisse", "MaryVenera", "AnnCelina", "JoMystica", "FaithSerena",
"GraceMadonella", "HopeMariselle", "ChristNeoma", "AnnEvodia", "JoEpiphania", "MaryGratiana", "ElGlorya",
"FaithLumena", "GraceTrinelle", "HopeCelessa", "AnnMiracla", "JoEulalia", "MaryPaxina", "FaithHarmonia"];
  const randomChrisName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomChrisName}`;
}


function generateSikhGirl(){
  const names = ["Gurpreet", "Jaspreet", "Harman", "Harpreet", "Simran", "Navpreet", "Manpreet", "Baljeet", "Gurleen", "Rajveer",
"Amrit", "Jasleen", "Kiran", "Navjot", "Harleen", "Sukhmani", "Parminder", "Inderjeet", "Manjeet", "Prabhjot",
"Ravneet", "Jagdeep", "Kirandeep", "Gurjeet", "Rajdeep", "Japleen", "Nimrat", "Harkirat", "Simarjeet", "Balvinder",
"Gurkamal", "Harleen", "Mannoor", "Simjot", "Navleen", "Rajnoor", "Sukhjeet", "Baldeep", "Jasnoor", "Amnoor",
"Gurinder", "Harpreet", "Mandeep", "Simpreet", "Navjot", "Rajdeep", "Sukhleen", "Balpreet", "Jasjeet", "Amdeep",
"Gurleen", "Harkiran", "Manjot", "Simleen", "Navkamal", "Rajkamal", "Sukhdeep", "Baljeet", "Jaspreet", "Amleen",
"Gurneet", "Hardeep", "Maninder", "Simnoor", "Navjeet", "Rajpreet", "Sukhpreet", "Balnoor", "Jaskiran", "Amjot",
"Gurjot", "Harnoor", "Manpreet", "Simdeep", "Navleen", "Rajinder", "Sukhkamal", "Balkiran", "Jasleen", "Amkamal",
"Gurkamal", "Harmanpreet", "Manleen", "Simrat", "Navdeep", "Rajleen", "Sukhminder", "Balinder", "Jasdeep", "Amkiran",
"Gurneet", "Harsimar", "Mannoor", "Simjeet", "Navjinder", "Rajnoor", "Sukhjot", "Baldeep", "Jasnoor", "Amnoor",
"Gurpreet", "Harman", "Maninder", "Simran", "Navkamal", "Rajpreet", "Sukhleen", "Balnoor", "Jaskamal", "Amrat",
"Gursimar", "Hardeep", "Mandeep", "Simjeet", "Navleen", "Rajkamal", "Sukhjeet", "Baljeet", "Jasjeet", "Amleen",
"Gurleen", "Harjot", "Manpreet", "Simpreet", "Navpreet", "Rajjot", "Sukhpreet", "Balkamal", "Jasleen", "Amjot",
"Gurkamal", "Harleen", "Mannoor", "Simdeep", "Navjeet", "Rajnoor", "Sukhnoor", "Baldeep", "Jasnoor", "Amdeep",
"Gurneet", "Harmanpreet", "Manjeet", "Simleen", "Navkamal", "Rajkamal", "Sukhleen", "Balnoor", "Jaskiran", "Amrit",
"Gurpreet", "Harsimar", "Mankamal", "Simrat", "Navnoor", "Rajpreet", "Sukhminder", "Baljeet", "Jasjeet", "Amleen",
"Gurleen", "Harinder", "Manjinder", "Simjeet", "Navjinder", "Rajnoor", "Sukhpreet", "Balnoor", "Jasleen", "Amkamal",
"Gurkamal", "Harkirat", "Manleen", "Simnoor", "Navdeep", "Rajdeep", "Sukhjot", "Baldeep", "Jasnoor", "Amnoor",
"Gurneet", "Harleen", "Manpreet", "Simpreet", "Navkamal", "Rajkamal", "Sukhjeet", "Baljeet", "Jasjeet", "Amleen",
"Gurleen", "Harman", "Mandeep", "Simjot", "Navleen", "Rajnoor", "Sukhleen", "Balnoor", "Jasleen", "Amritleen",
"Gurpreet", "Harsimar", "Mannoor", "Simdeep", "Navjot", "Rajkamal", "Sukhjeet", "Baljeet", "Jasjeet", "Amkamal",
"Gurkamal", "Harinder", "Manjinder", "Simpreet", "Navjeet", "Rajpreet", "Sukhpreet", "Balkamal", "Jasnoor", "Amdeep",
"Gurneet", "Harkiran", "Manleen", "Simran", "Navkamal", "Rajkamal", "Sukhkamal", "Balnoor", "Jaskiran", "Amrat",
"Gursimar", "Hardeep", "Mannoor", "Simjeet", "Navdeep", "Rajnoor", "Sukhleen", "Baljeet", "Jasjeet", "Amleen",
"Gurleen", "Harjot", "Manpreet", "Simdeep", "Navjot", "Rajkamal", "Sukhjeet", "Balkamal", "Jasleen", "Amnoor",
"Gurkamal", "Harsimar", "Manjinder", "Simran", "Navkamal", "Rajnoor", "Sukhkamal", "Balnoor", "Jasnoor", "Amjot"];
  const randomSikhName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomSikhName}`;
}






function generateEcomName(){
  const names = ["BrightBoxloop", "BrightBoxmint", "BrightBuymint", "BrightCartify", "BrightCartlux",
  "BrightDeallane", "BrightHiveora", "BrightLoomlane", "BrightNestlane", "BrightNestverse",
  "BrightStoreverse", "EasyBox", "EasyCartvana", "EasyCraftloop", "EasyDeally",
  "EasyDepotsy", "EasySupplylane", "EcoBuyscape", "EcoCartzone", "EcoClick",
  "EcoCraftmint", "EcoDropify", "EcoPickora", "EcoWishloop", "FastBuyora",
  "FastCartio", "FastDepotverse", "FastLoomzone", "FastNestsy", "FastPicklux",
  "FastStorelane", "FreshBazaarify", "FreshBoxlux", "FreshBuylane", "FreshClickify",
  "FreshCraftzone", "FreshDroploop", "FreshNestvana", "FreshStoretail", "GoBazaarify",
  "GoBuylux", "GoCartify", "GoClicklane", "GoCraftnest", "GoDealverse",
  "GoNestzone", "GoStoreloop", "HyperBuylux", "HyperClicklane", "HyperDealify",
  "HyperDepotio", "HyperPickzone", "HyperStoreloop", "MegaBuytail", "MegaCartify",
  "MegaCraftlux", "MegaDealora", "MegaDroploop", "MegaNestvana", "MegaPicksy",
  "MegaStoreify", "NeoBoxloop", "NeoBuyify", "NeoClickora", "NeoCraftlane",
  "NeoNestscape", "NeoPicklux", "NeoStoreloop", "NextBuyloop", "NextCartlux",
  "NextDepotzone", "NextPicklane", "NextStoreify", "NextWishora", "PrimeBazaarify",
  "PrimeBoxloop", "PrimeBuyora", "PrimeCartmint", "PrimeClickzone", "PrimeDealio",
  "PrimeNestlux", "PrimePicksy", "PrimeWishtail", "QuickBazaario", "QuickBuylux",
  "QuickCartzone", "QuickCraftloop", "QuickDroplane", "QuickNestora", "QuickStoreify",
  "QuickWishscape", "ShopBoxmint", "ShopBuylux", "ShopCartify", "ShopCraftlane",
  "ShopDealora", "ShopDepotloop", "ShopNestvana", "ShopPickzone", "ShopStoretail",
  "SmartBazaarlux", "SmartBuyloop", "SmartCartora", "SmartCraftlane", "SmartDepotmint",
  "SmartPicksy", "SmartStoreio", "SnapBuylane", "SnapCartzone", "SnapCraftlux",
  "SnapDepotora", "SnapDropmint", "SnapNestloop", "SnapStoretail", "StyleBazaarify",
  "StyleBuylux", "StyleCartloop", "StyleClicklane", "StyleCraftmint", "StyleNestora",
  "StyleStorezone", "TrendBazaario", "TrendBuytail", "TrendCartify", "TrendClickloop",
  "TrendDepotlux", "TrendNestlane", "TrendPickora", "TrendStorezone", "TrueBoxlux",
  "TrueCartzone", "TrueCraftlane", "TrueDealio", "TrueNestvana", "TruePickloop",
  "TrueStoreify", "UrbanBazaarloop", "UrbanBuylane", "UrbanCartmint", "UrbanCraftora",
  "UrbanDepotlux", "UrbanNestzone", "UrbanPicktail", "UrbanStoreloop", "ZenBazaarify",
  "ZenBuyloop", "ZenCartlux", "ZenCraftzone", "ZenDropora", "ZenNestscape",
  "ZenPickmint", "ZenStorelane", "BrightBazaarify", "BrightBuyloop", "BrightCartora",
  "BrightCraftzone", "BrightDropmint", "BrightNestloop", "BrightPicktail", "BrightStorelane",
  "EasyBazaarlux", "EasyBuyloop", "EasyCartmint", "EasyClickora", "EasyCraftzone",
  "EasyNestscape", "EasyPicklane", "EasyStoreloop", "EcoBazaarify", "EcoBuytail",
  "EcoCartloop", "EcoClicklane", "EcoCraftlux", "EcoNestzone", "EcoStoreora",
  "FastBazaario", "FastBuylane", "FastCartlux", "FastClickzone", "FastCraftloop",
  "FastNestora", "FastStoremint", "FreshBoxlane", "FreshBuyora", "FreshCartloop",
  "FreshClicklux", "FreshCraftora", "FreshNestmint", "FreshPickloop", "GoBoxlux",
  "GoCartzone", "GoCraftora", "GoDepotloop", "GoNestlane", "GoPickmint", "GoStoretail",
  "HyperBazaarlux", "HyperBuylane", "HyperCartora", "HyperClickmint", "HyperCraftzone",
  "HyperNestloop", "MegaBazaarify", "MegaBuyloop", "MegaCartmint", "MegaClickora",
  "MegaCraftlane", "MegaNestzone", "NeoBazaarlux", "NeoBuylane", "NeoCartora",
  "NeoClickloop", "NeoCraftmint", "NeoNestlane", "NextBazaarloop", "NextBuyora",
  "NextCartmint", "NextCraftlux", "NextNestlane", "PrimeBazaarora", "PrimeBuyzone",
  "PrimeCartloop", "PrimeCraftmint", "PrimeNestora", "QuickBoxlane", "QuickBuyora",
  "QuickCartloop", "QuickCraftmint", "QuickNestlane", "ShopBazaarlux", "ShopBuyloop",
  "ShopCartmint", "ShopCraftora", "ShopNestzone","Shopify", "EcomHub", "MarketMingle", "CartCrafter", "TradeTrove", "CommerceCove", "RetailRealm", "BazaarBuddy", "BuyBox", "EcomEssence",
  "ShopSphere", "MarketMakers", "CartConnect", "TradeTrail", "CommerceCorner", "RetailRendezvous", "BazaarBliss", "BuyBazaar", "EcomEmporium", "ShopSavvy"];
  const randomEcomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomEcomName}`;
}



function generateEduName(){
  const names = ["EduBridge", "LearnNest", "SkillPath", "KnowBoost", "ThinkLab", "MindLift", "BrightRoom", "SmartLoop", "NeoStream", "NextTrack",
  "FutureSphere", "ClassPoint", "StudyDeck", "TrainZone", "AcademStep", "ScholarNode", "TutorHub", "InstructWay", "TeachBase", "GeniusPort",
  "EduCore", "LearnField", "SkillRise", "KnowPilot", "ThinkEdge", "MindBeam", "BrightNest", "SmartLab", "NeoBase", "NextWay",
  "FutureStep", "ClassPort", "StudyPath", "TrainLoop", "AcademRoom", "ScholarPoint", "TutorNest", "InstructCore", "TeachLift", "GeniusStream",
  "EduLab", "LearnZone", "SkillLoop", "KnowNest", "ThinkPort", "MindRoom", "BrightField", "SmartBoost", "NeoNode", "NextPilot",
  "FutureLab", "ClassNest", "StudyBoost", "TrainNode", "AcademTrack", "ScholarPath", "TutorPoint", "InstructLift", "TeachDeck", "GeniusWay",
  "EduTrack", "LearnPilot", "SkillNest", "KnowLab", "ThinkZone", "MindStep", "BrightPort", "SmartRoom", "NeoPoint", "NextLift",
  "FuturePoint", "ClassStep", "StudyNode", "TrainDeck", "AcademCore", "ScholarLoop", "TutorLab", "InstructZone", "TeachField", "GeniusNest",
  "EduNest", "LearnLoop", "SkillStep", "KnowBoost", "ThinkNest", "MindPath", "BrightCore", "SmartStep", "NeoLab", "NextDeck",
  "FutureWay", "ClassBoost", "StudyPort", "TrainPoint", "AcademPath", "ScholarDeck", "TutorRoom", "InstructPilot", "TeachPort", "GeniusTrack","LearnSphere", "EduVerse", "SkillBridge", "KnowledgeNest", "AcademyHub", "StudyStream",
  "TutorTrail", "ScholarSync", "EduElevate", "LearnLink", "SkillScape", "KnowledgeKite",
  "AcademyAvenue", "StudySphere", "TutorTrove", "ScholarSphere", "EduEmpower", "LearnLoom",
  "SkillSail", "KnowledgeKnack", "AcademyArcade", "StudySync", "TutorTide", "ScholarStream",
  "EduEdge", "LearnLabyrinth", "SkillSkyline", "KnowledgeNook", "AcademyAlley", "StudySail",
  "TutorTrack", "ScholarSail"];
  const randomEduName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomEduName}`;
}



function generateHealthName(){
  const names = ["FitFlow", "WellNest", "HealZone", "ZenPath", "PureGlow", "VitalPulse", "BioStream", "FreshCycle", "CalmLoop", "GlowRoot",
  "TrueAura", "GreenBloom", "MindTrack", "SoulRise", "LifeVibe", "NutriLift", "ThrivePoint", "HolistCore", "CoreWay", "BodyBeam",
  "FitPulse", "WellGlow", "HealPath", "ZenLift", "PureCycle", "VitalNest", "BioRoot", "FreshTrack", "CalmBloom", "GlowAura",
  "TrueRise", "GreenZone", "MindStream", "SoulFlow", "LifePulse", "NutriNest", "ThriveGlow", "HolistPath", "CoreLift", "BodyLoop",
  "FitTrack", "WellPoint", "HealBloom", "ZenAura", "PureRise", "VitalCore", "BioVibe", "FreshWay", "CalmBeam", "GlowCycle",
  "TrueNest", "GreenPath", "MindFlow", "SoulPulse", "LifeGlow", "NutriTrack", "ThriveNest", "HolistLift", "CoreAura", "BodyStream",
  "FitLoop", "WellAura", "HealLift", "ZenCycle", "PurePoint", "VitalBeam", "BioNest", "FreshPulse", "CalmWay", "GlowLift",
  "TrueZone", "GreenStream", "MindPath", "SoulTrack", "LifeNest", "NutriGlow", "ThriveWay", "HolistBloom", "CorePoint", "BodyCycle",
  "FitGlow", "WellTrack", "HealCore", "ZenBeam", "PureLoop", "VitalWay", "BioBloom", "FreshRoot", "CalmLift", "GlowTrack",
  "TruePath", "GreenFlow", "MindLift", "SoulZone", "LifeCycle", "NutriPath", "ThrivePulse", "HolistRoot", "CoreCycle", "BodyGlow","HealthSphere", "WellnessWave", "VitalityVault", "FitNest", "CareCore", "HealHub", "NourishNet", "ThriveTrack", "BalanceBase", "ReviveRoom",
  "WellnessWay", "VitalityVista", "FitField", "CareCove", "HealHaven", "NourishNode", "ThriveTrail", "BalanceBridge", "ReviveRealm", "HealthHaven",
  "WellnessWagon", "VitalityVenture", "FitFlow", "CareCircle", "HealHarbor", "NourishNook", "ThriveTide", "BalanceBay", "ReviveRise",
  "HealthHorizon", "WellnessWharf", "VitalityVoyage", "FitForge", "CareCrest", "HealHearth", "NourishNestle", "ThriveThicket", "BalanceBliss",
  "ReviveRetreat","HealthHub","WellnessWorld","VitalityVillage","FitFusion","CareConnect","HealHarmony","NourishNetwork","ThriveTemple","BalanceBounty"];
  const randomHealthName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomHealthName}`;
}



function generateGameName(){
  const names = ["EpicQuest", "BattleRealm", "PixelWarriors", "MythicLegends", "ShadowStrike", "GalacticHeroes", "FantasyForge", "ArcaneAdventures", "CyberSaga", "DragonQuest",
  "MysticRealms", "HeroicLegends", "CosmicBattles", "EpicSaga", "LegendaryHeroes", "FantasyFables", "ShadowLegends", "GalacticAdventures", "ArcaneQuest", "CyberWarriors",
  "DragonSaga", "MysticHeroes", "HeroicFables", "CosmicQuest", "EpicBattles", "LegendaryAdventures", "FantasyLegends", "ShadowSaga", "GalacticFables",
  "ArcaneHeroes", "CyberQuest", "DragonLegends", "MysticBattles", "HeroicAdventures", "CosmicLegends","GameSphere","PlayVerse","QuestHub","BattleZone","EpicArena","PixelWorld","MythicRealm","ShadowLand","GalacticGalaxy","FantasyField",
  "ArcaneAlley","CyberCity","DragonDomain","MysticMeadow","HeroicHaven","CosmicCove","EpicExpanse","LegendaryLands","FantasyFrontier","ShadowShire",
  "GalacticGrove","ArcaneArchipelago","CyberCanyon","DragonDunes","MysticMountain","HeroicHarbor","CosmicCradle"];
  const randomGameName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomGameName}`;
}






function generateFastFoodName(){
  const names = ["Burger Blitz", "FryZone", "Chick Stack", "Snack Shack", "BunFuel",
  "Zesty Bites", "Fry Factory", "Grillzilla", "Sizzle Stop", "Patty Express",
  "WrapRush", "BiteBox", "Tasty Drive", "YumRush", "Crunch N’ Go",
  "Speedy Munch", "ZipBuns", "SnackWhirl", "Flamin’ Fries", "FastFeast",
  "CraveCrush", "Fry Frenzy", "TurboTaco", "The Grub Lab", "DriveBite",
  "Meat & Munch", "ZoomBurger", "GoGrill", "Toasty Tots", "ZipEats",
  "MunchHub", "BurgerBeast", "FastBite Spot", "QuickChow", "FryHop",
  "BunBang", "Crunch Cart", "HotBox Express", "Cheeky Chick", "SnackSprint",
  "Tikka Twist", "FastGrill", "BunWagon", "DeliDash", "Grab n' Grub",
  "Chomp Shack", "RapidWrap", "SpudSquad", "Beefy Bite", "Sizzle Slice","BurgerHaven", "PizzaPalace", "TacoTown", "SushiSpot", "WrapWorld", "FryFiesta", "SaladSanctuary", "WingsWagon", "NoodleNest", "SnackShack",
  "BiteBazaar", "GrillGrove", "DeliDelight", "ChiliChalet", "PastaParadise", "CurryCorner", "SubStation", "SmoothieSphere", "DessertDen", "CoffeeCove",
  "BurgerBistro", "PizzaPavilion", "TacoTerrace", "SushiShed", "WrapWarehouse", "FryFactory", "SaladStation", "WingsWharf", "NoodleNook", "SnackSpot",
  "BiteBistro", "GrillGarden", "DeliDomain", "ChiliChamber", "PastaPlace", "CurryCove","FastFoodFusion","QuickCuisine","SpeedySnacks","RapidRecipes","SwiftEats","ExpressEateries","TurboTastes","BlitzBites","FlashFeasts","ZippyZest"];
  const randomFastFoodName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomFastFoodName}`;
}


function generateCafeName(){
  const names = [ "Brew Haven", "Daily Grind", "Mocha Mood", "Bean & Bloom", "Espresso Lane",
  "Latte Lounge", "Java Junction", "Steamy Mornings", "Drip & Sip", "The Cozy Cup",
  "Cafe Cascade", "Morning Buzz", "The Roasted Bean", "Cup & Kettle", "Brew & Chill",
  "WakeUp Café", "The Grind House", "Perk Up Place", "Velvet Roast", "The Daily Drip",
  "Buzz Bean", "Steam & Cream", "Cafe Nirvana", "Mug Life", "Pour Over Place",
  "Golden Mug", "Espresso Bliss", "Sip Society", "The Bean Scene", "Brewology Bar",
  "Chai & Chat", "Coffee Craft", "Latte Lab", "Midnight Mocha", "Brew Bros",
  "Urban Sip", "Cozy Caffeine", "Crema Corner", "Bitter & Sweet", "The Morning Mug",
  "Brew Ritual", "Cloud Nine Café", "Beanology", "Cuppa Culture", "Daily Roast",
  "The Java Spot", "Mocha Muse", "Steep Station", "Roast Republic", "Perky Beans"
,"Café Bliss", "Java Junction", "Mocha Manor", "Espresso Escape",
  "Latte Lounge", "Cappuccino Cove", "Tea Terrace", "Brewed Awakening", "Beanie Bistro",
  "Sip & Savor", "Coffee Corner", "Mug & Muffin", "Perk Palace", "Roast Retreat",
  "Caffeine Cove", "Steamy Spot", "Brewed Bliss", "Cup of Comfort", "Beanie Haven",
  "Sip Sanctuary", "Coffee Oasis", "Mug Magic", "Perk Paradise", "Roast Realm",
  "Caffeine Castle", "Steamy Sanctuary", "Brewed Beauty", "Cup of Joy", "Beanie Bliss",
  "Sip Spot", "Coffee Cove", "Mug Manor", "Perk Place", "Roast Retreat",
  "Caffeine Corner", "Steamy Sanctuary","CafeSphere","BrewVerse","JavaHub","MochaWorld","EspressoLand","LatteLane","CappuccinoCity","TeaTown","BrewedBay",
  "BeanieBliss","SipSanctuary","CoffeeCove","MugMeadow","PerkPark","RoastRidge","CaffeineCreek","SteamyStream","BrewedBrook","CupCove",
  "BeanieBay","SipShore","CoffeeCliff","MugMountain","PerkPeak","RoastRiver"];
  const randomCafeName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomCafeName}`;
}



function generateTruckName(){
  const names = ["Rolling Bites", "Grub Wheels", "Taco Trek", "Nomad Nosh", "The Hungry Wagon",
  "Street Sizzle", "BiteRide", "Grill on Wheels", "Wrap & Roll", "Fast Track Tacos",
  "The Mobile Munch", "Chow Chariot", "Bun on the Run", "Fuel & Feast", "Spice Route Truck",
  "Flavor Wheels", "Crave Cruiser", "Taste Trekker", "On the Go Grub", "Munch Machine",
  "The Foodie Bus", "Quick Chow Cart", "Grill Drifter", "Dash & Dine", "The Rolling Kitchen",
  "Savory Street", "Roaming Buns", "Urban Bites Truck", "The Fry Guy", "Snackmobile",
  "NomNom Wheels", "Flame Cruiser", "Belly Bus", "Twist & Taste", "The Lunch Launcher",
  "Street Chow Express", "Hot Dish Hauler", "Curbside Cravings", "Meals on Wheels", "Grab & Go Grill",
  "Turbo Tacos", "Wok This Way", "Grilled Nomads", "Burger Bus", "Sizzle Street Truck",
  "Loaded & Roasted", "The Flavor Van", "Rolling Fork", "Buns on Wheels", "ZipFeast","Rolling Feast", "Nomad Nibbles", "WanderBites", "Street Eats", "Roaming Rolls",
  "Gourmet Wheels", "Urban Munch", "Mobile Morsels", "Curbside Cravings", "Foodie Fleet",
  "Savory Safari", "Taste Trekker", "Flavor Wheels", "Epicurean Express", "Gastronome Glide",
  "Bite Boulevard", "Cuisine Cruiser", "Snack Shuttle", "Delicious Drive", "Gourmet Glide",
  "Flavor Fusion Truck", "Savory Street Wagon", "Taste Trailblazer", "Epicurean Expedition",
  "Gastronome Go", "Bite Bus", "Cuisine Caravan", "Snack Safari Truck", "Delicious Driveway",
  "Gourmet Glideway","TruckSphere","FoodieVerse","MunchHub","FlavorFleet","BiteBazaar","CuisineCruise","SnackStation","DeliciousDrive","GourmetGlide",
  "RollingRestaurant","NomadNosh","WanderWagon","StreetSavor","RoamingRepast","UrbanUtopia","MobileMunchies","CurbsideCuisine","FoodieFiesta","SavorySojourn",
  "TasteTrek","FlavorFleet","EpicureanEats","GastronomeGrove","BiteBoulevard","CuisineCruiser","SnackShuttle"];
  const randomTruckName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomTruckName}`;
}


function generateDriveName(){
  const names = ["Drive & Dine", "Retro Bites", "Cruise & Chow", "Sizzle Stop", "The Burger Lot",
  "CarHop Café", "The Drive-Up Diner", "Wheelie Good Eats", "Flash Feast", "MotorGrub",
  "Park n’ Bite", "Vroom Eats", "Cruisin’ Kitchen", "Grease & Grill", "Bumper Bites",
  "The Pit Stop", "DriveThru Deli", "Dash Diner", "Auto Munch", "Roll-Up Eats",
  "Burger Boulevard", "The Retro Ride-In", "Slide & Dine", "Steer ‘n’ Snack", "Highway Hunger",
  "Fuel Station Grill", "Wheely Tasty", "Quick Wheel Bites", "Zoom Chow", "Eat 'n' Idle",
  "Vintage Buns", "Pop Stop Drive-In", "Grill Lane", "Overdrive Diner", "Fast Track Eats",
  "ChowWheels", "The Munch Meter", "DriveThru Delight", "AutoFuel Bites", "Rider's Rest Stop",
  "Meal Motion", "RushBite Drive-In", "CruiseBite Café", "Hot Lap Grill", "Roadside Munch",
  "Burgers & Bumpers", "DriveSnack Express", "Dash n’ Dine", "Ignite Grill", "RoadGrub","DriveSphere", "DriveVerse", "DriveHub", "DriveWorld", "DriveLane",
  "DriveBay", "DriveZone", "DriveNest", "DrivePoint", "DriveStream",
  "DriveNest", "DriveBase", "DriveField", "DriveCove", "DriveHarbor",
  "DriveHaven", "DriveOasis", "DriveSanctuary", "DriveRetreat", "DriveRealm",
  "DriveVista", "DriveVista", "DriveVista", "DriveVista", "DriveVista",
  "DriveVista", "DriveVista", "DriveVista", "DriveVista", "DriveVista"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomName}`;
}








function generateTechName(){
  const names = ["NeuroCore", "ByteNest", "Cloudspire", "CodeNova", "DataMint", "PixelForge", "QuantumStack", "TechTide", "NetSculpt", "LogicLoop",
  "Innoventix", "CyberNex", "NovaCircuit", "NextGenix", "HyperVolt", "SoftSmith", "CoreBinary", "InfoQuark", "Mindware", "QuantumShift",
  "Syncology", "Skylogix", "DataDrift", "Cloudlytics", "AIQuotient", "Nexabyte", "BitFusion", "CircuitHive", "NeuralWorks", "TechSpan",
  "InfiniSys", "CodeCrate", "CloudNest", "MetaCloud", "Zerobyte", "LogiPulse", "BrightCircuit", "NetWorx", "Axionics", "Sparklytic",
  "DigitalFuse", "CodeSector", "CoreNova", "CyberMatter", "PixelNest", "Techglow", "CodeDrop", "Nextbit", "QuantumNode", "BitGlow",
  "SysNova", "InnoWare", "CodeShift", "Algomind", "Nexarise", "LogiChain", "CloudZero", "MetaCore", "NeuralFlow", "DataGleam",
  "SyncPath", "FusionCode", "CoreHive", "NovaLogic", "Skyflux", "TechCrate", "CyberPulse", "BitBeacon", "AIStacks", "Innovalytics",
  "GlitchLabs", "ZenoTech", "LogiSpark", "Nexux", "BrightBotics", "CodeMatter", "DataLoom", "CyberWorks", "SparkAI", "BitNest",
  "Infinitium", "CortexAI", "MetaNet", "AlgoNix", "QuantumDock", "BrightMind", "SkyBotix", "NexioTech", "NeuroSoft", "DigitNova",
  "CodePilot", "VoltIQ", "SmartNex", "DataSpark", "NetHex", "Cloudbotics", "FusionNova", "SoftMatter", "CodeMesh", "InnovIQ",
  "CyberShift", "BrightVerse", "CloudSwirl", "NeuroSync", "InfoNest", "AlgoCrate", "DigitalNest", "BitTrove", "CodeSpring", "LogiByte",
  "Brightware", "NextIQ", "NovaByte", "AIField", "CloudBolt", "PixelSynapse", "MindCore", "DataPulse", "CoreVision", "QuantumThread",
  "ByteCrate", "NeuralNest", "CodeDrive", "Innovera", "MetaSpark", "BrightCode", "TechVista", "CorePulse", "Zerolink", "SkyChain",
  "BotNova", "CloudNestIQ", "DigitalMind", "BrightShift", "InfinoBit", "NextNode", "CodeTide", "BitLift", "AIForge", "SkyNest",
  "QuantumWorks", "NetAI", "BrightNest", "DataGlow", "CodeRoot", "CircuitWave", "CoreIQ", "NeuroByte", "CloudRamp", "PixelShift",
  "CyberThread", "LogiNest", "NovaWave", "CodeNest", "DataCortex", "InfinoTech", "LogicSpark", "FusionIQ", "BitNexus", "MindwareX",
  "AIForgeX", "NextCloud", "SkyBot", "BrightPath", "NeuralGlow", "SparkByte", "CloudTree", "QuantumNest", "MetaByte", "CodeFusion",
  "LogiSoft", "Innovex", "CoreTrek", "NexWorx", "ByteTrail", "SkyBox", "DataCrate", "DigitalIQ", "BrightLogic", "VoltNest",
  "AIChain", "CyberNova", "InfoPath", "NextSoft", "CloudBridge", "LogicCloud", "NovaSpark", "CodeRise", "FusionPath", "SkyIQ",
  "BitNestX", "NeuralNetix", "MindForge", "CloudLogic", "TechCrux", "SparkNet", "BrightAI", "LogixNest", "DataPulseX", "CodeAtom",
  "CoreNest", "SkyNova", "DigitIQ", "CyberLink", "QuantumAI", "InnoBot", "FusionNet", "CodeLoom", "TechNest", "ByteAI",
  "BrightStack", "NeuroCraft", "LogiMind", "CloudCode", "SparkBridge", "NovaChain", "BitSpire","TechSphere", "TechVerse", "TechHub", "TechWorld", "TechLane",
  "TechBay", "TechZone", "TechNest", "TechPoint", "TechStream",
  "TechNest", "TechBase", "TechField", "TechCove", "TechHarbor",
  "TechHaven", "TechOasis", "TechSanctuary", "TechRetreat", "TechRealm",
  "TechVista", "TechVista", "TechVista", "TechVista", "TechVista",
  "TechVista", "TechVista", "TechVista", "TechVista", "TechVista",
  "GigaSphere", "GigaVerse", "GigaHub", "GigaWorld", "GigaLane",
  "GigaBay", "GigaZone", "GigaNest", "GigaPoint", "GigaStream",
  "GigaNest", "GigaBase", "GigaField", "GigaCove", "GigaHarbor",
  "GigaHaven"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomName}`;
}



function generateTradingName(){
  const names = ["GlobalEx Trade", "SwiftBarter", "PrimePort Traders", "NexTrade Corp", "BlueBridge Trading",
  "TradeVerse", "EverLink Exports", "CoreTrade Hub", "TrueNorth Traders", "TradeSync Ltd",
  "Brightline Traders", "SkyPort Exports", "MetroTrade Group", "TradeSphere", "OceanBridge Trade",
  "EliteEdge Traders", "UnityTrade Solutions", "ProLine Exports", "Vertex Trade House", "GoldStar Trading",
  "TradeCraft Global", "IronGate Trade", "CrossPoint Trading", "FortuneRoute", "WorldAxis Traders",
  "NovaExporters", "TradeFleet International", "BrightWave Traders", "Pinnacle Trade Co", "TransGlobe Trading",
  "NextGate Imports", "TradeRoots Group", "Vanguard Trading Co", "Pacific Rim Traders", "ApexTrade Corp",
  "TradeAxis", "EastBridge Trading", "PrimeGate Exports", "QuickFlow Traders", "BlueOcean Trade House",
  "RapidBridge Trade", "TradeOrbit", "ExportEdge", "SilverPort Traders", "Worldwise Trading", "TradePulse Inc",
  "ZenithTrade Solutions", "StarRoute Exports", "Everest Trade Corp", "TradeNexus", "SkyTrade International",
  "OrbitBridge Trading", "BrightWay Traders", "TradeBolt Ltd", "TrueWave Trading", "RedLine Exports",
  "NorthStar Trade Group", "PeakPort Trading", "FlexiTrade Corp", "FusionGate Traders", "UnityPort Exports",
  "GreenAxis Trading", "TradePilot Ltd", "GrandTrade Global", "SmartPort Traders", "TradeLoop Inc",
  "Tradiax", "TradeBloom", "WorldNest Traders", "TradeVibe", "TradeLynx",
  "BridgeGlobe Trading", "TradeMint Corp", "NobleRoute Traders", "Skybound Trading", "QuantumPort Exports",
  "TradeReach Ltd", "TradeHarbor", "FastGlobe Trading", "TrustWay Traders", "GlobalRay Exports",
  "TradePeak Corp", "OceanLynx Traders", "NeoBridge Trading", "BrightPath Exports", "BlueGrid Trade",
  "TradeMatrix Inc", "AlphaPort Traders", "SureRoute Trading", "TradeCore Ltd", "InstaTrade",
  "TradeBridge Co", "SwiftRoute Traders", "TradeRise Corp", "EastNova Traders", "TradeWell Group",
  "SkyReach Exports", "PortFlex Trading", "BlueAxis Traders", "WorldSpan Trading", "TradeTrack Ltd",
  "TradeZen", "Oceanix Traders", "NexPort Trading", "GlobeTrade Co", "TradeLink International","TradeSphere", "TradeVerse", "TradeHub", "TradeWorld", "TradeLane",
  "TradeBay", "TradeZone", "TradeNest", "TradePoint", "TradeStream",
  "TradeNest", "TradeBase", "TradeField", "TradeCove", "TradeHarbor",
  "TradeHaven", "TradeOasis", "TradeSanctuary", "TradeRetreat", "TradeRealm",
  "TradeVista", "TradeVista", "TradeVista", "TradeVista", "TradeVista",
  "TradeVista", "TradeVista", "TradeVista", "TradeVista", "TradeVista",
  "MarketSphere", "MarketVerse", "MarketHub", "MarketWorld", "MarketLane",
  "MarketBay", "MarketZone", "MarketNest", "MarketPoint", "MarketStream",
  "MarketNest", "MarketBase", "MarketField", "MarketCove","CommerceSphere","CommerceVerse","CommerceHub","CommerceWorld","CommerceLane"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomName}`;
}



function generateManufacturingName(){
  const names = ["PrimeForge Industries", "SteelCore Manufacturing", "FlexiMek", "IronNest Works", "BrightBolt Industries",
  "MetaMakers", "CoreEdge Manufacturing", "TrueForm Tech", "NextGen Manufacturing", "QuantumForge Ltd",
  "AlloyWorks", "CraftMetals", "PrecisionPlus", "NeoMach Industries", "VertexFab", "SolidLine Manufacturing",
  "ApexMakers", "Structura Industries", "SwiftSteel", "ForgeRise", "MetroMek", "BuildAxis", "EverMek Solutions",
  "NovaSteel Works", "TitanForge Ltd", "EliteCraft Manufacturing", "GlobeMach", "IronTrail Industries",
  "Nexen Fabricators", "BlueForge Co", "Machinex Corp", "BoldEdge Manufacturing", "TrueSteel Industries",
  "InnoFab Systems", "ProMetal Works", "CraftEdge Industries", "MetalVibe", "PureMach Solutions",
  "UrbanFoundry", "PeakForge Manufacturing", "SteelBay Fabricators", "SmartFab", "NexCore Machining",
  "SolidMek", "BrightMetal Industries", "CoreShift Manufacturing", "GlobalForge", "AlliedFab",
  "MachinaTech", "AxonMek", "VisionSteel", "ZenithMakers", "FusionFab", "InstaBuild", "AlloyAxis",
  "PulseMek Industries", "MetaCraft Co", "TrueBuild Tech", "SteelPoint Fabrication", "BrightEdge Works",
  "IndustrialNova", "MachForge", "GearCore Industries", "DeltaBuild", "FoundryLine", "CraftMotion",
  "MekTronix", "AlloyGrid", "StructureWise", "PrimeCast Industries", "BoltCraft", "ForgeMind Ltd",
  "BrightMek", "NextSteel Fabricators", "BlueMach Tech", "UrbanForge", "MetalNest Systems",
  "SolidAxis Manufacturing", "CastX Industries", "MekHive", "EdgeForge", "MetaTron Industries",
  "IronPeak Co", "TrueMek Works", "WeldWise", "RapidFab", "NovaBuild", "VisionMakers", "WeldStar",
  "CoreCraft Ltd", "SteelStruct Systems", "GearShift Manufacturing", "AlliedSteel Works", "MetaLine Fab",
  "CraftNest", "NexFab Industries", "BoltMakers", "IronStruct", "MachinoCore", "Formwise Industries",
  "UnityFab", "BuildX Corp", "PulseForge", "SolidPeak Manufacturing", "NextEdge Fabricators",
  "CastCore Co", "PrecisionBuild", "BrightStruct", "IronLogic Ltd", "VertexFabTech", "HexaMek",
  "BuildNest", "ForgeLink Industries", "CoreCast Manufacturing", "MachWise", "BlueSteel Co",
  "AlloyPrime", "CraftCore Ltd", "TrueWeld", "PeakSteel Fabricators", "Machinova", "UrbanBuild Corp",
  "WeldNest", "PulseCast", "TitanEdge", "BoltWise Industries", "BuildBridge Manufacturing",
  "CoreForge Works", "NovaMach Fabricators", "MetalAxis", "BrightFoundry", "PrimeEdge Works",
  "FormCraft Industries", "InnoCast", "MachinaForge", "RapidStruct", "GearBuild Ltd",
  "CraftedCore", "EdgeBuild Systems", "AlloyPoint", "SkyFab Industries", "VertexCast",
  "WeldCore Manufacturing", "InstaStruct", "ForgeFlex", "MekBridge", "NextPulse Industries",
  "PrimeStruct", "SteelHive", "CraftEdge Systems", "NovaCast Co", "GearNova", "IronEdge Fabricators",
  "SolidCraft Ltd", "AxonBuild", "MetalMinds Manufacturing", "TrueBolt Co", "VisionCast Industries",
  "BuildCore", "InnovaForge", "SteelNest Systems", "BrightForge Ltd", "GearPeak Industries",
  "PrimeWeld", "AlliedBuild", "FormEdge Manufacturing", "CastForge", "MekStruct Co", "WeldXpress",
  "UrbanCast", "IronGrid Fabricators", "BlueWeld", "PulseStruct", "SteelBridge Corp", "NextStruct Systems",
  "GearLine", "MekEdge", "CraftedSteel", "SolidNest", "TitanCraft", "VertexBuild Ltd", "WeldNova",
  "BrightLine Fab", "CoreForm Systems", "PeakFoundry", "SmartForge", "TrueCraft Works", "IronNest Ltd",
  "MekVibe", "AxonCast", "SolidForge", "FormBright Manufacturing", "GlobalBuild Corp", "MachNest",
  "NeoWeld Systems", "PrecisionEdge Ltd", "UrbanStruct", "ForgeLogic", "WeldLine", "SteelWise Works",
  "PulseBuild", "MachForm", "RapidForge", "VertexMek", "CastWise", "TrueForm Foundry", "IronBright",];
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomName}`;
  };



  function generateConstructionName(){
  const names = ["ForgeCore Industries", "BrightSteel Manufacturing", "NexMach Corp", "IronNest Works", "MetaBuild Ltd",
  "TrueCraft Fabricators", "QuantumMek", "ApexFoundry", "CoreAxis Manufacturing", "SolidLine Fabrication",
  "TitanEdge Manufacturing", "UrbanForge", "VertexMetal", "BlueWeld Industries", "AlloyMek Ltd",
  "PrecisionFab", "WeldPrime Manufacturing", "CraftNest Corp", "IronPeak Works", "FlexiFab Systems",
  "MachinaCore", "SteelStruct Co", "FormWise Industries", "GearNest", "MekGrid Manufacturing",
  "CastPoint Ltd", "BrightForm Fab", "CoreMakers", "FusionForge", "AxonCast", "TrueWeld Ltd",
  "SteelBridge Fabricators", "SmartFoundry", "MetaCraft", "SolidBuild Corp", "InnovaForge",
  "BoltNest Manufacturing", "BlueSteel Co", "WeldWise Industries", "PeakMek", "RapidFab Systems",
  "VertexFab", "UrbanMek", "GearCore Ltd", "NextSteel Works", "WeldNova", "BrightAxis Manufacturing",
  "FormEdge Corp", "PulseBuild Ltd", "IronCraft Systems", "NeoFoundry", "BuildPoint Manufacturing",
  "SteelBay Fabricators", "MetalHive Ltd", "CraftedMek", "AlloyLine Industries", "ForgeBridge",
  "CoreForm Co", "MekLink Manufacturing", "PrecisionEdge", "TitanCraft", "MachNest",
  "SmartWeld Ltd", "IronBridge Industries", "WeldStruct", "UrbanCast", "VertexBuild",
  "CastForge Co", "BrightBolt Manufacturing", "SteelMind Works", "MekStruct Ltd", "FoundryX",
  "MachLine Fabricators", "NextFab Industries", "CraftEdge Co", "SolidNest", "CoreCast Ltd",
  "MetaFab", "RapidStruct", "NovaWeld", "IronLogic Manufacturing", "PulseForge", "SkyForge",
  "GearMek", "TrueForm Foundry", "InnoCraft", "BuildHive", "MekPrime", "IronFlex",
  "PrecisionCraft", "AxonForge", "TitanWeld", "WeldCraft Industries", "SteelLink Fabricators",
  "FormBright Ltd", "SmartFab", "WeldCore", "BuildNest", "ForgeNova", "BrightMek", "SteelNest","BuildNest", "ConstructCore", "UrbanForge", "Skyline Builders", "SolidCraft",];
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("result").innerText = `✨ ${randomName}`;
  }