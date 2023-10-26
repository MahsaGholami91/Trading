
// start resizable

(function () {
    "use strict";
  
    // horizontal direction
    (function resizableX() {
      const resizer = document.querySelector(".resizer-x");
      resizer.addEventListener("mousedown", onmousedown);
      resizer.addEventListener("touchstart", ontouchstart);
  
      // for mobile
      function ontouchstart(e) {
        e.preventDefault();
        resizer.addEventListener("touchmove", ontouchmove);
        resizer.addEventListener("touchend", ontouchend);
      }
      function ontouchmove(e) {
        e.preventDefault();
        const clientX = e.touches[0].clientX;
        const deltaX = clientX - (resizer._clientX || clientX);
        resizer._clientX = clientX;
        const l = resizer.previousElementSibling;
        const r = resizer.nextElementSibling;
        // LEFT
        if (deltaX < 0) {
          const w = Math.round(parseInt(getComputedStyle(l).width) + deltaX);
          l.style.flex = `0 ${w < 10 ? 0 : w}px`;
          r.style.flex = "1 0";
        }
        // RIGHT
        if (deltaX > 0) {
          const w = Math.round(parseInt(getComputedStyle(r).width) - deltaX);
          r.style.flex = `0 ${w < 10 ? 0 : w}px`;
          l.style.flex = "1 0";
        }
      }
      function ontouchend(e) {
        e.preventDefault();
        resizer.removeEventListener("touchmove", ontouchmove);
        resizer.removeEventListener("touchend", ontouchend);
        delete e._clientX;
      }
  
      // for desktop
      function onmousedown(e) {
        e.preventDefault();
        document.addEventListener("mousemove", onmousemove);
        document.addEventListener("mouseup", onmouseup);
      }
      function onmousemove(e) {
        e.preventDefault();
        const clientX = e.clientX;
        const deltaX = clientX - (resizer._clientX || clientX);
        resizer._clientX = clientX;
        const r = resizer.previousElementSibling;
        const l = resizer.nextElementSibling;
        // LEFT
        if (deltaX < 0) {
          const w = Math.round(parseInt(getComputedStyle(l).width) + deltaX);
          l.style.flex = `0 ${w < 10 ? 0 : w}px`;
          r.style.flex = "1 0";
        }
        // RIGHT
        if (deltaX > 0) {
          const w = Math.round(parseInt(getComputedStyle(r).width) - deltaX);
          r.style.flex = `0 ${w < 10 ? 0 : w}px`;
          l.style.flex = "1 0";
        }
      }
      function onmouseup(e) {
        e.preventDefault();
        document.removeEventListener("mousemove", onmousemove);
        document.removeEventListener("mouseup", onmouseup);
        delete e._clientX;
      }
    })();
  
    // vertical direction
    (function resizableY() {
      const resizer = document.querySelector(".resizer-y");
      resizer.addEventListener("mousedown", onmousedown);
      resizer.addEventListener("touchstart", ontouchstart);
  
      // for mobile
      function ontouchstart(e) {
        e.preventDefault();
        resizer.addEventListener("touchmove", ontouchmove);
        resizer.addEventListener("touchend", ontouchend);
      }
      function ontouchmove(e) {
        e.preventDefault();
        const clientY = e.touches[0].clientY;
        const deltaY = clientY - (resizer._clientY || clientY);
        resizer._clientY = clientY;
        const t = resizer.previousElementSibling;
        const b = resizer.nextElementSibling;
        // UP
        if (deltaY < 0) {
          const h = Math.round(parseInt(getComputedStyle(t).height) + deltaY);
          t.style.flex = `0 ${h < 10 ? 0 : h}px`;
          b.style.flex = "1 0";
        }
        // DOWN
        if (deltaY > 0) {
          const h = Math.round(parseInt(getComputedStyle(b).height) - deltaY);
          b.style.flex = `0 ${h < 10 ? 0 : h}px`;
          t.style.flex = "1 0";
        }
      }
      function ontouchend(e) {
        e.preventDefault();
        resizer.removeEventListener("touchmove", ontouchmove);
        resizer.removeEventListener("touchend", ontouchend);
        delete e._clientY;
      }
  
      // for desktop
      function onmousedown(e) {
        e.preventDefault();
        document.addEventListener("mousemove", onmousemove);
        document.addEventListener("mouseup", onmouseup);
      }
      function onmousemove(e) {
        e.preventDefault();
        const clientY = e.clientY;
        const deltaY = clientY - (resizer._clientY || clientY);
        resizer._clientY = clientY;
        const t = resizer.previousElementSibling;
        const b = resizer.nextElementSibling;
        // UP
        if (deltaY < 0) {
          const h = Math.round(parseInt(getComputedStyle(t).height) + deltaY);
          t.style.flex = `0 ${h < 10 ? 0 : h}px`;
          b.style.flex = "1 0";
        }
        // DOWN
        if (deltaY > 0) {
          const h = Math.round(parseInt(getComputedStyle(b).height) - deltaY);
          b.style.flex = `0 ${h < 10 ? 0 : h}px`;
          t.style.flex = "1 0";
        }
      }
      function onmouseup(e) {
        e.preventDefault();
        document.removeEventListener("mousemove", onmousemove);
        document.removeEventListener("mouseup", onmouseup);
        delete e._clientY;
      }
    })();
  })();
  

  // End resizable


//   Start dark mode

$(document).ready(function () {
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    })
});

function colorModePreview(ele) {
    if ($(ele).prop("checked") == true) {
        $('body').addClass('dark-preview');
        $('body').removeClass('white-preview');
    }
    else if ($(ele).prop("checked") == false) {
        $('body').addClass('white-preview');
        $('body').removeClass('dark-preview');
    }
}

// End dark mode

// for drag drop between tables

function mgo(classname) {
    const divs = document.querySelectorAll('.tr-row');

    let firstFound = false;
    let stopFound = false;

    for (const div of divs) {

        console.log(div.classList);
        console.log(classname);
        console.log(div.classList.contains(classname));
        if (div.classList.contains(classname)) {
            firstFound = true;
        } else if (firstFound && div.classList.contains('category')) {
            stopFound = true;
            break;
        } else if (firstFound && !stopFound) {
            if (div.classList.contains('hidden')) {
                div.classList.remove('hidden');
            } else {
                div.classList.add('hidden');
            }

        }
    }
}

// for drag and drop
$(document).ready(function () {
    $(".table-drag").tableDnD();

// for drop dow watch list
    $('.dropdown-toggle').dropdown();



});
// dropdown for ... icon
function toggleSettingDropdown() {
    var dropdown = document.getElementById("setting-dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}


//    remove row of the table
$(document).ready(function() {
    $('.remove-icon').click(function() {
        $(this).closest('tr').remove();
    });
});

// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


// display none for watchlist
function pageToggle() {
    $('#hideWatchlist').toggleClass('hideWatchlist');

    $('.toggel-page').toggleClass('active-right-menu');

};

// for value text in top of the page
$(document).ready(function () {
    $('.coin-name').click(function () {
        var rowData = $(this).text() + '|' + "نقره";
// console.log($(this).text());
        $('#textInput').text(rowData);
    });
});