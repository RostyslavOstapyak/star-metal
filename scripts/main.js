let burger = document.getElementById("navToggle");
let headerTogle = document.getElementById("headerID");
let nav = document.getElementById("navID");

function toggleMenu() {
  nav.classList.toggle("showMenu");
}
function hideMenu() {
  nav.classList.remove("showMenu");
}

burger.addEventListener("click", toggleMenu);
nav.addEventListener("click", hideMenu);

//naming variables for easy axes to them
let glownaSec = document.getElementById("sectionGlowna");
let uslugiSec = document.getElementById("sectionUslugi");
let galeriaSec = document.getElementById("sectionGaleria");
let kontaktSec = document.getElementById("sectionKontakt");

let glownaBtn = document.getElementById("glownaButton");
let uslugiBtn = document.getElementById("uslugiButton");
let galeriaBtn = document.getElementById("galeriaButton");
let kontaktBtn = document.getElementById("kontaktButton");

let langPanel = document.getElementById("languagePannel");
let langPlBtn = document.getElementById("languagePl");
let langUaBtn = document.getElementById("languageUa");
let langRuBtn = document.getElementById("languageRu");
let langEngBtn = document.getElementById("languageEng");
const languagePanel = document.querySelector(".language");
const languageBtnList = document.querySelectorAll(".language__button ");

// changing language

// chose language for change

const changeLang = (event) => {
  const item = event.target;
  console.log(item);
  if (item.classList.contains("language")) {
    // if clicked on language panel
    languageBtnList.forEach((el) => {
      el.classList.toggle("showLangList"); // show panel
    });
  }

  if (item.classList.contains("language__button")) {
    // if clicked on button
    if (document.querySelectorAll(".language__button_active")) {
      //if we have active
      document.querySelectorAll(".language__button_active").forEach((el) => {
        //for each language button
        el.classList.remove("language__button_active"); // remove active class
      });
    }

    item.classList.add("language__button_active"); // adding active class for item clicked on

    switch (item.dataset.language) {
      case "PL":
        console.log("language changed to PL");
        changeLanguagePl();
        break;
      case "UA":
        console.log("language changed to UA");
        changeLanguageUa();
        break;
      case "RU":
        console.log("language changed to RU");
        changeLanguageRu();
        break;
      case "ENG":
        console.log("language changed to ENG");
        changeLanguageEng();
        break;
      default:
        console.log("error");
    }
  }
};

languagePanel.addEventListener("click", changeLang);

function changeLanguagePl() {
  document.getElementById("nav-glowna").textContent = "Główna";
  document.getElementById("nav-uslugi").textContent = "Usługi";
  document.getElementById("nav-galeria").textContent = "Galeria";
  document.getElementById("nav-kontakt").textContent = "Kontakt";

  document.getElementById("glowna-text").textContent =
    "Spawanie i obróbka stali";

  //section uslugi

  document.getElementById("uslugi-lineOne").textContent =
    "Spawanie MIG/MAG, TIG oraz elektrodą otulinową";
  document.getElementById("uslugi-lineTwo").textContent =
    "Produkcja oraz montaż bram, furtek, ogrodzeń";
  document.getElementById("uslugi-lineThre").textContent =
    "Kowalstwo artystyczne";
  document.getElementById("uslugi-lineFour").textContent = "Stoły ze stali";
  document.getElementById("uslugi-lineFive").textContent =
    "Konstrukcje metalowe";
  document.getElementById("uslugi-lineSix").textContent = "Balustrady";
  document.getElementById("uslugi-lineSeven").textContent = "Spawanie bram";
  document.getElementById("uslugi-lineEight").textContent = "Spawanie zawiasów";
  document.getElementById("uslugi-lineNine").textContent = "Spawanie drzwi";
  document.getElementById("uslugi-lineTen").textContent = "Spawanie rur";
  document.getElementById("uslugi-lineEleven").textContent = "Spawanie blach";
  document.getElementById("uslugi-lineTwelve").textContent =
    "Spawanie detali i elementów samochodowych";
  document.getElementById("uslugi-lineThirteen").textContent =
    "Możliwość spawania w siedzibie firmy lub u klienta";

  document.getElementById("kontakt-title").textContent = "Kontakt";
  document.getElementById("work-time").textContent = "Godziny otwarcia:";
  document.getElementById("work-time-one").textContent = "Pn.-Pt.:";
  document.getElementById("work-time-two").textContent = "So.-Nd.:";

  langPlBtn.classList.add("language__button_active");
}

