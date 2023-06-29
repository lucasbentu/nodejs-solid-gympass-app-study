import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let gymUseCase: CreateGymUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    gymUseCase = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await gymUseCase.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -27.5747556,
      longitude: -48.5097516,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
