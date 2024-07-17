const LOG_LEVEL = {
  INFO: 'Info',
  ERROR: 'Error',
  WARNING: 'Warning',
  SUCCESS: 'Success'
}
function isEmpty(value) {
  return value == null || false || value === ''
}

function getTitle(strTitle, logLevel) {
  return isEmpty(strTitle) ? logLevel : strTitle
}

function getContent(strTitle, strContent) {
  return isEmpty(strContent) ? strTitle : strContent
}

function prettyPrint(title, text, color) {
  console.log(
    `%c ${title} %c ${text} %c`,
    `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
    `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
    'background:transparent'
  )
}
function info(textOrTitle, content = '') {
  const title = getTitle(textOrTitle, LOG_LEVEL.INFO)
  const text = getContent(textOrTitle, content)
  prettyPrint(title, text, '#909399')
}

function error(textOrTitle, content = '') {
  const title = getTitle(textOrTitle, LOG_LEVEL.ERROR)
  const text = getContent(textOrTitle, content)
  prettyPrint(title, text, '#F56C6C')
}

function warning(textOrTitle, content = '') {
  const title = getTitle(textOrTitle, LOG_LEVEL.WARNING)
  const text = getContent(textOrTitle, content)
  prettyPrint(title, text, '#E6A23C')
}

function success(textOrTitle, content = '') {
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
