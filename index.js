const dia = document.getElementById('dia'),
          hora = document.getElementById('hora'),
          minuto = document.getElementById('min'),
          segundo = document.getElementById('seg')
          lancamento = '17 oct 2023';

function CountDown(){
    const dataLanc = new Date(lancamento),
          hoje = new Date(),
          
          segTotal = (dataLanc - hoje) / 1000,
          
          finalDias = Math.floor(segTotal / 60/ 60/ 24),
          finalHoras = Math.floor(segTotal/ 60/ 60) % 24,
          finalMinutos = Math.floor(segTotal / 60) % 60,
          finalSegundos = Math.floor(segTotal) % 60;

          dia.innerHTML = `${finalDias}D`;
          hora.innerHTML = formatoTempo(`${finalHoras}H`);
          minuto.innerHTML = formatoTempo(`${finalMinutos}M`);
          segundo.innerHTML = formatoTempo(`${finalSegundos}S`);

        
}

function formatoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo;
}

CountDown();
setInterval(CountDown, 1000);