const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=cake";

async function getDataFromServer() {
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector('.container');

    for (const itemCake of data.meals) {
        element.innerHTML += `
        <div class="itemCake">
            <h1>${itemCake.strMeal}</h1>
            <div class="flex">
                <div class="firstBox">
                    <div class="strArea">${itemCake.strArea}</div>
                    <img src="${itemCake.strMealThumb}" alt="${itemCake.strMeal}">
                </div>
                <div class="secondBox">
                    <div class="strCategory">${itemCake.strCategory}</div>
                    <div class="ingredients">
                        ${getIngredients(itemCake)}
                    </div>
                </div>
            </div>
            <div class="instr">${itemCake.strInstructions}</div>
            <div class="yt">
                <a href="${itemCake.strYoutube}" target="_blank">Watch on YouTube</a>
            </div>
        </div>
        `;
    }
}

function getIngredients(meal) {
    let ingredients = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            ingredients += `<p>${ingredient} - ${measure}</p>`;
        }
    }
    return ingredients;
}

getDataFromServer();