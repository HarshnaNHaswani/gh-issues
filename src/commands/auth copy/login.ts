// import {Command, Flags} from '@oclif/core'
import {Command} from '@oclif/core'
// import {request} from 'node:https'
import fetch from 'node-fetch'
// import {Octokit} from '@octokit/core'
// import axios from 'axios'
export default class AuthLogin extends Command {
  static description = 'login to your github account'

  static args = [{name: 'file'}]
  private readonly baseUrl = 'https://github.com/login/device/code'
  private readonly headers= {'Content-Type': 'application/json',  Accept: 'application/json'}

  async get() {
    const res = await fetch(this.baseUrl, {headers: this.headers})
    return res.json()
  }

  public async run(): Promise<void> {
    // const {args, flags} = await this.parse(AuthLogin)
    // const octokit = new Octokit()
    // try {
    //   eslint-disable-next-line camelcase
    //   const {data} = await axios.post('https://github.com/login/device/code', {client_id: 'efffe836dea05aedc86c'}, {headers: {'content-type': 'application/json', Accept: 'application/json'}})
    //   eslint-disable-next-line camelcase
    //   const {data} = await octokit.request('POST /login/device/code', {client_id: 'efffe836dea05aedc86c'})
    //   this.log('logger', data)
    // } catch (error) {
    //   this.log('An error occured', error)
    // }
    const result = await this.get()

    if (!result) {
      throw new Error('Error retrieving data')
    }

    this.log('-------------------------------')
    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from D:\\me\\current\\roc8\\github-issues\\src\\commands\\auth\\login.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
  // static examples = [
  //   '<%= config.bin %> <%= command.id %>',
  // ]

  // static flags = {
  //   // flag with a value (-n, --name=VALUE)
  //   // name: Flags.string({char: 'n', description: 'name to print'}),
  //   // flag with no value (-f, --force)
  //   // force: Flags.boolean({char: 'f'}),
  // }
}

