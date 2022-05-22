$(function(){

    $('.list__inner .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.list__inner').find('.tab__item').removeClass('active-tab').hide();
            $('.list__inner .tabs').find('.tab').removeClass('tab--active');
            $(this).addClass('tab--active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });
        
});

function openReview(evt, cityName) {
  // Объявить все переменные
  var i, tabcontent, tablinks;

  // Получить все элементы с помощью class="tabcontent" и спрятать их
  tabcontent = document.getElementsByClassName("reviews__tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Получить все элементы с помощью class="tablinks" и удалить class "active"
  tablinks = document.getElementsByClassName("reviews__tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" reviews__tab-links--active", "");
  }

  // Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " reviews__tab-links--active";  
}

document.getElementById("defaultOpen").click();
