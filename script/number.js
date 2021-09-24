const countres = document.querySelectorAll('.countre'),
      speed = 2000;

countres.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-tager')
        const count =  +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 50)
        } else {
            counter.innerText = target;
        }
    }

    let block = document.querySelector('.choose_content_stat')
    function check () {
    if(block.classList.contains('_active') == true)
        updateCount()
    }
    
        setInterval (check, 1000)
})
    