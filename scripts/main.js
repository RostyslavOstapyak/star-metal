let burger = document.getElementById("navToggle");
let headerTogle = document.getElementById("headerID");
let nav = document.getElementById("navID");

burger.onclick = function () {
  nav.classList.toggle("showMenu");
  langPanel.classList.toggle("showLangList");
};
//naming variables for easy axes to them
let glownaSec = document.getElementById("sectionGlowna");
let uslugiSec = document.getElementById("sectionUslugi");
let galeriaSec = document.getElementById("sectionGaleria");
let kontaktSec = document.getElementById("sectionKontakt");

let glownaBtn = document.getElementById("glownaButton");
let uslugiBtn = document.getElementById("uslugiButton");
let galeriaBtn = document.getElementById("galeriaButton");
let kontaktBtn = document.getElementById("kontaktButton");

glownaBtn.onclick = function () {
  glownaSec.classList.add("active", "animate__backInLeft");

  uslugiSec.classList.remove("active");
  galeriaSec.classList.remove("active");
  kontaktSec.classList.remove("active");
};

uslugiBtn.onclick = function () {
  uslugiSec.classList.add("active");

  glownaSec.classList.remove("active");
  galeriaSec.classList.remove("active");
  kontaktSec.classList.remove("active");
};

galeriaBtn.onclick = function () {
  galeriaSec.classList.add("active");

  glownaSec.classList.remove("active");
  uslugiSec.classList.remove("active");
  kontaktSec.classList.remove("active");
};

kontaktBtn.onclick = function () {
  kontaktSec.classList.add("active");

  glownaSec.classList.remove("active");
  uslugiSec.classList.remove("active");
  galeriaSec.classList.remove("active");
};

let langPanel = document.getElementById("languagePannel");
let langPlBtn = document.getElementById("languagePl");
let langUaBtn = document.getElementById("languageUa");
let langRuBtn = document.getElementById("languageRu");
let langEngBtn = document.getElementById("languageEng");

langPlBtn.onclick = function () {
  document.getElementById("nav-glowna").innerHTML = "Główna";
  document.getElementById("nav-uslugi").innerHTML = "Usługi";
  document.getElementById("nav-galeria").innerHTML = "Galeria";
  document.getElementById("nav-kontakt").innerHTML = "Kontakt";

  document.getElementById("glowna-text").innerHTML = "Spawanie i obróbka stali";

  //section uslugi

  document.getElementById("uslugi-lineOne").innerHTML =
    "Spawanie MIG/MAG, TIG oraz elektrodą otulinową";
  document.getElementById("uslugi-lineTwo").innerHTML =
    "Produkcja oraz montaż bram, furtek, ogrodzeń";
  document.getElementById("uslugi-lineThre").innerHTML =
    "Kowalstwo artystyczne";
  document.getElementById("uslugi-lineFour").innerHTML = "Stoły ze stali";
  document.getElementById("uslugi-lineFive").innerHTML = "Konstrukcje metalowe";
  document.getElementById("uslugi-lineSix").innerHTML = "Balustrady";
  document.getElementById("uslugi-lineSeven").innerHTML = "Spawanie bram";
  document.getElementById("uslugi-lineEight").innerHTML = "Spawanie zawiasów";
  document.getElementById("uslugi-lineNine").innerHTML = "Spawanie drzwi";
  document.getElementById("uslugi-lineTen").innerHTML = "Spawanie rur";
  document.getElementById("uslugi-lineEleven").innerHTML = "Spawanie blach";
  document.getElementById("uslugi-lineTwelve").innerHTML =
    "Spawanie detali i elementów samochodowych";
    document.getElementById("uslugi-lineThirteen").innerHTML =
      "Możliwość spawania w siedzibie firmy lub u klienta";

  document.getElementById("kontakt-title").innerHTML = "Kontakt";
  document.getElementById("work-time").innerHTML = "Godziny otwarcia:";
  document.getElementById("work-time-one").innerHTML = "Pn.-Pt.:";
  document.getElementById("work-time-two").innerHTML = "So.-Nd.:";

};

langUaBtn.onclick = function () {
  document.getElementById("nav-glowna").innerHTML = "Головна";
  document.getElementById("nav-uslugi").innerHTML = "Послуги";
  document.getElementById("nav-galeria").innerHTML = "Галерея";
  document.getElementById("nav-kontakt").innerHTML = "Контакти";

  document.getElementById("glowna-text").innerHTML =
    "Зварювальні роботи та металообробка"; // need translation

  //section uslugi

  document.getElementById("uslugi-lineOne").innerHTML =
    "Зварювання MIG / MAG, TIG та електродом ";
  document.getElementById("uslugi-lineTwo").innerHTML =
    "Виготовлення та монтаж воріт, хвірток та огорож";
  document.getElementById("uslugi-lineThre").innerHTML = "Художня ковка";
  document.getElementById("uslugi-lineFour").innerHTML = "Виготовлення столів";
  document.getElementById("uslugi-lineFive").innerHTML =
    "Виготовлення металевих конструкцій";
  document.getElementById("uslugi-lineSix").innerHTML = "Виготовлення перил";
  document.getElementById("uslugi-lineSeven").innerHTML = "Зварювання воріт";
  document.getElementById("uslugi-lineEight").innerHTML = "Зварювання петель";
  document.getElementById("uslugi-lineNine").innerHTML = "Зварювання дверей";
  document.getElementById("uslugi-lineTen").innerHTML = "Зварювання труб";
  document.getElementById("uslugi-lineEleven").innerHTML =
    "Зварювання листового металу";
  document.getElementById("uslugi-lineTwelve").innerHTML =
    "Зварювання деталей та елементів автомобіля";
  document.getElementById("uslugi-lineThirteen").innerHTML =
    "Можливість зварювання в компанії або на місці в замовника";

 

  //kontakt
  document.getElementById("kontakt-title").innerHTML = "Контакти";
  document.getElementById("work-time").innerHTML = "Графік роботи:";
  document.getElementById("work-time-one").innerHTML = "Пн.-Пт.:";
  document.getElementById("work-time-two").innerHTML = "Сб.-Нд.:";
};

