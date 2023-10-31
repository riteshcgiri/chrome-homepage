
// weather
let wIcon = document.querySelector('.weather__icon'),
wType  = document.querySelector('.weather__type'),
wLoc  = document.querySelector('.weather__loc'),
wTemp  = document.querySelector('.weather__temp'),
wWind  = document.querySelector('#wSpeed'),
wMin  = document.querySelector('#wMin'),
wMax  = document.querySelector('#wMax');
const weather = async(city) =>{
    
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
		'X-RapidAPI-Key': 'b86e37ad40msh3ea727da74964f4p1de027jsn5625485faf61',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
    // let obj = new Object(result)
    let obj = JSON.parse(result)
        
    wLoc.innerText = city + ' In';
    wTemp.innerText = obj.temp + '°C';
    wMin.innerText = obj.min_temp;
    wMax.innerText = obj.max_temp;
    wWind.innerText = obj.wind_speed;


    if(obj.cloud_pct >= 0 && obj.cloud_pct <= 10){
        wIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        wType.innerText = 'Sunny';
    }
    else if(obj.cloud_pct >= 11 && obj.cloud_pct <= 20 ){
        wIcon.innerHTML = '<i class="fa-solid fa-wind"></i>';
        wType.innerText = 'Haze';
    }
    else if(obj.cloud_pct >= 21 && obj.cloud_pct <= 30 ){
        wIcon.innerHTML = '<i class="fa-solid fa-sun"></i>';
        wType.innerText = 'Clear';
    }
    else if(obj.cloud_pct >= 31 && obj.cloud_pct <= 70 ){
        wIcon.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>';
    wType.innerText = 'Mix';
    }
    else if(obj.cloud_pct >= 71 && obj.cloud_pct <= 90 ){
        wIcon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
        wType.innerText = 'Cloudy';
    }
    else if(obj.cloud_pct >= 91 && obj.cloud_pct <= 100 ){
        wIcon.innerHTML = '<i class="fa-solid fa-cloud-sun-rain"></i>';
        wType.innerText = 'Rain';
    }
    
    } catch (error) {
        console.error(error);
    }
}
// getting default weather 
weather('Delhi');
