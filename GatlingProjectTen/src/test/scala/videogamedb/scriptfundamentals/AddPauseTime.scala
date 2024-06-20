package videogamedb.scriptfundamentals

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class AddPauseTime extends Simulation{

  val httpProtocol = http
    .baseUrl("https://www.videogamedb.uk/api")
    .acceptHeader("application/json")

  val scn = scenario("Video Game DB - 3 calls")
    .exec(http("Get all video game - 1st call")
    .get("/videogame"))
    .pause(5)

    .exec(http("Get Specific Game")
    .get("/videogame/2"))
    .pause(1, 10)
  
    .exec(http("Get all video game - 2nd call")
    .get("/videogame"))
    .pause(3)


  setUp(scn.inject(atOnceUsers(1)).protocols(httpProtocol))

}
