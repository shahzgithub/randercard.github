[  
    {
    id: 4,
    title: "Ford ms 10",
    price: 205,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
    product_oder: "Oder"
  },
]
const obj = document.getElementById("card")
const arr = {
    title: "Ford ms 10",
    price: 205,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    Image_url: "https://cdn05.carsforsale.com/00e7818a91f451732249f04173c1a3058f/480x360/2019-dodge-challenger-gt-2dr-coupe.jpg",
    product_oder: "Oder",
}
for (let i = 0; i < arr.length; i++) {
    const cardHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${arr[i].Image_url}" class="card-img-top" alt="....">
            <div class="card-body">
                <h5 class="card-title">${arr[i].title}</h5>
                <p class="card-text">${arr[i].description}</p>
                ${arr[i].prise}
                <a href="#" class="btn btn-primary">${arr[i].product_oder}</a>
            </div>
        </div>
    `};

console.log(arr);


[
  {
    "id": 7,
    "title": "Rolls_Royce",
    "price": 743,
    "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    "image_url": "https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*"
    },
]   
const obj1 = document.getElementById("rollsroyce")
const arr1 = {
    title: "Rolls_Royce",
    price: 743,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    Image_url: "https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*",
    product_oder: "Oder",
}
for (let i = 0; i < arr.length; i++) {
    const cardHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${arr[i].Image_url}" class="card-img-top" alt="....">
            <div class="card-body">
                <h5 class="card-title">${arr[i].title}</h5>
                <p class="card-text">${arr[i].description}</p>
                ${arr[i].prise}
                <a href="#" class="btn btn-primary">${arr[i].product_oder}</a>
            </div>
        </div>
    `};

console.log(arr1);


[
  {
    "id": 9,
    "title": "B_M_W",
    "price": 808,
    "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    "image_url": "https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*"
    },
]   
const obj2 = document.getElementById("BMW")
const arr2 = {
    title: "B_M_W",
    price: 808,
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    Image_url: "https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*",
    product_oder: "Oder",
}
for (let i = 0; i < arr.length; i++) {
    const cardHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${arr[i].Image_url}" class="card-img-top" alt="....">
            <div class="card-body">
                <h5 class="card-title">${arr[i].title}</h5>
                <p class="card-text">${arr[i].description}</p>
                ${arr[i].prise}
                <a href="#" class="btn btn-primary">${arr[i].product_oder}</a>
            </div>
        </div>
    `};

console.log(arr2);


[
    {
        "id": 11,
        "title": "AUDI A4",
        "price": 382,
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "image_url": "https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_8_1280.jpg"
        },
]
const obj3 = document.getElementById("audia4")
const arr3 = {
    title: "AUDI A4",
    price: 382,
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    Image_url: "https://media.ed.edmunds-media.com/audi/a4/2022/oem/2022_audi_a4_sedan_prestige-s-line_fq_oem_8_1280.jpg",
    product_oder: "Oder",
}
for (let i = 0; i < arr.length; i++) {
    const cardHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${arr[i].Image_url}" class="card-img-top" alt="....">
            <div class="card-body">
                <h5 class="card-title">${arr[i].title}</h5>
                <p class="card-text">${arr[i].description}</p>
                ${arr[i].prise}
                <a href="#" class="btn btn-primary">${arr[i].product_oder}</a>
            </div>
        </div>
    `};

console.log(arr3);


[
    {
        "id": 12,
        "title": "Farrari",
        "price": 30,
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "image_url": "https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.webp"
        },
]
const obj4 = document.getElementById("farrari")
const arr4 = {
    title: "Farrari",
    price: 30,
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    Image_url: "https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.webp",
    product_oder: "Oder",
}
for (let i = 0; i < arr.length; i++) {
    const cardHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${arr[i].Image_url}" class="card-img-top" alt="....">
            <div class="card-body">
                <h5 class="card-title">${arr[i].title}</h5>
                <p class="card-text">${arr[i].description}</p>
                ${arr[i].prise}
                <a href="#" class="btn btn-primary">${arr[i].product_oder}</a>
            </div>
        </div>
    `};

console.log(arr4);


