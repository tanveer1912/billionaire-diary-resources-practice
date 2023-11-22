// Load Billionaires
// Button-01
const loadApi = async (dataLimit) => {
    const url = 'https://forbes400.onrender.com/api/forbes400/'
    const res = await fetch(url);
    const data = await res.json();
    getAllBillionaires(data, dataLimit);
}

const getAllBillionaires = (billionaires, dataLimit) => {
    const billionairesContainer = document.getElementById('billionaires-container');
    billionairesContainer.innerHTML = ''

    if (dataLimit && billionaires.length > 10) {
        billionaires = billionaires.slice(0, 5);
    }


    billionaires.forEach(billionaire => {
        console.log(billionaire);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
          <img src="${billionaire.squareImage ? billionaire.squareImage : 'https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800'}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${billionaire.personName}</h5>
              <p class="card-text">Citizenship: ${billionaire.countryOfCitizenship
            }</p>
            <p>World Rank: ${billionaire.rank}</p>
            <p>Share Price: $${billionaire.financialAssets ? billionaire.financialAssets[0].sharePrice : 'Not Found'}</p>
            <p>Total Share: $${billionaire.financialAssets ? billionaire.financialAssets[0].numberOfShares : 'Not Found'}</p>
           
            </div>
        </div>
        `;
        billionairesContainer.appendChild(div)
    });
}

document.getElementById('show-all').addEventListener('click', function () {
    loadApi()
})

// Load Billionaires
// Button-02
const loadApi2 = () => {
    const url = 'https://forbes400.onrender.com/api/forbes400/industries/technology'
    fetch(url)
        .then(res => res.json())
        .then(data => showApi(data))
}

const showApi = billionaires => {
    const billionairesContainer = document.getElementById('billionaires-container');
    billionairesContainer.innerHTML = ''
    billionaires.forEach(billionaire => {
        console.log(billionaire);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
          <img src="${billionaire.squareImage ? billionaire.squareImage : 'https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800'}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${billionaire.personName}</h5>
              <p class="card-text">Citizenship: ${billionaire.countryOfCitizenship
            }</p>
            <p>World Rank: ${billionaire.rank}</p>
            <p>Share Price: $${billionaire.financialAssets ? billionaire.financialAssets[0].sharePrice : 'Not Found'}</p>
            <p>Total Share: $${billionaire.financialAssets ? billionaire.financialAssets[0].numberOfShares : 'Not Found'}</p>
           
            </div>
        </div>
        `;
        billionairesContainer.appendChild(div)

    })
}

document.getElementById('industry').addEventListener('click', function () {
    loadApi2()
})

// Load Billionaires
// Button-03
const loadApi3 = () => {
    const url = 'https://forbes400.onrender.com/api/forbes400/states/Texas'
    fetch(url)
        .then(res => res.json())
        .then(data => showTexas(data))
}

const showTexas = billionaires => {
    const billionairesContainer = document.getElementById('billionaires-container');
    billionairesContainer.innerHTML = '';

    billionaires.forEach(billionaire => {
        console.log(billionaire);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
        <div class="card h-100">
          <img src="${billionaire.squareImage ? billionaire.squareImage : 'https://specials-images.forbesimg.com/imageserve/6050f48ca1ab099ed6e290cc/416x416.jpg?background=000000&cropX1=0&cropX2=800&cropY1=0&cropY2=800'}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${billionaire.personName}</h5>
              <p class="card-text">Citizenship: ${billionaire.countryOfCitizenship
            }</p>
            <p>World Rank: ${billionaire.rank}</p>
            <p>Share Price: $${billionaire.financialAssets ? billionaire.financialAssets[0].sharePrice : 'Not Found'}</p>
            <p>Total Share: $${billionaire.financialAssets ? billionaire.financialAssets[0].numberOfShares : 'Not Found'}</p>
           
            </div>
        </div>
        `;
        billionairesContainer.appendChild(div)

    })
}

document.getElementById('texas').addEventListener('click', function () {
    loadApi3()
})



loadApi(1)