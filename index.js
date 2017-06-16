var execa = require('execa')

var sysdigProcess = execa('docker', 'logs --tail=0 -f mysisdig'.split(' '))

sysdigProcess.stdout.on('data', data => {
    const logMessage = data.toString()
    // console.log('captured - ', logMessage)
    const ipAddresses = logMessage.match(/\d\d?\d?\.\d\d?\d?\.\d\d?\d?\.\d\d?\d?/g)
    // console.log('matched - ', ipAddresses)
    if (ipAddresses && ipAddresses.length >= 2) {
        console.log('##################################################################\n',logMessage)
        console.log('From',ipAddresses[0],'to',ipAddresses[1])
    }
  })
