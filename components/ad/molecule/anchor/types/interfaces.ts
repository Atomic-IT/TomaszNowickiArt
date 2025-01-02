import type { StyleValue } from 'vue'

import type { AnchorRelType, AnchorTargetType } from '.'

export interface AnchorInterface {
  href?: string
  src?: string
  icon?: string
  label?: string
  rel?: AnchorRelType
  target?: AnchorTargetType
  tooltip?: string
  anchorClass?: string
  itemClass?: string
  style?: StyleValue
}
