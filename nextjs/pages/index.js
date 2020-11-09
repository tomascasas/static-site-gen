export async function getStaticProps(context) {
  const fs = require('fs')
  const path = require('path')
  const util = require('util')
  const readFile = util.promisify(fs.readFile)

  const clientCustomizationsPath = path.resolve(process.env.CLIENT_CUSTOMIZATIONS)
  const clientCustomizationsContents = await readFile(clientCustomizationsPath)
  const clientCustomizations = JSON.parse(clientCustomizationsContents)
  const title = clientCustomizations.title

  return {
    props: {title}, // will be passed to the page component as props
  }
}

export default function Home({title}) {
  return (
    <h1>
      {title
        ? title
        : 'Default title'}
    </h1>
  )
}
