fetch("/links.php")
   .then(response => {
      return response.json();
   })
   .then(data => {
      const titles = data.titles;
      const index = Math.floor( Math.random() * titles.length);
      document.title = titles[index];
      
      makePage(data.links);   
   })
   .catch(error => {
      console.error(error);
   });

function makePage(links){
   const page = document.querySelector('#container');

   console.log(links);
}
