const getFoodName = () => {
    const searchfield = document.getElementById("search-field");
    const searchText = searchfield.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    searchfield.value = '';
    fetch(url)
        .then(res => res.json())
        .then(food => loadFood(food.meals))
};

const loadFood = (meals) => {
    // console.log(meals.meals);
    const cardParent = document.getElementById("card-parent");
    meals.forEach(meal => {
        console.log(meal);
        const divCard = document.createElement("div");
        divCard.classList.add("col");
        divCard.innerHTML = `<div onclick="loadMealDetail(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
        </div>
    </div>`;
        cardParent.appendChild(divCard);
    })
};
const loadMealDetail = (mealID) => {
    console.log(mealID);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
};
const displayMealDetail = meal => {
    console.log(meal);

    const divMeal = document.getElementById("meal-details");
    const divs = document.createElement("div");
    divs.classList.add("card");
    divs.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,180)}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>`;
    divMeal.appendChild(divs);
};