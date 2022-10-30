/* eslint-disable quote-props */
const path = require('node:path')
import {Command, Flags} from '@oclif/core'
import {authorizeCal} from '../authorize-cal'
import {Octokit} from '@octokit/core'

const {authenticate: auth} = require('@google-cloud/local-auth')

import {google} from 'googleapis'
export default class AddReminder extends Command {
  static description = 'add reminder for your issues'

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
    const octokit = new Octokit({
      auth: '------add token here---------',
    })
    const result = await octokit.request('GET /issues').catch(error => this.log(error)).catch(error => this.error(error))

    if (!result) throw new Error('Error retrieving data')

    await authorizeCal()
    // Refer to the Node.js quickstart on how to setup the environment:
    // https://developers.google.com/calendar/quickstart/node
    // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
    // stored credentials.
    const issues = []
    for (const issue of result.data)  {
      issues.push(issue.url)
    }

    const TOKEN_PATH = path.join(process.cwd(), 'token.json')

    const event = {
      'summary': 'github issues',
      'location': '',
      'description': issues.join(', '),
      'start': {
        'dateTime': Date.now().toString(),
        'timeZone': 'America/Los_Angeles',
      },
      'end': {
        'dateTime': Date.now().toString(),
        'timeZone': 'America/Los_Angeles',
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=1',
      ],
      'attendees': [],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10},
        ],
      },
    }
    const token = require(TOKEN_PATH)
    const calendar = google.calendar({version: 'v3', auth})
    calendar.events.insert({
      auth: token.refresh_token,
      calendarId: '0',
      requestBody: event,
    }, function (err: any, event: any) {
      if (err) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        console.log('There was an error contacting the Calendar service: ' + err?.toString())
        return
      }

      console.log('Event created: %s', event.htmlLink)
    })
  }
}
