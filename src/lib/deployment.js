import deployment from './deployment.json'
import example1 from './example1.json'
import example2 from './example2.json'

// There is a bug on the Saasify side, some examples are not updated in
// deployment.json. We populate the example manually.
export default {
  ...deployment,
  services: [
    {
      ...deployment.services[0],
      examples: [example2, example1]
    }
  ]
}
