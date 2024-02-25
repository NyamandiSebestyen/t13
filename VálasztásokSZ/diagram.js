const xValues = partokTombDiagram();
const yValues = szavazatokPartonkentTombDiagram();
const barColors = szinTomb(szavazatok);



new Chart("diagram", {
    type: "pie",
    data: {
        labels: xValues,


        datasets: [{
            backgroundColor: barColors,
            data: yValues


        }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Pártok szavazatai"
        }
    }
});

const xErtek = ["Szavaztak", "Nem szavaztak"];
let szavazatOsszes = osszesSzavazatokSzama(szavazatok);
const yErtek = [szavazatOsszes, szavazasraJogosult - szavazatOsszes];

new Chart("fank", {
    type: "doughnut",
    data: {
        labels: xErtek,


        datasets: [{
            backgroundColor: barColors,
            data: yErtek


        }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Szavazásra jogosultak összesen: " + szavazasraJogosult
        }
    }
});