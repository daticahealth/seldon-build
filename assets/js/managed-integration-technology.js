$("document").ready(function(){

    var tab = $('.managed-integration-diagram-nav .tab');
    tab.hover(
      function(){
        $('.managed-integration-diagram-nav .active').removeClass('active');
        $(this).addClass('active');
      },
      function(){
        $('.managed-integration-diagram-nav .active').removeClass('active');
        $(this).addClass('active');
      }
    );
    //
    $('#cloudTool').hover(function(){
        $('.visible-content').removeClass('visible-content');
        $('#cloudContent').addClass('visible-content');
    });
    $('#hitrustTool').hover(function(){
        $('.visible-content').removeClass('visible-content');
        $('#hitrustContent').addClass('visible-content');
    });
    $('#mirthTool').hover(function(){
        $('.visible-content').removeClass('visible-content');
        $('#mirthContent').addClass('visible-content');
    });
    $('#vpnTool').hover(function(){
        $('.visible-content').removeClass('visible-content');
        $('#vpnContent').addClass('visible-content');
    });
    $('#securityTool').hover(function(){
        $('.visible-content').removeClass('visible-content');
        $('#securityContent').addClass('visible-content');
    });
    $('#ehrTool').hover(function(){
        $('.visible-content').removeClass('visible-content');
        $('#ehrContent').addClass('visible-content');
    });
});
