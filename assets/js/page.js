fetch("/links.php")
   .then(response => {
      return response.json();
   })
   .then(data => {
      const titles = data.titles;
      const index = Math.floor(Math.random() * titles.length);
      document.title = titles[index];
      
      makePage(data.links);   
   })
   .catch(error => {
      console.error(error);
   });

function makePage(links){
   const page = document.querySelector('#container');
   page.innerHTML = "";

   const table = document.createElement("table");

   for (link of links){

      const row = document.createElement("tr");

      const linkCol = document.createElement("td");
      const links = document.createElement("a");
      links.innerHTML = link.name;
      links.setAttribute("href", link.link);
      links.setAttribute("class", "link");
      linkCol.appendChild(links);

      row.appendChild(linkCol);

      const dateCol = document.createElement("td");
      const date = document.createElement("text");
      date.setAttribute("class", "text");
      date.innerHTML = `${link.date}`;
      dateCol.appendChild(date);

      row.appendChild(dateCol);

      const descCol = document.createElement("td");
      const desc = document.createElement("text");
      desc.setAttribute("class", "text");
      desc.innerHTML = `${link.desc}`;
      descCol.appendChild(desc);

      row.appendChild(descCol);

      table.appendChild(row);
   }

   page.appendChild(table);
}