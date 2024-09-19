enum LOG_LEVEL {
  INFO = 'Info',
  ERROR = 'Error',
  WARNING = 'Warning',
  SUCCESS = 'Success',
}

const colorMap: Record<LOG_LEVEL, string> = {
  [LOG_LEVEL.INFO]: '#909399',
  [LOG_LEVEL.ERROR]: '#F56C6C',
  [LOG_LEVEL.WARNING]: '#E6A23C',
  [LOG_LEVEL.SUCCESS]: '#67C23A',
};

function prettyPrint(title: string, content: string, color: string, data?: any): void {
  const style = `background:${color};border:1px solid ${color};padding:1px;border-radius:2px 0 0 2px;color:#fff;`;
  const contentStyle = `border:1px solid ${color};padding:1px;border-radius:0 2px 2px 0;color:${color};`;
  const resetStyle = 'background:transparent';

  console.log(`%c ${title} %c ${content} %c`, style, contentStyle, resetStyle, data ?? '');
}

function logMessage(logLevel: LOG_LEVEL, content: string, data?: any): void {
  prettyPrint(logLevel, content, colorMap[logLevel], data);
}

const colorfulConsole = {
  info: (content: string, data?: any) => logMessage(LOG_LEVEL.INFO, content, data),
  error: (content: string, data?: any) => logMessage(LOG_LEVEL.ERROR, content, data),
  warning: (content: string, data?: any) => logMessage(LOG_LEVEL.WARNING, content, data),
  success: (content: string, data?: any) => logMessage(LOG_LEVEL.SUCCESS, content, data),
};

export default colorfulConsole;
