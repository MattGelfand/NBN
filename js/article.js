 $(document).ready(function () {

            $(".accordian-link").click(function () {
            
                $(".section-list").slideUp("fast");
                
                $(this).find('.expand').removeClass('collapse');
                if ($(this).next().is(":hidden") == true )
                {
                    $('.expand').removeClass('collapse');
                    $(this).next().slideDown("normal")
                    $(this).find('.expand').addClass('collapse');
                }
            }); 
        });
