var correctCards = 0;
var intentosEmparejamiento = 0;

$(document).ready(function () { 
    //init();
    init2();
});

/* function init() {
    // Reset the game
    correctCards = 0;
    $('#cardPile').html('');
    $('#cardSlots').html('');

    // Create the pile of shuffled cards
    var columnaOrigen = ['Incandescente', 'Halógena', 'De descarga', 'LED'];
    var numbers = [1, 2, 3, 4];
    numbers.sort(function () { return Math.random() - .5 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento' + numbers[i]).appendTo('#cardPile').draggable({
            containment: '#contentEmparejamiento',
            stack: '#cardPile p',
            cursor: 'move',
            revert: true
        });
    }

    // Create the card slots
    var words = ['...', '...', '...', '...'];
    for (var i = 1; i <= words.length; i++) {
        $('<p class="btn btn-warning" style="width:85%;">' + words[i - 1] + '</p>').data('number', i).appendTo('#cardSlots').droppable({
            accept: '#cardPile p',
            hoverClass: 'hovered',
            drop: handleCardDrop
        });
    }

}

function handleCardDrop(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {
        ui.draggable.addClass('correct');
        ui.draggable.draggable('disable');
        $(this).droppable('disable');
        ui.draggable.position({
            of: $(this), my: 'left top', at: 'left top'
        });
        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        ui.draggable.draggable('option', 'revert', false);
        correctCards++; //increment keep track correct cards
    }

    //If all the cards have been placed correctly then
    //display a message and reset the cards for
    //another go
    if (correctCards === 4) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                init();
            }
        })
    }
} */

function init2() {
    // Reset the game
    correctCards = 0;
    $('#cardPile2').html('');
    $('#cardSlots2').html(''); 

    // Create the pile of shuffled cards
    var columnaOrigen = ['Dispositivo hecho para la protección del circuito en caso de haber una sobrecorriente en este.', 'Dispositivo de protección de sobretensiones, muy utilizado para contabilizar la energía e impedir fallas en el sistema.', 'La corriente alcanza un nivel extremadamente superior para su diseño, el alimentador de energía colapsa y los cables que la conforman se destruyen.', 'En una sobrecarga este se calienta de tal manera que el filamento se derrite e interrumpe el paso de energía.', 'Conductor de circuito entre el tablero que protege al circuito y las salidas de alimentación.'];
    var numbers = [1, 2, 3, 4, 5];
    numbers.sort(function () { return Math.random() - .6 });

    for (var i = 0; i < numbers.length; i++) {
        $('<p class="btn btn-warning boton-juego" style="width:100%">' + columnaOrigen[numbers[i]-1] + '</p>').data('number', numbers[i]).attr('id', 'cardEmparejamiento2' + numbers[i]).appendTo('#cardPile2').draggable({
            containment: '#contentEmparejamiento2',
            stack: '#cardPile2 p',
            cursor: 'move',
            revert: true, 
          
        });
    }

    // Create the card slots
    var words = ['...', '...', '...', '...', '...'];
    // Create the card slots
    for (var i = 1; i <= numbers.length; i++) {

        if(i == 1){
            $('<p class="btn btn-danger" style="width:95%; height:120px">...</p>').data('number', i).appendTo('#cardSlots1').droppable({
                accept: '#cardPile2 p',
                hoverClass: 'hovered',
                drop: handleCardDrop2,
                over: function(event, ui) {
                    ui.draggable.draggable('option','revert',false);
                },
                out: function(event, ui) {
                    ui.draggable.draggable('option','revert',true);
                }
            });
    
            $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/switch.png" class="img20"></p></p>').appendTo('#corrosivoJuego')
    
        }

    if(i == 2){
        $('<p class="btn btn-danger" style="width:95%; height:120px">...</p>').data('number', i).appendTo('#cardSlots2').droppable({
            accept: '#cardPile2 p',
            hoverClass: 'hovered',
            drop: handleCardDrop2,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/electric-meter.png" class="img20"></p></p>').appendTo('#toxicoJuego')

    }

    if(i == 3){
        $('<p class="btn btn-danger" style="width:95%; height:120px">...</p>').data('number', i).appendTo('#cardSlots3').droppable({
            accept: '#cardPile2 p',
            hoverClass: 'hovered',
            drop: handleCardDrop2,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/broken-wire.png" class="img20"></p></p>').appendTo('#fuegoJuego');
    }

    if(i == 4){
        $('<p class="btn btn-danger" style="width:95%; height:120px">...</p>').data('number', i).appendTo('#cardSlots4').droppable({
            accept: '#cardPile2 p',
            hoverClass: 'hovered',
            drop: handleCardDrop2,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/fuse.png" class="img20"></p></p>').appendTo('#explosionJuego');
    }

    if(i == 5){
        $('<p class="btn btn-danger" style="width:95%; height:120px">...</p>').data('number', i).appendTo('#cardSlots5').droppable({
            accept: '#cardPile2 p',
            hoverClass: 'hovered',
            drop: handleCardDrop2,
            over: function(event, ui) {
                ui.draggable.draggable('option','revert',false);
            },
            out: function(event, ui) {
                ui.draggable.draggable('option','revert',true);
            }
        });

        $('<p class="justificado p_black" style="border: solid; border-radius: 15px; border-style: dashed; border-color: red;"><img src="assets/img/circuit.png" class="img20"></p></p>').appendTo('#irritanteJuego');
    }

        
    }

}

function handleCardDrop2(event, ui) {

    //Grab the slot number and card number
    var slotNumber = $(this).data('number');
    var cardNumber = ui.draggable.data('number');

    ui.draggable.position({
        of: $(this), my: 'left top', at: 'left top'
    });

    //If the cards was dropped to the correct slot,
    //change the card colour, position it directly
    //on top of the slot and prevent it being dragged again
    if (slotNumber === cardNumber) {

        console.log("Correcta");

        ui.draggable.addClass('correct');
        //ui.draggable.draggable('disable');
        //$(this).droppable('disable');

        //This prevents the card from being
        //pulled back to its initial position
        //once it has been dropped
        //ui.draggable.draggable('option', 'revert', false);
    } else {
        console.log("No es correcta");
        ui.draggable.removeClass('correct');
    }
}

function validarResultado(){

    var correctCards = $("#cardPile2>p.correct").length;

    console.log("correctas: " +correctCards);

    if (correctCards === 5) {
        Swal.fire({
            title: '¡Buen trabajo!',
            text: 'Has arrastrado correctamente todos los elementos',
            icon: 'success',
            showDenyButton: true,            
            confirmButtonText: 'Jugar de nuevo',
            denyButtonText: 'Terminar'
        }).then((result) => {
            if (result.isConfirmed) {
                correctCards = 0;
           
               location.reload();
            
            }
        })
    } else{
        intentosEmparejamiento++;

        if(intentosEmparejamiento >= 2){
            Swal.fire(
                '¡Lo sentimos!',
                'Deberías revisar nuevamente el contenido relacionado a esta unidad de aprendizaje.',
                'warning'
            )
            $(".emparejamiento_oculto").hide();
        } else {
            Swal.fire(
                '¡Lo sentimos!',
                'Puedes intentarlo de nuevo',
                'error'
            )
        }
    }
}


