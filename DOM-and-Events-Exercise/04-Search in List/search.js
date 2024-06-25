function search() {
      let listItems = document.querySelectorAll('#towns li');
      let input = document.querySelector('input').value;
      let result = document.getElementById('result');
   
      let sum = 0;
   
      for (let li of listItems) {
         if ((li.textContent).toLowerCase().includes(input.toLowerCase())) {
            li.style.fontWeight = 'bold';
            li.style.textDecoration = 'underline';
            sum++;
         } else {
            li.style.fontWeight = '';
            li.style.textDecoration = '';
         }
      }
      result.textContent = `${sum} matches found`
}

// Option 2
function search() {
   let searchedValue = document.getElementById("searchText").value;
   let liElements = document.querySelectorAll("li");
   let resultDiv = document.getElementById("result");

   let matches = 0;

   for (let i = 0; i < liElements.length; i++) {
      if ((liElements[i].textContent).toLowerCase().includes(searchedValue.toLowerCase())) {
         liElements[i].style.fontWeight = 'bold';
         liElements[i].style.textDecoration = 'underline';
         matches++;
      }
      else{
         liElements[i].style.fontWeight = '';
         liElements[i].style.textDecoration = '';
      }
   }

   resultDiv.textContent = `${matches} matches found`;
}

