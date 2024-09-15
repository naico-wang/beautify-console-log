'use strict';

// src/index.ts
var LOG_LEVEL;
(function (LOG_LEVEL) {
    LOG_LEVEL["INFO"] = "Info";
    LOG_LEVEL["ERROR"] = "Error";
    LOG_LEVEL["WARNING"] = "Warning";
    LOG_LEVEL["SUCCESS"] = "Success";
})(LOG_LEVEL || (LOG_LEVEL = {}));
function isEmpty(value) {
    return value == null || value === '';
}
function getTitle(strTitle, logLevel) {
    return isEmpty(strTitle) ? logLevel : strTitle;
}
function getContent(strTitle, strContent) {
    return isEmpty(strContent) ? strTitle : strContent;
}
function prettyPrint(title, text, color) {
    console.log(`%c ${title} %c ${text} %c`, `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`, `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`, 'background:transparent');
}
function logMessage(logLevel, textOrTitle, content = '') {
    const title = getTitle(textOrTitle, logLevel);
    const text = getContent(textOrTitle, content);
    const colorMap = {
        [LOG_LEVEL.INFO]: '#909399',
        [LOG_LEVEL.ERROR]: '#F56C6C',
        [LOG_LEVEL.WARNING]: '#E6A23C',
        [LOG_LEVEL.SUCCESS]: '#67C23A',
    };
    prettyPrint(title, text, colorMap[logLevel]);
}
const logger = {
    info: (textOrTitle, content = '') => logMessage(LOG_LEVEL.INFO, textOrTitle, content),
    error: (textOrTitle, content = '') => logMessage(LOG_LEVEL.ERROR, textOrTitle, content),
    warning: (textOrTitle, content = '') => logMessage(LOG_LEVEL.WARNING, textOrTitle, content),
    success: (textOrTitle, content = '') => logMessage(LOG_LEVEL.SUCCESS, textOrTitle, content),
};

module.exports = logger;
//# sourceMappingURL=index.cjs.js.map
