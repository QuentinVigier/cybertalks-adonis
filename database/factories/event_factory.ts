import { DateTime } from 'luxon'
import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'
import { SpeakerFactory } from './speaker_factory.js'

export const EventFactory = factory
  .define(Event, async ({ faker }) => {
    const title = faker.lorem.sentence()
    return {
      title: title,
      slug: faker.helpers.slugify(title),
      description: faker.lorem.paragraphs(),
      isOnline: faker.datatype.boolean(),
      date: DateTime.now(),
      // category: faker.number.int({ min:1, max:4 })
    }
  })
  .relation('speakers', () => SpeakerFactory)
  .build()
