// Définit une classe pour représenter le rendu de monnaie
/*class Change {
    constructor(coin2, bill5, bill10) {
        this.coin2 = coin2; // Le nombre de pièces de 2 euros
        this.bill5 = bill5; // Le nombre de billets de 5 euros
        this.bill10 = bill10; // Le nombre de billets de 10 euros
    }
}

// Définit une fonction qui prend un nombre s en entrée et retourne un objet Change contenant les pièces et billets dont la somme vaut s
function optimalChange(s) {
    let bill10 = 0; // Le nombre de billets de 10 euros nécessaires
    let bill5 = 0; // Le nombre de billets de 5 euros nécessaires
    let coin2 = 0; // Le nombre de pièces de 2 euros nécessaires
    // Si s est égal à 1 ou à 3, retourne null car le rendu de monnaie est impossible
    if (s == 1 || s == 3) {
        return null;
    }
    // Sinon, si s est supérieur ou égal à 10, calcule le nombre de billets de 10 euros nécessaires et met à jour s avec le reste à rendre
    else if (s >= 10) {
        bill10 = Math.floor(s / 10);
        s -= bill10 * 10;
    }

    // Selon la valeur de s, calcule le nombre de billets de 5 euros et de pièces de 2 euros nécessaires
    switch (s) {
        case 0: // Si s est égal à zéro, rien à faire
            break;
        case 5: // Si s est égal à cinq, il faut un billet de cinq euros
            bill5 = 1;
            break;
        case 2: // Si s est égal à deux, il faut une pièce de deux euros
            coin2 = 1;
            break;
        case 1: // Si s est égal à un, il faut soustraire un billet de dix euros, ajouter un billet de cinq euros et trois pièces de deux euros
            bill10--;
            bill5++;
            coin2 +=3;
            break;
        case 3: // Si s est égal à trois, il faut soustraire un billet de dix euros, ajouter un billet de cinq euros et quatre pièces de deux euros
            bill10--;
            bill5++;
            coin2 += 4;
            break;
        default: // Sinon, il faut vérifier si s est divisible par cinq, par deux ou par aucun des deux
            if (s % 5 == 0) { // Si s est divisible par cinq, il faut le nombre de billets de cinq euros correspondant
                bill5 = s / 5;
            } else if (s % 2 == 0) { // Si s est divisible par deux, il faut le nombre de pièces de deux euros correspondant
                coin2 = s / 2;
            } else { // Sinon, retourne null car le rendu de monnaie est impossible
                return null;
            }
    }

    // Retourne un objet Change avec le nombre de pièces et billets
    return new Change(coin2, bill5, bill10);
}

// Appelle la fonction optimalChange sur le nombre 11 et affiche le résultat
/!*let s = 11;*!/
/!*let s = 13;*!/
let s = 9007199254740991;
let m = optimalChange(s);
if (m != null) {
    console.log(s + ": " + m.bill10 + " " + m.bill5 + " " + m.coin2);
} else console.log(m);*/

