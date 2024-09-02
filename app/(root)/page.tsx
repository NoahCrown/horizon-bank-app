import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const loggedIn = { firstName: 'Noah', lastName: 'Smith', email: "sample@gmail.com" }

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome,"
            subtext="Access and manage your account and transactions efficiently."
            user={loggedIn?.firstName || 'Guest'}
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.34}
          />

        </header>

        Recent transactions will be displayed here

      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.22}, {currentBalance: 123.22}]}
      />
    </section>
  )
}

export default page