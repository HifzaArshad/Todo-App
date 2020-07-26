var list=document.getElementById('list')

function add (){

    var item=document.getElementById('item')
    
    var li= document.createElement('li')  
   
    var text=document.createTextNode(item.value);
  text.className='long'    

    
  

li.appendChild(text);
 
 list.appendChild(li)
    list.style.marginRight='130px';
    list.style.fontSize='larger';
    


   // create delete button
 var delbtn=document.createElement('button');
 var deltxt=document.createTextNode('Delete');
 delbtn.setAttribute('class','btn')
 delbtn.setAttribute('onclick','delitem(this)')
 delbtn.appendChild(deltxt)
 delbtn.style.marginLeft='10px';
 
 delbtn.className='large'

li.appendChild(delbtn)
li.style.marginTop='15px';




//create edit button

var editbtn=document.createElement('button');
var edittxt=document.createTextNode('Edit')
editbtn.appendChild(edittxt)
editbtn.setAttribute('onclick','edit(this)')
editbtn.style.marginLeft='10px';
li.appendChild(editbtn)
list.appendChild(li)
     item.value=" ";

}









function delitem(e){
    e.parentNode.remove();
}

function edit(e){
    
   var user= prompt( "Enter Updated Value" ,e.parentNode.firstChild.nodeValue)
   e.parentNode.firstChild.nodeValue=user;
}

function delall(){
    list.innerHTML="";
}
