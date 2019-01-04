AFRAME.registerComponent('init-scene', {
  init: function () {
    var list = document.getElementById('me_parent').querySelectorAll('*');

    for (var i = 0; i < list.length; i++) {
      var elem = list[i];
      // elem.object3D.position.set(i * 2, 0, 0);
      const radius = 2.0;
      const theta = i * Math.PI / (list.length - 1);

      x = radius * Math.cos(theta);
      y = radius * Math.sin(theta);

      elem.object3D.position.set(x, 0, y);
    }

    var fuji = document.getElementById('fuji');
    fuji.object3D.position.set(0, -10, 0)
    setTimeout(() => {
      fuji.setAttribute('animation', "property: object3D.position.y; from: -5; to: 0; dur: 4000; easing: easeOutCubic;");
    }, 10000)
  }
});

