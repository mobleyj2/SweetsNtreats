// create logic to capture values from the recipe form and send them to the API route


const recipeFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const ingredients = document.querySelector('#ingredients').value;
    const instructions = document.querySelector('#instructions').value;
    const category = document.querySelector('#category');

    await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify(
            { 
                title, 
                ingredients, 
                instructions, 
                category: category.options[category.selectedIndex].value
            }),
        headers: { 'Content-Type': 'application/json' },
    })

    document.location.replace('/cookies');

}

document.querySelector('#recipeForm').addEventListener('submit', recipeFormHandler)