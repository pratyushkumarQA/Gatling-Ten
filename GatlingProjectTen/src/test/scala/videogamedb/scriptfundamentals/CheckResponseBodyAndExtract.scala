package videogamedb.scriptfundamentals

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckResponseBodyAndExtract extends Simulation{

  val httpProtocol = http
    .baseUrl("https://www.videogamedb.uk")
    .acceptHeader("application/json")

  val scn = scenario("check with JSON path")
    .exec(http("Get Specific Game")
      .get("/api/videogame/3")
    .check(jsonPath("$.name").is("Tetris")))

    .exec(http("Get All video games")
    .get("/api/videogame")
    .check(jsonPath("$[1].id").saveAs("gameId")))
    .exec { session => println(session); session}

    .exec(http("Get Specific Game")
    .get("/api/videogame/${gameId}")
    .check(jsonPath("$.name").is("Gran Turismo 3"))
    .check(bodyString.saveAs("responseBody")))
    .exec { session => println(session("responseBody").as[String]); session}



  setUp(scn.inject(atOnceUsers(1)).protocols(httpProtocol))


}
