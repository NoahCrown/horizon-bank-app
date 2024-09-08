import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'


const Home = async () => {
  const loggedIn = await getLoggedInUser()
  console.log(loggedIn)

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome,"
            subtext="Access and manage your account and transactions efficiently."
            user={loggedIn?.name || 'Guest'}
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

export default Home