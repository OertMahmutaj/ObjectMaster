const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const pkmDiv3 = pokémon.filter(pkm => pkm.id%3 === 0);
console.log(pkmDiv3);

const FireTypes = pokémon.filter(pkm => pkm.types.includes('fire')&& pkm.types.length === 1);
console.log(FireTypes);

const pkmMoreTypes = pokémon.filter(pkm => pkm.types.length > 1);
console.log(pkmMoreTypes);

const onlyPkmNames = pokémon.map(pkm => pkm.name);
console.log(onlyPkmNames);

const NamesOfIdsGreateThan99 = pokémon.filter(pkm => pkm.id > 99).map(pkm => pkm.name);
console.log(NamesOfIdsGreateThan99);

const NamesOfOnlyPoisonTypes = pokémon.filter(pkm => pkm.types.includes('poison')&&pkm.types.length === 1).map(pkm => pkm.name);
console.log(NamesOfOnlyPoisonTypes);

const FirstTypeofSecondTypeFlying = pokémon.filter(pkm => pkm.types[1] === 'flying').map(pkm => pkm.types[0]);
console.log(FirstTypeofSecondTypeFlying);

const NumberOfNormalTypes = pokémon.filter(pkm => pkm.types.includes('normal')&&pkm.types.length === 1).length;
console.log(NumberOfNormalTypes);