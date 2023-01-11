const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    setTimeout(function(){
        window.location.reload(1);
     }, 3000);
  
    document.querySelector(".title").innerHTML = `Advice Number ${data.slip.id}`
    document.querySelector(".text").innerHTML = `"${data.slip.advice}"`
  }
  
  fetchAdvice()