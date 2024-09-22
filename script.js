const apiKeyWeather = '7327537cd7e3544c3687d2bb02d78c77'; // Substitua pela sua chave de API do OpenWeatherMap
const city = 'Bertioga';
const countryCode = 'BR';

// Função para obter dados climáticos da OpenWeatherMap API
async function obterDadosClimaticos() {
    try {
        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKeyWeather}`);
        const dataWeather = await responseWeather.json();

        // Atualizando os elementos da página com os novos dados
        document.getElementById('temperatura').textContent = `${dataWeather.main.temp} °C`;
        document.getElementById('umidade').textContent = `${dataWeather.main.humidity}%`;
        document.getElementById('precipitacao').textContent = dataWeather.rain ? `${dataWeather.rain['1h']} mm` : '0 mm';
        document.getElementById('pressao').textContent = `${dataWeather.main.pressure} hPa`;
        document.getElementById('vento').textContent = `${dataWeather.wind.speed} m/s, ${dataWeather.wind.deg}°`;
        document.getElementById('sensacao-termica').textContent = `${dataWeather.main.feels_like} °C`;
        document.getElementById('nuvens').textContent = `${dataWeather.clouds.all}%`;
        document.getElementById('descricao').textContent = `${dataWeather.weather[0].description}`;

    } catch (error) {
        console.error('Erro ao obter dados climáticos:', error);
    }
}

// Função para gerar o calendário mensal automaticamente
function gerarCalendario() {
    const dataAtual = new Date();
    const mesAtual = dataAtual.toLocaleString('pt-BR', { month: 'long' });
    const anoAtual = dataAtual.getFullYear();
    const diasNoMes = new Date(anoAtual, dataAtual.getMonth() + 1, 0).getDate();
    const primeiroDia = new Date(anoAtual, dataAtual.getMonth(), 1).getDay();

    // Cabeçalho do calendário com o nome do mês e ano
    document.querySelector('#calendario-mensal h3').textContent = `Calendário de ${mesAtual} ${anoAtual}`;

    let calendarioHTML = '<tr>';
    for (let i = 0; i < primeiroDia; i++) {
        calendarioHTML += '<td></td>';
    }
    for (let dia = 1; dia <= diasNoMes; dia++) {
        if ((dia + primeiroDia - 1) % 7 === 0 && dia !== 1) {
            calendarioHTML += '</tr><tr>';
        }
        calendarioHTML += `<td>${dia}</td>`;
    }
    calendarioHTML += '</tr>';

    document.querySelector('#calendario tbody').innerHTML = calendarioHTML;
}

// Função para atualizar o relógio digital em tempo real
function atualizarRelogio() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');

    document.getElementById('horario').textContent = `${horas}:${minutos}:${segundos}`;
}

// Função para iniciar todas as atualizações necessárias
function iniciarDashboard() {
    gerarCalendario(); // Gera o calendário para o mês atual
    obterDadosClimaticos(); // Obtém os dados climáticos
    atualizarRelogio(); // Atualiza o relógio digital

    // Atualiza o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);

    // Atualiza os dados climáticos periodicamente (por exemplo, a cada 10 minutos)
    setInterval(obterDadosClimaticos, 10 * 60 * 1000);
}

// Inicia o dashboard
iniciarDashboard();
