Ext.setup({
  onReady: function() {
    var content, planetInfo, planetEarth, planetMars;

    planetInfo = new Ext.XTemplate(
      '<h2>{name}</h2>',
      'mass: {mass}<br/>',
      'satelites: {satelites:htmlEncode}',
      '<p>{abstract:ellipsis(100, true)}</p>'
    );

    content = new Ext.Panel({
      fullscreen: true,
      scroll: 'vertical',
      tpl: planetInfo
    });
    
    planetEarth = {
      name: "Earth",
      mass: 1.00,
      satelites: "<The moon>",
      abstract: "Earth (or the Earth) is the third planet from the Sun, and the densest and fifth-largest of the eight planets in the Solar System. It is also the largest of the Solar System's four terrestrial planets. It is sometimes referred to as the World, the Blue Planet, or by its Latin name, Terra."
    };
    
    planetMars  = {
      name: "Mars",
      mass: 0.11,
      satelites: "<Phobos> & <Deimos>",
      abstract: "Mars is the fourth planet from the Sun in the Solar System. The planet is named after the Roman god of war, Mars. It is often described as the 'Red Planet', as the iron oxide prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the volcanoes, valleys, deserts, and polar ice caps of Earth."
    };

    content.update(planetMars);
  }
});
