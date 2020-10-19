const getAllPets = async () => {
  // Should return array of objects representing
  // all pets.
  const response = await fetch("/pets");
  const json = await response.json();
  return json;
};

const createTableFromPets = (pets) => {
  // Should return a HTML table
  const targetHeaders = ["human", "pet_name", "pet", "pet_age", "friendly"];

  // Create thead
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  headerRow.append(
    ...targetHeaders.map((header) => {
      const th = document.createElement("th");
      const prettyHeader = (header[0].toUpperCase() + header.slice(1)).replace(
        /_/,
        " "
      );
      th.textContent = prettyHeader;
      return th;
    })
  );
  thead.appendChild(headerRow);

  // Create table body
  const tbody = document.createElement("tbody");
  tbody.append(
    ...pets.map((pet) => {
      // Create tr
      const tr = document.createElement("tr");
      tr.append(
        ...targetHeaders.map((header) => {
          const td = document.createElement("td");
          td.textContent = pet[header];
          return td;
        })
      );
      return tr;
    })
  );

  // Append head + body to table
  const table = document.createElement("table");
  table.classList.add("table");
  table.append(thead, tbody);

  return table;
};

(async () => {
  const { payload: pets } = await getAllPets();
  const table = createTableFromPets(pets);
  const appendTo = document.querySelector("main.all-pets");
  appendTo.innerHTML = "";
  appendTo.appendChild(table);
})();
