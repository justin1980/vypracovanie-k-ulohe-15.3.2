
function vypocitaj(x= 4,y = 2){
    console.log("ako parametre boli zadane cisla " + x + " a " + y);
    console.log("vypočítavam matematické operácie: ");

    scitanie = x + y;
    odcitanie = x - y;
    nasobenie = x * y;
    delenie = x / y;

    console.log(x + " + " + y + " = " + scitanie);
    console.log(x + " - " + y + " = " + odcitanie);
    console.log(x + " * " + y + " = " + nasobenie);
    console.log(x + " / " + y + " = " + delenie);

    console.log(" ")
}

vypocitaj(6,8);
vypocitaj();