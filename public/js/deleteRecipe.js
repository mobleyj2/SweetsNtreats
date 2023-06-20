const title = document.querySelector('#delete-recipe').value

const deleteClickHandler = async function() {
  await fetch(`/api/recipes/${title}`, {
    method: 'DELETE'
  });

  // document.location.replace('/dashboard');
  window.location.reload()
};

document
  .querySelector('.delete-button')
  .addEventListener('click', deleteClickHandler);