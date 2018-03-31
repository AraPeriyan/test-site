$(document).ready(function() {

    $( "#date" ).datepicker({
        changeMonth: true,
        changeYear: true,
        dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        dayNamesShort: ["Вскр", "Пнд", "Вт", "Ср", "Чтв", "Птн", "Сб"],
        dayNamesMin: ["Вскр", "Пнд", "Вт", "Ср", "Чтв", "Птн", "Сб"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        monthNamesShort: ["Янв", "Фев", "Мрт", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"]
    });
    
    
    $( "#slider-range" ).slider({
          range: true,
          min: 10,
          max: 1000,
          values: [ 50, 400 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] + " км");
          }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " - " + $( "#slider-range" ).slider( "values", 1 ) + " км");
    
    
    /*Dialog window*/
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#help" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
    
    
    
    /* Button */
    $( "input[type=submit]" )
      .button();
    
    
    /*Tabs plugin*/
    $( "#tabs" ).tabs();
    
    
    /*Accordion*/
    $( "#accordion" ).accordion();
    
    
    /*Progressbar*/
    $( "#progressbar" ).progressbar({
      value: 0
    });
    
    $('#opros :radio').change(function(){
        var chRadio = $('#opros :radio:checked').size();
        $( "#progressbar" ).progressbar({
            value: chRadio * 20
        });
        var questCount = $('#opros div[id*=radio]').size();
        $('#answerCount').text('Дано ответов ' + chRadio + ' из ' + questCount);
        if(chRadio < 5){
            $("#my_button").attr('disabled', 'disabled').css('color', '#cc0000');
        }else{
            $("#my_button").attr('disabled', false).css('color', '#2C2C2C');
        }
    });
    
    
    /*Button turn on*/
    var questCount = $('#opros div[id*=radio]').size();
    if(questCount < 5){
        $("#my_button").css('background-color', '#cc0000');
    }
    
    
    /*Autocomplete*/
    var availableTags = [
      "Белгородская область",
      "Волгоградская область",
      "Архангельская область",
      "Ивановская область",
      "Калининградская область",
      "Камчатская область",
      "Курская область",
      "Ленинградская область",
      "Московская область",
      "Новосибирская область",
      "Ростовская область",
      "Самарская область",
      "Саратовская область",
      "Смоленская область",
      "Тамбовская область",
      "Тверская область",
      "Тюменская область",
      "Челябинская область",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    
    
    /*Draggable effect*/
    //$('#forheader, #gallery').draggable();
      
    
    $('div[id*=helmet]').draggable({
        containment : '#bound',
        revert : 'invalid',
        helper : 'clone',
        cursor : 'move'
    });
    
    
    
    /*Basket: Dropable effect*/
    var helmetsCount = 0;
    var summa = 0;
    
    
    
    $('#mycart').droppable({
        accept: '#forHelmets div[id*=helmet]',
        activeClass: 'highlight',
        drop: function( event, ui) {
            var helmet = $(ui.draggable);
            helmetsCount++;
            $('#helmetsCount strong').text(helmetsCount);
            summa = summa + parseInt(helmet.attr('title'));
            $('#helmetsSumm strong').text(summa);
            if (helmetsCount > 0){
                $('#myclear').show();
            }
            
            helmet.fadeOut(200, function(){
                $(this).appendTo('#mycart').fadeIn(1000).find('img').animate({
                    'width' : '90',
                    'height' : '80'
                }, 2000);
            });
        }
    });
    
    $('#forHelmets').droppable({
        accept: '#mycart div[id*=helmet]',
        activeClass: 'highlight',
        drop: function( event, ui) {
            var helmet2 = $(ui.draggable);
            helmetsCount--;
            $('#helmetsCount strong').text(helmetsCount);
            summa = summa - parseInt(helmet2.attr('title'));
            $('#helmetsSumm strong').text(summa);
            if (helmetsCount == 0){
                $('#myclear').hide();
            }
            
            helmet2.fadeOut(200, function(){
                $(this).appendTo('#forHelmets').fadeIn(1000).find('img').animate({
                    'width' : '180',
                    'height' : '160'
                }, 2000);;
            });
        }
    });
    
    
    
    
    /* Sorting */
    
    $( "#sortable" ).sortable({
        placeholder: "ui-state-highlight"
    });
    $( "#sortable" ).disableSelection();
    
    
    
    /* Color selecting */
    
    $( "#selectable" ).selectable();
    
    
    
    
    /* Resizable */
    
    $( "#mytextarea" ).resizable({
      maxHeight: 250,
      maxWidth: 385,
      minHeight: 150,
      minWidth: 385
    });
    
    
    
    /* Effects */
    var options = { percent: 20 };
    
    $('#formHide').click(function() {
        $('#my_form').toggle('blind', 1000);
    });
    
    
    
    /* function effect() */
    $('#my_button').click(function(eventObject) {
        var myDate = $('#date');
        if (myDate.val() == ''){
            myDate.css('background-color','#cc0000').effect('pulsate', 2000).effect('shake', function() {
                myDate.css('background-color','#f6f6f6')
            });
        }
        eventObject.preventDefault();
    });
    
    
    
    /* BG color change */
    $('#formColor').click(function() {
        $('#bigform > fieldset').animate({
            'backgroundColor' : '#19F00E'
        }, 5000);
    });
    
    
    /* Text zoom */
    $('#zoomIn').click(function() {
        $('#tabs p').addClass('forP', 2000);
    });
    
    $('#zoomOut').click(function() {
        $('#tabs p').removeClass('forP', 2000);
    });
    
    $('#zoom').click(function() {
        $('#tabs p').toggleClass('forP', 2000);
        $(this).effect('pulsate', 2000);
    });
    
    $( "#switch" ).click(function(){
        $( ".forP1" ).switchClass( "forP1", "forP2", 2000 );
        $( ".forP2" ).switchClass( "forP2", "forP1", 2000 );
    });
    
  
}); // End of ready