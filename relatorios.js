document.addEventListener('DOMContentLoaded', function() {
  const ctxDemolicoes = document.getElementById('grafico-demolicoes').getContext('2d');
  const demolicoesChart = new Chart(ctxDemolicoes, {
      type: 'bar',
      data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [{
              label: 'Demolições',
              data: [3, 5, 2, 8, 6, 7, 4, 9, 3, 5, 2, 8],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  const ctxIntimacoes = document.getElementById('grafico-intimacoes').getContext('2d');
  const intimacoesChart = new Chart(ctxIntimacoes, {
      type: 'line',
      data: {
          labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
          datasets: [{
              label: 'Intimações',
              data: [12, 19, 3, 5, 2, 3, 7, 10, 6, 8, 11, 14],
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
});
