google.charts.load('current',{'packages':['corechart']});
google.charts.setOnLoadCallback(drawAllSheets);
function drawAllSheets(){
    drawSheetName('Gini_importance', 'SELECT A,B', gini_improtance);
}

function checkError(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() +
            ' ' + response.getDetailedMessage());
        return;
    }		
}//checkError

function drawSheetName(sheetName, query, responseHandler) {
    var queryString = encodeURIComponent(query);
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1mImuxqzGwuwRG5XGXkhhd3ShfGFYhtsdeH2QoK56VsI/gviz/tq?sheet='
        + sheetName + '&headers=1&tq=' + queryString);
    query.send(responseHandler);
} //drawSheetName

function gini_improtance(response) {
    checkError(response);
    var data = response.getDataTable();
    var options = {
        title: "Importance of Features",
        height: 400,
        legend: "none",
        vAxis: {title: "Gini Importance"},
        hAxis: {title: "Feature Names", showTextEvery: 1, slantedText: true, slantedTextAngle: 45}
    }
    var chart = new google.visualization.ColumnChart(document.getElementById("feature_importance"))
    chart.draw(data, options);
}
