import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import Link from '@app/components/common/Link'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  })
)
export type SectionType = {
  title: string
  url: string
}

interface SecondaryToolbarProps {
  sections: SectionType[]
}

function SecondaryToolbar(props: SecondaryToolbarProps) {
  const classes = useStyles()
  const { sections } = props
  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map(section => (
        <Link
          color="inherit"
          noWrap
          key={section.title}
          variant="body2"
          href={section.url}
          className={classes.toolbarLink}
        >
          {section.title}
        </Link>
      ))}
    </Toolbar>
  )
}

export default SecondaryToolbar
