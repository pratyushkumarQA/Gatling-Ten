package videogamedb.feeders

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import java.time.LocalDate
import java.time.format.DateTimeFormatter
import scala.util.Random

class ComplexCustomFeeder extends Simulation{

  val httpProtocol = http.baseUrl("https://videogamedb.uk")
    .acceptHeader("application/json")
    .contentTypeHeader("application/json")

  var idNumbers = (1 to 10).iterator
  val rnd = new Random()
  val now = LocalDate.now()
  val pattern = DateTimeFormatter.ofPattern("yyyy-MM-dd")

  def randomString(length: Int) = {
    rnd.alphanumeric.filter(_.isLetter).take(length).mkString
  }

  def getRandomDate(startDate: LocalDate, random: Random): String = {
    startDate.minusDays(random.nextInt(30)).format(pattern)
  }


  val customFeeder = Iterator.continually(Map(
    "gameId" -> idNumbers.next(),
    "name" -> ("Game-" + randomString(length = 5)),
    "releaseDate" -> getRandomDate(now, rnd),
    "reviewScore" -> rnd.nextInt(100),
    "category" -> ("Category-" +randomString(6)),
    "rating" -> ("rating-" +randomString(4))

  ))

  def authenticate() = {
    exec(http("Authenticate")
      .post("/api/authenticate")
      .body(StringBody("{\n  \"password\": \"admin\",\n  \"username\": \"admin\"\n}"))
      .check(jsonPath("$.token").saveAs("jwtToken")))
  }

  def createNewGame() = {
    repeat(10) {
      feed(customFeeder)
        .exec(http("Create new game - ${name}")
          .post("/api/videogame")
          .header("authorization", "Bearer ${jwtToken}")
          .body(ElFileBody("bodies/newGameTemplate.json")).asJson
          .check(bodyString.saveAs("responseBody")))
        .exec { session => println(session("responseBody").as[String]); session }
        .pause(1)
    }
  }

  val scn = scenario("Complex custom feeder")
    .exec(authenticate())
    .exec(createNewGame())



  setUp(scn.inject(atOnceUsers(1)).protocols(httpProtocol))

}
