class Person{
constructor(firstName, lastName){
this.firstName = firstName;
this.lastName = lastName;
}
}
const fetchCall = (type, url, personData)=>{
  $.ajax({
  type: type,
  crossDomain: true,
  headers: {
  'Accept': 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
  },
  url: url,
  data:personData,
  success: function (response){
  updateDisplay(response)
  },
  error: function (response){
           updateDisplay(response)
           }
  })

 document.getElementById("id").value = "";
  document.getElementById("fName").value="";
  document.getElementById("lName").value="";

}


const updateDisplay = (response) =>{
clearTable();
var data =[];
if(!Array.isArray(response) ){
date = data[0] =response
}else{
data =response;
}


console.log(data)
var table = document.getElementById("myTable");
var tbody = table.getElementsByTagName("tbody")[0];
for (var i = 0; i < data.length; i++) {

var row = tbody.insertRow(i);
var cell1 = row.insertCell(0);
cell1.innerHTML = data[i].id;
var cell2 = row.insertCell(1);
cell2.innerHTML = data[i].firstName;
var cell2 = row.insertCell(2);
cell2.innerHTML = data[i].lastName;
}


}

function clearTable() {
  const table = document.getElementById("myTable");
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}

const create = () => {
event.preventDefault()
const firstName = document.getElementById("fName").value
const lastName = document.getElementById("lName").value
  const person = new Person(firstName, lastName);
  const personData = JSON.stringify(person);
   fetchCall("POST", 'person-controller/create', personData);
}

const read = ()=> {
event.preventDefault()
const id = document.getElementById("id").value
const url = 'person-controller/read/'+id;
   fetchCall("GET", url, null)
}

const readAll = ()=>{
event.preventDefault();
fetchCall("GET", 'person-controller/readAll', null);
}

const update = ()=>{
event.preventDefault();
const id = document.getElementById("id").value;
const fName = document.getElementById("fName").value;
const lName = document.getElementById("lName").value;

const person = new Person(fName, lName);
const personData = JSON.stringify(person);
const url = 'person-controller/update/'+id;
fetchCall("PUT",url, personData);
}


const deletePerson = ()=>{
event.preventDefault();
const id = document.getElementById("id").value;
const url = 'person-controller/delete/'+id;
fetchCall("DELETE",url,null)
}
