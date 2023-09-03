// Advance search key press event listener  /////////////////////
const advancedSearchOpen = document.querySelector(`.search-box .search-box-options .fa-angle-down`);
const advancedSearchClose = document.querySelector(`.search-box .search-box-options .fa-angle-up`);

const advancedSearchOption = document.querySelector(`.advanced-search`);

advancedSearchOpen.addEventListener(`click`, function () {

    advancedSearchOption.style.display = `grid`;
    this.style.display = `none`;
    advancedSearchClose.style.display = `grid`;
    document.querySelector(`.hero`).style.marginTop = `90px`; document.querySelector(`.hero`).style.marginBottom = `0px`;


})

advancedSearchClose.addEventListener(`click`, function () {

    advancedSearchOption.style.display = `none`;
    this.style.display = `none`;
    advancedSearchOpen.style.display = `grid`;
    document.querySelector(`.hero`).style.marginTop = `0px`;
    document.querySelector(`.hero`).style.marginBottom = `100px`;

})

// advanced search list creation  ///////////////////////////////
const countryList = [`All Countries`, `Iran`, `Oman`, `Turkey`, `Canada`];
const cityList = [[`All Cities`], [`Tehran`, `Hamedan`], [`Muscat`, `Salaleh`], [`Istanbul`, `Izmir`], [`Toronto`, `Vancouver`]];
const categoryList = [`All Categories`, `Web Design`, `Hyper Market`];


const advancedSearchCountry = document.querySelector(`.advanced-search .search-country ul`);
const advancedSearchCity = document.querySelector(`.advanced-search .search-city ul`);
const advancedSearchCategory = document.querySelector(`.advanced-search .search-category ul`);


let countryListHTML = ``;
let cityListHTML = ``;
let categoryListHTML = ``;


for (let i = 0; i < countryList.length; i++) {
    countryListHTML += `<li>${countryList[i]}</li>`;
}
advancedSearchCountry.innerHTML = countryListHTML;

for (let i = 0; i < cityList.length; i++) {
    for (let j = 0; j < cityList[i].length; j++) {
        cityListHTML += `<li> ${cityList[i][j]} 
        (${countryList[i]})</li>`;
    }
}
advancedSearchCity.innerHTML = cityListHTML;

for (let i = 0; i < categoryList.length; i++) {
    categoryListHTML += `<li>${categoryList[i]}</li>`;
}
advancedSearchCategory.innerHTML = categoryListHTML;


// Input Fields /////////////////////////////////////////////////
const countryInputField = document.querySelector(`.search-country .search-field`);
const cityInputField = document.querySelector(`.search-city .search-field`);
const categoryInputField = document.querySelector(`.search-category .search-field`);

const searchBox = document.querySelector(`.search-box-text input`);

const countryListItems = advancedSearchCountry.querySelectorAll(`li`);
let cityListItems = advancedSearchCity.querySelectorAll(`li`);
const categoryListItems = advancedSearchCategory.querySelectorAll(`li`);

countryInputField.addEventListener(`keyup`, function () {
    for (let i = 0; i < countryListItems.length; i++) {
        if (countryListItems[i].innerText.toLocaleLowerCase().trim().startsWith(this.value.toLowerCase().trim())) {
            countryListItems[i].style.display = `flex`;
        }
        else {
            countryListItems[i].style.display = `none`;
        }
    }
})

for (let i = 0; i < countryListItems.length; i++) {
    countryListItems[i].addEventListener(`click`, function () {
        countryInputField.value = countryListItems[i].innerText;

        console.log("i > " + i);
        if (i !== 0) {
            cityListHTML = ``;
            for (let j = 0; j < cityList[i].length; j++) {
                cityListHTML += `<li> ${cityList[i][j]}</li>`;
            }
        } else {
            cityListHTML = ``;
            for (let i = 0; i < cityList.length; i++) {
                for (let j = 0; j < cityList[i].length; j++) {
                    cityListHTML += `<li> ${cityList[i][j]} (${countryList[i]})</li>`;
                }
            }
        }
        advancedSearchCity.innerHTML = cityListHTML;
        cityListItems = advancedSearchCity.querySelectorAll(`li`);
        console.log(cityListItems);

        for (let i = 0; i < cityListItems.length; i++) {
            cityListItems[i].addEventListener(`click`, function () {
                cityInputField.value = cityListItems[i].innerText;
                searchBox.value = `${countryInputField.value} ${cityInputField.value} ${categoryInputField.value}`;
            })
        }
        searchBox.value = `${countryInputField.value} ${cityInputField.value} ${categoryInputField.value}`;
    })

}


// let cityListItems = advancedSearchCity.querySelectorAll(`li`);
cityInputField.addEventListener(`keyup`, function () {
    for (let i = 0; i < cityListItems.length; i++) {
        if (cityListItems[i].innerText.toLocaleLowerCase().trim().startsWith(this.value.toLowerCase().trim())) {
            cityListItems[i].style.display = `flex`;
        }
        else {
            cityListItems[i].style.display = `none`;
        }
    }
})

for (let i = 0; i < cityListItems.length; i++) {
    cityListItems[i].addEventListener(`click`, function () {
        cityInputField.value = cityListItems[i].innerText;
        searchBox.value = `${countryInputField.value} ${cityInputField.value} ${categoryInputField.value}`;
    })

}


categoryInputField.addEventListener(`keyup`, function () {
    for (let i = 0; i < categoryListItems.length; i++) {
        if (categoryListItems[i].innerText.toLocaleLowerCase().trim().startsWith(this.value.toLowerCase().trim())) {
            categoryListItems[i].style.display = `flex`;
        }
        else {
            categoryListItems[i].style.display = `none`;
        }
    }
})

for (let i = 0; i < categoryListItems.length; i++) {
    categoryListItems[i].addEventListener(`click`, function () {
        categoryInputField.value = categoryListItems[i].innerText;
        searchBox.value = `${countryInputField.value} ${cityInputField.value} ${categoryInputField.value}`;
    })

}


