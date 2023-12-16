const tableNode = document.querySelector('#t-body');
const SearchInput = document.querySelector('#searchText'); 
const allBtn1 = document.querySelector('#city');
const allBtn2 = document.querySelector('#state');
const allBtn3 = document.querySelector('#center');
async function allCenters() {
    let response = await fetch("https://isro.vercel.app/api/centres");
    let data = await response.json();
    data = data.centres;
    
    return data;
}
allCenters();

async function bindingName() {
    
   

   
    let input = await allCenters();
    
    tableBinding(input);
    
}

bindingName();



function tableBinding(input){
    

    tableNode.innerHTML += `<table>
       ${input.map(function (data) {
        return `<tr>
        <th>CENTER</TH>
        <th>CITY</TH>
        <th>STATE</TH>
    </tr><tr>
                <td>${data.name}</td>
                <td>${data.Place}</td>
                <td>${data.State}</td>
                </tr>`
    })}
    </table>`
}


allBtn1.addEventListener('click', ()=>{
    filterHandler('city');
})
allBtn2.addEventListener('click', ()=>{
    filterHandler('state'); 
})
allBtn3.addEventListener('click', ()=>{
    filterHandler('center');
})

 async function filterHandler(type){
    console.log(type);
   let searchBar = document.querySelector('#searchText').value.toLowerCase();
   
   let tableNode = '';
  
   let data = await allCenters();
   let filterData = data.filter(function(data){
    if(type == 'city'){
        return data.Place.toLowerCase().includes(searchBar) ;
    }
    else if(type == 'center'){
        return data.name.toLowerCase().includes(searchBar)
    } else if(type == 'state'){
        return data.State.toLowerCase().includes(searchBar);
    }
    console.log(filterData);
   })
 }  




// async function filterHandler(type){

//     console.log(type);
    
//       let input = document.querySelector(".searchText").value.toLowerCase();;
    
//     console.log(input);
    
//     tableNode.innerHTML = '';
    
//     let data = await allCenters();
    
//     let filterData = data.filter(function(data){
    
//     if(type == 'city'){
    
//     return data.Place.toLowerCase().includes(input);
    
//     //return data.Place.toLowerCase() === input;
    
//     }
    
//     else if(type == 'center'){
    
//     return data.name.toLowerCase().includes(input);
    
//     }
    
//     else if(type == 'state'){
    
//     return data.State.toLowerCase().includes(input);
    
//     }
    
//     })
    
//     console.log(filterData);
    
//     }

