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
            aktif_vaka_sayisi.push(Number(corona.totalPatients) - Number(corona.totalDeaths) - Number(corona.totalRecovered));
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
        dailyCasesAndDeaths();
        // totalRecoveredAndActiveCases();
        dailyCases();
        dailyDeaths();
        // criticalCases();
        // pneumonia();
        dailyTests();
        totalTests();
        totalCases();
        totalDeaths();
        caseRate();
        // activeCases();
        dailyRecovered();
        totalRecovered();
    });
};
var loc = window.location.href + '';
if (loc.indexOf('http://') == 0) {
    window.location.href = loc.replace('http://', 'https://');
}