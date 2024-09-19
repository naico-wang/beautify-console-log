'use strict';

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
// Modified prettyPrint to append non-string content
function prettyPrint(title, text, color, content) {
    if (typeof content === 'string') {
        console.log(`%c ${title} %c ${text} %c`, `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`, `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`, 'background:transparent');
    }
    else {
        console.log(`%c ${title} %c ${text} %c`, `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`, `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`, 'background:transparent', content);
    }
}
function logMessage(logLevel, textOrTitle, content = '') {
    const title = getTitle(logLevel);
    const text = getContent(textOrTitle, typeof content === 'string' ? content : '');
    const colorMap = {
        [LOG_LEVEL.INFO]: '#909399',
        [LOG_LEVEL.ERROR]: '#F56C6C',
        [LOG_LEVEL.WARNING]: '#E6A23C',
        [LOG_LEVEL.SUCCESS]: '#67C23A',
    };
    prettyPrint(title, text, colorMap[logLevel], content);
}
const colorfulConsole = {
    info: (textOrTitle, content = '') => logMessage(LOG_LEVEL.INFO, textOrTitle, content),
    error: (textOrTitle, content = '') => logMessage(LOG_LEVEL.ERROR, textOrTitle, content),
    warning: (textOrTitle, content = '') => logMessage(LOG_LEVEL.WARNING, textOrTitle, content),
    success: (textOrTitle, content = '') => logMessage(LOG_LEVEL.SUCCESS, textOrTitle, content),
};

module.exports = colorfulConsole;
//# sourceMappingURL=index.cjs.js.map
