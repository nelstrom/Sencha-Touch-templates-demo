Ext.setup({
  onReady: function() {
    var helperFunctions, content, planetInfo, planets, jupiterMoons, saturnMoons, uranusMoons, neptuneMoons;

    var anotherTemplate = new Ext.XTemplate(
      '<tpl for=".">',
        '{name}',
        '{[this.listSeparator(xindex,count)]}',
      '</tpl>',
      helperFunctions
    );

    helperFunctions = {
      hasMoons: function(moons) {
        return moons.length > 0
      },
      listClasses: function(position, size) {
        var classes = [];
        if (position%2 === 0)  { classes.push("even") }
        else                   { classes.push("odd") };
        if (position === 1)    { classes.push("first") };
        if (position === size) { classes.push("last") };
        return classes.join(" ");
      },
      listSeparator: function(position, size) {
        if (position === size) { return "" }
        else if (position < size-1) { return ", "}
        else { return " and "};
      }
    }

    planetInfo = new Ext.XTemplate(
      '<ul id="planetList">',
      '<tpl for=".">',
        '<li class="{[this.listClasses(xindex, xcount)]}">',
          '<h2>{name} ({#})</h2>',
          'mass: {mass}<br/>',
          '<tpl if="moons.length === 0">',
            'no moons',
          '</tpl>',
          '<tpl if="this.hasMoons(moons)">',
            'moons: ',
            '<tpl for="moons">',
              '<a href="#/{[parent.name]}/{[values]}">{.}</a> ({#})',
              '{[this.listSeparator(xindex, xcount)]}',
            '</tpl>',
          '</tpl>',
        '</li>',
      '</tpl>',
      '</ul>',
      helperFunctions
    );

    content = new Ext.Panel({
      fullscreen: true,
      scroll: 'vertical',
      tpl: planetInfo
    });

    jupiterMoons = ["Metis", "Adrastea", "Amalthea", "Thebe", "Io", "Europa", "Callisto", "Themisto", "Leda", "Himalia", "Lysithea", "Elara","S/2000 J 11", "Carpo", "S/2003 J 12", "Euporie", "S/2003 J 3", "S/2003 J 18", "Thelxinoe", "Euanthe", "Helike", "Orthosie", "Iocaste", "S/2003 J 16", "Praxidike", "Harpalyke", "Mneme", "Hermippe", "Thyone", "Ananke", "Herse", "Aitne", "Kale", "Taygete", "S/2003 J 19", "Chaldene", "S/2003 J 15", "S/2003 J 10", "S/2003 J 23", "Erinome", "Aoede", "Kallichore", "Kalyke", "Carme", "Callirrhoe", "Eurydome", "Pasithee", "Kore", "Cyllene", "Eukelade", "S/2003 J 4", "Pasiphaë", "Hegemone", "Arche", "Isonoe", "S/2003 J 9", "S/2003 J 5", "Sinope", "Sponde", "Autonoe", "Megaclite", "S/2003 J 2"];
    saturnMoons = ["Pan", "Daphnis", "Atlas", "Prometheus", "Pandora", "Epimetheus", "Janus", "Aegaeon", "Mimas", "Methone", "Anthe", "Pallene", "Enceladus", "Tethys", "Telesto", "Calypso", "Dione", "Helene", "Polydeuces", "Rhea", "Titan", "Hyperion", "Iapetus", "Kiviuq", "Ijiraq", "Phoebe", "Paaliaq", "Skathi", "Albiorix", "S/2007 S 2", "Bebhionn", "Erriapus", "Skoll", "Siarnaq", "Tarqeq", "S/2004 S 13", "Greip", "Hyrrokkin", "Jarnsaxa", "Tarvos", "Mundilfari", "S/2006 S 1", "S/2004 S 17", "Bergelmir", "Narvi", "Suttungr", "Hati", "S/2004 S 12", "Farbauti", "Thrymr", "Aegir", "S/2007 S 3", "Bestla", "S/2004 S 7", "S/2006 S 3", "Fenrir", "Surtur", "Kari", "Ymir", "Loge", "Fornjot"];
    uranusMoons = ["Cordelia", "Ophelia", "Bianca", "Cressida", "Desdemona", "Juliet", "Portia", "Rosalind", "Cupid", "Belinda", "Perdita", "Puck", "Mab", "Miranda", "Ariel", "Umbriel", "Titania", "Oberon", "Francisco", "Caliban", "Stephano", "Trinculo", "Sycorax", "Margaret", "Prospero", "Setebos", "Ferdinand"];
    neptuneMoons = ["Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"];

    planets = [
      { name: "Mercury", mass: 0.06 },
      { name: "Venus", mass: 0.82, moons: [] },
      { name: "Earth", mass: 1.00, moons: ["The moon"] },
      { name: "Mars", mass: 0.11, moons: ["Phobos", "Deimos"] },
      { name: "Jupiter", mass: 317.8, moons: jupiterMoons },
      { name: "Saturn", mass: 95.2, moons: saturnMoons },
      { name: "Uranus", mass: 14.6, moons: uranusMoons },
      { name: "Neptune", mass: 17.2, moons: neptuneMoons },
    ];


    content.update(planets);
  }
});
