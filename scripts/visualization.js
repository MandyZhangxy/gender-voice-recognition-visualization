google.charts.load('current',{'packages':['corechart']});
google.charts.setOnLoadCallback(drawAllSheets);
function drawAllSheets(){
    drawSheetName('mean_freq_vs_mod_indx', 'SELECT A,B,C', mean_freq_vs_mod_index);
    // drawSheetName('edu_percentage_of_GDP', 'SELECT B,D,E,F,G,H,I',
    //     edu_percentageofGDPResponseHandler);
    // drawSheetName("health_percapita", "SELECT B,K",
    //     mean_health_percapitaResponseHandler);
    // drawSheetName("edu_percapita", "SELECT B,H",
    //     mean_edu_percapitaResponseHandler);
    // drawSheetName("health_percapita", "SELECT B,G,AF,Z",
    //     percapita_in_2012_ResponseHandler);
    // drawSheetName("health_percapita", "SELECT B,H,AG,AA",
    //     percapita_in_2013_ResponseHandler);
    // drawSheetName("health_percapita", "SELECT B,I,AG,AB",
    //     percapita_in_2014_ResponseHandler);
    // drawSheetName("health_percapita", "SELECT B,D, N",
    //     health_military_ResponseHandler);
    // drawSheetName("percapita_pivoted", "SELECT C,D,E,F,G,H,I,J,K,L,O,P,Q,R,S,T,U,V,W,X",
    //     health_military_line_ResponseHandler);
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

function mean_freq_vs_mod_index(response) {
    checkError(response);
    var data = response.getDataTable();
    var options = {
        title: 'Modulation Index vs. Mean Frequency',
        height: 600,
        vAxis: {title: 'Mean Frequency'},
        hAxis: {title: 'Modulation Index'},
        legend: ['male', 'female'],
        pointSize: 3,
        colors: ["blue", "red"],
        dataOpacity: 0.5 
    }
    var chart = new google.visualization.ScatterChart(document.getElementById('mean_freq_vs_mod_indx'));
    chart.draw(data, options);
}

function health_percentageofGDPResponseHandler(response) {
    checkError(response);
    var data = response.getDataTable();
    data.sort({column: 5, desc:true});
    
    var options = {
        height: 400,
        vAxis: {title: 'Health Expenditure (%of GDP)'},
        colors: ["#94d9ce", "#f9f9ed", "#f6caa6", "7B498D","#f0afa7", "#f8666b"]
    };
    
    var chart = new google.visualization.ColumnChart(
                document.getElementById('health_percentageofGDP_div'));
    chart.draw(data, options);
} //health_percentageofGDPResponseHandler