// GET - dev/serviços
// GET - dev/serviços/lavagem-carro
// CREATE - dev/serviços

export interface User {
  uuid: string
  name: string
  username: string
  birthday: string
  password: string
  myServices: Array<Services>
}

export interface Services {
  name: string
  description: string
  address: string
  startHour: string
  endHour: string
  photos: Array<any>
  price: number
  responsableUser: User
  contacts: Array<any>
}

export interface ServiceCategory {
  name: string
  services: Array<Services>
}

// 1 User terá N Service
// 1 Service pertencerá a 1 ServiceCategory
// 1 Service pertencerá a 1 User
// 1 ServiceCategory terá N Services
