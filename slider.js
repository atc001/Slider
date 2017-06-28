$(document).ready(function() {

    var sliderHtml = "";
    var sliderData;
    var height = "500";

    initializeSlider();
    createSlider();
    render();

    function createSlider() {
        sliderHtml += "<div id='slider-container' style='display:flex;flex-direction:row;overflow:hidden;'>"
        for (var i = 0; i < sliderData.length; i++) {
            var display;
            if(i == 0) {
                display = "display:flex;justify-content:center";
            } else {
                display = "display:none";
            }
            sliderHtml += "<div style='width:100%;height:500px;" +  display + "'>";
            sliderHtml += "<img src='" + $(sliderData[i])[0].src + "' style='height:" + height + "px;width:auto;'>";
            sliderHtml += "</div>"
        }
        sliderHtml += "</div>"
        sliderHtml += "<button data-action='left'><</button>";
        sliderHtml += "<button data-action='right'>></button>";
    }

    function initializeSlider() {
        // Load the html hook
        sliderData = $('#slider-container img');

        // If the hook is broken, throw error to stop script
        if(sliderData.length == 0) {
            throw "Erreur de selection";
        }
        $('#slider-container').remove();
    }
    
    function render() {
        $('body').append(sliderHtml);
    }
});