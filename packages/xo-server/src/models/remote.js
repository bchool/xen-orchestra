import Collection from '../collection/redis'
import Model from '../model'

// ===================================================================

export default class Remote extends Model {}

export class Remotes extends Collection {
  get Model () {
    return Remote
  }

  create (name, url) {
    return this.add(
      new Remote({
        name,
        url,
        enabled: false,
        error: '',
      })
    )
  }
}
