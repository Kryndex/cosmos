import React from 'react'
import { PageHeader, Tabs } from '../components'

import Settings from './settings'
import Advanced from './advanced'
import Connections from './connections'
import Avatar from './client-avatar'

class Client extends React.Component {
  render() {
    return (
      <div>
        <PageHeader
          title="API Explorer Client"
          type={{
            name: 'Non Interactive',
            clientId: 'DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip'
          }}
          logo={<Avatar />}
          breadcrumb={{
            content: 'Clients',
            link: '/clients'
          }}
        />
        <Tabs>
          <Tabs.Tab label="Quick Start">Quickstart</Tabs.Tab>
          <Tabs.Tab label="Settings" selected>
            <Settings clientId={this.props.match.params.clientId} />
          </Tabs.Tab>
          <Tabs.Tab label="Connections">
            <Connections />
          </Tabs.Tab>
          <Tabs.Tab label="Advanced">
            <Advanced clientId={this.props.match.params.clientId} />
          </Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}

export default Client
