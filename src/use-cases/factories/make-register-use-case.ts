import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterUseCase } from '../register'

export function makeRegisterUseCase() {
  const uersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(uersRepository)

  return registerUseCase
}
