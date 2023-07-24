import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { AuthenticateUseCase } from '../authenticate'

export function makeAuthenticateUseCase() {
  const uersRepository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(uersRepository)

  return authenticateUseCase
}
