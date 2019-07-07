import fs from 'fs';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';
import pThrottle from 'p-throttle';
import { kebabCase } from 'change-case';
import * as R from 'ramda';
import * as TLR from './types';

interface Character {
    id: string;
    url: string;
    thumbnail?: string;
}

enum FOCUS {
    BALANCE,
    COMBAT,
    MYSTIC
}

interface UpgradePath {
    focus: FOCUS;
    equipments: Array<Equipment>;
}

interface Equipment {
    id: string;
    url: string;
    thumbnail?: string;
}

interface EquipmentDetail {
    equipmentId: string;
    upgradeTargets: Array<UpgradeTarget>;
}

interface UpgradeTarget {
    equipmentId: string;
    materialRequirements: Array<MaterialRequirement>;
}

interface MaterialRequirement {
    materialId: string;
    quantityNeeded: number;
}

interface CharacterDetail {
    focus: FOCUS;
    upgradePaths: Array<UpgradePath>;
}

let characters: Character[];
let characterDetails: CharacterDetail[];
let equipmentDetails: EquipmentDetail[];

let allCharacters: TLR.Character[];

const FILE_PATH_CHARACTERS = '/home/alex/Source/apps/tlr-party-builder/scripts/out/data/characters.json';
const FILE_PATH_CHARACTER_DETAILS = '/home/alex/Source/apps/tlr-party-builder/scripts/out/data/character-details.json';
const FILE_PATH_EQUIPMENT_DETAILS = '/home/alex/Source/apps/tlr-party-builder/scripts/out/data/equipment-details.json';
const FILE_PATH_ALL_CHARACTERS = '/home/alex/Source/apps/tlr-party-builder/scripts/out/data/all-characters.json';

try {
    characters = JSON.parse(fs.readFileSync(FILE_PATH_CHARACTERS, { encoding: 'utf8' }));
    characterDetails = JSON.parse(fs.readFileSync(FILE_PATH_CHARACTER_DETAILS, { encoding: 'utf8' }));
    equipmentDetails = JSON.parse(fs.readFileSync(FILE_PATH_EQUIPMENT_DETAILS, { encoding: 'utf8' }));
} catch (e) {
    console.error(e);
}

if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

const throttledFetch = pThrottle((url: string) => {
    console.log(`Fetching: ${url}`);
    return axios.get(url).then(x => x.data);
}, 5, 5000);

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
//                 const upgradePaths = focuses.map((focus, i) => {
//                     return ({
//                         focus: FOCUS[focus],
//                         equipments: $('.pc .weaponupgrade tr:nth-child(n + 2)')
//                             .filter((i, tr) => !!$(tr).find('td a').get(i))
//                             .map((i, tr): Equipment => ({
//                                 id: kebabCase($(tr).find('td a').get(i).attribs.title),
//                                 url: 'https://lastremnant.fandom.com' + $(tr).find('td a').get(i).attribs.href
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
//             // R.filter(R.propEq('id', 'commander-s-grandsword')),
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
//                                 .map((i, td): MaterialRequirement => {
//                                     try {
//                                         return ({
//                                             materialId: kebabCase($(td).find('a').get(0).attribs.title),
//                                             quantityNeeded: parseInt(/x\s*(\d+)/.exec($(td).text().trim())[1], 10)
//                                         });
//                                     } catch (e) {
//                                         throw new Error(`Error while parsing ${kebabCase($($('h1').get(0)).text())}`);
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
allCharacters = R.zipWith((x, y) => ({ ...x, ...y }), characters, characterDetails)
    .map((c): TLR.Character => {
        // return R.flatten(c.upgradePaths
        //     .map((up: UpgradePath): TLR.Character => ({
        //         id: c.id,
        //         focus: up.focus,
        //         upgradeGroups: up.equipments
        //             .map((e: Equipment): Array<TLR.Upgrade> => e.)
        //     })))
        let upgradeGroups: Array<Array<TLR.Upgrade>> = [];
        upgradeGroups.push();
        const equipments = c.upgradePaths
            .find((up: UpgradePath) => up.focus === c.focus)
            .equipments;
        if (equipments.length > 1) {
            upgradeGroups.push(
                equipments.slice(0, equipments.length - 1)
                    .map((e: Equipment, i): TLR.Upgrade => {
                        const upgradeTarget: UpgradeTarget = equipmentDetails.find((ed: EquipmentDetail) => ed.equipmentId === e.id)
                            .upgradeTargets.find((ut: UpgradeTarget) => ut.equipmentId === equipments[i + 1].id);
                        return ({
                            equipmentBaseId: e.id,
                            equipmentTargetId: equipments[i + 1].id,
                            materialRequirements: upgradeTarget
                                ? upgradeTarget.materialRequirements
                                    .map((mr: MaterialRequirement): TLR.MaterialRequirement => ({
                                        ...mr,
                                        quantityOwned: 0
                                    }))
                                // program can't handle dual-wielders, so just skip 
                                : []
                        })
                    })
            )
        }
        return ({
            id: c.id,
            focus: c.focus,
            upgradeGroups
        });
    });

fs.writeFileSync(FILE_PATH_ALL_CHARACTERS, JSON.stringify(allCharacters, null, 2));