/*Les supermarchés s'équipent de plus en plus de caisses automatiques. La plupart
de ces caisses nracceptent que le paiement par carte bancaire bien qu'une part non
négligeable de consommateurs paye encore en espèces (avec des billets et des
pièces).
Une des problématiques rencontrées avec le paiement en espèces est le rendu de
monnaie : comment rendre une somme donnée de façon optimale, c'est-à-dire avec
le nombre minimal de pièces et billets ? Cest un problème qui se pose à chacun de
nous quotidiennement. à fortiori aux caisses automatiques.
    Dans cet exercice, on vous demande d'essayer de trouver une solution optimale pour
rendre la monnaie dans un cas précis : quand une caisse automatique ne contient
que des pièces de 2euros, des billets de 5euros et de 10euros.
    Pour simplifier le problème, nous considérerons que toutes ces pièces et billets sont
disponibles en quantité illimitée.
    Voici quelques exemples de rendu de monnaie                                                               Monnaie à rendre 1 6 10 9007199254740991
Solutions possibles Impossible 2+2+2 5+5 10 ...
Solution optimale Impossible 10 10*900719925474098 +
Le rendu de monnaie est exprimé par un objet possédant 3 propriétés:
    two, five et ten qui, respectivement, stockent le nombre de pièces de 2€, de billets
de 5€ et de billets de 10€.
    Par exemple, si on reprend l'exemple n°2 du tableau (6€) on devrait obtenir l'objet:                {two: 3, //3 piéces de 2euros
    five : 0, //0 billets de 5euros
    ten : 0  //0 billets de 10euros
    Implémentez la méthode chnage(cash) qui retourne un objet contenant les pièces et
    billets dont la somme vaut s. S'il est impossible de rendre la monnaie (comme dans l'exemple n°1), retournez null.
        Pour obtenir un maximum de points votre solution devra toujours rendre la monnaie
    quand c'est possible et avec le nombre minimal de pièces et billets.
    Données : 0<cash<9007199254740991
    // JavaScript code below
// use printError(" ") to debug your solution.
    Function change(cash){
// code goes here
        return {
            two: 0
            five: 0,
            ten: 0 };}                                                                                                                                                       print(change(1))// nul I
    print(change(42). ten)); // 4
    print(change(42). five)); // 0
    print(change(42). two)); // 1*/


/*******************************************
 Définit une fonction qui prend un nombre cash en entrée et retourne un objet contenant les pièces et billets dont la somme vaut cash*/
function change(cash) {
    // Vérifie si cash est inférieur à 2
    if (cash < 2) {
        // Retourne null si le rendu de monnaie est impossible
        return null;
    } else {
        // Initialise le nombre de billets de 10 euros, de 5 euros et de pièces de 2 euros à zéro
        let ten = 0;
        let five= 0;
        let two = 0;
        // Si cash est supérieur ou égal à 10, calcule le nombre de billets de 10 euros nécessaires et met à jour cash avec le reste à rendre
        if (cash >= 10) {
            ten = Math.floor(cash / 10);
            cash -= ten * 10;
        }
        // Selon la valeur de cash, calcule le nombre de billets de 5 euros et de pièces de 2 euros nécessaires
        switch (cash) {
            case 0: // Si cash est égal à zéro, rien à faire
                break;
            case 5: // Si cash est égal à cinq, il faut un billet de cinq euros
                five = 1;
                break;
            case 2: // Si cash est égal à deux, il faut une pièce de deux euros
                two = 1;
                break;
            case 1: // Si cash est égal à un, il faut soustraire un billet de dix euros, ajouter un billet de cinq euros et trois pièces de deux euros
                ten--;
                five++;
                two += 3;
                break;
            case 3: // Si cash est égal à trois, il faut soustraire un billet de dix euros, ajouter un billet de cinq euros et quatre pièces de deux euros
                ten--;
                five++;
                two += 4;
                break;
            default: // Sinon, il faut vérifier si cash est divisible par cinq, par deux ou par aucun des deux
                if (cash % 5 === 0) { // Si cash est divisible par cinq, il faut le nombre de billets de cinq euros correspondant
                    five = cash / 5;
                } else if (cash % 2 === 0) { // Si cash est divisible par deux, il faut le nombre de pièces de deux euros correspondant
                    two = cash / 2;
                } else if ((cash % 5) % 2 === 0) { // Si cash est divisible par deux, il faut le nombre de pièces de deux euros correspondant
                    five = (cash-cash%5) / 5;
                    two = (cash % 5) / 2;
                } else { // Sinon, retourne null car le rendu de monnaie est impossible
                    return null;
                }
        }
        // Retourne un objet avec le nombre de pièces et billets
        return {
            'two': two,
            'five': five,
            'ten': ten
        };
    }
}

// Appelle la méthode change sur différents nombres
console.log(change(6)); // {ten: 0, five: 1, two: 0}
console.log(change(7)); // null
console.log(change(15)); // {ten: 1, five: 1, two: 0}
console.log(change(9007199254740991)); // {ten: 900719925474099, five: 0, two: 0}
console.log(change(-1)); // null

