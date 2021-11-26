

function myFun(e){
 const input = document.querySelector('.input')
 const tBody = document.querySelector('.tBody')
 const inputVal = input.value.toUpperCase()
 const tr =tBody.getElementsByTagName('tr')
 console.log(inputVal)
for(i=0;i<tr.length;i++){
  const td=tr[i].getElementsByTagName('td')[0].innerHTML;
   const td1 = td.toUpperCase()
   if(td1.indexOf(inputVal) >-1){

    tr[i].style.display=''
   }else{
     tr[i].style.display='none';
   }
  
  }
}
 
 
 