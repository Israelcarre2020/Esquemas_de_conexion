var arraytruefalse = [false,false,false];

var arraytruefalse2 = [false,false];

function goToActivities() {
    pause_audio();
    $(".divcontenido").animate({ width: 'hide' }); 
    $(".menu-actividades").show(1000); 
    setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
    $(".controls-slide").hide();
}

var intentosJuegoFalsoVerdadero = 0;
var intentosJuegoFalsoVerdadero2 = 0;

$('#validarFalsoVerdadero').off('click').on('click', function(){
    if (arraytruefalse.indexOf(false) != -1) {
        Swal.fire(
            '¡Respuesta Invalida!',
            'Selecciona unicamente lo correcto',
            'error'
        )  
        intentosJuegoFalsoVerdadero++;
        console.log(intentosJuegoFalsoVerdadero);
    }else{
        Swal.fire(
            '¡Has acertado!',
            'Continua con la siguiente actividad',
            'success'
        )    
    }

    if (intentosJuegoFalsoVerdadero > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        )
        intentosJuegoFalsoVerdadero = 0;
        goToActivities(); 
    }  
});



$('#validarFalsoVerdadero2').off('click').on('click', function(){
    if (arraytruefalse2.indexOf(false) != -1) {
        Swal.fire(
            '¡Respuesta Invalida!',
            'Selecciona unicamente lo correcto',
            'error'
        )  
        intentosJuegoFalsoVerdadero2++;
        console.log(intentosJuegoFalsoVerdadero2);
    }else{
        Swal.fire(
            '¡Has acertado!',
            'Continua con la siguiente actividad',
            'success'
        )    
    }

    if (intentosJuegoFalsoVerdadero2 > 1) {
        Swal.fire(
            '¡Has superado el número de intentos!',
            'Revisa los temas de la actividad de aprendizaje y vuelve a intentarlo',
            'warning'
        )
        intentosJuegoFalsoVerdadero2 = 0;
        goToActivities(); 
    }  
});
var numSlide = 54;
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('.hello_world').pwstabs({
       effect: 'slideleft',
       defaultTab: 1
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
        $('#porcentaje_curso').popover({
            container: 'body',
            html: true,
            content:'<div id="percent_curso" class="blue"></div>',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        });
    })

    $('#porcentaje_curso').on('shown.bs.popover', function () {
        var numItems = $('.done').length / 2;
        var porcent = parseFloat((numItems/numSlide) * 100).toFixed( 2 );
        $("#percent_curso").percircle({percent: porcent ,animate: "true"});
    })

    $('#icon_actividades').off('click').on('click', function(){
        if($(".divcontenido").is(':visible')){
            $(".divcontenido").animate({ width: 'hide' }); 
            $(".menu-actividades").show(1000); 
            setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
        }else{
            $(".menu-actividades").hide();
            setTimeout(function() { toggleOptions('.selector'); }, 10);
            $(".divcontenido").animate({ width: 'show' });
        }
    });

    $('.link_actividad').off('click').on('click', function(){
        $(".menu-actividades").hide();
        setTimeout(function() { toggleOptions('.selector'); }, 10);
        $(".divcontenido").animate({ width: 'show' });

        var number_at= $(this).attr("for");

        switch (number_at) {
            case "c1":
                $('#smartwizard').smartWizard("goToStep", 4);
                $('#smartwizard2').smartWizard("goToStep", 4);
            break;
            case "c2":
                $('#smartwizard').smartWizard("goToStep", 17);
                $('#smartwizard2').smartWizard("goToStep", 17);
            break;
            case "c3":
                $('#smartwizard').smartWizard("goToStep", 22);
                $('#smartwizard2').smartWizard("goToStep", 22);
            break;
            case "c4":
                $('#smartwizard').smartWizard("goToStep", 29);
                $('#smartwizard2').smartWizard("goToStep", 29);
            break;
            case "c5":
                $('#smartwizard').smartWizard("goToStep", 39);
                $('#smartwizard2').smartWizard("goToStep", 39);
            break;
            case "c6":
                $('#smartwizard').smartWizard("goToStep", 47);
                $('#smartwizard2').smartWizard("goToStep", 47);
            break;
          default:
            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
            break;
        }
        $(".controls-slide").show();
        $(".divcontenido").css("height","1000px");
    });

    $('#icon_salir').off('click').on('click', function(e){
        window.open('', '_self', '');
        window.close();
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.i').on('mousemove', function () {
        audioPantalla13(1)
        $("#modal_i").modal("show");    
    });

    $('.p').on('mousemove', function () {
        audioPantalla13(2)
        $("#modal_p").modal("show");    
    });

    $('.V').on('mousemove', function () {
        audioPantalla13(3)
        $("#modal_v").modal("show");    
    });
    $('.Porcentaje').on('mousemove', function () {
        audioPantalla13(4)
        $("#modal_porcentaje").modal("show");    
    });

    $('.t').on('mousemove', function () {
        $("#modal_t").modal("show");    
    });
    $('.em').on('mousemove', function () {
        $("#modal_em").modal("show");    
    });
    $('.s').on('mousemove', function () {
        $("#modal_s").modal("show");    
    });
    $('.cu').on('mousemove', function () {
        $("#modal_cu").modal("show");    
    });
    $('.cm').on('mousemove', function () {
        $("#modal_cm").modal("show");    
    });
    $('.nl').on('mousemove', function () {
        $("#modal_nl").modal("show");    
    });
    $('.t2').on('mousemove', function () {
        $("#modal_t2").modal("show");    
    });
    $('.n').on('mousemove', function () {
        $("#modal_n").modal("show");    
    });
    $('.l').on('mousemove', function () {
        $("#modal_n").modal("show");    
    });


    $('.btn41-1').on('click', function () {
        $(".page41").hide()
        $('.page41-1').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });

    $('.btn41-2').on('click', function () {
        $(".page41").hide()
        $('.page41-2').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.btn41-3').on('click', function () {
        $(".page41").hide()
        $('.page41-3').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.btn41-4').on('click', function () {
        $(".page41").hide()
        $('.page41-4').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.btn41-5').on('click', function () {
        $(".page41").hide()
        $('.page41-5').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });

    
    canvas_multimetro();
    canvas_electricidad();  
    canvas_tension();  
    canvas_procedimientos();  

    

    $('#zoom_01').elevateZoom({zoomWindowPosition: 10});
    $("select").imagepicker({
        show_label: true,
        clicked: function(e){
            console.log($(this).val());
        }
    })

    

    $('#smartwizard').smartWizard({
        loader:"show",
        theme:'arrows',
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        },
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        }
    });
    $('#smartwizard2').smartWizard({
        theme:'arrows',
        transition: {
            animation: 'slide-horizontal', // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
            speed: '500', // Transion animation speed
            easing:'' // Transition animation easing. Not supported without a jQuery easing plugin
        },
        toolbarSettings: {
              showNextButton: false, // show/hide a Next button
              showPreviousButton: false, // show/hide a Previous button
              toolbarExtraButtons: [] // Extra buttons to show on toolbar, array of jQuery input/buttons elements
        }
    });


    $('.lampara1').off('click').on('click', function(){
        $(".p-lampara").hide()
        $('.text-lampara1').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.lampara2').off('click').on('click', function(){
        $(".p-lampara").hide()
        $('.text-lampara2').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.lampara3').off('click').on('click', function(){
        $(".p-lampara").hide()
        $('.text-lampara3').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.lampara4').off('click').on('click', function(){
        $(".p-lampara").hide()
        $('.text-lampara4').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });

    $('.plus-1').off('click').on('click', function(){
        $(".p-plus").hide()
        $('.p-plus1').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.plus-2').off('click').on('click', function(){
        $(".p-plus").hide()
        $('.p-plus2').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });
    $('.plus-3').off('click').on('click', function(){
        $(".p-plus").hide()
        $('.p-plus3').show().css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );  ;
    });

    $('#nextSlide').on('click', function () {
        var stepIndex = parseInt($('#smartwizard').smartWizard("getStepIndex"))+1;
         
        switch (stepIndex) {
            case 4:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 17:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 22:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 29:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 39:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            case 47:
                pause_audio();
                $(".divcontenido").animate({ width: 'hide' }); 
                $(".menu-actividades").show(1000); 
                setTimeout(function() { toggleOptions('.selector'); }, 100);//@ sourceURL=pen.js
                $(".controls-slide").hide();
                break;
            default:
                $('#smartwizard2').smartWizard("next");
                $('#smartwizard').smartWizard("next");
                break;
        }
                         
    });
    $('#prevSlide').on('click', function () {
        $('#smartwizard2').smartWizard("prev");
        $('#smartwizard').smartWizard("prev"); 
    });

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        controlAudioSlides(stepIndex);
        switch(stepIndex) {
            default:
            // code block
        }
    });

    $(".tablinks").click(function(){
        var idTabs = $(this).parent().parent().parent().attr("id");        

        $(`#${idTabs}>div>.tabs>button`).removeClass("active");
        $(`#${idTabs}>div>.wrapper_tabcontent>div`).removeClass("active");
        
        $(this).addClass("active");
        $(`#${$(this).attr("data-country")}`).addClass("active");

        audioTabs($(this).attr("data-country"));
    });

    $(".actividadtruefalse label").checkbox({
      checked: "assets/img/cb2-1.png",
      check: "assets/img/cb2-0.png",
      onChange: function(i) {

        switch (i[0].name) {
            case "r1":
              if (i[0].value==="1") {
                  arraytruefalse[0]=true;
              } else {
                  arraytruefalse[0]=false;
              }
              break;
            case "r2":
              if (i[0].value==="1") {
                  arraytruefalse[1]=true;
              } else {
                  arraytruefalse[1]=false;
              }
              break;
            case "r3":
              if (i[0].value==="1") {
                  arraytruefalse[2]=true;
              } else {
                  arraytruefalse[2]=false;
              }
              break;
          
            default:
              //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
              break;
          }
      },
      onLoad: function(i) {
        // do something
      }
    });

    $(".actividadtruefalse2 label").checkbox({
        checked: "assets/img/cb2-1.png",
        check: "assets/img/cb2-0.png",
        onChange: function(i) {
  
          switch (i[0].name) {
              case "r1":
                if (i[0].value==="1") {
                    console.log("respuesta correcta 1");
                    arraytruefalse2[0]=true;
                } else {
                    console.log("respuesta incorrecta 1");
                    arraytruefalse2[0]=false;
                }
                break;
              case "r2":
                if (i[0].value==="0") {
                    console.log("respuesta correcta 2");
                    arraytruefalse2[1]=true;
                } else {
                    console.log("respuesta incorrecta 2");
                    arraytruefalse2[1]=false;
                }
                break;
            
              default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
        },
        onLoad: function(i) {
          // do something
        }
      });

    function canvas_procedimientos() {
        var canvas = new fabric.Canvas('plano-procedimientos');
        var imgElement = 'assets/img/conexion.gif';
        

        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=30;
            oImg.top=0;
            oImg.scaleToHeight(160);
            oImg.scaleToWidth(160);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle'); 
                $("#modal_multimetro1").modal("show");   

            });
            oImg.on('mousemove', function() {
              
            });
        });
        
    }

    function canvas_multimetro() {
        var canvas = new fabric.Canvas('multimetro');
        var imgElement = 'assets/img/multimetro-clavijas-1.png';
        var imgElement2 = 'assets/img/multimetro-clavijas-2.png'; 
        var imgElement3 = 'assets/img/multimetro-clavijas-3.png';
        var imgElement4 = 'assets/img/multimetro-clavijas-4.png';
        var imgElement5 = 'assets/img/multimetro-clavijas-5.png';
        var imgElement6 = 'assets/img/multimetro-clavijas-6.png';
        var imgElement7 = 'assets/img/multimetro-clavijas-7.png';
        var imgElement8 = 'assets/img/multimetro-clavijas-8.png';
        var imgElement9 = 'assets/img/multimetro-clavijas-9.png';
        var imgElement10 = 'assets/img/multimetro-clavijas-10.png';
        var imgElement11 = 'assets/img/multimetro-clavijas-11.png';

        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=21;
            oImg.top=113;
            oImg.scaleToHeight(110);
            oImg.scaleToWidth(110);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('corriente continua');
                audioCanvas(1);       
                $("#modal_multimetro1").modal("show");   

            });

          /*   oImg.on('mousemove', function() {
              audioCanvas(1);
              $("#modal_multimetro1").modal("show");
            }); */
        });

        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=12;
            oImg2.top=238;
            
            oImg2.scaleToHeight(105);
            oImg2.scaleToWidth(105);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                console.log('Prueba de transitores'); 
                audioCanvas(2);  
                $("#modal_multimetro2").modal("show");     
           
            });

 /*            oImg2.on('mousemove', function() {
              $("#modal_multimetro2").modal("show");
            }); */



        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=125;
            oImg3.top=86;
            oImg3.scaleToHeight(107);
            oImg3.scaleToWidth(107);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
              
                audioCanvas(3);  
                $("#modal_multimetro3").modal("show");     
                       
            });
           
        });
        fabric.Image.fromURL(imgElement4, function(oImg4) {
            oImg4.left=158;
            oImg4.top=240;
            oImg4.scaleToHeight(90);
            oImg4.scaleToWidth(90);
            oImg4.selectable = false;
            canvas.add(oImg4);

            oImg4.on('mouseup', function() {
                audioCanvas(4);  
                $("#modal_multimetro4").modal("show");
                console.log('selected a circle');  
                   
            });
            /* oImg4.on('mousemove', function() {
              $("#modal_multimetro4").modal("show");         
            }); */
        });
        fabric.Image.fromURL(imgElement5, function(oImg5) {
            oImg5.left=34;
            oImg5.top=202;
            oImg5.scaleToHeight(110);
            oImg5.scaleToWidth(110);
            oImg5.selectable = false;
            canvas.add(oImg5);

            oImg5.on('mouseup', function() {
                audioCanvas(5);  
                console.log('selected a circle'); 
                $("#modal_multimetro5").modal("show"); 
                            
            });
           /*  oImg5.on('mousemove', function() {
              $("#modal_multimetro5").modal("show");
            }); */
        });
        fabric.Image.fromURL(imgElement6, function(oImg6) {
            oImg6.left=148;
            oImg6.top=123;
            oImg6.scaleToHeight(110);
            oImg6.scaleToWidth(110);
            oImg6.selectable = false;
            canvas.add(oImg6);

            oImg6.on('mouseup', function() {
                audioCanvas(6);  
                console.log('selected a circle'); 
                $("#modal_multimetro6").modal("show");
                       
            });
            /* oImg6.on('mousemove', function() {
              $("#modal_multimetro6").modal("show");     
            }); */
        });
        fabric.Image.fromURL(imgElement7, function(oImg7) {
            oImg7.left=146;
            oImg7.top=198;
            oImg7.scaleToHeight(110);
            oImg7.scaleToWidth(110);
            oImg7.selectable = false;
            canvas.add(oImg7);

            oImg7.on('mouseup', function() {
                audioCanvas(7);  
                console.log('selected a circle'); 
                $("#modal_multimetro7").modal("show");
                      
            });
            /* oImg7.on('mousemove', function() {
              $("#modal_multimetro7").modal("show");      
            }); */
        });
        fabric.Image.fromURL(imgElement8, function(oImg8) {
            oImg8.left=148;
            oImg8.top=181;
            oImg8.scaleToHeight(110);
            oImg8.scaleToWidth(110);
            oImg8.selectable = false;
            canvas.add(oImg8);

            oImg8.on('mouseup', function() {
                audioCanvas(8);  
                console.log('selected a circle'); 
                $("#modal_multimetro8").modal("show");
                          
            });
            /* oImg8.on('mousemove', function() {
              $("#modal_multimetro8").modal("show");
            }); */
        });
        fabric.Image.fromURL(imgElement9, function(oImg9) {
            oImg9.left=76;
            oImg9.top=75;
            oImg9.scaleToHeight(110);
            oImg9.scaleToWidth(110);
            oImg9.selectable = false;
            canvas.add(oImg9);

            oImg9.on('mouseup', function() {
                  
                audioCanvas(9);  
                console.log('selected a circle'); 
                $("#modal_multimetro9").modal("show");       
            });
           /*  oImg9.on('mousemove', function() {
              
            }); */
        });
        fabric.Image.fromURL(imgElement10, function(oImg10) {
            oImg10.left=113;
            oImg10.top=218;
            oImg10.scaleToHeight(110);
            oImg10.scaleToWidth(110);
            oImg10.selectable = false;
            canvas.add(oImg10);

            oImg10.on('mouseup', function() {
                audioCanvas(10);  
                console.log('selected a circle'); 
                $("#modal_multimetro10").modal("show");           
            });
            /* oImg10.on('mousemove', function() {
              console.log('hover a circle');
            }); */
        });
        fabric.Image.fromURL(imgElement11, function(oImg11) {
            oImg11.left=96;
            oImg11.top=229;
            oImg11.scaleToHeight(110);
            oImg11.scaleToWidth(110);
            oImg11.selectable = false;
            canvas.add(oImg11);

            oImg11.on('mouseup', function() {
                audioCanvas(11);  
                console.log('selected a circle'); 
                $("#modal_multimetro11").modal("show");
                     
            });
            /* oImg11.on('mousemove', function() {
              $("#modal_multimetro11").modal("show"); 
            }); */
        });
        

        
    }
     function canvas_electricidad() {

        
        var canvas = new fabric.Canvas('electricidad');
        
        canvas.hoverCursor = 'pointer';
        
         
        var imgElement = 'assets/img/modales_cargas_electricas.png';
        var imgElement2 = 'assets/img/modales_cargas_electricas.png'; 
        var imgElement3 = 'assets/img/plus-info.gif'; 
        var imgElement4 = 'assets/img/plus-info.gif'; 
        var imgElement5 = 'assets/img/btn_carga-electrica1.png'; 
        var imgElement6 = 'assets/img/btn_carga-electrica2.png'; 

        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=21;
            oImg.top=0;
            oImg.scaleToHeight(30);
            oImg.scaleToWidth(30);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle'); 
                $("").modal("show");   

            });
            oImg.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=640;
            oImg2.top=10;
            oImg2.scaleToHeight(30);
            oImg2.scaleToWidth(30);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                console.log('selected a circle');  
                $("").modal("show");
                            
            });
            oImg2.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=640;
            oImg3.top=10;
            oImg3.scaleToHeight(30);
            oImg3.scaleToWidth(30);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
                audioPantalla11(1) 
                $("").modal("show"); 
                            
            });
            oImg3.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement4, function(oImg4) {
            oImg4.left=21;
            oImg4.top=10;
            
            oImg4.scaleToHeight(30);
            oImg4.scaleToWidth(30);
            oImg4.selectable = false;
            canvas.add(oImg4);

            oImg4.on('mouseup', function() {
                
                $("#modal_electrico1").modal("show");  


            });
            oImg4.on('mousemove', function() {
              
            });
        });

        fabric.Image.fromURL(imgElement5, function(oImg5) {
            oImg5.left=0;
            oImg5.top=140;
            oImg5.scaleToHeight(200);
            oImg5.scaleToWidth(200);
            oImg5.selectable = false;
            canvas.add(oImg5);

            oImg5.on('mouseup', function() {
                audioPantalla11(1); 
                $("#modal_electrico1").modal("show");   

            });
            oImg5.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement6, function(oImg6) {
            oImg6.left=430;
            oImg6.top=10;
            oImg6.scaleToHeight(200);
            oImg6.scaleToWidth(200);
            oImg6.selectable = false;
            canvas.add(oImg6);

            oImg6.on('mouseup', function() {
                audioPantalla11(2);   
                $("#modal_electrico2").modal("show");
                            
            });
            oImg6.on('mousemove', function() {
              
            });
        });

        
    }
    

    function canvas_tension() {
        var canvas = new fabric.Canvas('c_tension');
        canvas.hoverCursor = 'pointer';
        var imgElement = 'assets/img/tension1.png';
        var imgElement2 = 'assets/img/tension2.png'; 
        var imgElement3 = 'assets/img/tension3.png'; 

        fabric.Image.fromURL(imgElement, function(oImg) {
            oImg.left=60;
            oImg.top=50;
            oImg.scaleToHeight(200);
            oImg.scaleToWidth(200);
            oImg.selectable = false;
            canvas.add(oImg);

            oImg.on('mouseup', function() {
                console.log('selected a circle'); 
                $('#tensiones').html('<h6 class="font-weight-bold text-center">Alta tensión:</h6> <p class="p_black justificado">Se dice que un tendido es de alta tensión cuando este maneja tensiones mayores o iguales a 57,5 kV y menores o iguales a 230 kV. <br><br>El cual ayuda a la distribución y transporte de energía eléctrica para extensos trayectos, reduciendo las pérdidas e incrementando la potencia transportada. A continuación, torres utilizadas en alta tensión.</p>')
               // $("#modal_tension1").modal("show");   

            });
            oImg.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement2, function(oImg2) {
            oImg2.left=320;
            oImg2.top=130;
            oImg2.scaleToHeight(200);
            oImg2.scaleToWidth(200);
            oImg2.selectable = false;
            canvas.add(oImg2);

            oImg2.on('mouseup', function() {
                console.log('selected a circle');  
                $('#tensiones').html('<h6 class="font-weight-bold text-center">Baja tensión:</h6> <p class="p_black justificado"></p>Se dice que un tendido es de alta baja cuando este maneja tensión nominal mayor o igual a 25 V y menor o igual a 1000 V.<p class="p_black justificado"></p>Para que un hogar pueda consumir energía eléctrica esta se transforma a baja tensión, la cual es consumida por la gran mayoría de los aparatos eléctricos.<p class="p_black justificado">El tipo de estructura a utilizar para el transporte de energía es:</p><ul><li>Poste de hormigón.</li></ul>')

                //$("#modal_tension1").modal("show");
                            
            });
            oImg2.on('mousemove', function() {
              
            });
        });
        fabric.Image.fromURL(imgElement3, function(oImg3) {
            oImg3.left=90;
            oImg3.top=220;
            oImg3.scaleToHeight(200);
            oImg3.scaleToWidth(200);
            oImg3.selectable = false;
            canvas.add(oImg3);

            oImg3.on('mouseup', function() {
                console.log('selected a circle');  
                $('#tensiones').html('<h6 class="font-weight-bold text-center">Media tensión:</h6> <p class="p_black justificado">Se dice que un tendido es de media tensión cuando este maneja   tensión nominal superior a 1000 V e inferior a 57,5 kV. Este tipo de tensión se emplea para conducir la energía eléctrica desde las subestaciones hasta las centrales transformadoras que dan suministro a los barrios.</p><p class="p_black justificado">El tipo de estructura a utilizar para el transporte de energía es:</p><ul><li>Poste metálico de celosía.</li><li>Poste de hormigón.</li></ul>')
                            
            });
            oImg3.on('mousemove', function() {
              
            });
        });
    }

    $("#smartwizard").on("stepContent", function(e, anchorObject, stepIndex, stepDirection) {
        console.log("Here is the content for step " + stepIndex);
        switch(stepIndex) {
            case 2:
                $('#dialog1' ).hide();
                $('#dialog2' ).hide();
                $('#dialog3' ).hide();
/*                $("#dialog1").fadeIn()
                    .css({top:1000,position:'initial'})
                    .animate({top:275}, 800, function() {
                        //callback
                });*/
                setTimeout(function(){ 
                    $( '#dialog1' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialog2' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialog3' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                
            break;
            case 3:
                $('#dialog4' ).hide();
                $('#dialog5' ).hide();
                $('#dialog6' ).hide();
                setTimeout(function(){ 
                    $( '#dialog4' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialog5' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialog6' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
            break;
            case 11:
                $('#divrowbombillo').hide();
                setTimeout(function(){ 
                    $( '#divrowbombillo' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 ); 
                }, 1000);
                  
            break;
            case 13:
                $('#dialogac21' ).hide();
                $('#dialogac22' ).hide();
                $('#dialogac23' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac21' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac22' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac23' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 14:
                $('#dialogac24' ).hide();
                $('#dialogac25' ).hide();
                $('#dialogac26' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac24' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac25' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac26' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 21:
                $('#dialogac31' ).hide();
                $('#dialogac32' ).hide();
                $('#dialogac33' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac31' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac32' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac33' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            case 22:
                $('#dialogac34' ).hide();
                $('#dialogac35' ).hide();
                $('#dialogac36' ).hide();
                setTimeout(function(){ 
                    $( '#dialogac34' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 800);
                setTimeout(function(){ 
                    $( '#dialogac35' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 2000);
                setTimeout(function(){ 
                    $( '#dialogac36' ).show()
                    .css( {'opacity': 0, 'bottom': '-100px' } )
                    .animate( { 'opacity': '1', 'bottom' : 0 }, 1000 );   
                    console.log("Holaaa " + stepIndex);
                }, 4000);
                  
            break;
            default:
            // code block
        }
    });



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
            'q': ' ¿La técnica con roldanas se realiza para las instalaciones en ductos subterráneos?',
            'options': [
              'Verdadero',
              'False',
            ],
            'correctIndex': 0,
            'correctResponse': 'Buen trabajo, continua.',
            'incorrectResponse': 'No es la respuesta'
          },
          {
            'q': '<br> ¿En los tendidos eléctricos ¿Qué niveles de tensión existen?',
            'options': [
              'Alta y baja tensión',
              'Alta, media y baja tensión',
              'Tensión mayor y menor',
            ],
            'correctIndex': 1,
            'correctResponse': 'Respuesta Correcta.',
            'incorrectResponse': 'Sigue Intentanto'
          },
          {
            'q': '<br> Un tendido eléctrico es de alta tensión porque maneja:',
            'options': [

              'Tensiones mayores a 57,5 kV y menores o iguales a 230 kV.', 
              'Tensión nominal superior a 1000 V e inferior a 57,5 kV.', 
              'Tensión nominal mayor o igual a 25 V y menor o igual a 1000 V.'
    
            ],
            'correctIndex': 0,
            'correctResponse': 'Excelente!.',
            'incorrectResponse': 'Profundiza mas en las actidades de aprendizaje'
          }
        ]
       
  
      });








    var wheel = $("#wheel").flipster({
        style: 'wheel',
        spacing: 0,
        start: 0,
        onItemSwitch: function(currentItem, previousItem) {
          console.log('hover a circle'+previousItem);
          $('.wheeldiv p').html($(currentItem).attr("data-flip-title"));
        }
    });

    var flat = $("#flat").flipster({
        style: 'flat',
        spacing: -0.25,
        buttons: true,
        start: 0,
        buttonNext: 'Siguiente',
    });

    // tabs

    var tabLinks = document.querySelectorAll(".tablinks1");
    var tabContent = document.querySelectorAll(".tabcontent1");

    var tabLinks2 = document.querySelectorAll(".tablinks2");
    var tabContent2 = document.querySelectorAll(".tabcontent2");


    tabLinks.forEach(function(el) {
       el.addEventListener("click", openTabs);
    });
    tabLinks2.forEach(function(el) {
       el.addEventListener("click", openTabs2);
    });


    function openTabs(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    function openTabs2(el) {
       var btnTarget = el.currentTarget;
       var country = btnTarget.dataset.country;

       tabContent2.forEach(function(el) {
          el.classList.remove("active");
       });

       tabLinks2.forEach(function(el) {
          el.classList.remove("active");
       });

       document.querySelector("#" + country).classList.add("active");
       btnTarget.classList.add("active");
    }

    $('.carousel').carousel({
      interval: false,
      ride: false
    })
});


function EmpalmeData(valor) {
    

    if(valor == 1){

        console.log("presionado 1");
        $(`#empalme1`).addClass("empalmeActivo");
        $(`#empalme2`).removeClass("empalmeActivo");
        $(`#empalme3`).removeClass("empalmeActivo");
        $(`#empalme4`).removeClass("empalmeActivo");
        $(`#empalme5`).removeClass("empalmeActivo");
        $(`#empalme6`).removeClass("empalmeActivo");
        $('#tipoEmpalme').html('<p class="font-weight-bold">Empalme cola de rata</p><p class="justificado p_black font14">Se emplea cuando los hilos conductores no estarán predispuestos a tensiones elevadas. Generalmente se utiliza las cajas de conexión de salida de los tomacorrientes o interruptores. Al finalizar el empalme en vez de tener cinta aislante debe tener un conector de capuchón.</p><img style= "width: 15rem" class="col-md-12" src="assets/img/empalme_rata.png"></img>')
    }

    if(valor == 2){
        $(`#empalme2`).addClass("empalmeActivo");
        $(`#empalme1`).removeClass("empalmeActivo");
        $(`#empalme3`).removeClass("empalmeActivo");
        $(`#empalme4`).removeClass("empalmeActivo");
        $(`#empalme5`).removeClass("empalmeActivo");
        $(`#empalme6`).removeClass("empalmeActivo");
        console.log("presionado 2");
        $('#tipoEmpalme').html('<p class="font-weight-bold">Empalme Western Unión</p><p class="justificado p_black font14">Se utiliza para tendidos ya que soporta grandes esfuerzos de tensión.</p><img style= "width: 15rem" class="col-md-12" src="assets/img/empalmeWester.png"></img>')
    }
    if(valor == 3){
        $(`#empalme3`).addClass("empalmeActivo");
        $(`#empalme1`).removeClass("empalmeActivo");
        $(`#empalme2`).removeClass("empalmeActivo");
        $(`#empalme4`).removeClass("empalmeActivo");
        $(`#empalme5`).removeClass("empalmeActivo");
        $(`#empalme6`).removeClass("empalmeActivo");
        console.log("presionado 3");
        $('#tipoEmpalme').html('<p class="font-weight-bold">Empalme dúplex</p><p class="justificado p_black font14">Es la combinación de dos empalmes Wester Unión</p><img style= "width: 15rem" class="col-md-12" src="assets/img/empalme_duplex.png"></img>')
    }
    if(valor == 4){
        $(`#empalme4`).addClass("empalmeActivo");
        $(`#empalme1`).removeClass("empalmeActivo");
        $(`#empalme2`).removeClass("empalmeActivo");
        $(`#empalme3`).removeClass("empalmeActivo");
        $(`#empalme5`).removeClass("empalmeActivo");
        $(`#empalme6`).removeClass("empalmeActivo");
        console.log("presionado 4");
        $('#tipoEmpalme').html('</img><p class="font-weight-bold">Empalme de cables en «T» o Derivación Simple:</p>Se utiliza para empalmar dos hilos conductores corren sin interrupción.<p class="justificado p_black font14"></p><img  style= "width: 15rem" class="col-md-12" src="assets/img/empalme_t_derivacion_simple.png">')
    }
    if(valor == 5){
        $(`#empalme5`).addClass("empalmeActivo");
        $(`#empalme1`).removeClass("empalmeActivo");
        $(`#empalme2`).removeClass("empalmeActivo");
        $(`#empalme3`).removeClass("empalmeActivo");
        $(`#empalme4`).removeClass("empalmeActivo");
        $(`#empalme6`).removeClass("empalmeActivo");
        console.log("presionado 5");
        $('#tipoEmpalme').html('<p class="font-weight-bold">Empalme de cables en «T» o Derivación Múltiple:</p><p class="justificado p_black font14">Este empalme se emplea para realizar uniones entre una punta de un cable de derivación a otro que corre de manera continua.</p><img  style= "width: 15rem"class="col-md-12" src="assets/img/empalme_t_derivacion_multiple.png"></img>')
    }
    if(valor == 6){
        $(`#empalme6`).addClass("empalmeActivo");
        $(`#empalme1`).removeClass("empalmeActivo");
        $(`#empalme2`).removeClass("empalmeActivo");
        $(`#empalme3`).removeClass("empalmeActivo");
        $(`#empalme4`).removeClass("empalmeActivo");
        $(`#empalme5`).removeClass("empalmeActivo");
        console.log("presionado 6");
        $('#tipoEmpalme').html('<p class="font-weight-bold">Empalme de Prolongación:</p><p class="justificado p_black font14">Se emplea para uniones de extensión de hilos conductores gruesos.</p><img style= "width: 15rem" class="col-md-12" src="assets/img/empalme_prolongacion.png"></img>')
    }
    
}



$('.card_animada').click(function () {

    var numeroTarjeta = $(this).attr("data-numeroTarjeta");

    $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
    $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');

    var has = $( "#cardFront_" + numeroTarjeta ).hasClass( "card-flip" )

    if (has == true) {
        audioTarjetas(numeroTarjeta);
    }else{
        audioLocation = '';
        reproducirAudio(audioLocation);
    }
 
});


$('.card_animada2').click(function () {
    var numeroTarjeta = $(this).attr("data-numeroTarjeta");

    $('#cardFront_' + numeroTarjeta).toggleClass('card-flip');
    $('#cardBack_' + numeroTarjeta).toggleClass('card-flip');

    var has = $( "#cardFront_" + numeroTarjeta ).hasClass( "card-flip" )

    if (has == true) {
        audioTarjetas(numeroTarjeta);
    }else{
        audioTarjetas('cardFront_' + numeroTarjeta);
        console.log(numeroTarjeta)
    }
});