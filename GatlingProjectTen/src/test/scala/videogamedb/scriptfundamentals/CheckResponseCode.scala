package videogamedb.scriptfundamentals

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckResponseCode extends Simulation{

  val httpProtocol = http
    .baseUrl("https://www.videogamedb.uk")
    .acceptHeader("application/json")

  val scn = scenario("Video Game DB - 3 calls")
    .exec(http("Get all video game - 1st call")
      .get("/api/videogame")
    .check(status is 200))
    .pause(5)

    .exec(http("Get Specific Game")
      .get("/api/videogame/2")
    .check(status is 200))
    .pause(1, 5)

    .exec(http("Get all video game - 2nd call")
      .get("/api/videogame")
    .check(status is 200))
    .pause(300)


  setUp(scn.inject(atOnceUsers(1)).protocols(httpProtocol))

}
