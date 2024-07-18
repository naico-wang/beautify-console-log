enum LOG_LEVEL {
  INFO = 'Info',
  ERROR = 'Error',
  WARNING = 'Warning',
  SUCCESS = 'Success'
}
function isEmpty(value: string | null) {
  return value == null || false || value === ''
}

function getTitle(strTitle: string | null, logLevel: LOG_LEVEL) {
  return isEmpty(strTitle) ? logLevel : strTitle
}

function getContent(strTitle: any, strContent: string | null) {
  return isEmpty(strContent) ? strTitle : strContent
}

function prettyPrint(title: string | null, text: any, color: string) {
  console.log(
    `%c ${title} %c ${text} %c`,
    `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
    `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
    'background:transparent'
  )
}
function info(textOrTitle: string | null, content = '') {
  const title = getTitle(textOrTitle, LOG_LEVEL.INFO)
  const text = getContent(textOrTitle, content)
  prettyPrint(title, text, '#909399')
}

function error(textOrTitle: string | null, content = '') {
  const title = getTitle(textOrTitle, LOG_LEVEL.ERROR)
  const text = getContent(textOrTitle, content)
  prettyPrint(title, text, '#F56C6C')
}

function warning(textOrTitle: string | null, content = '') {
  const title = getTitle(textOrTitle, LOG_LEVEL.WARNING)
  const text = getContent(textOrTitle, content)
  prettyPrint(title, text, '#E6A23C')
}

function success(textOrTitle: string | null, content = '') {
  const title = getTitle(textOrTitle, LOG_LEVEL.SUCCESS)
  const text = getContent(textOrTitle, content)
  prettyPrint(title, text, '#67C23A')
}

export default {
  info,
  error,
  warning,
  success
}
