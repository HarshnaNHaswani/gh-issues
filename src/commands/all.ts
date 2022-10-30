import {Command, Flags, CliUx} from '@oclif/core'
import {Octokit} from '@octokit/core'

export default class All extends Command {
  static description = 'Get all your issues'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    columns: Flags.string({char: 'c', description: '[NOT IMPLEMENTED] specify columns to be displayed: url, title, body, comments_url, labels, repository '}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  public async run(): Promise<void> {
    // const {args, flags} = await this.parse(IssuesAll)
    const octokit = new Octokit({
      auth: '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',
    })
    const result = await octokit.request('GET /issues').catch(error => this.log(error))

    if (result) {
      this.log('data:')

      CliUx.ux.table(result.data, {
        url: {},
        title: {},
        body: {},
      })
    } else throw new Error('Error retrieving data')

    this.log('-------------------------------')
  }
}
