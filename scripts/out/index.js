"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const axios_1 = __importDefault(require("axios"));
const p_throttle_1 = __importDefault(require("p-throttle"));
const R = __importStar(require("ramda"));
var FOCUS;
(function (FOCUS) {
    FOCUS[FOCUS["BALANCE"] = 0] = "BALANCE";
    FOCUS[FOCUS["COMBAT"] = 1] = "COMBAT";
    FOCUS[FOCUS["MYSTIC"] = 2] = "MYSTIC";
})(FOCUS || (FOCUS = {}));
let characters;
let characterDetails;
let equipmentDetails;
let allCharacters;
const FILE_PATH_CHARACTERS = '/home/alex/Source/apps/tlr-party-builder/scripts/out/data/characters.json';
const FILE_PATH_CHARACTER_DETAILS = '/home/alex/Source/apps/tlr-party-builder/scripts/out/data/character-details.json';
const FILE_PATH_EQUIPMENT_DETAILS = '/home/alex/Source/apps/tlr-party-builder/scripts/out/data/equipment-details.json';
const FILE_PATH_ALL_CHARACTERS = '/home/alex/Source/apps/tlr-party-builder/scripts/out/data/all-characters.json';
try {
    characters = JSON.parse(fs_1.default.readFileSync(FILE_PATH_CHARACTERS, { encoding: 'utf8' }));
    characterDetails = JSON.parse(fs_1.default.readFileSync(FILE_PATH_CHARACTER_DETAILS, { encoding: 'utf8' }));
    equipmentDetails = JSON.parse(fs_1.default.readFileSync(FILE_PATH_EQUIPMENT_DETAILS, { encoding: 'utf8' }));
}
catch (e) {
    console.error(e);
}
if (!fs_1.default.existsSync(path_1.default.join(__dirname, 'data'))) {
    fs_1.default.mkdirSync(path_1.default.join(__dirname, 'data'));
}
const throttledFetch = p_throttle_1.default((url) => {
    console.log(`Fetching: ${url}`);
    return axios_1.default.get(url).then(x => x.data);
}, 10, 3000);
// Characters
// (async () => {
//     const html = (await axios.get('https://lastremnant.fandom.com/wiki/Category:Unique_Leader')).data;
//     const $ = cheerio.load(html);
//     characters = $('.category-page__members .category-page__member')
//         .map((i, el) => ({
//             id: kebabCase($(el).find('a').attr('title')),
//             url: 'https://lastremnant.fandom.com' + $(el).find('a').attr('href'),
//             thumbnail: $($(el).find('noscript').html()).attr('src')
//         }))
//         .get()
//         .filter(c => c.id !== 'rush-sykes');
//     fs.writeFileSync(FILE_PATH_CHARACTERS, JSON.stringify(characters, null, 2));
// })();
// Character details and upgrades
// (async () => {
//     try {
//         characterDetails = (await Promise.all(characters
//             .filter(c => c.id !== 'rush-sykes')
//             // .slice(0, 2)
//             .map(c => throttledFetch(c.url))
//         ))
//             .map(html => {
//                 const $ = cheerio.load(html);
//                 const focuses: string[] = $('.pc .weaponupgrade tr:nth-child(1) th').map((i, th) => $(th).text().trim().toUpperCase()).get();
//                 const upgradePaths = focuses.map((focus, j) => {
//                     return ({
//                         focus: FOCUS[focus],
//                         equipments: $('.pc .weaponupgrade tr:nth-child(n + 2)')
//                             .filter((i, tr) => !!$(tr).find(`td:nth-child(${j + 1}) a`).attr('title'))
//                             .map((i, tr): Equipment => ({
//                                 id: kebabCase($(tr).find(`td:nth-child(${j + 1}) a`).attr('title')),
//                                 url: 'https://lastremnant.fandom.com' + $(tr).find(`td:nth-child(${j + 1}) a`).attr('href')
//                             }))
//                             .get()
//                     })
//                 });
//                 return {
//                     focus: FOCUS[/initially ([a-zA-Z]+) Focus/g.exec(html)[1].toUpperCase()],
//                     upgradePaths
//                 };
//             });
//     } catch (e) {
//         console.error('Failed to get character details.');
//         console.error(e);
//     }
//     fs.writeFileSync(FILE_PATH_CHARACTER_DETAILS, JSON.stringify(characterDetails, null, 2));
// })();
// Equipment
// (async () => {
//     try {
//         equipmentDetails = (await Promise.all(R.compose(
//             R.map((x: Equipment) => throttledFetch(x.url)),
//             // R.filter(R.propEq('id', 'optimal-naginata')),
//             // R.slice(0, 6),
//             R.uniqBy(R.prop('id')),
//             R.sortBy(R.prop('id')),
//             R.flatten,
//             R.map((d: CharacterDetail) => d.upgradePaths.map((up: UpgradePath) => up.equipments))
//         )(characterDetails)))
//             .map((html): EquipmentDetail => {
//                 const $ = cheerio.load(html);
//                 return {
//                     equipmentId: kebabCase($($('h1').get(0)).text()),
//                     upgradeTargets: $('table:contains("Upgrades to")')
//                         .map((i, el): UpgradeTarget => ({
//                             equipmentId: kebabCase($(el).find('a').get(0).attribs.title),
//                             materialRequirements: $(el).children().find('table tr td')
//                                 .filter((i, td) => !!$(td).find('a').get(0))
//                                 .map((i, td): MaterialRequirement => {
//                                     try {
//                                         return ({
//                                             materialId: kebabCase($(td).find('a').get(0).attribs.title),
//                                             quantityNeeded: parseInt(/x\s*(\d+)/.exec($(td).text().trim())[1], 10)
//                                         });
//                                     } catch (e) {
//                                         throw new Error(e);
//                                     }
//                                 })
//                                 .get()
//                         }))
//                         .get()
//                 };
//             });
//     } catch (e) {
//         console.error('Failed to get equipment details.');
//         console.error(e);
//     }
//     fs.writeFileSync(FILE_PATH_EQUIPMENT_DETAILS, JSON.stringify(equipmentDetails, null, 2));
// })();
// Putting it all together...
allCharacters = R.zipWith((x, y) => (Object.assign({}, x, y)), characters, characterDetails)
    .map((c) => {
    // return R.flatten(c.upgradePaths
    //     .map((up: UpgradePath): TLR.Character => ({
    //         id: c.id,
    //         focus: up.focus,
    //         upgradeGroups: up.equipments
    //             .map((e: Equipment): Array<TLR.Upgrade> => e.)
    //     })))
    let upgradeGroups = [];
    upgradeGroups.push();
    const equipments = c.upgradePaths
        .find((up) => up.focus === c.focus)
        .equipments;
    if (equipments.length > 1) {
        upgradeGroups.push(equipments.slice(0, equipments.length - 1)
            .map((e, i) => {
            const upgradeTarget = equipmentDetails.find((ed) => ed.equipmentId === e.id)
                .upgradeTargets.find((ut) => ut.equipmentId === equipments[i + 1].id);
            return ({
                equipmentBaseId: e.id,
                equipmentTargetId: equipments[i + 1].id,
                materialRequirements: upgradeTarget
                    ? upgradeTarget.materialRequirements
                        .map((mr) => (Object.assign({}, mr, { quantityOwned: 0 })))
                    // program can't handle dual-wielders, so just skip 
                    : []
            });
        }));
    }
    return ({
        id: c.id,
        focus: c.focus,
        upgradeGroups
    });
});
fs_1.default.writeFileSync(FILE_PATH_ALL_CHARACTERS, JSON.stringify(allCharacters, null, 2));
//# sourceMappingURL=index.js.map