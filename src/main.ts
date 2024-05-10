import './style.css'
import typescriptLogo from './typescript.svg'

// import './topics/01-basic-types'
// import './topics/02-objects-interfaces'
// import './topics/03-functions'
// import './topics/04-homework-types'
// import './topics/05-basic-destructuring'
// import './topics/06-function-destructuring'
// import './topics/07-import-export'
// import './topics/08-classes'
// import './topics/09-generics'
// import './topics/10-decorators'
// import './topics/11-optional-chaning'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Open the console</h1>
  </div>
`

console.log("Im running")