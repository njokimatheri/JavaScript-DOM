// we query ul from our wine-list
const list=document.querySelector('#wine-list ul');
// list all form elements
const forms=document.forms;



// add wine

const addForm=forms['add-wine'];
addForm.addEventListener('submit',function(e){
    e.preventDefault();
 

// create elements
const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li');
const wineName = document.createElement('span');
const deleteBtn = document.createElement('span');

// add text content
wineName.textContent = value;
deleteBtn.textContent = 'delete';

// add classes
wineName.classList.add('name');
deleteBtn.classList.add('delete');

// append to DOM
li.appendChild(wineName);
li.appendChild(deleteBtn);
list.appendChild(li);
});

// delete wine
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// hide wines
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// Serach and filter wine
const searchBar = forms['search-wine'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const wine = list.getElementsByTagName('li');
  Array.from(wine).forEach((wine) => {
    const title = wine.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      wine.style.display = 'block';
    } else {
      wine.style.display = 'none';
    }
  });
});