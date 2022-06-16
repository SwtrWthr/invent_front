import React from 'react'
import { PageTitle } from '@components/PageTitle'
import { Layout } from '@components/Layout'
import { WizardForm } from '@components/Forms/Wizard'

export const AccountPage: React.FC = () => {
  return (
    <Layout pageTitle={<PageTitle breadcrumbs={[]}>Моя страничка</PageTitle>}>
      <WizardForm />
    </Layout>
  )
}

export default AccountPage
