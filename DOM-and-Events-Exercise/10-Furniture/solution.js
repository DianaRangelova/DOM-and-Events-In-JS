function solve() {
  const table = document.querySelector('table.table tbody');

    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    const items = [];

    function generate(e) {
        const data = JSON.parse(input.value);

        for (let item of data) {
            const checkBox = createElement('input', {
                type: 'checkbox'
            });

            const row = createElement('tr', {},
                td(createElement('img', {
                    src: item.img
                })),
                td(p(item.name)),
                td(p(item.price)),
                td(p(item.decFactor)),
                td(checkBox)
            );

            items.push({
                element: row,
                isChecked,
                item
            });

            table.appendChild(row);

            function isChecked() {
                return checkBox.checked;
            }
        }
    }

    function p(...content) {
        return createElement('p', {}, ...content);
    }

    function td(...content) {
        return createElement('td', {}, ...content);
    }

    function createElement(type, props, ...content) {
        const element = document.createElement(type);

        for (let prop in props) {
            element[prop] = props[prop];
        }
        for (let entry of content) {
            if (typeof entry == 'string' || typeof entry == 'number') {
                entry = document.createTextNode(entry);
            }
            element.appendChild(entry);
        }

        return element;
    }

    function buy(e) {

        const furniture = items
            .filter(i => i.isChecked())
            .reduce((acc, {
                item: c
            }, i, a) => {
                acc.names.push(c.name);
                acc.total += Number(c.price);
                acc.decFactor += Number(c.decFactor) / a.length;
                return acc;
            }, {
                names: [],
                total: 0,
                decFactor: 0
            });

        const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`;

        output.value = result;
    }
}

// Option 2
function solve() {
  let tableBody = document.getElementsByTagName("tbody")[0];
  const [input, output] = document.getElementsByTagName("textarea");
  const [generateBtn, buyBtn] = document.getElementsByTagName('button');

  generateBtn.addEventListener('click', generateRows);
  buyBtn.addEventListener('click', buyItems);

  function generateRows() {
    let items = JSON.parse(input.value);

    for (let i = 0; i < items.length; i++) {
      let tableRow = document.createElement("tr");

      //add td for image
      let imageTableData = document.createElement("td");
      let image = document.createElement("img");
      image.src = items[i].img;
      imageTableData.appendChild(image);
      tableRow.appendChild(imageTableData);

      //add td for name
      let nameTableData = document.createElement("td");
      let nameParagraph = document.createElement("p");
      nameParagraph.textContent = items[i].name;
      nameTableData.appendChild(nameParagraph);
      tableRow.appendChild(nameTableData);

      //add td for price
      let priceTableData = document.createElement("td");
      let priceParagraph = document.createElement("p");
      priceParagraph.textContent = items[i].price;
      priceTableData.appendChild(priceParagraph);
      tableRow.appendChild(priceTableData);

      //add td for decoration factor
      let dFactorTableData = document.createElement("td");
      let dFactorParagraph = document.createElement("p");
      dFactorParagraph.textContent = items[i].decFactor;
      dFactorTableData.appendChild(dFactorParagraph);
      tableRow.appendChild(dFactorTableData);
      
      //add td for mark
      let markTableData = document.createElement("td");
      let markInput = document.createElement("input");
      markInput.type = "checkBox";
      markTableData.appendChild(markInput);
      tableRow.appendChild(markTableData);

      //add tableData(td) to the tableBody(td)
      tableBody.appendChild(tableRow);
    }
  }

  function buyItems() {
    let furtniture = [];
    let price = 0;
    let averageDecoration = 0;
    let itemsCount = 0;
    let tableRows = document.getElementsByTagName("tr");

    for (let i = 1; i < tableRows.length; i++) {
      let isMarkChecked = tableRows[i].children[4].children[0].checked;
      if (isMarkChecked) {
        itemsCount++;
        furtniture.push(tableRows[i].children[1].children[0].textContent);
        price += Number(tableRows[i].children[2].children[0].textContent);
        averageDecoration += Number(tableRows[i].children[3].children[0].textContent);
      }
    }

    const result = `Bought furniture: ${furtniture.join(', ')}
Total price: ${price}
Average decoration factor: ${averageDecoration}`;

    output.value = result;
  }
}