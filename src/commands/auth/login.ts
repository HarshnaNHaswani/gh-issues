// import {Command, Flags} from '@oclif/core'
import {Command} from '@oclif/core'
export default class AuthLogin extends Command {
  static description = 'login to your github account'

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    this.log('-------------------------------')
  }
}

