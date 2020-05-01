/*Dropdown start*/
$('.dropdown').click(function () {
    $(this).find('.dropdown-menu').slideToggle(300);

});
$('.dropdown').focusout(function () {
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
});

document.addEventListener("mousedown",function(event){
    if(event.target.closest(".dropdown , .dropdown-menu"))
       return;
    $('.dropdown-menu').slideUp();
});

/*Dropdown end*/




function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}





  $('.sideproduct ul').hide();
$(".sideproduct a").click(function () {
  $(this).parent(".sideproduct").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});
  // sidenav dropdown end



  // hamburger 

  var forEach = function (t, o, r) {
      if ("[object Object]" === Object.prototype.toString.call(t))
          for (var c in t)
              Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
      else
          for (var e = 0, l = t.length; l > e; e++)
              o.call(r, t[e], e, t)
  };

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
      forEach(hamburgers, function (hamburger) {
          hamburger.addEventListener("click", function () {
              this.classList.toggle("is-active");
          }, false);
      });
  }

  $('.hamburger').click(function () {

      if ($(this).hasClass('is-active')) {
          $('#mySidenav').css('left', '0px');
      } else {
          $('#mySidenav').css('left', '-250px');
      }
  });


// hamburger end


if ($("input[name='radio-group']").prop("checked")){
    
}

$(document).ready(function(){
    var frm_data = $(".price_check").siblings(".final_all").children(".form-group");
    $(frm_data).children(".form-control").attr("readonly", true);
    $(frm_data).addClass("opacity_disable");
    $(".price_check input:checked").each(function(){
        $(this).parent(".price_check").siblings(".final_all").children(".form-group").children(".form-control").attr("readonly", false);
        $(this).parent(".price_check").siblings(".final_all").children(".form-group").removeClass("opacity_disable");
    })
})

$(document).on('click', '.price_check', function(){
    var frm_data = $(".price_check").siblings(".final_all").children(".form-group");
    $(frm_data).children(".form-control").attr("readonly", true);
    $(frm_data).addClass("opacity_disable");
    $(this).siblings(".final_all").children(".form-group").children(".form-control").attr("readonly", false);
    $(this).siblings(".final_all").children(".form-group").removeClass("opacity_disable");
})