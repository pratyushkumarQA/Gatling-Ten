package videogamedb.scriptfundamentals

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CodeReuse extends Simulation{

  val httpProtocol = http
    .baseUrl("https://www.videogamedb.uk")
    .acceptHeader("application/json")

  def getAllVideoGame() ={
    repeat(3){
      exec(http("Get all video game")
        .get("/api/videogame")
        .check(status is (200)))
    }

  }
  def getSpecificGame() ={
    repeat(2,"counter"){
      exec(http("Get Specific Game")
        .get("/api/videogame/${counter}")
        .check(status in (200 to 210)))
    }

  }

  val scn = scenario("Reuse code")
    .exec(getAllVideoGame())
    .pause(2)
    .exec(getSpecificGame())
    .repeat(2) {
      exec(getAllVideoGame())
    }


  setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)


}
