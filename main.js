$(document).ready(function() {
    $("#design").click(function(){
      $("#design-showing").toggle();
      $(".hide-design-image").toggle();
    })
  
    $("#development").click(function(){
      $("#development-showing").toggle();
      $(".hide-development-image").toggle();
    })
  
    $("#productManagement").click(function(){
      $("#product-management-showing").toggle();
      $(".hide-product-management").toggle();
    });
    
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#port1").show();
    }).mouseout(function(){
      $("#port1").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#port2").show();
    }).mouseout(function(){
      $("#port2").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#port3").show();
    }).mouseout(function(){
      $("#port3").hide();
    });
  });
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#port4").show();
    }).mouseout(function(){
      $("#port4").hide();
    });
  });
  $(".rep").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'})
  })
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#port5").show();
    }).mouseout(function(){
      $("#port5").hide();
    });
    $("#work6").mouseover(function(){
      $("#port6").show();
    }).mouseout(function(){
      $("#port6").hide();
    });
    $("#work7").mouseover(function(){
      $("#port7").show();
    }).mouseout(function(){
      $("#port7").hide();
    });
    $("#work8").mouseover(function(){
      $("#port8").show();
    }).mouseout(function(){
      $("#port8").hide();
    });
  });
  $(document).ready(function(){
    $("form#contactforms").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", We have gotten your response. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
    });
  });
});