function imp(){
  let tb=document.getElementById('tablebod');
  let str="";
  itemJsonArray.forEach((element,index) =>{
  str+=`<tr>
  <th scope="row">${index+1}</th>
  <td>${element[0]}</td>
  <td>${element[1]}</td>
  <td><button class="btn btn-primary" onclick="del(${index})">Delete</td>
  </tr>
  `
  });
  tb.innerHTML=str;
}
function update(){
  console.log("Updating");
  let tit=document.getElementById('title').value;
  let desc=document.getElementById('description').value;
  if(localStorage.getItem('itemJson')==null){
  itemJsonArray=[];
  itemJsonArray.push([tit,desc]);
  localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
  }
  else{
  itemJsonArrayStr=localStorage.getItem('itemJson');
  itemJsonArray=JSON.parse(itemJsonArrayStr);
  itemJsonArray.push([tit,desc]);
  localStorage.setItem('itemJson',JSON.stringify(itemJsonArray))
  }
  imp();
  console.log(itemJsonArray);
}
let ad=document.getElementById("add");
ad.addEventListener("click",update);
function del(item){
  console.log("Deleting");
  itemJsonArray.splice(item,1);
  localStorage.setItem('itemJson',JSON.stringify(itemJsonArray));
  imp();
  console.log(itemJsonArray);
}
  