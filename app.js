const developer = document.querySelector(".container");

devs.map(data => {

    developer.innerHTML +=(`
   <div class="devs-data">
    <div class="devs-img">
    <img src="${data.img}" alt="">
    </div>
    <div class="devs-bio">
        <h2>Name : ${data.name}</h2>
        <h3>Skill : ${data.skill}</h3>
        <h4>location : ${data.location}</h4>
    </div>

  </div>

`)
})

const familly = document.querySelector(".familly-phone");
phone.map(data=>{

  familly.innerHTML +=(`
  <div class="familly-data">
  <img src="${data.img}" alt="">
  <div class="familly-detiles">
    <h1>Serial Number : ${data.sl}</h1>
    <h2>Name:${data.name} </h2>
    <h3>Age: ${data.age} </h3>
    <h3>Location: ${data.location}</h3>
    <h3>Phone : ${data.phoneBook} </h3>
    <h3>Relation : ${data.relation} </h3>

</div>
</div>

  
  `)

})

const students = document.querySelector(".student-data table tbody");

student.map((data, index )=> {

  students.innerHTML +=(`
 
<tbody>
      <tr>
          <td>${index+1}</td>
          <td>${data.id}</td>
          <td>${data.name}</td>
          <td>${data.roll}</td>
          <td>${data.age}</td>
          <td>${data.class}</td>
          <td>${data.section}</td>
          <td>${data.blood}</td>
          <td>${data.bangla}</td>
          <td>${data.english}</td>
          <td>${data.math}</td>
          <td>${data.acc}</td>
          <td>${data.man}</td>
          <td>${data.rel}</td>
          <td>${data.eco}</td>
      </tr>
  </tbody>
  
  `)

})