// Listeners
document.addEventListener('click', showCountries);

// Get JSON countries and show them whem button is clicked
function showCountries() {
  const showCountries = document.querySelector('#show-countries');

  for (let country of countryList.listadoPaises.pais) {

    let liCountries = `
      <div class="country">
        <a href="#">${country.nombre}</a>

        <div class="dropdown">
          <div>
            <strong>Capital</strong>: ${country.capital}
          </div>

          <div>
            <strong>Descripción</strong><br>${country.textoCapital}
          </div>
          
          <div class="cities">
            <strong>Ciudades importantes</strong>
          </div>`;

      for (let ciudad of country.ciudadImportante) {
        liCountries += `<span>${ciudad}</span>`;
      }
  
    document.querySelector('#list-countries').innerHTML += `
        ${liCountries}
        </div>
      </div>`;
  } 
}

const countryList = {
  "listadoPaises": {
      "pais": [{
              "nombre": "España",
              "capital": "Madrid",
              "textoCapital": "Madrid es un municipio y una ciudad de España. La localidad, con categoría…",
              "ciudadImportante": [
                  "Madrid",
                  "Barcelona",
                  "Valencia",
                  "Sevilla",
                  "Zaragoza",
                  "Málaga",
                  "Murcia"
              ]
          },
          {
              "nombre": "México",
              "capital": "México D.F.",
              "textoCapital": "La Ciudad de México, Distrito Federal o, en su forma abreviada, México, D.F., es… ",
              "ciudadImportante": [
                  "México D.F.",
                  "Ecatepec",
                  "Guadalajara",
                  "Puebla",
                  "Juárez",
                  "Tijuana",
                  "León",
                  "Zapopan"
              ]
          },
          {
              "nombre": "Argentina",
              "capital": "Buenos Aires",
              "textoCapital": "Buenos Aires, formalmente Ciudad Autónoma de Buenos Aires (CABA) ―también… ",
              "ciudadImportante": [
                  "Buenos Aires",
                  "Córdoba",
                  "Rosario",
                  "La Plata",
                  "Mar del Plata",
                  "San Miguel de Tucumán",
                  "Ciudad de Salta"
              ]
          },
          {
              "nombre": "Colombia",
              "capital": "Bogotá",
              "textoCapital": "Bogotá, oficialmente Bogotá, Distrito Capital, abreviado Bogotá, D. C. es la… ",
              "ciudadImportante": [
                  "Bogotá",
                  "Medellín",
                  "Cali",
                  "Barranquilla",
                  "Cartagena",
                  "Cúcuta",
                  "Soledad",
                  "Ibagué"
              ]
          }
      ]
  }
}