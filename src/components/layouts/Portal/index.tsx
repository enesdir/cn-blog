import React, { useEffect, useState } from 'react'
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles'

import Footer from '@app/components/layouts/Portal/Footer'
import Header from '@app/components/layouts/Portal/Header'
import Sidebar from '@app/components/layouts/Portal/Sidebar'
import Toolbar from '@material-ui/core/Toolbar'
import WithTitle from '@app/components/utils/WithTitle'
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
      height: '100vh',
    },
  })
)
interface MainLayoutProps {
  children: React.ReactNode
  title: string
}

function Layout(props: MainLayoutProps) {
  const classes = useStyles()
  const theme = useTheme()

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  })

  const [openSidebar, setOpenSidebar] = useState(false)
  const handleSidebarClose = () => setOpenSidebar(false)
  const toggleSidebar = () => setOpenSidebar(prev => (prev = !prev))

  useEffect(() => (isDesktop ? setOpenSidebar(true) : setOpenSidebar(false)), [isDesktop])
  return (
    <>
      <div className={classes.root}>
        <WithTitle title={props.title} />
        <Header title={props.title} toggleSidebar={toggleSidebar} />
        <Sidebar isDesktop={isDesktop} open={openSidebar} onClose={handleSidebarClose} />
        <main className={classes.content}>
          <Toolbar />
          {props.children}
          <Footer />
        </main>
      </div>
    </>
  )
}
export default Layout
