var BlueDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, ...arguments);
  //this.$node =  $('<span class="dancer blue"></span>');
  this.$node.addClass('blue');
};

BlueDancer.prototype = Object.create(Dancer.prototype);
BlueDancer.prototype.constructor = BlueDancer;

BlueDancer.prototype.step = function() {

    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // $('.blue').rotate({angle:45});
    this.$node.toggle(1000);
};
