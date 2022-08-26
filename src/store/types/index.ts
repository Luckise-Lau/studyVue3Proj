import type { IUserInfo } from '@/api/types/commonTypes'
import { getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'

export const state = {
  count: 1,
  isCollapse: false,
  user: getItem<{ token: string } & IUserInfo>(USER)
}

export type State = typeof state
