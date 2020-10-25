import React, { useState } from 'react'

import Container from '@material-ui/core/Container'
import Footer from '@app/components/layouts/Main/Footer'
import Header from '@app/components/layouts/Main/Header'
import Sidebar from '@app/components/layouts/Main/Sidebar'
import WithTitle from '@app/components/utils/WithTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

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
  headTitle?: string
}

function MainLayout(props: MainLayoutProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const widthContent = !isMobile ? 'lg' : 'sm'
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  const handleSidebarClose = () => setOpenSidebar(false)
  const handleSidebarOpen = () => setOpenSidebar(true)
  const toggleSidebar = () => setOpenSidebar(prev => (prev = !prev))
  const headTitle = props.headTitle ?? props.title
  return (
    <React.Fragment>
      <Container maxWidth={widthContent}>
        <WithTitle title={headTitle} />
        <Header title={props.title} toggleSidebar={toggleSidebar} sections={sections} />
        <Sidebar open={openSidebar} onOpen={handleSidebarOpen} onClose={handleSidebarClose} />
        <main>{props.children}</main>
      </Container>
      <Footer />
    </React.Fragment>
  )
}
export default MainLayout
