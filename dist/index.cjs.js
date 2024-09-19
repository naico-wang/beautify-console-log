'use strict';

var LOG_LEVEL;
(function (LOG_LEVEL) {
    LOG_LEVEL["INFO"] = "Info";
    LOG_LEVEL["ERROR"] = "Error";
    LOG_LEVEL["WARNING"] = "Warning";
    LOG_LEVEL["SUCCESS"] = "Success";
})(LOG_LEVEL || (LOG_LEVEL = {}));
const colorMap = {
    [LOG_LEVEL.INFO]: '#909399',
    [LOG_LEVEL.ERROR]: '#F56C6C',
    [LOG_LEVEL.WARNING]: '#E6A23C',
    [LOG_LEVEL.SUCCESS]: '#67C23A',
};
function prettyPrint(title, content, color, data) {
    const style = `background:${color};border:1px solid ${color};padding:1px;border-radius:2px 0 0 2px;color:#fff;`;
    const contentStyle = `border:1px solid ${color};padding:1px;border-radius:0 2px 2px 0;color:${color};`;
    const resetStyle = 'background:transparent';
    console.log(`%c ${title} %c ${content} %c`, style, contentStyle, resetStyle, data !== null && data !== void 0 ? data : '');
}
function logMessage(logLevel, content, data) {
    prettyPrint(logLevel, content, colorMap[logLevel], data);
}
const colorfulConsole = {
    info: (content, data) => logMessage(LOG_LEVEL.INFO, content, data),
    error: (content, data) => logMessage(LOG_LEVEL.ERROR, content, data),
    warning: (content, data) => logMessage(LOG_LEVEL.WARNING, content, data),
    success: (content, data) => logMessage(LOG_LEVEL.SUCCESS, content, data),
};

module.exports = colorfulConsole;
//# sourceMappingURL=index.cjs.js.map
