var cosmos = [sun, mercury, venus, earth, mars, jupiter, saturn, neptune, uranus, pluto, kuiperbelt, oortcloud];

//look for examples
//layer shapes
//focus entirely on visuals


var sun = {
    id: 0000,
    basics: {
        name: 'the sun',
        latin: 'sol',
        alts: ['helios'],
        class: 'star',
        type: 'dwarf',
        color: 'white',
        spectral: 'g2v',
        struc: 'photospheric',
        hex: '&#9737;',
    },
    myth: {
        name: 'Helios',
        deets: "God of the Sun",
        story: "He is described as the son of Hyperion and Theia, and as a brother of Selene and Eos. From his father, he is frequently called Hyperionides, or Hyperion, the latter of which is an abridged form of the patronymic, Hyperionion. In the Homeric hymn on Helios, he is called a son of Hyperion and Euryphaessa. Homer describes Helios as giving light both to gods and men: he rises in the east from Oceanus, though not from the river, but from some lake or bog (λίμνη, limnē) formed by Oceanus, rises up into heaven, where he reaches the highest point at noon time, and then he descends, arriving in the evening in the darkness of the west, and in Oceanus.",
        quote: "But this visible disc also, third in rank, is clearly, for the objects of sense-perception the cause of preservation, and this visible Helios is the cause for the visible gods of just as many blessings as we said mighty Helios bestows on the intellectual gods. And of this there are clear proofs for one who studies the unseen world in the light of things seen. For in the first place, is not light itself a sort of incorporeal and divine form of the transparent in a state of activity? And as for the transparent itself, whatever it is, since it is the underlying basis, so to speak, of all the elements, and is a form peculiarly belonging to them, it is not like the corporeal or compounded, nor does it admit qualities peculiar to corporeal substance. You will not therefore say that heat is a property of the transparent, or its opposite cold, nor will you assign to it hardness or softness or any other of the various, attributes connected with touch or taste or smell; but a nature of this sort is obvious to sight alone, since it is brought into activity by light. And light is a form of this substance, so to speak, which is the substratum of and coextensive with the heavenly bodies. And of light, itself incorporeal, the culmination and flower, so to speak, is the sun's rays."
    },
    history: {
        disc: 'ancient',
        discby: 'ancients',
        life: false
    },
    stats: {
        mass: 1.9891,
        diam: 1392700000,
        dens: 150,
        grav: 274,
        velo: 615,
        perhelion: 0,
        aphelion: 0,
        mag: 4.83,
        lum: 3.828,
        comp: ['h', 'he', 'oxygen']
    },
    temp: {
        low: 5600,
        high: 15000000
    },
    time: {
        day: 720,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: true,
        count: 2,
        quality: 'dust'
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var mercury = {
    id: 1000,
    basics: {
        name: 'mercury',
        latin: 'mercurius',
        alts: ['swift planet', 'stilbon', 'hermes'],
        class: 'planet',
        type: 'terrestrial',
        color: 'gray',
        spectral: '',
        struc: 'metallic',
        hex: '&#128784;',
    },
    myth: {
        name: 'Mercury',
        deets: "God of Speed",
        story: "Mercury is a major god in Roman religion and mythology, being one of the 12 Dii Consentes within the ancient Roman pantheon. He is the god of financial gain, commerce, eloquence, messages, communication (including divination), travelers, boundaries, luck, trickery, and thieves; he also serves as the guide of souls to the underworld.",
        quote: "These words he gave, and summoned Maia's son, the herald Mercury, who earthward flying, should bid the Tyrian realms and new-built towers welcome the Trojan waifs; lest Dido, blind to Fate's decree, should thrust them from the land. He takes his flight, with rhythmic stroke of wing, across the abyss of air, and soon draws near unto the Libyan mainland. He fulfills his heavenly task; the Punic hearts of stone grow soft beneath the effluence divine; and, most of all, the Queen, with heart at ease awaits benignantly her guests from Troy."
    },
    hist: {
        disc: 'ancient',
        discby: 'ancients',
        life: false
    },
    stats: {
        mass: 0.33,
        diam: 4.879,
        dens: 5.429,
        grav: 3.7,
        velo: 4.3,
        perhelion: 46,
        aphelion: 69.8,
        mag: -0.4,
        lum: 0,
        comp: ['o', 'na', 'mg']
    },
    temp: {
        low: -184,
        high: 427
    },
    time: {
        day: 4222,
        orbit: 88,
    },
    distance: {
        km: 57.9,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var venus = {
    id: 2000,
    basics: {
        name: 'venus',
        latin: 'venus',
        alts: ['evening star', 'morning star'],
        class: 'planet',
        type: 'terrestrial',
        color: 'white',
        spectral: '',
        struc: 'rocky',
        hex: '&#9792;',
    },
    myth: {
        name: 'Venus',
        deets: "Goddess of Love and Beauty",
        story: "Venus is a Roman goddess, whose functions encompassed love, beauty, desire, sex, fertility, prosperity, and victory. In Roman mythology, she was the ancestor of the Roman people through her son, Aeneas, who survived the fall of Troy and fled to Italy. Julius Caesar claimed her as his ancestor. Venus was central to many religious festivals, and was revered in Roman religion under numerous cult titles.",
        quote: "Could any State on Earth Immortal be, Venice by Her rare Government is She; Venice Great Neptunes Minion, still a Mayd, Though by the warrlikst Potentats assayed; Yet She retaines Her Virgin-waters pure, Nor any Forren mixtures can endure; Though, Syren-like on Shore and Sea, Her Face Enchants all those whom once She doth embrace, Nor is ther any can Her bewty prize But he who hath beheld her with his Eyes: Those following Leaves display, if well observed, How she long Her Maydenhead preserved, How for sound prudence She still bore the Bell; Whence may be drawn this high-fetchd parallel, Venus and Venice are Great Queens in their degree, Venus is Queen of Love, Venice of Policie."
    },
    history: {
        disc: 'ancient',
        discby: 'ancients',
        life: true
    },
    stats: {
        mass: 4.87,
        diam: 12104,
        dens: 5243,
        grav: 8.9,
        velo: 10.4,
        perhelion: 107.5,
        aphelion: 108.9,
        mag: -4.4,
        lum: 0,
        comp: ['co2', 'n', 'so2']
    },
    temp: {
        low: 437,
        high: 482
    },
    time: {
        day: 2802,
        orbit: 224.7
    },
    dist: {
        km: 108.2,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var earth = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '&#9793;',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: 0,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var mars = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '&#9794;',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: -1.5,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var jupiter = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '&#9795;',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: -9.4,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var saturn = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '&#9796;',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: -9.7,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var uranus = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '&#9797;',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: -7.2,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var neptune = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '&#9798;',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: -6.9,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var pluto = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '&#9799;',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: 0,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var kuiperbelt = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: 0,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};

var oortcloud = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: 0,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};








var template = {
    id: 0,
    basics: {
        name: '',
        latin: '',
        alts: [],
        class: '',
        type: '',
        color: '',
        spectral: '',
        struc: '',
        hex: '',
    },
    myth: {
        name: '',
        deets: "",
        story: "",
        quote: ""
    },
    history: {
        disc: '',
        discby: '',
        life: false
    },
    stats: {
        mass: 0,
        diam: 0,
        dens: 0,
        grav: 0,
        velo: 0,
        perhelion: 0,
        aphelion: 0,
        mag: 0,
        lum: 0,
        comp: []
    },
    temp: {
        low: 0,
        high: 0
    },
    time: {
        day: 0,
        orbit: 0
    },
    dist: {
        km: 0,
    },
    moons: {
        tf: false,
        count: 0,
        moon: []
    },
    rings: {
        tf: false,
        count: 0,
        quality: ''
    },
    constellations: {
        tf: false,
        constellation: []
    },
};