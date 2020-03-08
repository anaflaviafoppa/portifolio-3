


/*SMOTH SCROLL*/


function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}






function copyemail() {
        var copyText = document.getElementById("anaffoppa@gmail.com");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + copyText.value;
      }

      function outFunc() {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
      }


      

      /*COPIA DO TEXTO*/


      function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
      }

      /*function copyemail() {
        /* Get the text field */
       /* var copyText = document.getElementById("myInput");

        /* Select the text field */
       /* copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
       /* document.execCommand("copy");

        /* Alert the copied text */
      /*  alert("Copied the text: " + copyText.value);
      }*/





      /*CHANGE BUTTON*/

      var img_array = ['imagens/plus.svg','imagens/x.svg',];
      i=0;

      function change_btn1(){
        i++;
        document.getElementById("myImg1").src= img_array[i];
        if (i == img_array.length - 1) {
        i = -1;
        }
      }

       function change_btn2(){
        i++;
        document.getElementById("myImg2").src= img_array[i];
        if (i == img_array.length - 1) {
        i = -1;
        }
      }

      function change_btn3(){
        i++;
        document.getElementById("myImg3").src= img_array[i];
        if (i == img_array.length - 1) {
        i = -1;
        }
      }

      function change_btn4(){
        i++;
        document.getElementById("myImg4").src= img_array[i];
        if (i == img_array.length - 1) {
        i = -1;
        }
      }

      /*LINKS - SOCIAL MEDIA */

      function mystack() {
        var win=window.open("https://stackoverflow.com/users/11994495/ana-flavia-foppa", "_blank");
        win.focus();
      }

      function mylinkedin() {
        var win=window.open("https://linkedin.com/in/ana-flavia-foppa-09427ba1/", "_blank");
        win.focus();
      }

       function mygithub() {
        var win=window.open("https://github.com/anaflaviafoppa", "_blank");
        win.focus();
      }
    