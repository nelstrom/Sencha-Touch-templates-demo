Ext.setup({
  onReady: function() {
    var content, planetInfo, planetEarth, planetMars;

    planetInfo = new Ext.Template(
      '<h2>{name}</h2>',
      'mass: {mass}'
    );

    content = new Ext.Panel({
      fullscreen: true,
      scroll: 'vertical',
      tpl: planetInfo
    });
    
    planetEarth = { name: "Earth", mass: 1.00 };
    planetMars  = { name: "Mars",  mass: 0.11 };

    content.update(planetEarth);
  }
});