langRuBtn.onclick = function () {
  document.getElementById("nav-glowna").innerHTML = "Главная";
  document.getElementById("nav-uslugi").innerHTML = "Услуги";
  document.getElementById("nav-galeria").innerHTML = "Галерея";
  document.getElementById("nav-kontakt").innerHTML = "Контакт";

  document.getElementById("glowna-text").innerHTML =
    "Сварочные работы и металлообработка"; // need translation

  //section uslugi

  document.getElementById("uslugi-lineOne").innerHTML =
    "Сварка MIG / MAG, TIG и электродом ";
  document.getElementById("uslugi-lineTwo").innerHTML =
    "Изготовление и монтаж ворот, калиток и ограждений";
  document.getElementById("uslugi-lineThre").innerHTML = "Художественная ковка";
  document.getElementById("uslugi-lineFour").innerHTML = "Изготовление столов";
  document.getElementById("uslugi-lineFive").innerHTML =
    "Изготовление металлических конструкций";
  document.getElementById("uslugi-lineSix").innerHTML = "Изготовление перил";
  document.getElementById("uslugi-lineSeven").innerHTML = "Сварка ворот";
  document.getElementById("uslugi-lineEight").innerHTML = "Сварка петель";
  document.getElementById("uslugi-lineNine").innerHTML = "Сварка дверей";
  document.getElementById("uslugi-lineTen").innerHTML = "Сварка труб";
  document.getElementById("uslugi-lineEleven").innerHTML =
    "Сварка листового металла";
  document.getElementById("uslugi-lineTwelve").innerHTML =
    "Сварка деталей и элементов автомобиля";
  document.getElementById("uslugi-lineThirteen").innerHTML =
    "Возможность сварки на фирме или на месте у заказчика";



  //kontakt
  document.getElementById("kontakt-title").innerHTML = "Контакт";
  document.getElementById("work-time").innerHTML = "Время работы:";
  document.getElementById("work-time-one").innerHTML = "Пн.-Пт.:";
  document.getElementById("work-time-two").innerHTML = "Сб.-Вс.:";
};

langEngBtn.onclick = function () {
  document.getElementById("nav-glowna").innerHTML = "Home       ";
  document.getElementById("nav-uslugi").innerHTML = "Services       ";
  document.getElementById("nav-galeria").innerHTML = "Gallery         ";
  document.getElementById("nav-kontakt").innerHTML = "Contact";

  document.getElementById("glowna-text").innerHTML = "Welding and metalworking"; // need translation

  //section uslugi

  document.getElementById("uslugi-lineOne").innerHTML =
    "MIG / MAG, TIG and electrode welding";
  document.getElementById("uslugi-lineTwo").innerHTML =
    "Manufacture and installation gates, wickets and fences";
  document.getElementById("uslugi-lineThre").innerHTML = "Artistic forging";
  document.getElementById("uslugi-lineFour").innerHTML =
    "Manufacturing metal tables";
  document.getElementById("uslugi-lineFive").innerHTML =
    "Manufacture of metal structures";
  document.getElementById("uslugi-lineSix").innerHTML =
    "Manufacture of railings";
  document.getElementById("uslugi-lineSeven").innerHTML = "Welding gate";
  document.getElementById("uslugi-lineEight").innerHTML = "Welding gate hinges";
  document.getElementById("uslugi-lineNine").innerHTML = "Welding doors ";
  document.getElementById("uslugi-lineTen").innerHTML = "Welding tubes";
  document.getElementById("uslugi-lineEleven").innerHTML =
    "Welding sheet metal";
  document.getElementById("uslugi-lineTwelve").innerHTML =
    "Welding vehicle parts and elements";
  document.getElementById("uslugi-lineThirteen").innerHTML =
    "Possibility of welding at the customer";



  //kontakt
  document.getElementById("kontakt-title").innerHTML = "Contact";
  document.getElementById("work-time").innerHTML = "Opening hours:";
  document.getElementById("work-time-one").innerHTML =
    "Mo.- Fr.:";
  document.getElementById("work-time-two").innerHTML =
    "Sa.-Su.:";
};
