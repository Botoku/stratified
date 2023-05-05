'use client '
import Link from 'next/link'
import classes from './BlogList.module.css'

const ClientSideRoute = ({children, route}) => {
  return (
    <Link className={classes.mainLink} href={route}>{children}</Link>
  )
}

export default ClientSideRoute