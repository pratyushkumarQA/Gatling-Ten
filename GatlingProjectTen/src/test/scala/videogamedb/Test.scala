package videogamedb

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Test extends Simulation {

  // 1. HTTP configuration
  val httpProtocol = http
    .baseUrl("https://www.videogamedb.uk")
    .acceptHeader("application/json")

  // 2. Scenario Definition
  val scn = scenario("Test")
    .exec(http("Get all Games")
      .get("/api/videogame"))

  // 3. Load Scenario
  setUp(scn.inject(atOnceUsers(1)).protocols(httpProtocol))
}
