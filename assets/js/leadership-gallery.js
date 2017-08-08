// leadership gallery tab management
$("[data-tabs]").on("change.zf.tabs", function(event, tab) {
    var tabID = $(tab).attr('id');
    // console.log("ID is: " + tabID);
    $(".lg-nav--item").removeClass("is-first");
});