function changeLanguageUa() {
  document.getElementById("nav-glowna").textContent = "Головна";
  document.getElementById("nav-uslugi").textContent = "Послуги";
  document.getElementById("nav-galeria").textContent = "Галерея";
  document.getElementById("nav-kontakt").textContent = "Контакти";

  document.getElementById("glowna-text").textContent =
    "Зварювальні роботи та металообробка"; // need translation

  //section uslugi

  document.getElementById("uslugi-lineOne").textContent =
    "Зварювання MIG / MAG, TIG та електродом ";
  document.getElementById("uslugi-lineTwo").textContent =
    "Виготовлення та монтаж воріт, хвірток та огорож";
  document.getElementById("uslugi-lineThre").textContent = "Художня ковка";
  document.getElementById("uslugi-lineFour").textContent =
    "Виготовлення столів";
  document.getElementById("uslugi-lineFive").textContent =
    "Виготовлення металевих конструкцій";
  document.getElementById("uslugi-lineSix").textContent = "Виготовлення перил";
  document.getElementById("uslugi-lineSeven").textContent = "Зварювання воріт";
  document.getElementById("uslugi-lineEight").textContent = "Зварювання петель";
  document.getElementById("uslugi-lineNine").textContent = "Зварювання дверей";
  document.getElementById("uslugi-lineTen").textContent = "Зварювання труб";
  document.getElementById("uslugi-lineEleven").textContent =
    "Зварювання листового металу";
  document.getElementById("uslugi-lineTwelve").textContent =
    "Зварювання деталей та елементів автомобіля";
  document.getElementById("uslugi-lineThirteen").textContent =
    "Можливість зварювання в компанії або на місці в замовника";

  //kontakt
  document.getElementById("kontakt-title").textContent = "Контакти";
  document.getElementById("work-time").textContent = "Графік роботи:";
  document.getElementById("work-time-one").textContent = "Пн.-Пт.:";
  document.getElementById("work-time-two").textContent = "Сб.-Нд.:";

  langUaBtn.classList.add("language__button_active");
}

function changeLanguageRu() {
  document.getElementById("nav-glowna").textContent = "Главная";
  document.getElementById("nav-uslugi").textContent = "Услуги";
  document.getElementById("nav-galeria").textContent = "Галерея";
  document.getElementById("nav-kontakt").textContent = "Контакт";

  document.getElementById("glowna-text").textContent =
    "Сварочные работы и металлообработка"; // need translation

  //section uslugi

  document.getElementById("uslugi-lineOne").textContent =
    "Сварка MIG / MAG, TIG и электродом ";
  document.getElementById("uslugi-lineTwo").textContent =
    "Изготовление и монтаж ворот, калиток и ограждений";
  document.getElementById("uslugi-lineThre").textContent =
    "Художественная ковка";
  document.getElementById("uslugi-lineFour").textContent =
    "Изготовление столов";
  document.getElementById("uslugi-lineFive").textContent =
    "Изготовление металлических конструкций";
  document.getElementById("uslugi-lineSix").textContent = "Изготовление перил";
  document.getElementById("uslugi-lineSeven").textContent = "Сварка ворот";
  document.getElementById("uslugi-lineEight").textContent = "Сварка петель";
  document.getElementById("uslugi-lineNine").textContent = "Сварка дверей";
  document.getElementById("uslugi-lineTen").textContent = "Сварка труб";
  document.getElementById("uslugi-lineEleven").textContent =
    "Сварка листового металла";
  document.getElementById("uslugi-lineTwelve").textContent =
    "Сварка деталей и элементов автомобиля";
  document.getElementById("uslugi-lineThirteen").textContent =
    "Возможность сварки на фирме или на месте у заказчика";

  //kontakt
  document.getElementById("kontakt-title").textContent = "Контакт";
  document.getElementById("work-time").textContent = "Время работы:";
  document.getElementById("work-time-one").textContent = "Пн.-Пт.:";
  document.getElementById("work-time-two").textContent = "Сб.-Вс.:";

  langRuBtn.classList.add("language__button_active");
}

function changeLanguageEng() {
  document.getElementById("nav-glowna").textContent = "Home";
  document.getElementById("nav-uslugi").textContent = "Services";
  document.getElementById("nav-galeria").textContent = "Gallery";
  document.getElementById("nav-kontakt").textContent = "Contact";

  document.getElementById("glowna-text").textContent =
    "Welding and metalworking"; // need translation

  //section uslugi

  document.getElementById("uslugi-lineOne").textContent =
    "MIG / MAG, TIG and electrode welding";
  document.getElementById("uslugi-lineTwo").textContent =
    "Manufacture and installation gates, wickets and fences";
  document.getElementById("uslugi-lineThre").textContent = "Artistic forging";
  document.getElementById("uslugi-lineFour").textContent =
    "Manufacturing metal tables";
  document.getElementById("uslugi-lineFive").textContent =
    "Manufacture of metal structures";
  document.getElementById("uslugi-lineSix").textContent =
    "Manufacture of railings";
  document.getElementById("uslugi-lineSeven").textContent = "Welding gate";
  document.getElementById("uslugi-lineEight").textContent =
    "Welding gate hinges";
  document.getElementById("uslugi-lineNine").textContent = "Welding doors ";
  document.getElementById("uslugi-lineTen").textContent = "Welding tubes";
  document.getElementById("uslugi-lineEleven").textContent =
    "Welding sheet metal";
  document.getElementById("uslugi-lineTwelve").textContent =
    "Welding vehicle parts and elements";
  document.getElementById("uslugi-lineThirteen").textContent =
    "Possibility of welding at the customer";

  //kontakt
  document.getElementById("kontakt-title").textContent = "Contact";
  document.getElementById("work-time").textContent = "Opening hours:";
  document.getElementById("work-time-one").textContent = "Mo.- Fr.:";
  document.getElementById("work-time-two").textContent = "Sa.-Su.:";

  langEngBtn.classList.add("language__button_active");
}

langEngBtn.addEventListener("click", changeLanguageEng);
langUaBtn.addEventListener("click", changeLanguageUa);
langRuBtn.addEventListener("click", changeLanguageRu);
langPlBtn.addEventListener("click", changeLanguagePl);
