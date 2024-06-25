function create(words) {
   let content = document.getElementById('content');

   for (let word of words) {
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none'
      div.appendChild(para);

      div.addEventListener('click', reveal)

      content.appendChild(div);

      function reveal(e) {
         e.currentTarget.children[0].style.display = 'block';
      }
   }
}

// Option 2
function create(words) {
   let divContent = document.getElementById("content");

   for (let i = 0; i < words.length; i++) {
      let newDiv = document.createElement("div");
      let newParagraph = document.createElement("p");
      newParagraph.textContent = words[i];
      newParagraph.style.display = 'none'
      newDiv.appendChild(newParagraph);
      divContent.appendChild(newDiv);

      newDiv.addEventListener('click', function () {
         newParagraph.style.display = '';
      })
   }
}