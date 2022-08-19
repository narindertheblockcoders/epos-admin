import React from 'react'
import Dashboard from '../Component/Dashboard'
import { getSession } from 'next-auth/react'

const dashboard = () => {
  return (
    <div>
        <Dashboard/>
    </div>
  )
}

export default dashboard

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }
  return {
    props:{
      session
    }
  }
}