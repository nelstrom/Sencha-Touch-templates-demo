Ext.setup({
  onReady: function() {
    var content, planetInfo, planetMercury, planetVenus, planetEarth, planetMars, planets;

    planetInfo = new Ext.XTemplate(
      '<tpl for=".">',
        '<h2>{name}</h2>',
        '<tpl if="moons.length === 0">',
          'no moons',
        '</tpl>',
        '<tpl if="moons.length &gt; 0">',
          'moons: ',
          '<tpl for="moons">',
            '{.} ',
          '</tpl>',
        '</tpl>',
      '</tpl>'
    );

    content = new Ext.Panel({
      fullscreen: true,
      scroll: 'vertical',
      tpl: planetInfo
    });

    planetMercury = {
      name: "Mercury",
      mass: 0.06,
      moons: []
    };

    planetVenus = {
      name: "Venus",
      mass: 0.82,
      moons: []
    };

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

    planets = [planetMercury, planetVenus, planetEarth, planetMars]

    content.update(planets);
  }
});
