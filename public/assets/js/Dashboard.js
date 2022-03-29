
  const labels = [
    'January',
    'February',
    'March',
    'April',
  ];
  var database = [3,12,20,11]
  const data = {
    labels: labels,
    datasets: [{
      label: 'Numero de Vendas',
      backgroundColor: 'rgb(145, 215, 242)',
      borderColor: 'rgb(0, 113, 178)',
      data: database,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };
  const myChart = new Chart(
    document.getElementsByClassName('line-chart'),
    config
  );