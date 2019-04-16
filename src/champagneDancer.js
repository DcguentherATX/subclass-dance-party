var ChampagneDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, ...arguments);
    //this.$node =  $('<span class="dancer blue"></span>');
    this.$node.addClass('champagne');
    this.timeBetweenSteps = 1;
  };
  
  ChampagneDancer.prototype = Object.create(Dancer.prototype);
  ChampagneDancer.prototype.constructor = ChampagneDancer;

  var rotation = 0;
  jQuery.fn.rotate = function(degrees) {
    $(this).css({'transform' : `rotate(${degrees}deg)`});
    return $(this);
 };
  
  ChampagneDancer.prototype.step = function() {
  
      Dancer.prototype.step.call(this);
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
      // $('.blue').rotate({angle:45});


 
        rotation -= 1;

        $('.champagne').rotate(rotation);

  };