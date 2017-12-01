Apollo(document.querySelectorAll('.numberInput1, .numberInput2'));
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
document.getElementById("button1").onclick = function () { Artemis(document.getElementsByClassName('numberInput1'), document.getElementsByClassName('numberInput2')) };
function drawChart() {
    var rgbval1 = parseInt(document.getElementById("input1").value),
        rgbval2 = parseInt(document.getElementById("2").value),
        rgbval3 = parseInt(document.getElementById("3").value),
        rgbval4 = parseInt(document.getElementById("4").value),
        rgbval5 = parseInt(document.getElementById("5").value),
        rgbval6 = parseInt(document.getElementById("6").value),
        rgbval7 = parseInt(document.getElementById("7").value),
        rgbval8 = parseInt(document.getElementById("8").value),
        rgbval9 = parseInt(document.getElementById("9").value),
        rgbval10 = parseInt(document.getElementById("10").value),
        rgbval11 = parseInt(document.getElementById("11").value),
        rgbval12 = parseInt(document.getElementById("12").value);
    //google chart code
    data = google.visualization.arrayToDataTable([
        ['Year', 'Red', 'Green', 'Blue'],
        ['10%', rgbval1, rgbval2, rgbval3],
        ['5%', rgbval4, rgbval5, rgbval6],
        ['2%', rgbval7, rgbval8, rgbval9],
        ['1%', rgbval10, rgbval11, rgbval12]
    ]);
    var options = {
        title: 'RGB color Chart',
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: ['red', 'green', 'blue'],
        vAxis: { maxValue: '255', minValue: '0' }
    };
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
    //set color of divs to the values in textbox
    document.getElementById("colorDiv1").style.backgroundColor = "rgb(" + rgbval1 + "," + rgbval2 + "," + rgbval3 + ")";
    document.getElementById("colorDiv2").style.backgroundColor = "rgb(" + rgbval4 + "," + rgbval5 + "," + rgbval6 + ")";
    document.getElementById("colorDiv3").style.backgroundColor = "rgb(" + rgbval7 + "," + rgbval8 + "," + rgbval9 + ")";
    document.getElementById("colorDiv4").style.backgroundColor = "rgb(" + rgbval10 + "," + rgbval11 + "," + rgbval12 + ")";
}
//set min value to 0 and max value to 255
//input is an array of IDs
function Apollo(ARRAY_OF_IDs) {
    var array_of_ids = ARRAY_OF_IDs;
    for (let index = 0; index < array_of_ids.length; index++) {
        const element = array_of_ids[index];
        document.getElementById(element.id).setAttribute("max", "255");
        document.getElementById(element.id).setAttribute("min", "0");
    }
}
//calculate white based on the value 240,237,233
//input is two arrays of IDs
//first is the elements to GET
//second is elements to SET 
function Artemis(ARRAY_OF_IDs1, ARRAY_OF_IDs2) {
    var array_of_ids1 = ARRAY_OF_IDs1;
    var array_of_ids2 = ARRAY_OF_IDs2;
    for (let index = 0; index < ARRAY_OF_IDs2.length; index++) {
        const element = ARRAY_OF_IDs2[index];
        var value1 = document.getElementById(element.id).value;
        var value2 = document.getElementById(array_of_ids1[index].id).value;
        var value3 = 0;
        switch (index) {
            case 0:
            case 3:
            case 6:
            case 9:
                value3 = 240;
                break;
            case 1:
            case 4:
            case 7:
            case 10:
                value3 = 237;
                break;
            case 2:
            case 5:
            case 8:
            case 11:
                value3 = 233;
                break;
        }
        value1 = value2 * (255 / value3);
        if (value1 > 255) {
            value1 = 255;
        }
        document.getElementById(element.id).value = Math.round(value1);
    }
}