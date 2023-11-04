"use strict";
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-jugar');
    const player1Radios = document.querySelectorAll('#player1-selection input[type="radio"]');
    const player2Radios = document.querySelectorAll('#player2-selection input[type="radio"]');
    
    function updateRadioButtons() {
        player1Radios.forEach(player1Radio => {
            const correspondingPlayer2Radio = document.querySelector(`#player2-selection input[type="radio"][value="${player1Radio.value}"]`);
            if (correspondingPlayer2Radio) {
                correspondingPlayer2Radio.disabled = player1Radio.checked;
            }
        });

        player2Radios.forEach(player2Radio => {
            const correspondingPlayer1Radio = document.querySelector(`#player1-selection input[type="radio"][value="${player2Radio.value}"]`);
            if (correspondingPlayer1Radio) {
                correspondingPlayer1Radio.disabled = player2Radio.checked;
            }
        });
    }

    player1Radios.forEach(player1Radio => {
        player1Radio.addEventListener('change', updateRadioButtons);
    });

    player2Radios.forEach(player2Radio => {
        player2Radio.addEventListener('change', updateRadioButtons);
    });

    // Initial call to set the disabled state based on the default values
    updateRadioButtons();


    

    // Add an event listener for when the form is submitted
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Create a new FormData object and pass the form element to it
        const formData = new FormData(form);

        // You can now access the form data using formData.get("name") where "name" is the name attribute of the form element
        const difficulty = formData.get('dificultad');
        const player1Name = formData.get('nombre-j1');
        const player1Character = formData.get('ficha-j1');
        const player2Name = formData.get('nombre-j2');
        const player2Character = formData.get('ficha-j2');

        // You can do something with the form data, for example, log it to the console
        // console.log('Difficulty:', difficulty);
        // console.log('Player 1 Name:', player1Name);
        // console.log('Player 1 Character:', player1Character);
        // console.log('Player 2 Name:', player2Name);
        // console.log('Player 2 Character:', player2Character);

        init(difficulty, player1Name, player1Character, player2Name, player2Character);
        form.classList.add('hidden');
        // You can also send the data to a server or perform other actions here

        // Optionally, you can reset the form after processing
        
    });
});