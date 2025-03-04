const init = () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // e.target.children[1].value
    // console.log(document.querySelector('input#searchByID').value);
    const valueInput = document.querySelector('input#searchByID').value;
    // console.log(value);
    fetch(`http://localhost:3000/movies/${valueInput}`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener('DOMContentLoaded', init);
// fetch;
