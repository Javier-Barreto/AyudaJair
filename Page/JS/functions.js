document.getElementById("BtnAgregar").addEventListener('click',(e)=>{
  let InAPN = document.getElementById("inptAPN").value;
  let InAPA = document.getElementById("inptAPA").value;
  let InAPF = document.getElementById("inptAPF").value;

  if(InAPN==""||InAPA==""||InAPF=="")
  {
    alert("Faltan Campos a Llenar para poder agregar la pelicula");
  }
  else
  {
    const data = {
      Nombre: InAPN,
      Autor: InAPA,
      FechaPub: InAPF,
    }
    fetch(`http://localhost:1339/api/peliculas`, {
      method: 'POST', // or 'PUT,
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())

    alert(`Se agregó la pelicula  ${InAPN} correctamente`);

    document.getElementById("inptAPN").value = "";
    document.getElementById("inptAPA").value = "";
    document.getElementById("inptAPF").value = "";
  }
});




document.getElementById('BtnPelis').addEventListener('click',(e)=>{
  document.getElementById('InfoPeliculas').innerHTML="";
  fetch('http://localhost:1339/api/peliculas', {
      method: 'GET',
      headers:{
          'Content-Type': 'application/json'
      }
  })
  .then(res => res.json())
  .then(response => v = response)
  .then(()=>
    v.forEach(element=>{
      document.getElementById('InfoPeliculas').innerHTML+=`
      <div>
        <p>${element.Nombre}</p>
        <p>${element.Autor}</p>
        <p>${element.FechaPub}</p>
      </div>`
    })  
  )
});



document.getElementById("BtnModificar").addEventListener('click',(e)=>{
  let InNP = document.getElementById("inptNP").value;
  let InN = document.getElementById("inptN").value;
  let InA = document.getElementById("inptA").value;
  let InF = document.getElementById("inptF").value;

  if(InNP=='')
  {
    alert("Favor de ingresar el nombre de la pelicula a modificar");
  }
  else
  {
    if(InN==""||InA==""||InF=="")
    {
      alert("Faltan Campos a Llenar para poder modificar la información");
    }
    else
    {
      const data = {
        nombrep: InNP,
        nombre: InN,
        autor: InA,
        fecha: InF,
      }
      fetch(`http://localhost:1339/api/peliculas`, {
        method: 'PUT', // or 'PUT,
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())

      alert(`Se modificó la pelicula  ${InNP} correctamente`);

      document.getElementById("inptNP").value = "";
      document.getElementById("inptN").value = "";
      document.getElementById("inptA").value = "";
      document.getElementById("inptF").value = "";
    }
  }
});



document.getElementById("BtnBorrar").addEventListener('click',(e)=>{
  let InNPB = document.getElementById("inptNPB").value;
  if(InNPB=='')
  {
    alert("Favor de ingresar el nombre de la pelicula a borrar");
  }
  else
  {
    document.getElementById("inptNPB").value = "";
    const data = {
      nombrep: InNPB,
    }

    fetch(`http://localhost:1339/api/peliculas`, {
      method: 'DELETE', // or 'PUT,
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())

    alert(`Se modificó la pelicula  ${InNPB} correctamente`);
  }
});


document.getElementById("BtnBuscar").addEventListener('click',(e)=>{
  let InNPBB = document.getElementById("inptNPBB").value;
  if(InNPBB=='')
  {
    alert("Favor de ingresar el nombre de la pelicula a borrar");
  }
  else
  {
    document.getElementById("PeliculaBuscada").innerHTML= "";

    fetch(`http://localhost:1339/api/peliculas/${InNPBB}`, {
      method: 'GET', // or 'PUT,
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => v2 = response)
    .then(()=>
      v2.forEach(element=>{
        document.getElementById('PeliculaBuscada').innerHTML+=`
        <div>
          <p>${element.Nombre}</p>
          <p>${element.Autor}</p>
          <p>${element.FechaPub}</p>
        </div>`
      })  
    )

    document.getElementById("inptNPB").value = "";
  }
});