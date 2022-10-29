import {expect, test} from '@oclif/test'

describe('issues/all', () => {
  test
  .stdout()
  .command(['issues/all'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['issues/all', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
