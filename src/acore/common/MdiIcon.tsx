import IconBase from '@mdi/react'
import type { ComponentProps } from 'react'

type Props = Omit<ComponentProps<typeof IconBase>, 'size'> & {
  size?: number | string
}

export function MdiIcon({ size = '1em', ...rest }: Props) {
  return <IconBase size={size} {...rest} />
}
