package videogamedb.commandline

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class RuntimeParameters extends Simulation{

  val httpProtocol = http.baseUrl("https://videogamedb.uk")
    .acceptHeader("application/json")

  def USERCOUNT = System.getProperty("USERS","5").toInt
  def RAMPDURATION = System.getProperty("RAMPDURATION", "10").toInt
  def TESTDURATION = System.getProperty("TESTDURATION", "30").toInt

  before{
    println(s"Running test with ${USERCOUNT} users")
    println(s"Running test with ${RAMPDURATION} seconds")
    println(s"Running test with ${TESTDURATION} seconds")
  }

  def getAllVideoGames() = {
    exec(
      http("Get All Video Games")
        .get("/api/videogame")
    ).pause(1)
  }


  val scn = scenario("Run from command line")
    .exec(getAllVideoGames())


  setUp(
    scn.inject(
      nothingFor(5),
      rampUsers(USERCOUNT).during(RAMPDURATION)
    )
  ).protocols(httpProtocol)
    .maxDuration(TESTDURATION)
}
