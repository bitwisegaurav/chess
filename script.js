$document.ready(() => {  
    $("#reset").click(() => {
        // console.log($(".board").html());
        $(".board").toggleClass("secondturn");
    })
})