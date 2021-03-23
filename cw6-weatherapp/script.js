const searchArea = document.querySelector('.text');
const button = document.querySelector(".submit");
const content = document.querySelector('.content');

//LocalStorage
const DataArray = [];



let data = {id : null ,city : null, temp : null, cloud : null};


function GetPlace(){
    return searchArea.value;
    
}

button.addEventListener('click', function(){
    let city = GetPlace();

    //Pobranie danych z zewnętrznego API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&APPID=1f3bc3a6e32a022128d4e3f45865a7be`)
     .then(response => 
        {
            let weather = response.json();
            return weather;
        })
    //Przypisywanie zmiennej do data
     .then(weather =>
        {
            data.city = weather.name;   
            data.temp = Math.floor((weather.main.temp - 273.15), 2);
            data.desc = weather.weather[0].description;
            data.icon = weather.weather[0].icon;
            SetDataInDataArray();
            GetLS();
            NewDiv();
            
            
        });
        //Tworzenie diva - kartki z pogodą dla miasta
        function NewDiv() {
            const note = document.createElement('div');
            note.classList.add('note');
            content.appendChild(note); 
            
            
            //testy w konsoli
            console.log(data.city);
            console.log(data.temp )
            console.log(data.desc)

            //nazwa miasta, tworzenie
            const nazwa = document.createElement('div')
            nazwa.classList.add('inside'); 
            note.appendChild(nazwa);
            nazwa.innerHTML = "Miasto: "+data.city; 


            //tmeperatura, tworzenie
            const temp = document.createElement('div')
            nazwa.classList.add('inside-temp'); 
            note.appendChild(temp);
            temp.innerHTML = "Aktualna temperatura: "+data.temp+"℃"; 


            //opis, description
            const desc = document.createElement('div')
            nazwa.classList.add('inside-desc'); 
            note.appendChild(desc);
            desc.innerHTML = "Za oknem widać: "+data.desc; 

            //ikona

            const icon = document.createElement('img')
            icon.classList.add('inside-icon'); 
             console.log(`http://openweathermap.org/img/wn/${data.icon}@2x.png`)
             icon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`
             note.appendChild(icon);
             
             
        } 
        
})



function SetDataInDataArray() {
     //Dodanie danych do DataArray
     data.id = new Date().getTime();
     let LSInfo = [data.id, data.city];
     DataArray.push(LSInfo);
     SetLS();
}

function SetLS() {
let ArrayLenght = DataArray.length;
window.localStorage.setItem('DanePogoda', JSON.stringify(DataArray)); 
window.localStorage.setItem('Ilosc', JSON.stringify(ArrayLenght));
}

function GetLS(){
    let A = [];
    A = localStorage.getItem('DanePogoda', JSON.parse);
    return A;
}


