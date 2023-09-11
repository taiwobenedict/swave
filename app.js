// Smooth scrolling
$("nav a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top -80}, 500);
  });
  

  
  const header = document.querySelector('header')
  let toggler = document.querySelector('.toggler');
  
  toggler.onclick = ()=> {
    toggler.firstChild.classList.toggle("fa-times")
    toggler.firstChild.classList.toggle("fa-bars")
  }
  