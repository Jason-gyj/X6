import { getImageUrlHook } from '../basic/util'
import { createShape } from './util'

export const Image = createShape(
  'image',
  {
    attrs: {
      body: {
        refWidth: '100%',
        refHeight: '100%',
      },
    },
    propHooks: getImageUrlHook(),
  },
  {
    selector: 'image',
  },
)
