console.log('working..')

// internet connection related imports
const wifiOff = document.querySelector('.bi-wifi-off');
const wifiOn = document.querySelector('.bi-wifi');
const WifiStatus = document.querySelector('.status');

// search related imports
const searchInput = document.querySelector('input[name="search"]');






// network tester
function networkCheck() {
    if (navigator.onLine)  {
        wifiOff.classList.add('hidden-cell');
        wifiOn.classList.remove('hidden-cell');
        WifiStatus.innerText = 'Connected';
        WifiStatus.style.color = '#069c56';
    }
    else{
        wifiOff.classList.remove('hidden-cell');
        wifiOn.classList.add('hidden-cell');
        WifiStatus.innerText = 'Not Connected';
        WifiStatus.style.color = '#ff681e';

    }
    
}
    networkCheck();
    setInterval(() => {
        // console.log('checking')
        networkCheck();
    }, 10000);


    let ls = localStorage.getItem('recents');
    let recentSearches = [];
    let recentBox = document.querySelector('.recent');
    searchInput.addEventListener('keyup',(event)=>{
        let str = searchInput.value;
        let searchString = str.replace(/ /g, '+');
        if(event.key === "Enter"){
            searchNow(searchString); 
            searchInput.value = '';
        }
    })
    function searchNow(searchString) {
        let url = `https://www.google.com/search?q=${searchString}`;
        window.open(url);
        recentSearches.push(searchString.toString().replace(/\+/g, ' '));
        localStorage.setItem('recents', JSON.stringify(recentSearches));
    }
    let newLs = JSON.parse(ls);
    newLs.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element
        recentBox.append(li)  ;
    });