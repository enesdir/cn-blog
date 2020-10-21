import React, { useState } from 'react'
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Footer from '@app/components/layouts/Main/Footer'
import Header from '@app/components/layouts/Main/Header'
import Sidebar from '@app/components/layouts/Main/Sidebar'
import WithTitle from '@app/components/utils/WithTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    layout: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'stretch',
      width: '100%',
      backgroundColor: theme.palette.background.level1,
    },
    root: {
      display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
)

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
]

interface MainLayoutProps {
  children: React.ReactNode
  title: string
}

function MainLayout(props: MainLayoutProps) {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const widthContent = !isMobile ? 'lg' : 'sm'
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  const handleSidebarClose = () => setOpenSidebar(false)
  const handleSidebarOpen = () => setOpenSidebar(true)
  const toggleSidebar = () => setOpenSidebar(prev => (prev = !prev))

  return (
    <React.Fragment>
      <Container maxWidth={widthContent}>
        <WithTitle title={props.title} />
        <Header title={props.title} toggleSidebar={toggleSidebar} sections={sections} />
        <Sidebar open={openSidebar} onOpen={handleSidebarOpen} onClose={handleSidebarClose} />
        <main>{props.children}</main>
      </Container>
      <Footer />
    </React.Fragment>
  )
}
export default MainLayout
