$(document).ready(function(){
    $(".txtb").on("keyup", function(e){  
        if(e.keyCode == 13 && $(".txtb").val() != ""){
            var task = $("<div class='task'></div>").text($(".txtb").val())
            var del =  $("<i class='fas fa-trash-alt'></i>").click(function(){
                var p = $(this).parent()
                p.fadeOut(function(){
                    p.remove()
                })
            })
            

            var check = $("<i class='fas fa-check'></i>").click(function(){
                var p = $(this).parent()
                p.fadeOut(function(){
                    p.remove()
                    $('.comp').append(p)
                    p.fadeIn()
                    del.click(function(){
                        var p = $(this).parent()
                p.fadeOut(function(){
                    p.remove()
                })
                    })
                })
                $(this).remove()
            })
            
            task.append(del,check)
            $(".notcomp").append(task)

            $(".txtb").val("")
        }
        
    })
})
