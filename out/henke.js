var fs = require("fs");
var plist = require("plist");
function exportTheme(theme) {
    var formatted = {
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
    for (var _i = 0, _a = theme.styles; _i < _a.length; _i++) {
        var style = _a[_i];
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
var white = "#FFFFFF";
var blueGrey300 = "#90A4AE";
var blueGrey600 = "#546E7A";
var blueGrey900 = "#263238";
var pink300 = "#F06292";
var purple300 = "#BA68C8";
var deepPurple300 = "#9575CD";
var indigo300 = "#7986CB";
var blue300 = "#64B5F6";
var lightBlue300 = "#4FC3F7";
var cyan300 = "#4DD0E1";
var teal300 = "#4DB6AC";
var green300 = "#81C784";
var theme = {
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
//# sourceMappingURL=henke.js.map