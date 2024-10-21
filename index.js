function getRankByXP(xp) {
    switch (true) {
        case xp >= 1001 && xp <= 2000:
            return "Bronze";
        case xp <= 5000:
            return "Prata";
        case xp <= 7000:
            return "Ouro";
        case xp <= 8000:
            return "Platina";
        case xp <= 9000:
            return "Ascendente";
        case xp <= 10000:
            return "Imortal";
        case xp > 10000:
            return "Radiante";
        default:
            return "Ferro";
    }
}


function displayHeroStatus(name, xp) {
    const rank = getRankByXP(xp); 
    console.log(`O Herói de nome ${name} está no nível de ${rank}`);
}


const name = "Ledro";
const xp = 5395;

displayHeroStatus(name, xp);