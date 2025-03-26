import React from "react"
import { Page, PageContent } from "grommet"

const Layout = ({ children } : {children: React.ReactNode}) => {
  return (
    <Page pad={{bottom: 'xlarge'}}>
      <PageContent>
        {children}
      </PageContent>
    </Page>
  );
}

export default Layout;
