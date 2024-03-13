document.addEventListener('DOMContentLoaded', () => {
    function createElementToContainer(text , className) {
    const container = document.getElementById('container');
   // const container = document.querySelector('#container');
   const newElement = document.createElement('div');
   newElement.innerHTML = text;
   newElement.classList.add(className);
   container.appendChild(newElement);

}
   
createElementToContainer('I am blueviolet ', 'container-child-1');
createElementToContainer('I am red ', 'container-child-2');
createElementToContainer('I am green', 'container-child-3');

});