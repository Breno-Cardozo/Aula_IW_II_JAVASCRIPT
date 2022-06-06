<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gráfico de barras</title>
</head>
<body>
<div id="chart_div" style="width: 900px; height: 500px;"></div>


<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Brasil', 'PIB'],
          ['Lula(2003-2011)', 2.209 ],
          ['Dilma(2011-2016)', 2.616 ],
          ['Michel Temer(2016-2018)',  2.064],
          ['Jair Bolsonaro(2018-2022)', 1.917]
        ]);

        var options = {
          title: 'Comparação melhor PIB dos últimos 4 governos do Brasil',
          vAxis: {title: 'PIB Brasil'},
          isStacked: true
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }
    </script>
    
</body>
</html>