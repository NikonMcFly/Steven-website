"use strict";

app.controller('HomeCtrl', function($scope){
  console.log($scope.$$listeners);
});

app.directive("javascriptBar", function(){
  return{
    restrict:'E',
    scope:{},
    link: function(scope, element, attr){
      var startColor = '#FC5B3F';
      var endColor = '#A91495';
      // var content = angular.element('#content');
      // content.scroll(function(){
      //   var scroll_top = content.scrollTop();
      // });
      //1020
      
      var circle = new ProgressBar.Circle(".javascript-bar", {
      color: startColor,
      trailColor: '#eee',
      trailWidth: 0,
      duration: 2000,
      easing: 'bounce',
      strokeWidth: 20,
      text: {},

      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        }
      });
      circle.animate(0.8, {
          from: {color: startColor},
          to: {color: endColor}
      });
    }
  }
});

app.directive("sassBar", function(){
  return{
    restrict:'E',
    scope:{},
    link: function(scope, element, attr){
      var startColor = '#FC5B3F';
      var endColor = '#A91495';
      var circle = new ProgressBar.Circle(".sass-bar", {
      color: startColor,
      trailColor: '#eee',
      trailWidth: 0,
      duration: 2000,
      easing: 'bounce',
      strokeWidth: 20,
      text: {},

    // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        }
      });
      circle.animate(0.6, {
          from: {color: startColor},
          to: {color: endColor}
        });
      }
    }
});
app.directive("meanBar", function(){
  return{
    restrict:'E',
    scope:{},
    link: function(scope, element, attr){
      var startColor = '#FC5B3F';
      var endColor = '#A91495';
      var circle = new ProgressBar.Circle(".mean-bar", {
      color: startColor,
      trailColor: '#eee',
      trailWidth: 0,
      duration: 2000,
      easing: 'bounce',
      strokeWidth: 20,
      text: {},

    // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        }
      });
      circle.animate(0.9, {
          from: {color: startColor},
          to: {color: endColor}
        });
    }
  }
});
