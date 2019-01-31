const log4js = require('log4js');

const config = {
  appenders: {
    console: { type: 'console' }
  },
  categories: { 
    default: { appenders: ['console'], level: 'info' } 
  }
} 

log4js.configure(config);

// 日志终端打印
const logger = log4js.getLogger('console');

// 程序日志绑定
console.log = logger.info.bind(logger);
console.warn = logger.warn.bind(logger);
console.error = logger.error.bind(logger);

module.exports = {log4js, logger};
