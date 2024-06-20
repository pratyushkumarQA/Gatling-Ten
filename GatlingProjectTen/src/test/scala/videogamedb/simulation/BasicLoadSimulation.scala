package videogamedb.simulation

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class BasicLoadSimulation extends Simulation{

  val httpProtocol = http.baseUrl("https://videogamedb.uk")
    .acceptHeader("application/json")

  def getAllVideoGames() = {
    exec(
      http("Get All video games")
        .get("/api/videogame")
    )
  }

  def getSpecificGame() = {
    exec(
      http("Get Specific games")
        .get("/api/videogame/2")
    )
  }

  val scn = scenario("Basic Load Simulation")
    .exec(getAllVideoGames())
    .pause(5)
    .exec(getSpecificGame())
    .pause(5)
    .exec(getAllVideoGames())

  setUp(scn.inject(nothingFor(5),
    atOnceUsers(5),
    rampUsers(10).during(10)
  ).protocols(httpProtocol))

}
