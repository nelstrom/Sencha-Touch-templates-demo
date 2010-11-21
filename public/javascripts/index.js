Ext.setup({
  onReady: function() {
    var content, planetInfo, planetEarth, planetMars, planets;

    planetInfo = new Ext.XTemplate(
      '<tpl for=".">',
        '<h2>{name}</h2>',
        '<tpl for="moons">',
          '{.} ',
        '</tpl>',
      '</tpl>'
    );

    content = new Ext.Panel({
      fullscreen: true,
      scroll: 'vertical',
      tpl: planetInfo
    });
    
    planetEarth = {
      name: "Earth",
      mass: 1.00,
      moons: ["The moon"]
    };
    
    planetMars  = {
      name: "Mars",
      mass: 0.11,
      moons: ["Phobos", "Deimos"]
    };

    planets = [planetEarth, planetMars]

    content.update(planets);
  }
});
