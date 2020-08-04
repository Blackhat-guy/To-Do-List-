const addbtn = document.querySelector('.btn');
const inputTask = document.querySelector('#task');
const cont = document.querySelector('.cont');

class item{
    constructor(itemName){
        // creating item div

        this.createDiv(itemName);
    }

     createDiv(itemName){
        let input = document.createElement('input');
        input.classList.add('item-edit');
        input.disabled = true;
        input.type = "text";
        input.value = itemName;

        let item_box= document.createElement('div');
        item_box.classList.add('item1');

        // let break=document.createElement('br');


        let edit_btn= document.createElement('button');
        edit_btn.innerHTML="EDIT";
        edit_btn.classList.add('edit-btn');
        edit_btn.addEventListener('click', function() {
            input.disabled=false;
            
        })


        let remove_btn= document.createElement('button');
        remove_btn.innerHTML="REMOVE";
        remove_btn.classList.add('remove-btn');

        remove_btn.addEventListener('click', function() {
            item_box.parentNode.removeChild(item_box);
            
            
        })


        cont.appendChild(item_box);
        item_box.appendChild(input);
        item_box.appendChild(edit_btn);
        item_box.appendChild(remove_btn);
        // item_box.appendChild(break);
        

    }
}


addbtn.addEventListener('click', function(){
    if(inputTask.value!=""){
        new item(inputTask.value);
        inputTask.value="";
    }

})

