import React from "react"
import clientCustomizations from '../../../client-1-customizations.json'

export default function Home() {
  const {title} = clientCustomizations
  return <div>{title}</div>
}
