function thisGrid(oneRow = 2) {
    let myGrid = document.querySelector('#grid');
    for (let i = 0; i < oneRow ** 2; i++) {
        let myDiv = document.createElement('div');
        myDiv.classList.add('rDiv');
        myGrid.appendChild(myDiv);
        myGrid.style.gridTemplateColumns = `repeat(${oneRow}, 1fr)`;
        myGrid.style.gridTemplateRows = `repeat(${oneRow}, 1fr)`;

        document.querySelector('.rDiv').addEventListener('mouseenter', function(){
            document.querySelector('.rDiv').style.backgroundColor = 'red';
            });

        document.querySelector('.rDiv').addEventListener('mouseleave', function(){
            document.querySelector('.rDiv').removeAttribute("style");
            });
    }

    myGrid.style.border = '1px solid black';
    myGrid.style.display = 'grid';
    myGrid.style.minHeight = '600px';
    myGrid.style.minWidth = '600px';
}

thisGrid(7);


// iterate