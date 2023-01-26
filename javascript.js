async function randomFact(){
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await res.json();
    const fact = data.value;
    const norisfact=document.getElementById("chuckfact");
    norisfact.innerText=fact
  }
  window.onload = randomFact();

  