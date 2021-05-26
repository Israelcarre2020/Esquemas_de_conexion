var audioActivo = true;
var audioActual = new Audio();

/**
 * por sí en algún m
 * 
 * omento se necesita saber el slide actual del smart wizard
 */

function modalRed() {
    $("#modal_red").modal("show");  
}

function audioRedes(params) {

    if(audioActual)
    audioActual.pause();


    switch (params) {
        case 0:
            audioActual = new Audio('assets/voz/U007P005198.mp3');
            break;
            case 1:
                audioActual = new Audio('assets/voz/U007P005200.mp3');
                break;
          case 2:
            audioActual = new Audio('assets/voz/U007P005202.mp3');
            break;
    
        default:
            break;
    }

    if(!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();        
    }

    if(audioActual){
        audioActual.play();
    }

    
}

 function prueba(valor) {

    $("#quiz-restart-btn").click();
    $("#quiz-buttons").hide();


    if(valor == 0){
        $('#quiz2').quiz({
            //resultsScreen: '#results-screen',
           counter: false,
            //homeButton: '#custom-home',
            nextButtonText: 'Suguiente',
            counterFormat: 'Pregunta %current de %total',
            resultsFormat: 'Acertaste %score de %total !',
            restartButtonText: 'Reintentar',
            questions: [
              {
                'q': ' ¿Este pa?',
                'options': [
                  'Primarias y secundarias.',
                  'Primeras, secundarias y terciarias',
                  'Descarga y halógena.',
                  'Ninguna'
                ],
                'correctIndex': 0,
                'correctResponse': 'Buen trabajo, continua.',
                'incorrectResponse': 'No es la respuesta'
              },
              {
                'q': '<br> ¿Es un ejemplo de luz primaria?',
                'options': [
                  'La luna',
                  'El sol',
                  'Un espejo',
                  'Una luciérnaga.'
                ],
                'correctIndex': 1,
                'correctResponse': 'Respuesta Correcta.',
                'incorrectResponse': 'Sigue Intentanto'
              },
              {
                'q': '<br> La luna es un ejemplo de luz secundaria.',
                'options': [
                  'Verdadero',
                  'Falso'
                  
                ],
                'correctIndex': 0,
                'correctResponse': 'Excelente!.',
                'incorrectResponse': 'Profundiza mas en las actidades de aprendizaje'
              },
            ]
          });
    }

    if(valor == 1){
        $('#quiz').quiz({
            //resultsScreen: '#results-screen',
            counter: false,
            //homeButton: '#custom-home',
            nextButtonText: 'Suguiente',
            counterFormat: 'Pregunta %current de %total',
            resultsFormat: 'Acertaste %score de %total !',
            restartButtonText: 'Reintentar',
            questions: [
              {
                'q': ' ¿Cuáles son los tipos de fuentes de luz que existen?',
                'options': [
                  'Primarias y secundarias.',
                  'Primeras, secundarias y terciarias',
                  'Descarga y halógena.',
                  'Ninguna'
                ],
                'correctIndex': 0,
                'correctResponse': 'Buen trabajo, continua.',
                'incorrectResponse': 'No es la respuesta'
              },
              {
                'q': '<br> ¿Es un ejemplo de luz primaria?',
                'options': [
                  'La luna',
                  'El sol',
                  'Un espejo',
                  'Una luciérnaga.'
                ],
                'correctIndex': 1,
                'correctResponse': 'Respuesta Correcta.',
                'incorrectResponse': 'Sigue Intentanto'
              },
              {
                'q': '<br> La luna es un ejemplo de luz secundaria.',
                'options': [
                  'Verdadero',
                  'Falso'
                  
                ],
                'correctIndex': 0,
                'correctResponse': 'Excelente!.',
                'incorrectResponse': 'Profundiza mas en las actidades de aprendizaje'
              },
            ]
           
      
          });
    }

    }
      
 
function onLoadAudio() {
    var stepIndex = $('#smartwizard').smartWizard("getStepIndex");
    controlAudioSlides(stepIndex);
}

function pause_audio() {
    audioActual.pause();
}

