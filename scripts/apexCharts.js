activeCases = function () {
    var options = {
        series: [{
            name: 'Aktif Hasta',
            data: aktif_vaka_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#ff0000'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Aktif Hasta Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#activeCases"), options);
    chart.render();
}
caseRate = function () {
    var options = {
        series: [{
            name: 'Hasta/Test',
            data: oran_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#0000ff'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Hasta/Test Oranı'
            },
            labels: {
                formatter: (value) => { return value.toFixed(4) },
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#caseRate"), options);
    chart.render();
}
criticalCases = function () {
    var options = {
        series: [{
            name: 'Ağır Hasta',
            data: entube_hasta_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#0000ff'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Ağır Hasta Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#criticalCases"), options);
    chart.render();
}
dailyCases = function () {
    var options = {
        series: [{
            name: 'Günlük Hasta',
            data: yeni_vaka_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#0000ff'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Günlük Hasta Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#dailyCases"), options);
    chart.render();
}
dailyCasesAndDeaths = function () {
    var options = {
        series: [
            {
                name: "Günlük Hasta",
                data: yeni_vaka_sayisi
            },
            {
                name: "Günlük Vefat",
                data: yeni_olum_sayisi
            }
        ],
        chart:
        {
            type: 'line',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            },
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
        },
        colors: ['#0000ff', '#ff0000'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: date,
        },
        yaxis: [
            {
                title: {
                    text: 'Yeni Hasta Sayısı'
                },

            },
            {
                title: {
                    text: 'Yeni Vefat Sayısı'
                },
                opposite: true,
            }],
    };
    var chart = new ApexCharts(document.querySelector("#dailyCasesAndDeaths"), options);
    chart.render();
}
dailyDeaths = function () {
    var options = {
        series: [{
            name: 'Günlük Ölüm',
            data: yeni_olum_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#ff0000'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Günlük Ölüm Sayısı'
            }
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#dailyDeaths"), options);
    chart.render();
}
dailyRecovered = function () {
    var options = {
        series: [{
            name: 'Günlük İyileşen',
            data: yeni_iyilesen_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#0000ff'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Günlük İyileşen Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#dailyRecovered"), options);
    chart.render();
}
dailyTests = function () {
    var options = {
        series: [{
            name: 'Günlük Test',
            data: yeni_test_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#0000ff'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Günlük Test Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#dailyTests"), options);
    chart.render();
}
pneumonia = function () {
    var options = {
        series: [{
            name: 'Zatürre Hasta',
            data: yogun_bakim_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#ff0000'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Zatürre Hasta Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#pneumonia"), options);
    chart.render();
}
totalCases = function () {
    var options = {
        series: [{
            name: 'Toplam Hasta',
            data: toplam_vaka_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#0000ff'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Toplam Hasta Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#totalCases"), options);
    chart.render();
}
totalDeaths = function () {
    var options = {
        series: [{
            name: 'Toplam Ölüm',
            data: toplam_olum_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#ff0000'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Toplam Ölüm Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#totalDeaths"), options);
    chart.render();
}
totalRecoveredAndActiveCases = function () {
    var options = {
        series: [
            {
                name: "Aktif Hasta",
                data: aktif_vaka_sayisi
            },
            {
                name: "Toplam İyileşem",
                data: toplam_iyilesen_sayisi
            }
        ],
        chart:
        {
            type: 'line',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            },
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
        },
        colors: ['#ff0000', '#0000ff'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0
        },
        xaxis: {
            categories: date,
        },
        yaxis: [
            {
                title: {
                    text: 'Sayı'
                },

            },
            // {
            //     title: {
            //         text: 'Toplam İyileşen Sayısı'
            //     },
            //     opposite: true,
            // }
        ],
    };
    var chart = new ApexCharts(document.querySelector("#totalRecoveredAndActiveCases"), options);
    chart.render();
}
totalRecovered = function () {
    var options = {
        series: [{
            name: 'Toplam İyileşen',
            data: toplam_iyilesen_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#ff0000'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Toplam İyileşen Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#totalRecovered"), options);
    chart.render();
}
totalTests = function () {
    var options = {
        series: [{
            name: 'Toplam Test',
            data: toplam_test_sayisi
        }],
        chart: {
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#ff0000'],
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 0,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            },
        },
        yaxis: {
            title: {
                text: 'Toplam Test Sayısı'
            },
        },
        xaxis: {
            categories: date,
        },
    };

    var chart = new ApexCharts(document.querySelector("#totalTests"), options);
    chart.render();
}
