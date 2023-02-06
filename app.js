const { createCommand } = require('commander')

const app = createCommand('envpwn')

const pwn = app
	.command('pwn')
	.argument('host')
	.description('Process a http service')
	.option('-p, --port <int>', 'Port number', null, 80)
	.option('-u, --url <string>', 'Root dir to use', null, '/')

pwn.action((host) => {
   const { port, path } = pwn.opts()

   console.log(`-> pwn: ${host}:${port}/${path}`)
})

module.exports = args => app.parse(args || process.argv)