function controlAudioSlides(numeroSlide) {

    if(audioActual)
        audioActual.pause();

    switch (numeroSlide) {
        case 1:
            audioActual = new Audio('assets/voz/U007P005001.mp3');
            break;
        case 2:
            audioActual = new Audio('assets/voz/U007P005002.mp3');
            $(`#tabsObjetivos>div>.tabs>button`).removeClass("active");
            $(`#tabsObjetivos>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabObjetivos").addClass("active");
            $(`#Objetivos`).addClass("active");         
            
            
            break;            
        case 3:
            audioActual = new Audio('assets/voz/U007P005005.mp3');
            $(`#tabsAprenderas>div>.tabs>button`).removeClass("active");
            $(`#tabsAprenderas>div>.wrapper_tabcontent>div`).removeClass("active");
            $("#tabUnidad_aprenderas").addClass("active");
            $(`#unidad_aprenderas`).addClass("active");   
                 

            
            break;            
        case 4:
            audioActual = new Audio('assets/voz/U007P005007.mp3');
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            $('#carouselActividadAprendizaje1').carousel(0);
            
            break;            
        case 5:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio();
            break;    
        case 6:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005019.mp3');
            break;                                              
        case 7:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005032.mp3');
            
            break;                                              
        case 8:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005043.mp3');
            //$(".comentariosFrecuencia").hide();           
            
            break;            
        case 9:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
             audioActual = new Audio('assets/voz/U007P005052.mp3');
            
            break;            
        case 10:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005056.mp3');
            
            break;            
        case 11:    
        $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");      
            audioActual = new Audio('assets/voz/U007P005059.mp3');
            break;            
        case 12:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005073.mp3');
            break;
        case 13:  
        $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");    
            audioActual = new Audio('assets/voz/U007P005079.mp3');
            break;            
        case 14:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005080.mp3');
            break;            
        case 15:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
           audioActual = new Audio();
            break;               
        case 16:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades1`).addClass("active_actividad");
            audioActual = new Audio();
            break;            
        case 17:
            audioActual = new Audio('assets/voz/U007P005081.mp3');
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            $('#carouselActividadAprendizaje2').carousel(0);
            break;            
        case 18:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005085.mp3');
            break;            
        case 19:       
        $(`.menu_actidades`).removeClass("active_actividad");
        $(`.menu_actidades2`).addClass("active_actividad");  
            audioActual = new Audio('assets/voz/U007P005091.mp3');
            break;
        case 20:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005093.mp3');
            break;            
        case 21:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades2`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005097.mp3');
            break;                         
        case 22:
            audioActual = new Audio('assets/voz/U007P005100.mp3');
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            $("#carouselActividadAprendizaje3").carousel(0);
            break;                         
        case 23:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005104.mp3');
            
            break;                         
        case 24:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005112.mp3');
            break;                         
        case 25: 
        $(`.menu_actidades`).removeClass("active_actividad");
        $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005122.mp3');
            break;      
        case 26:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005128.mp3');
            
            break;   
        case 27:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005132.mp3');
           
            break; 
        case 28:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades3`).addClass("active_actividad");
           $("#quiz-restart-btn").click();
            $("#quiz-start-btn").click();
            audioActual = new Audio('assets/voz/U007P005133.mp3');
            break;
        case 29:
            
            $("#quiz-restart-btn").click();
            audioActual = new Audio('assets/voz/U007P005136.mp3');
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            $("#carouselActividadAprendizaje4").carousel(0);
            break; 
        case 30:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
           audioActual = new Audio('assets/voz/U007P005140.mp3');
            break;  
        case 31:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005141.mp3');
            break;    
        case 32:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005142.mp3');
            break;    
        case 33:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005148.mp3');           
            break; 
        case 34:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005149.mp3');
            break;   
        case 35:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005150.mp3');
            break; 
        case 36:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005155.mp3');
            break; 
        case 37:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005157.mp3');
            break;
        case 38:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades4`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005158.mp3');
            break;              
        case 39:
            audioActual = new Audio('assets/voz/U007P005159.mp3');
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            $("#carouselActividadAprendizaje5").carousel(0);
            break; 
        case 40:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005163.mp3');
            break;
        case 42:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005169.mp3');
            break; 
        case 43:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005172.mp3');
            break;
        case 44:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005175.mp3');
            break;    
        case 45:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            //$("#quiz-restart-btn").click();
            //$("#quiz-start-btn").click();
            audioActual = new Audio('assets/voz/U007P005176.mp3');
            break;
        case 46:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades5`).addClass("active_actividad");
            $("#quiz-start-btn").click();
            audioActual = new Audio('assets/voz/U007P005177.mp3');
            break;                         
        case 47:
            audioActual = new Audio('assets/voz/U007P005180.mp3');
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades6`).addClass("active_actividad");
            $("#carouselActividadAprendizaje6").carousel(0);
          
            break; 
        case 48:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades6`).addClass("active_actividad");
            audioActual = new Audio();
            audioActual = new Audio('assets/voz/U007P005184.mp3');
            break;
        case 49:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades6`).addClass("active_actividad");
            audioActual = new Audio();
            audioActual = new Audio('assets/voz/U007P005197.mp3');
            break; 
        case 50:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades6`).addClass("active_actividad");
            $('#empalme1').click();
            audioActual = new Audio('assets/voz/U007P005219.mp3');
            break;
        case 51:
            $(`.menu_actidades`).removeClass("active_actividad");
            $(`.menu_actidades6`).addClass("active_actividad");
            audioActual = new Audio('assets/voz/U007P005225.mp3');
            break;  
            case 52:
                $(`.menu_actidades`).removeClass("active_actividad");
                $(`.menu_actidades6`).addClass("active_actividad");
                audioActual = new Audio();
                break;      
                case 53:
                    $(`.menu_actidades`).removeClass("active_actividad");
                    $(`.menu_actidades6`).addClass("active_actividad");
                    audioActual = new Audio();
                    break;                          
                                               
                                               
                             
        default:
            
            break;
    }
    
    if(!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();        
    }

    if(audioActual){
        audioActual.play();
    }

}

$("#audioActivo").click(function() { 
    audioActivoFuncion();
});

function audioActivoFuncion() {
    audioActivo = !audioActivo;
    
    if(!audioActivo) {
        $("#iconoAudioActivo").hide();
        $("#iconoAudioInactivo").show();
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        if (audioActual)
        audioActual.pause();          
    } else {
        $("#iconoAudioInactivo").hide();        
        $("#iconoAudioActivo").show();
        $("#pauseAudio").show();
        $("#resumeAudio").hide();
        if (audioActual)
        audioActual.play();  
    }
}

$("#pauseAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.pause(); 

    $("#pauseAudio").hide();
    $("#resumeAudio").show();
});

$("#resumeAudio").click(function() {

    if (!audioActivo)
        return false;

    if (audioActual)
        audioActual.play();       

    $("#resumeAudio").hide();
    $("#pauseAudio").show();
});

function reproducirAudio(audioLocation) {
    if (audioActual)
        audioActual.pause();    

    audioActual = new Audio(audioLocation);        

    if (!audioActivo) {
        $("#pauseAudio").hide();
        $("#resumeAudio").show();
        return false;
    } else {
        $("#resumeAudio").hide();
        $("#pauseAudio").show();
    }

    if (audioActual)
        audioActual.play();    
}

/**
 * Configuraciones personalizadas para tabs de audio
 */

function audioConceptos(numeroTab) {

    var audioLocation;

    switch (parseInt(numeroTab)) {
        case 1:
            audioLocation = 'assets/voz/U14D011.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D012.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D013.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D014.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 7:
            $('#carouselConceptos').carousel(0);
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 8:
            $('#carouselConceptos_2').carousel(0);
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTarjetas(numero) {

    var audioLocation;

    switch (numero) {
        case '1':
            audioLocation = 'assets/voz/U007P005011.mp3';
            break;
        case '2':
            audioLocation = 'assets/voz/U007P005014.mp3';
            break;
        case '3':
            audioLocation = 'assets/voz/U007P005017.mp3';
            break;
        case '4':
            audioLocation = 'assets/voz/U007P005044.mp3';
            break;
        case '5':
            audioLocation = 'assets/voz/U007P005046.mp3';
            break;
        case '6':
            audioLocation = 'assets/voz/U007P005048.mp3';
            break;
        case '7':
            audioLocation = 'assets/voz/U007P005050.mp3';
            break; 
        case '8':
            audioLocation = 'assets/voz/U007P005086.mp3';
            break;
        case '9':
            audioLocation = 'assets/voz/U007P005088.mp3';
            break;
        case '10':
            audioLocation = 'assets/voz/U007P005090.mp3';
            break;             
        case 'cardFront_5':
            audioLocation = 'assets/voz/U007P005045.mp3';
            break;  
        case 'cardFront_6':
            audioLocation = 'assets/voz/U007P005047.mp3';
            break;
        case 'cardFront_7':
            audioLocation = 'assets/voz/U007P005049.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla5(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005012.mp3';

            break;

        default:
            break;
    }

    setTimeout(function(){ reproducirAudio(audioLocation); }, 600);

}

function audioPantalla5dos(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005015.mp3';

            break;

        default:
            break;
    }

    setTimeout(function(){ reproducirAudio(audioLocation); }, 600);

}

function audioPantalla7(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005033.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005035.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005037.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U007P005039.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U007P005041.mp3';
            break;

        default:
            break;
    }

    setTimeout(function(){ reproducirAudio(audioLocation); }, 600);

}

function audioPantalla11(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005053.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005055.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla12(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005057.mp3';
            break;
        
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla13(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            // audioLocation = 'assets/voz/U007P005061.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005060.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005061.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U007P005062.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U007P005062.2.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U007P005064.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U007P005066.mp3';
            break;   
        case 8:
            audioLocation = 'assets/voz/U007P005068.mp3';
            break;    
        case 9:
            audioLocation = 'assets/voz/U007P005070.mp3';
            break; 
        case 10:
            audioLocation = 'assets/voz/U007P005072.mp3';
            break;         
        
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla14(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005074.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005076.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005078.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla19(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005092.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla23(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005105.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005107.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla25(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005124.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005126.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla26(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005128.2.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005129.mp3';
            break; 
        case 3:
            audioLocation = 'assets/voz/U007P005130.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U007P005131.mp3';
            break;        
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla32(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005143.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005145.mp3';
            break; 
                
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla35(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005151.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005153.mp3';
            break; 
                
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla43(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U007P005172.2.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005173.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005174.mp3';
            break; 
                
        default:
            break;
    }

    reproducirAudio(audioLocation);
}


function audioPantalla16(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla18(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla24(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}


function audioPantalla30(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D144.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D145.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D146.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioPantalla34(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D155.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D157.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla37(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D161.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D163.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D165.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPantalla38(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 1:
            audioLocation = 'assets/voz/U14D172.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D173.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D174.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D175.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}
function audioPasos(numero) {

    var audioLocation;

    switch (parseInt(numero)) {
        case 2:
            audioLocation = 'assets/voz/U14D015.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D016.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D023.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 12:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 13:
            audioLocation = 'assets/voz/U14D026.mp3';
            break;
        case 14:
            audioLocation = 'assets/voz/U14D027.mp3';
            break;
        case 15:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
        case 16:
            audioLocation = 'assets/voz/U14D029.mp3';
            break;
        case 17:
            audioLocation = 'assets/voz/U14D030.mp3';
            break;
        case 18:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 19:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

/**
 * Esta función se llama desde contenido.html, ya que de acuerdo al botón seleccionado
 * se abre un modal. Estos audios corresponden a esos casos específicos:
 */
function audioTipoEquipos(tipoEquipo){
    var audioLocation;

    switch (tipoEquipo) {
        case 'electrodos':
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 'barrajes':
            audioLocation = 'assets/voz/U14D044.mp3';
            break;
        case 'conductores':                
            audioLocation = 'assets/voz/U14D046.mp3';
            break;
        case 'puentes':
            audioLocation = 'assets/voz/U14D048.mp3';
            break;
        case 'conectores':
            audioLocation = 'assets/voz/U14D050.mp3';
            break;
        case 'dispositivo':
            audioLocation = 'assets/voz/U14D052.mp3';
            break;
        default:
            break;
    }
    
    reproducirAudio(audioLocation);
}

function audioComentariosFrecuencia(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D055.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D056.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D057.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D058.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D059.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D060.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D061.mp3';
            break;    
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioCollapsePuntos(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D070.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D072.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D073.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D074.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D075.mp3';
            break;
        default:
            break;
    }         
    
    reproducirAudio(audioLocation);
}

function audioImagenesCA(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D078.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D079.mp3';
            break;
        case 3:
            $("#carouselFrecuencia_2").carousel(0)
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D083.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D084.mp3';
            break;            
        case 6:
            audioLocation = 'assets/voz/U14D085.mp3';
            break;            
        default:
            break;
    }

    reproducirAudio(audioLocation);    
}

function audioTransformadoresTab(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D086.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D087.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D088.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposLinea(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D090.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D091.mp3';
            break;
        case 3:            
            audioLocation = 'assets/voz/U14D092.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposCorriente(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D094.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D095.mp3';
            break;
        case 3:            
            $("#carouselTipoCorriente").carousel(0);
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioTiposConexiones(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D099.mp3';
            break;
        case 2:
            $("#carouselConexionDelta").carousel(0);
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioImanes(opcion){
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D110.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D111.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D112.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D113.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D114.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U14D115.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U14D116.mp3';
            break;
        case 8:
            audioLocation = 'assets/voz/U14D117.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U14D118.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U14D119.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U14D120.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);       
}

function audioElectroImanesDiapositiva(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 0:
            audioLocation = 'assets/voz/U14D132.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D133.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D134.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioElectroImanesTabs(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U14D135.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D136.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D137.mp3';
            break;
        case 4:
            $("#carouselFoucault").carousel(0);
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioCanvas(opcion) {
    var audioLocation;

    switch (parseInt(opcion)) {
        case 1:
            audioLocation = 'assets/voz/U007P005031.mp3'; 
            break;
        case 2:
            audioLocation = 'assets/voz/U14D136.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D137.mp3';
            break;
        case 4:
            $("#carouselFoucault").carousel(0);
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
}

function audioTabs(opcion) {
    var audioLocation;

    switch (opcion) {
        case 'Objetivos':
            audioLocation = 'assets/voz/U007P005002.mp3';
            break;
        case 'Contenido':
            audioLocation = 'assets/voz/U007P005003.mp3';
            break;
        case 'Metodologia':
            audioLocation = 'assets/voz/U007P005004.mp3';
            break;
        case 'unidad_aprenderas':
            audioLocation = 'assets/voz/U007P005005.mp3';
            break;
        case 'unidad_necesitas':
            audioLocation = 'assets/voz/U007P005006.mp3';
            break;
        case 'unidad_sistema':
            audioLocation = 'assets/voz/U007P005094.mp3';
            break;
        case 'unidad_Coeficiente':
            audioLocation = 'assets/voz/U007P005096.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
}

$('#carouselExampleIndicators5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005007.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005008.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U007P005009.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005010.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicatorsCo').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicatorsCo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005059.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005067.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselActividadAprendizaje3').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje3>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D105.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D106.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D107.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D108.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D130.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D131.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D132.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D133.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselActividadAprendizaje5').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselActividadAprendizaje5>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D150.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D151.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D152.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D153.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators4').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators4>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D077.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D078.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselExampleIndicators6').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators6>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005081.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005082.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U007P005083.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005009.mp3';
            break;     
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselExampleIndicators7').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators7>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005100.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005101.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U007P005102.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005009.mp3';
            break;  
        
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators8').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators8>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005136.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005137.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U007P005138.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005009.mp3';
            break;  
        
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})


$('#carouselExampleIndicators9').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators9>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005159.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005160.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U007P005161.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005009.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators10').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators10>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005180.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005181.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U007P005182.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005009.mp3';
            break;  
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicators11').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators11>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D139.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U14D140.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D141.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U14D142.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicatorsSim').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicatorsSim>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005184.2.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005185.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U007P005186.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005187.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U007P005188.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U007P005189.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U007P005190.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U007P005191.mp3';
            break;  
        case 8:
            audioLocation = 'assets/voz/U007P005192.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U007P005193.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U007P005194.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U007P005195.mp3';
            break;
        case 12:
            audioLocation = 'assets/voz/U007P005196.mp3';
            break;                                
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselExampleIndicatorsSim2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicatorsSim2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U007P005205.2.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U007P005206.mp3';
            break;  
        case 2:
            audioLocation = 'assets/voz/U007P005207.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U007P005208.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U007P005209.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U007P005210.mp3';
            break;
        case 6:
            audioLocation = 'assets/voz/U007P005211.mp3';
            break;
        case 7:
            audioLocation = 'assets/voz/U007P005212.mp3';
            break;  
        case 8:
            audioLocation = 'assets/voz/U007P005213.mp3';
            break;
        case 9:
            audioLocation = 'assets/voz/U007P005214.mp3';
            break;
        case 10:
            audioLocation = 'assets/voz/U007P005215.mp3';
            break;
        case 11:
            audioLocation = 'assets/voz/U007P005216.mp3';
            break;
        case 12:
            audioLocation = 'assets/voz/U007P005217.mp3';
            break;                                
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
$('#carouselExampleIndicators15').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselExampleIndicators15>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D178.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D179.mp3';
            break;  
        case 2:
            //audioLocation = 'assets/voz/U14D181.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D181.mp3';
            break; 
        case 4:
            audioLocation = 'assets/voz/U14D182.mp3';
            break;   
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})
////////////////////////////////////////////////////

$('#carouselConceptos').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D017.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D018.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D019.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D020.mp3';
            break;
        case 4:
            audioLocation = 'assets/voz/U14D021.mp3';
            break;
        case 5:
            audioLocation = 'assets/voz/U14D022.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselConceptos_2').on('slid.bs.carousel', function () {
    
    var numeroSlide = $('#carouselConceptos_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D024.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D025.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D028.mp3';
            break;
    
        default:
            break;
    }

    reproducirAudio(audioLocation);    
})

$('#carouselModalAcumuladores').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalAcumuladores>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D031.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D032.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalDinamos').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalDinamos>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D034.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D035.mp3';
            break;        
        case 2:
            audioLocation = 'assets/voz/U14D036.mp3';
            break;        
        case 3:
            audioLocation = 'assets/voz/U14D037.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalCeldas').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalCeldas>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D039.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D040.mp3';
            break;        

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselModalPaneles').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselModalPaneles>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D042.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D043.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D044.mp3';
            break;

        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D063.mp3';
            reproducirAudio(audioLocation);
            break;
        case 1:
            audioLocation = 'assets/voz/U14D064.mp3';
            reproducirAudio(audioLocation);
            break;
        case 5:
            audioLocation = 'assets/voz/U14D065.mp3';
            reproducirAudio(audioLocation);
            break;
        case 9:
            audioLocation = 'assets/voz/U14D066.mp3';
            reproducirAudio(audioLocation);
            break;

        default:
            break;
    }
})

$('#carouselGeneracionCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselGeneracionCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D067.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselTipoCorriente').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselTipoCorriente>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D096.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D097.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselConexionDelta').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselConexionDelta>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D100.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D101.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselMagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselMagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D121.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D122.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D123.mp3';
            break;
        case 3:
            audioLocation = 'assets/voz/U14D124.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselElectromagnetismo').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselElectromagnetismo>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D127.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D129.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D130.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFrecuencia_2').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFrecuencia_2>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D080.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D081.mp3';
            break;
        case 2:
            audioLocation = 'assets/voz/U14D082.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})

$('#carouselFoucault').on('slid.bs.carousel', function () {

    var numeroSlide = $('#carouselFoucault>div>div.active').index();
    var audioLocation;

    switch (numeroSlide) {
        case 0:
            audioLocation = 'assets/voz/U14D138.mp3';
            break;
        case 1:
            audioLocation = 'assets/voz/U14D139.mp3';
            break;
        default:
            break;
    }

    reproducirAudio(audioLocation);
})