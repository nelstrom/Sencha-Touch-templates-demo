Ext.setup({
  onReady: function() {
    var content, planetInfo, planetEarth;

    planetEarth = { name: "Earth", mass: 1.00 };

    // single argument: string
    planetInfo = new Ext.XTemplate(
      '<h2>{name}</h2>mass: {mass}'
    );

    // single argument: array
    planetInfo = new Ext.XTemplate(
      ['<h2>{name}</h2>', 'mass: {mass}']
    );
    
    // multiple arguments: strings
    planetInfo = new Ext.XTemplate(
      '<h2>{name}</h2>',
      "mass: {mass}"
    );

    content = new Ext.Panel({
      fullscreen: true,
      scroll: 'vertical',
      tpl: [
        '<h2>{name}</h2>',
        "mass: {mass}"
      ]
    });
    
    content.update(planetEarth);
  }
});