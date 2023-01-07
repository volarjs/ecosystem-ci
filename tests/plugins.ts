import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'volarjs/plugins',
		branch: 'master',
		test: 'build',
	})
}
