

    const red = document.querySelector('#red')
    const yellow = document.querySelector('#yellow')
    const green = document.querySelector('#green')
    const redLight = document.querySelector('.redlight')
    const yellowLight = document.querySelector('.yellowlight')
    const greenLight = document.querySelector('.greenlight')


    let timeCount = 0

    const seconds = setInterval(function(){
        if(timeCount <= 5){
            green.innerHTML = ''
            greenLight.innerHTML = ''
            redLight.innerHTML = `<h2>Red light says 'STOP'</h2>`
            red.innerHTML = `<p>${timeCount}</p>`;
            red.classList.add('light1')
            yellow.classList.remove('light2')
            green.classList.remove('light3')
        }else if(timeCount > 5 && timeCount <= 10){
            red.innerHTML = ''
            redLight.innerHTML = ''
            yellowLight.innerHTML = `<h2>Yellow light says 'READY'</h2>`
            yellow.innerHTML = `<p>${timeCount}</p>`
            red.classList.remove('light1')
            yellow.classList.add('light2')
            green.classList.remove('light3')
      } else if (timeCount > 10 && timeCount<= 15){
            yellow.innerHTML = ''
            yellowLight.innerHTML = ''
            greenLight.innerHTML = `<h2>Green light says 'GO!'</h2>`
            green.innerHTML = `<p>${timeCount}</p>`
            red.classList.remove('light1')
            yellow.classList.remove('light2')
            green.classList.add('light3')
      }else if (timeCount > 15){
       return timeCount = 0
      }

      timeCount += 1

    }, 1000);
