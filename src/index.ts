enum LOG_LEVEL {
  INFO = 'Info',
  ERROR = 'Error',
  WARNING = 'Warning',
  SUCCESS = 'Success',
}

function isEmpty(value: string | null): boolean {
  return value == null || value === '';
}

function getTitle(strTitle: string | null, logLevel: LOG_LEVEL): string {
  return isEmpty(strTitle) ? logLevel : strTitle!;
}

function getContent(strTitle: any, strContent: string | null): string {
  return isEmpty(strContent) ? strTitle : strContent!;
}

// Modified prettyPrint to append non-string content
function prettyPrint(title: string, text: string, color: string, content: any): void {
  if (typeof content === 'string') {
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
      'background:transparent'
    );
  } else {
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
      'background:transparent',
      content
    );
  }
}

function logMessage(logLevel: LOG_LEVEL, textOrTitle: string | null, content: any = ''): void {
  const title = getTitle(textOrTitle, logLevel);
  const text = getContent(textOrTitle, typeof content === 'string' ? content : '');
  const colorMap: Record<LOG_LEVEL, string> = {
    [LOG_LEVEL.INFO]: '#909399',
    [LOG_LEVEL.ERROR]: '#F56C6C',
    [LOG_LEVEL.WARNING]: '#E6A23C',
    [LOG_LEVEL.SUCCESS]: '#67C23A',
  };
  prettyPrint(title, text, colorMap[logLevel], content);
}

const colorfulConsole = {
  info: (textOrTitle: string | null, content: any = '') => logMessage(LOG_LEVEL.INFO, textOrTitle, content),
  error: (textOrTitle: string | null, content: any = '') => logMessage(LOG_LEVEL.ERROR, textOrTitle, content),
  warning: (textOrTitle: string | null, content: any = '') => logMessage(LOG_LEVEL.WARNING, textOrTitle, content),
  success: (textOrTitle: string | null, content: any = '') => logMessage(LOG_LEVEL.SUCCESS, textOrTitle, content),
};

export default colorfulConsole;
