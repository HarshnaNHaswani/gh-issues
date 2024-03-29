import {Command, Flags, CliUx} from '@oclif/core'
import {Octokit} from '@octokit/core'

export default class Create extends Command {
  static description = 'create a new issue\nSYNTAX\n\t → <%= config.bin %> <%= command.id %>\n\t→ <%= config.bin %> <%= command.id %> -a, --assignees=<value>, -b, --body=<value>,-f, --force,[ -l, --labels]=<value>, [-m|--milestone]=<value> [-o|--owner]=<value> [-r|--repo]=<value> [-t |--title]=<value>\n\t→ <%= config.bin %> <%= command.id %> [OWNER] [REPO] [TITLE] [BODY] '

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    // flag with a value (-n, --name=VALUE)
    // flag with no value (-f, --force)
    owner: Flags.string({char: 'o', description: 'owner of the issue'}),
    repo: Flags.string({char: 'r', description: 'GitHub repository'}),
    title: Flags.string({char: 't', description: 'title of the issue'}),
    body: Flags.string({char: 'b', description: 'content of the issue'}),
    milestone: Flags.string({char: 'm', description: 'milestone of the issue'}),
    labels: Flags.string({char: 'l', description: 'label1,label2: bug,good first issue,'}),
    assignees: Flags.string({char: 'a', description: 'assignee1,assignee2 e.g. jKamala,petejames,'}),
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'owner', description: 'owner of the issue'}, {name: 'repo', description: 'GitHub repository'}, {name: 'title', description: 'title of the issue'}, {name: 'body', description: 'content of the issue'}]

  public async run(): Promise<void> {
    const {flags, args} = await this.parse(Create)

    const owner = flags.owner ?? args.owner ?? await CliUx.ux.prompt('enter GitHub owner of the issue')
    const repo = flags.repo ?? args.repo ?? await CliUx.ux.prompt('enter name of the GitHub repo')
    const title = flags.title ?? args.title ?? await CliUx.ux.prompt('enter title of the issue')

    if (!title || !repo || !owner) {
      this.log(`Can't proceed further! Following required fields are missing:\n ${owner ? '' : 'owner\n'} ${repo ? '' : 'repo\n'} ${title ? '' : 'title'}`)
      return
    }

    const octokit = new Octokit({
      auth: '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',
    })
    const result = await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner,
      repo,
      title,
      body: flags.body ?? args.body ?? 'empty body',
      assignees: flags.assignees?.split(',') ?? [owner],
      milestone: flags.milestone ?? '1',
      labels: flags.labels?.split(',') ?? ['bug'],
    }).catch(error => this.log(error))

    if (result) {
      const {data: issue} = result
      this.log('issue created', issue.url)
    } else throw new Error('Error retrieving data')

    this.log('-------------------------------')
  }
}
