var lnbUI = {
  clickE: function(target, speed) {
    // var _self = this;
    var $target = $(target);
    // _self.speed = speed || 300;
      
    $target.each(function() {
      if($(this).find('> ul').length > 0) {
          return true;
      }
      $(this).addClass('noDepth');
    });
      
    $target.on('click', '.openDepth', function() {
      var $this = $(this); // a
      var $depthTarget = $this.parents('.commonDepthInner').next(); // div
      
      if(!$this.parent('li').hasClass('noDepth')) {
          if($depthTarget.css('display') == 'none') {
              $depthTarget.slideDown();
              $this.parent().addClass('on');
          } else {
              $depthTarget.slideUp();
              $this.parent().removeClass('on');
          }
      } else {
        return false;
      }
      return false;
    });
  }
}            

lnbUI.clickE('.lnb li', 300);