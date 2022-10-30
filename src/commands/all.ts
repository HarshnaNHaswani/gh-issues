import {Command, Flags, CliUx} from '@oclif/core'
import {Octokit} from '@octokit/core'

export default class All extends Command {
  static description = 'Get all your issues'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    columns: Flags.string({char: 'c', description: 'specify columns to be displayed: url, title, body, comments_url, labels, repository '}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    // const {args, flags} = await this.parse(IssuesAll)
    const octokit = new Octokit({
      auth: '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',
    })
    const result = await octokit.request('GET /issues').catch(error => this.log(error))

    if (result) {
      this.log('data:')
      // for (const issue of result.data)  {
      //   this.log(issue.url)
      //   this.log(issue.title)
      //   this.log(issue.body ?? '')
      //   this.log(issue.comments_url)
      //   this.log(issue.labels.join(', '))
      //   this.log(issue.repository?.full_name)
      // }

      CliUx.ux.table(result.data, {
        url: {},
        title: {},
        body: {},
      })
    } else throw new Error('Error retrieving data')

    this.log('-------------------------------')
  }
}
