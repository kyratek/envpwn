const { createCommand } = require('commander')

const app = createCommand('envpwn')

const pwn = app
	.command('pwn')
	.argument('host')
	.description('Process a http service')
	.option('-p, --port <number>', 'Port number', 80)
	.option('-u, --url <string>', 'Root dir to use', '')

pwn.action((host) => {
   const { port, url } = pwn.opts()

   console.log(`-> pwn: ${String(port).includes(443) ? 'https' : 'http'}://${host}:${port}/${url}`)
})

module.exports = args => app.parse(args || process.argv)
