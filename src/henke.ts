import * as fs from "fs";

let blueGrey300 = "#90A4AE";
let blueGrey600 = "#546E7A";
let cyan300 = "#4DD0E1";
let deepPurple300 = "#9575CD";
let green300 = "#81C784";
let indigo300 = "#7986CB";
let lightBlue300 = "#4FC3F7";
let pink300 = "#F06292";
let purple300 = "#BA68C8";
let teal300 = "#4DB6AC";

let colors = [
    { from: /#608b4e/ig, to: blueGrey600 },
    { from: /#C586C0/ig, to: deepPurple300 },
    { from: /#569CD6/ig, to: purple300 },
    { from: /#d4d4d4/ig, to: pink300 },
    { from: /#CE9178/ig, to: teal300 },
    { from: /#9CDCFE/ig, to: indigo300 },
    { from: /#B5CEA8/ig, to: green300 },
    { from: /#4EC9B0/ig, to: lightBlue300 },
    { from: /#d7ba7d/ig, to: lightBlue300 },
    { from: /#DCDCAA/ig, to: cyan300 },
];


let henke = {
    name: "Henke's Theme",
    settings: [
        {
            settings: { foreground: "#FFFFFF" },
        },
        {
            scope: ["constant.character.escape.perl"],
            settings: { foreground: pink300 }
        },
        {
            scope: ["constant.other.bareword", "constant.other.key"],
            settings: { foreground: green300 }
        }
    ],
};

for (let file of ["src/dark_vs.json", "src/dark_plus.json"]) {

    let json = fs.readFileSync(file).toString();

    for (let color of colors) {
        json = json.replace(color.from, color.to);
    }

    let parsed = JSON.parse(json);

    henke.settings = parsed.settings.concat(henke.settings);
}


fs.writeFileSync("themes/henke.json", JSON.stringify(henke, null, 4));
