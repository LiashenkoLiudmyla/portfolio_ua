// https://api.telegram.org/botTOKEN/getUpdates 

$('#button-footer').on('click', function(e){
    //отмена перезагрузки сайта при нажатии на кнопку
    e.preventDefault();
    //пишем переменные и берем из input значения, которые прописали + обрезаем боковые отступы
    let name = $('#name-footer').val().trim();
   
    let telefon = $('#telefon-footer').val().trim();

    //делаем валидацию по отправке пустой строки на сервер 
    if(name == ""){
        $('#error-name-footer').text('Введіть будь ласка ПІП');
        //если у нас какая-то ошибка, то код перестает работать дальше (отправка на сервер не осуществляется)
        return false
    }else if(telefon == ""){
        $('#error-telefon-footer').text('ВВедіть будь ласка телефон');
                //если у нас какая-то ошибка, то код перестает работать дальше (отправка на сервер не осуществляется)
        return false
    }
    
  
    //отправка запроса на сервер - php
    $.ajax({
        // куда отправляем
        url: 'ajax/telegram.php',
        //какой метод используем ( у нас просто отправка материала)
        type: 'POST',
        //отменяем кеширование
        cache: false,
        // какие данные отправляем
        data: {'email': email, 'name': name, 'message': message,'telefon': telefon,}, 
        // что именно отправляем
        dataType: 'html',
        // перед тем как отправить мы делаем кнопку неактивной, чтобы пользователь не смог сделать миллион отправок
        beforeSend: function(){
            $('#button-footer').prop('disabled', true)
        },
        // при успешной отправке делаем такие действия
        success: function(){

            $('.modal-overlay-footer').fadeIn();
                 $('#name-footer').val('');
            $('#telefon-footer').val('');
            $('#error-name-footer').text('');
            $('#button-footer').prop('disabled', false)
           
            $('#error-telefon-footer').text('');
           
        }
    })
})




// при нажатті на хрестик закривається вікно в footerі
$('.close').on('click',function(){
    $(this).parents('.modal-overlay-footer').fadeOut()
})
$('#open-modal-footer').on('click',function(){
    $('.modal-overlay-footer').fadeIn()
})
