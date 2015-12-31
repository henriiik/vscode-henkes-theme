import * as fs from "fs";
let plist = require("plist");

interface Theme {
    author: string;
    comment: string;
    name: string;
    foreground: string;
    styles: Style[];
}

interface Style {
    name: string;
    scope: string;
    foreground: string;
}

function exportTheme(theme: Theme): string {
    let formatted = {
        author: theme.author,
        comment: theme.comment,
        name: theme.name,
        settings: []
    };

    formatted.settings.push({
        settings: {
            foreground: theme.foreground
        }
    });

    for (let style of theme.styles) {
        formatted.settings.push({
            name: style.name,
            scope: style.scope,
            settings: {
                foreground: style.foreground
            }
        });
    }

    return plist.build(formatted);
}

let white = "#FFFFFF";
let blueGrey300 = "#90A4AE";
let blueGrey600 = "#546E7A";
let blueGrey900 = "#263238";
let pink300 = "#F06292";
let purple300 = "#BA68C8";
let deepPurple300 = "#9575CD";
let indigo300 = "#7986CB";
let blue300 = "#64B5F6";
let lightBlue300 = "#4FC3F7";
let cyan300 = "#4DD0E1";
let teal300 = "#4DB6AC";
let green300 = "#81C784";

let theme: Theme = {
    author: "henriiik",
    comment: "Henke's Theme",
    name: "Henke's Theme",
    foreground: white,
    styles: [
        {
            name: "Parameter Type",
            scope: "meta.parameter.type",
            foreground: white
        },
        {
            name: "Delimiter",
            scope: "delimiter",
            foreground: blueGrey300
        },
        {
            name: "Comment",
            scope: "comment, comment.block",
            foreground: blueGrey600
        },
        {
            name: "Whitespace",
            scope: "whitespace",
            foreground: blueGrey900
        },
        {
            name: "Escape Charater, Constants",
            scope: "string.escape, constant",
            foreground: pink300
        },
        {
            name: "Keyword, Storage",
            scope: "keyword, storage, storage.modifier, storage.type, meta.parameter.storage.type",
            foreground: purple300
        },
        {
            name: "Operator",
            scope: "keyword.operator",
            foreground: deepPurple300
        },
        {
            name: "Support",
            scope: "function.support",
            foreground: indigo300
        },
        {
            name: "Variable",
            scope: "variable, string.variable, declaration.variable, meta.parameter.variable",
            foreground: blue300
        },
        {
            name: "Class",
            scope: "class.entity.name",
            foreground: lightBlue300
        },
        {
            name: "Function",
            scope: "function.entity.name",
            foreground: cyan300
        },
        {
            name: "String",
            scope: "string",
            foreground: teal300
        },
        {
            name: "This",
            scope: "constant.this, predefined.variable",
            foreground: green300
        }
    ]
};

fs.writeFileSync("themes/henke.tmTheme", exportTheme(theme));