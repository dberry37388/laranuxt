
export interface MetApiResponse {
  benchmark: number
  status: 'success' | 'failure'
  query: {
    options: Record<string, any>
    params: Record<string, any>
  }
  paginate?: {
    current_page: number
    first_item: number
    last_item: number
    last_page: number
    pages: Array<number>
    per_page: number
    total: number
  }
  data: any
}

export interface User {
  name: string
  job: string
  email: string
  phone: string
  avatar: string
}

export type Users = Array<User>

export interface Resume {
  user: User,
  name: string,
  email: string,
  location: string,
  job_title: string,
  portfolio_url: string,
  phone: string,
  about_me: string,
}

export type Resumes = Array<Resume>
