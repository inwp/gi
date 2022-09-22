//for filter listof book
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
// for document scroll
$( document ).ready(function() {
var $window = $(window);
function scroll_elements(){
  var scroll = $window.scrollTop();
  var scrollLayer1 = scroll/1.4;
  var scrollLayer2 = scroll/1.2;
  
  $(".layer1").css(
    "-webkit-transform","translate3d(0," +  scrollLayer1  + "px,0)",
            "transform","translate3d(0," +  scrollLayer1  + "px,0)"
  );
  $(".layer2").css(
    "-webkit-transform","translate3d(0," +  scrollLayer2  + "px,0)",
            "transform","translate3d(0," +  scrollLayer2  + "px,0)"
  );
}

$window.scroll(scroll_elements);
});
