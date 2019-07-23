const input = document.getElementsByClassName('inputField');
const buttonadd = document.getElementsByClassName('addBtn');
const todolist = document.getElementById('list');
const MAXLI = 10;
let wapningP = document.getElementsByClassName('warningHeader');
let dragSrcEl;



function enableButton(e) {
    if (e.value !=='') {
        buttonadd[0].disabled = false;
    } else {
        buttonadd[0].disabled = true;
    }
    
}

input[0].addEventListener('keyup', function(e){
    enableButton(e.target);
})


buttonadd[0].addEventListener('click', function(){
    
    if (todolist.childElementCount === MAXLI){
        buttonadd[0].disabled = true;
        input[0].disabled = true;
        wapningP[0].classList.remove('hidden');
        return ;
    }
    /* List item */
    let liItem = document.createElement('li');
    liItem.classList.add('itemList');
    
    /* Span for li text */
    let itemSpan = document.createElement('span');
    itemSpan.innerText = input[0].value;
    itemSpan.classList.add('liSpan');
      
    /*Input field */
    let editLiItem = document.createElement('input');
    editLiItem.classList.add('editInput');
    
    /*Button done */
    let doneButton = document.createElement('button');
    let insertDonebutton = document.createElement('i');
    insertDonebutton.classList.add('icons_size','material-icons');
    insertDonebutton.innerText = 'check_box_outline_blank';
    doneButton.appendChild(insertDonebutton);
    doneButton.classList.add('doneButton')
    
    /*Button edit */
    let editButton = document.createElement('button');
    let insertEditButton = document.createElement('i');
    insertEditButton.classList.add('icons_size','material-icons');
    insertEditButton.innerText = 'create';
    editButton.appendChild(insertEditButton);
    editButton.classList.add('editButton');
    
    /*Button delete */
    let deleteButton = document.createElement('button');
    let insertDeleteButton = document.createElement('i');
    insertDeleteButton.classList.add('icons_size','material-icons');
    insertDeleteButton.innerText = 'delete'
    deleteButton.classList.add('deleteButton')
    deleteButton.appendChild(insertDeleteButton);
    
    /*Button save */
    let saveButton = document.createElement('button');
    let insertSave = document.createElement('i');
    insertSave.classList.add('icons_size','material-icons');
    insertSave.innerText = 'save';
    saveButton.classList.add('saveButton');
    saveButton.appendChild(insertSave);
    
    /* div visible*/
    let divItem = document.createElement('div');
    divItem.draggable = true;
    liItem.classList.add('dragClass');
    divItem.appendChild(doneButton);
    divItem.appendChild(itemSpan);
    divItem.appendChild(editButton);
    divItem.appendChild(deleteButton);

    /* div2 invisible*/    
    let hiddendiv = document.createElement('div');
    hiddendiv.appendChild(editLiItem);
    hiddendiv.appendChild(saveButton);
    hiddendiv.classList.add('hidden');
    
    

    liItem.appendChild(divItem);
    liItem.appendChild(hiddendiv);

    todolist.appendChild(liItem);
    input[0].value ='';
    enableButton(input[0]);
    
    deleteButton.addEventListener('click',function(){
        todolist.removeChild(liItem);
        buttonadd[0].disabled = false;
        wapningP[0].classList.add('hidden');
        input[0].disabled = false;
    })
    
    editButton.addEventListener('click', function(){ 
        hiddendiv.classList.remove('hidden');
        editLiItem.value = itemSpan.innerText;
        divItem.classList.add('hidden');
        
        
        
    })
    saveButton.addEventListener('click', function(){
        itemSpan.innerText = editLiItem.value;
        divItem.classList.remove('hidden');
        hiddendiv.classList.add('hidden');
        
    })

    doneButton.addEventListener('click', function(){
        insertDonebutton.innerText = 'done';
        doneButton.disabled = true;
        editButton.classList.add('hidden');
    })
    
   
    function handleDragStart(e) { 
        this.style.opacity = '0.8';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move'; 
        return false;
    }

    function handleDragEnter() {
     
        this.classList.add('over');
    }

    function handleDragLeave() {
     
        this.classList.remove('over');  
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); 
        }
       
        if (dragSrcEl !== this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
            this.classList.remove('over');
            console.log('one',this.innerHTML);
            console.log('two',dragSrcEl.innerHTML);
        }
    return false;
    }

    function handleDragEnd() {
        this.classList.remove('over');
    }
        liItem.addEventListener('dragstart', handleDragStart, false);
        liItem.addEventListener('dragenter', handleDragEnter, false)
        liItem.addEventListener('dragover', handleDragOver, false);
        liItem.addEventListener('dragleave', handleDragLeave, false);
        liItem.addEventListener('drop', handleDrop, false);
        liItem.addEventListener('dragend', handleDragEnd, false);
})
    



