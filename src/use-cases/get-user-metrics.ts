import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMMetricsUseCaseRequest {
  userId: string
}

interface GetUserMMetricsUseCaseResponse {
  checkInsCount: number
}

export class GetUserMMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMMetricsUseCaseRequest): Promise<GetUserMMetricsUseCaseResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
