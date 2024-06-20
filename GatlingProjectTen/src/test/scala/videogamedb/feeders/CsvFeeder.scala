package videogamedb.feeders

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CsvFeeder extends Simulation {

  val httpProtocol = http.baseUrl("https://videogamedb.uk")
    .acceptHeader("application/json")

  val csvFeeder = csv("data/gameCsvFile.csv").circular

  def getSpecificVideoGame() = {
    repeat(15) {
      feed(csvFeeder)
        .exec(http("Get video game with name - ${gameName}")
          .get("/api/videogame/${gameId}")
          .check(jsonPath("$.name").is("${gameName}"))
          .check(status.is(200)))
        .pause(1)
    }
  }

  val scn = scenario("Csv feeder test")
    .exec(getSpecificVideoGame())

  setUp(
    scn.inject(atOnceUsers(5))
  ).protocols(httpProtocol)
}
