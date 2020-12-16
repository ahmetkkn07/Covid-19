var date = [];
var yeni_vaka_sayisi = [];
var yeni_olum_sayisi = [];
var yeni_test_sayisi = [];
var toplam_vaka_sayisi = [];
var toplam_olum_sayisi = [];
var toplam_test_sayisi = [];
var oran_sayisi = [];
var aktif_vaka_sayisi = [];
var entube_hasta_sayisi = [];
var yogun_bakim_sayisi = [];
var yeni_iyilesen_sayisi = [];
var toplam_iyilesen_sayisi = [];
var totalCaseCount = 0;
var control = false;
var lastTotalCase = 0;
window.onload = function () {
    $.getJSON('https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json', function (data) {
        data = Object.values(data);
        data.forEach((corona) => {
            var newTotalCase = 0;
            date.push(corona.date);
            if (corona.date == "25/11/2020") {
                lastTotalCase = Number(corona.totalPatients)
                control = true;
            }
            if (corona.cases) {
                yeni_vaka_sayisi.push(corona.cases);
                totalCaseCount += Number(corona.cases);
                newTotalCase = Number(corona.cases);
                if (control) {
                    lastTotalCase += newTotalCase;
                    console.log(lastTotalCase)
                }
            }
            else {
                yeni_vaka_sayisi.push(corona.patients);
                totalCaseCount += Number(corona.patients);
            }
            yeni_olum_sayisi.push(corona.deaths);
            yeni_test_sayisi.push(corona.tests);
            if (control) {
                toplam_vaka_sayisi.push(lastTotalCase);
            }
            else {
                toplam_vaka_sayisi.push(corona.totalPatients);
            }

            toplam_olum_sayisi.push(corona.totalDeaths);
            toplam_test_sayisi.push(corona.totalTests);
            if (corona.cases) {
                var oran = (Number(corona.cases) / Number(corona.tests)) * 100;
            }
            else {
                var oran = (Number(corona.patients) / Number(corona.tests)) * 100;
            }
            if (oran === Infinity || isNaN(oran)) {
                oran = 0;
            }
            oran_sayisi.push(oran);
            aktif_vaka_sayisi.push(totalCaseCount - Number(corona.totalDeaths) - Number(corona.totalRecovered));
            if (corona.totalIntubated) {
                entube_hasta_sayisi.push(corona.totalIntubated);
            } else {
                entube_hasta_sayisi.push(corona.critical)
            }
            if (corona.totalIntensiveCare) {
                yogun_bakim_sayisi.push(corona.totalIntensiveCare);
            } else {
                yogun_bakim_sayisi.push(Math.floor((totalCaseCount - Number(corona.totalDeaths) - Number(corona.totalRecovered)) / Number(corona.pneumoniaPercent.toString().slice(1).replace(/,/g, '.'))));
            }
            yeni_iyilesen_sayisi.push(corona.recovered);
            toplam_iyilesen_sayisi.push(corona.totalRecovered);
        });
        date.reverse();
        yeni_vaka_sayisi.reverse();
        yeni_olum_sayisi.reverse();
        yeni_test_sayisi.reverse();
        toplam_vaka_sayisi.reverse();
        toplam_olum_sayisi.reverse();
        toplam_test_sayisi.reverse();
        oran_sayisi.reverse();
        aktif_vaka_sayisi.reverse();
        entube_hasta_sayisi.reverse();
        yogun_bakim_sayisi.reverse();
        yeni_iyilesen_sayisi.reverse();
        toplam_iyilesen_sayisi.reverse();
        tabloCiz();
    });
};

function tabloCiz() {
    var table = document.getElementById('table');
    var tbody = document.createElement('tbody');
    for (var i = 0; i < date.length; i++) {
        var tr = document.createElement('tr');

        var td1 = document.createElement('th');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        // var td9 = document.createElement('td');
        // var td10 = document.createElement('td');
        // var td11 = document.createElement('td');
        var td12 = document.createElement('td');
        var td13 = document.createElement('td');

        var text1 = document.createTextNode(date[i]);
        var text2 = document.createTextNode(yeni_vaka_sayisi[i]);
        var text3 = document.createTextNode(yeni_olum_sayisi[i]);
        var text4 = document.createTextNode(yeni_test_sayisi[i]);
        var text5 = document.createTextNode(toplam_vaka_sayisi[i]);
        var text6 = document.createTextNode(toplam_olum_sayisi[i]);
        var text7 = document.createTextNode(toplam_test_sayisi[i]);
        var text8 = document.createTextNode(oran_sayisi[i].toString().substring(0, 4));
        // var text9 = document.createTextNode(aktif_vaka_sayisi[i]);
        // var text10 = document.createTextNode(entube_hasta_sayisi[i]);
        // var text11 = document.createTextNode(yogun_bakim_sayisi[i]);
        var text12 = document.createTextNode(yeni_iyilesen_sayisi[i]);
        var text13 = document.createTextNode(toplam_iyilesen_sayisi[i]);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        td6.appendChild(text6);
        td7.appendChild(text7);
        td8.appendChild(text8);
        // td9.appendChild(text9);
        // td10.appendChild(text10);
        // td11.appendChild(text11);
        td12.appendChild(text12);
        td13.appendChild(text13);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        // tr.appendChild(td9);
        // tr.appendChild(td10);
        // tr.appendChild(td11);
        tr.appendChild(td12);
        tr.appendChild(td13);

        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}