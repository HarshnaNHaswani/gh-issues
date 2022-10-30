import {expect, test} from '@oclif/test'

describe('add-reminder', () => {
  test
  .stdout()
  .command(['add-reminder'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['add-reminder', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
