window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
  let normalizedPosition = e.pageX / (width/2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;
  spansSlow.forEach((span) => {
    span.style.transform = `translate(${speedSlow}px)`;
  });
  spansFast.forEach((span) => {
    span.style.transform = `translate(${speedFast}px)`
  })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
  width = window.innerWidth;
}
document.getElementById("miBoton").addEventListener("click", function() {
  // Redirige a la otra página
  window.location.href = "./pages/create-account.html";
});

document.getElementById("miBoton2").addEventListener("click", function() {
  // Redirige a la otra página
  window.location.href = "./pages/log-in.html";
});

function marketData(){
  const currentURL =window.location.href;
  return fetch('https://api.coingecko.com/api/v3/coins/markets?vs currency=usd&order=market cap desc&per page=100&page=1&sparkline=false')
  
  .then(res=>res.json())
  .then(data=>displayTable(data));
  
 }

 function displayTable(data){
  const $resultsTable = document.getElementById('market-data-table')
 data.forEach((element,index) =>{
  renderRow(element,index)
  })
 function renderRow(element,position){
  const {image, name, symbol, market_cap, current_price, price_change_percentage_24h} =element
 // first row is taken up by the headers
  // insert a new row based on the index to the table element
  const row = $resultsTable.insertRow(position + 1)
  // each cell inserted corresponds to a row 
  const numberCell = row.insertCell(0)
  const imageCell = row.insertCell(1)
  const nameCell = row.insertCell(2)
  const symbolCell = row.insertCell(3)
  const currentPriceCell = row.insertCell(4)
  const marketCapPriceCell = row.insertCell(5)
  const priceChangeCell = row.insertCell(6)
  const likerCell = row.insertCell(7)
 const logoElement = document.createElement('img')
  logoElement.src = image;
  logoElement.alt = 'Coin-Logo';
 const likerButton = document.createElement('button');
  likerButton.innerHTML= "#11088;";
  likerButton.onclick= function(){
  alert("Liked");
  }
 numberCell.innerText = position + 1
  imageCell.appendChild(logoElement)
  nameCell.innerText = name.toUpperCase()
  symbolCell.innerText = symbol.toUpperCase()
  currentPriceCell.innerText = `$${current_price.toFixed(2)}`
  marketCapPriceCell.innerText = `$${market_cap.toFixed(2)}`
  priceChangeCell.innerText = `${price_change_percentage_24h.toFixed(2)}%`
  likerCell.appendChild(likerButton)
  }
 }
  
 // This function ensures the functions are loaded when the page completely loads.
 window.onload = function(){
  searchData();
  marketData();
 }