
let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {

  let item = document.createElement('div');

  item.classList.add('item');
  item.id = 'item-' + order;
  item.draggable = true;

  item.addEventListener('dragstart', (event) => {

    return event.dataTransfer.setData('text',event.target.id);

  });

  item.addEventListener('dragend', (event) => {

    return event.dataTransfer.clearData();

  });


  let input = document.createElement('input');
  input.append(item);

  let save_btn = document.createElement('button');
  save_btn.innerHTML('Save');

  save_btn.addEventListener('click', () =>{

    save_btn.error('');

    if(input.value != ''){

      order += 1;

      item.value = input;

      adding = false;

    } else {
      save_btn.error(message);
    }

    save_btn.append(item);

    item.create_item();



  });

};

document.querySelectorAll('.drop').forEach(element => {

  element.addEventListener('drop',(event) => {

    event.preventDefault();
    
    const id = event.dataTransfer.getData(); 
 
  event.target.append(document.getElementById('id'));
     
  element.addEventListener('dragover',(event) => {


  });

  });



});