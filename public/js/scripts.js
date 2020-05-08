/*!
    * Start Bootstrap - Freelancer v6.0.1 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
   (function($) {
    "use strict"; // Start of use strict
      var cantidadRespuestasCorrectas1 = 0;
      var cantidadRespuestaIncorrectas1 = 0;
      var cantidadRespuestasCorrectas2 = 0;
      var cantidadRespuestaIncorrectas2 = 0;
      var cantidadRespuestasCorrectas3 = 0;
      var cantidadRespuestaIncorrectas3 = 0;
      var respuestasNivel ={
        nivel1: 1,
        nivel2: 1,
        nivel3: 1
      }
      var ultimoNivelJugado= 1;
      var nivel = "#nivel1"
      var portfolioModal= "#portfolioModal1"
      var respuestaCorrecta = '.respuestaCorrecta1'
      var respuestaIncorrecta = '.respuestaIncorrecta1'
      var chequearRespuestas = '#chequearRespuestas1'
      var RespuestaCorrectaModal = '#RespuestaCorrectaModal1'
      var RespuestaIncorrectaModal= '#RespuestaIncorrectaModal1'
      var volverAIntentar = '#volverAIntentar1'
      var concluirNivel= "#concluirNivel1"

      $('#nivel2').attr('disabled','disabled')
      $('#nivel3').attr('disabled','disabled')
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
   
    $(nivel).click(function(){
      $(portfolioModal).modal();
    });
    
    $(respuestaCorrecta).click(function(){
      cantidadRespuestasCorrectas1++;
      $(respuestaIncorrecta).attr('disabled', true)
      $(respuestaCorrecta).attr('disabled', true)

      $(respuestaCorrecta).removeClass('btn-success')
      $(respuestaCorrecta).addClass('btn-warning')

      $(this).attr('disabled')
      
    });

    $(respuestaIncorrecta).click(function(){
      cantidadRespuestaIncorrectas1++;
      $(respuestaIncorrecta).attr('disabled', true)
      $(respuestaCorrecta).attr('disabled', true)

      $(this).removeClass('btn-success')
      $(this).attr('btn-danger')
      
    });
    
    $(chequearRespuestas).click(function(){

      if( respuestasNivel.nivel1 == cantidadRespuestasCorrectas1 && cantidadRespuestaIncorrectas1 <1){
        $(RespuestaCorrectaModal).modal();
      }
      else{
        $(RespuestaIncorrectaModal).modal();
      }
    });
    
    $(volverAIntentar).click(function (){
      $(respuestaCorrecta).removeClass('btn-secondary')
      $(respuestaCorrecta).addClass('btn-success')

      $(respuestaIncorrecta).attr('disabled', false)
      $(respuestaCorrecta).attr('disabled', false)

      $(respuestaIncorrecta).removeClass('btn-denger')
      $(respuestaIncorrecta).addClass('btn-success')

      $(RespuestaIncorrectaModal).modal('hide');
      cantidadRespuestasCorrectas1 = 0;
      cantidadRespuestaIncorrectas1 = 0;
    })

    $(concluirNivel).click(function (){
      $(nivel).text("Nivel superado")
      $(nivel).attr("disabled",true)
      $(RespuestaCorrectaModal).modal('hide');
      $(portfolioModal).modal('hide');
      ultimoNivelJugado++
      nivel = "#nivel2"
      $(nivel).attr("disabled",false)
      
    })

   
    $("#nivel2").click(function(){
      $("#portfolioModal2").modal();
    });

    $("#chequearRespuestas2").click(function(){

      if( respuestasNivel.nivel2 == cantidadRespuestasCorrectas2 && cantidadRespuestaIncorrectas2 <1){
        $('#RespuestaCorrectaModal2').modal('show');
      }
      else{
        $('#RespuestaIncorrectaModal2').modal('show')
      }
    });

    $('.respuestaCorrecta2').click(function(){
      cantidadRespuestasCorrectas2++;
      $('.respuestaIncorrecta2').attr('disabled', true)
      $('.respuestaCorrecta2').attr('disabled', true)

      $('.respuestaCorrecta2').removeClass('btn-success')
      $('.respuestaCorrecta2').addClass('btn-warning')

      $(this).attr('disabled')
      
    });

    $('.respuestaIncorrecta2').click(function(){
      cantidadRespuestaIncorrectas2++;
      $('.respuestaIncorrecta2').attr('disabled', true)
      $('.respuestaCorrecta2').attr('disabled', true)

      $(this).removeClass('btn-success')
      $(this).attr('btn-danger')
      
    });
    $('#volverAIntentar2').click(function (){
      $('.respuestaCorrecta2').removeClass('btn-secondary')
      $('.respuestaCorrecta2').addClass('btn-success')

      $('.respuestaIncorrecta2').attr('disabled', false)
      $('.respuestaCorrecta2').attr('disabled', false)

      $('.respuestaIncorrecta2').removeClass('btn-denger')
      $('.respuestaIncorrecta2').addClass('btn-success')

      $('#RespuestaIncorrectaModal2').modal('hide');
      cantidadRespuestasCorrectas2 = 0;
      cantidadRespuestaIncorrectas2 = 0;
    })
    $('#concluirNivel2').click(function (){
      $('#nivel2').text("Nivel superado")
      $('#nivel2').attr("disabled",true)
      $('#RespuestaCorrectaModal2').modal('hide')
      $('#portfolioModal2').modal('hide')
      
      $('#nivel3').attr("disabled",false)
      
    })

//--------------------------------------
    $("#nivel3").click(function(){
      $("#portfolioModal3").modal();
    });

    $("#chequearRespuestas3").click(function(){

      if( respuestasNivel.nivel3 == cantidadRespuestasCorrectas3 && cantidadRespuestaIncorrectas3 <1){
        $('#RespuestaCorrectaModal3').modal('show');
      }
      else{
        $('#RespuestaIncorrectaModal3').modal('show')
      }
    });
    
    $('#volverAIntentar3').click(function (){
      $('.respuestaCorrecta3').removeClass('btn-secondary')
      $('.respuestaCorrecta3').addClass('btn-success')

      $('.respuestaIncorrecta3').attr('disabled', false)
      $('.respuestaCorrecta3').attr('disabled', false)

      $('.respuestaIncorrecta3').removeClass('btn-denger')
      $('.respuestaIncorrecta3').addClass('btn-success')

      $('#RespuestaIncorrectaModal').modal('hide');
      cantidadRespuestasCorrectas3 = 0;
      cantidadRespuestaIncorrectas3 = 0;
    })
    $('#concluirNivel3').click(function (){
      $('#nivel3').text("Nivel superado")
      $('#nivel3').attr("disabled",true)
      $('#RespuestaCorrectaModal3').modal('hide')
      $('#portfolioModal3').modal('hide')
      
      $('#nivel3').attr("disabled",false)
      
    })


    $("#chequearRespuestas3").click(function(){

      if( respuestasNivel.nivel3 == cantidadRespuestasCorrectas && cantidadRespuestaIncorrectas <1){
        $('#RespuestaCorrectaModal3').modal();
      }
      else{
        $('#RespuestaIncorrectaModal3').modal();
      }
    });


    
    $('.respuestaCorrecta3').click(function(){
      cantidadRespuestasCorrectas3++;
      $('.respuestaIncorrecta3').attr('disabled', true)
      $('.respuestaCorrecta3').attr('disabled', true)

      $('.respuestaCorrecta3').removeClass('btn-success')
      $('.respuestaCorrecta3').addClass('btn-warning')

      $(this).attr('disabled')
      
    });

    $('.respuestaIncorrecta3').click(function(){
      cantidadRespuestaIncorrectas3++;
      $('.respuestaIncorrecta3').attr('disabled', true)
      $('.respuestaCorrecta3').attr('disabled', true)

      $(this).removeClass('btn-success')
      $(this).attr('btn-danger')
      
    });


    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
