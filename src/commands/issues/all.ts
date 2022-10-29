import {Command, Flags, CliUx} from '@oclif/core'
import {Octokit} from '@octokit/core'

export default class IssuesAll extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    // const {args, flags} = await this.parse(IssuesAll)
    CliUx.ux.prompt('What is your name?')
    const octokit = new Octokit({
      auth: '------------------add github token here-----------',
    })
    const result = await octokit.request('GET /issues')

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

