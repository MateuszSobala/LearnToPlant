﻿// jQuery pop-up div
$(function () {
    $('.popup').hide();

    Krok0();

    Krok1();

    Krok2();

    Krok3();

    Krok4();
});

function Krok0() {
    setTimeout(function () {
        $('#welcome').fadeIn("slow");
        $('#tutorial').text("Cześć młody ogrodniku!");
    }, 1000);
}

function Krok1() {
    setTimeout(function () {
        $('#welcome .lewo').fadeIn("slow");
        $('#tutorial').text("Lewy panel służy do wyboru lekcji!");
    }, 5000);
}

function Krok2() {
    setTimeout(function () {
        $('#welcome .lewo').hide();
        $('#welcome .srodek').fadeIn("slow");
        $('#tutorial').text("Środkowy panel przedstawia Twoją roślinkę!");
    }, 10000);
}

function Krok3() {
    setTimeout(function () {
        $('#welcome .srodek').hide();
        $('#welcome .prawo').fadeIn("slow");
        $('#tutorial').text("Z prawej strony znajdują się wszystkie Twoje narzędzia!");
    }, 15000);
}

function Krok4() {
    setTimeout(function () {
        $('#welcome .prawo').hide();
        $('#welcome .srodek').fadeIn("slow");
        $('#tutorial').text("Powodzenia!");
    }, 20000);

    setTimeout(function () {
        $('#welcome .srodek').fadeOut("slow");
        $('#welcome').hide();
    }, 28000);
}