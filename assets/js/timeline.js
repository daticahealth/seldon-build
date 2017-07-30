$("document").ready(function(){
    var timeline = $("#timeline");
    var timelineHeight = timeline.height();
    var line = $("#line");

    // This sets the height on the timeline height. This way no matter how tall the content gets, we'll always have the correct height
    line.css({height: timelineHeight})
});
