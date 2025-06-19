
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