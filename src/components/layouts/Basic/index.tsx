import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import React from 'react'
import WithTitle from '@app/components/utils/WithTitle'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(400 + theme.spacing(6))]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  })
)

interface BasicLayoutProps {
  children: React.ReactNode
  title: string
}

function BasicLayout(props: BasicLayoutProps) {
  const classes = useStyles()
  const { children } = props
  return (
    <React.Fragment>
      <WithTitle title={props.title} />
      <main className={classes.root}>{children}</main>
    </React.Fragment>
  )
}

export default BasicLayout
