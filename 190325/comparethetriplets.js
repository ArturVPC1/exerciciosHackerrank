
function compareTriplets(a, b) {
    //artur
    let pontuacaoA = 0;
    let pontuacaoB = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            pontuacaoA += 1;
        } else if (a[i] < b[i]) {
            pontuacaoB += 1;
        }
    }

    let arrayComparacao = [pontuacaoA, pontuacaoB];
    return arrayComparacao;
}


