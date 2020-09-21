-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: series
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `series`
--

DROP TABLE IF EXISTS `series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `series` (
  `idseries` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `genre` varchar(45) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `episodes` int DEFAULT NULL,
  `seasons` int DEFAULT NULL,
  `year` int DEFAULT '0',
  `rating` float DEFAULT NULL,
  `summary` mediumtext,
  `urlimg` varchar(45) DEFAULT NULL,
  `urltrailer` tinytext,
  `reviews` mediumtext,
  PRIMARY KEY (`idseries`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `series`
--

LOCK TABLES `series` WRITE;
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` VALUES (0,'Game of Thrones','drama, fantasy',55,10,8,2011,8.9,'An adaptation of author George R.R. Martin\'s \"A Song of Ice and Fire\" medieval fantasies about power struggles among the Seven Kingdoms of Westeros.','../../assets/S0.jpg','https://www.youtube.com/watch?v=BpJYNVhGf1s',NULL),(1,'The Wire','drama, crime',57,12,5,2002,9.4,'A complex crime drama set in Baltimore that follows the thread of a single police investigation, from the perspectives of both law-enforcement officials and the criminals they\'re pursuing focused on the city\'s illegal drug trade in the first series before expanding in scope for the second to include corruption on the waterfront.','../../assets/S1.jpg','https://www.youtube.com/watch?v=9qK-VGjMr8g',NULL),(2,'The Sopranos','drama, crime',50,13,6,1999,9.2,'A conflicted New Jersey crime boss seeks therapy to cope with mob and family pressures in this addictive, stunningly original drama, which can be chillingly violent, wrenchingly moving or darkly funny.','../../assets/S2.jpg','https://www.youtube.com/watch?v=u9qpFgAa52U',NULL),(3,'Breaking Bad','drama, crime',47,13,5,2008,9.6,'A high-school chemistry teacher learns he\'s dying, so he takes up a new career as a meth producer in hopes of earning enough money to take care of his family.','../../assets/S3.jpg','https://www.youtube.com/watch?v=HhesaQXLuRY',NULL),(4,'Star Trek: The Next Generation','science fiction, adventures, mystery',45,26,7,1987,8.9,'A new crew boards a revamped USS Enterprise in the first spin-off from the \'60s cult classic. Set some 70 years after the Capt. Kirk era, the syndicated sequel follows the seven-year trek of Capt. Jean-Luc Picard and his colorful subordinates (including a Klingon!) as they encounter new life forms and foes, including the Borg, Q and the Ferengi. Picard and his sidekicks would continue their voyages in a series of theatrical films.','../../assets/S4.jpg','https://www.youtube.com/watch?v=jtmsI07AMsE',NULL),(5,'Mad Men','drama',47,13,7,2007,9.4,'A look at the high-powered world of advertising in 1960s New York City, from the boardroom to the bedroom.','../../assets/S5.jpg','https://www.youtube.com/watch?v=RTMk-xy2dTY',NULL),(6,'Lost','action, adventure, science fiction',43,20,6,2004,8.5,'Forty-eight passengers miraculously survive an air crash only to be stranded on a scary island. With the trauma of the nightmarish crash still in their minds, the passengers have to put up with differences, hostility, predators and more. What does the future have in store for them?','../../assets/S6.jpg','https://www.youtube.com/watch?v=KTu8iDynwNc',NULL),(7,'The Simpsons','animation, comedy',25,22,31,1989,8.5,'The satiric adventures of a working-class family in the misfit city of Springfield.','../../assets/S7.jpg','https://www.youtube.com/watch?v=aDcFhYtiIEM',NULL),(8,'Parks and Recreation','comedy',22,18,7,2009,9.3,'A mockumentary following the inner workings of the Parks and Recreation Department of Pawnee, Ind. From the creators of \"The Office.\"','../../assets/S8.jpg','https://www.youtube.com/watch?v=9djCOPHOvOw',NULL),(9,'Modern Family','comedy',23,23,11,209,8.5,'A mockumentary-style sitcom chronicling the unusual kinship of the extended Pritchett clan, a brood that includes patriarch Jay; his younger Latina wife, Gloria, and her preteen son; Jay\'s daughter, Claire, and her family; and Jay\'s son, Mitchell, who lives with his partner, Cameron.','../../assets/S9.jpg','https://www.youtube.com/watch?v=aogZUDx51vQ',NULL),(10,'Battlestar Galactica','science fiction',42,20,4,2005,9.6,'An interstellar warship protects survivors of a decimated civilization with a race of android predators in hot pursuit in this dark update of the 1978-80 space adventure.','../../assets/S10.jpg','https://www.youtube.com/watch?v=A90ljl-hrg0',NULL),(11,'Twin Peaks','drama, mystery, crime',48,16,2,1990,8.8,'A surreal cult favourite about the investigation into the murder of a high-school homecoming queen in a Pacific Northwest lumber town.','../../assets/S11.jpg','https://www.youtube.com/watch?v=q040A3z1W08',NULL),(12,'The X Files','mystery, science fiction, crime',45,20,11,1993,7.5,'\'The truth is out there,\' and FBI agents Scully and Mulder seek it in this sci-fi phenomenon about their quest to explain the seemingly unexplainable. Their strange cases include UFO sightings, alien abductions and just about anything else paranormal.','../../assets/S12.jpg','https://www.youtube.com/watch?v=mlZIVpVNgpI',NULL),(13,'Monty Python\'s Flying Circus','comedy',30,12,4,1969,10,'A highly influential cult favorite starring the British comedy troupe that offered something completely different in the way of offbeat sketches, surreal animation, sight gags, satiric songs and bizarre characters.','../../assets/S13.jpg','https://www.youtube.com/watch?v=xJNeRCiq75M',NULL),(14,'Orange Is The New Black','drama, comedy',51,13,7,2013,9,'A New York woman struggles to adjust to life in a federal prison.','../../assets/S14.jpg','https://www.youtube.com/watch?v=vY0qzXi5oJg',NULL),(15,'The Shield','drama, crime, action',45,12,7,2002,9,'A corrupt and brutal L.A. detective runs an elite squad by his own rules in a neighborhood ravaged by drugs and gangs.','../../assets/S15.jpg','https://www.youtube.com/watch?v=x7dKgKu02zQ',NULL),(16,'Dark','drama, mystery, science fiction',60,8,3,2017,7,'Dark is set in a German town in present day where the disappearance of two young children exposes the double lives and fractured relationships among four families.','../../assets/S16.jpg','https://www.youtube.com/watch?v=rrwycJ08PSA',NULL),(17,'Stranger Things','fantasy, science fiction, mystery, drama',60,8,4,2016,9.3,'A love letter to the \'80s classics that captivated a generation, Stranger Things is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.','../../assets/S17.jpg','https://www.youtube.com/watch?v=mnd7sFt5c3A',NULL),(18,'Daredevil','action, drama',60,13,3,2015,9.2,'A blind lawyer fights crime by day in the courtroom and by night as a superhero with extraordinary senses in this adaptation of the Marvel Comics character Daredevil.','../../assets/S18.jpg','https://www.youtube.com/watch?v=jAy6NJ_D5vU',NULL),(19,'Euphoria','drama',54,8,1,2019,8.2,'Following a group of high school students as they navigate love and friendships in a world of drugs, sex, trauma and social media.','../../assets/S19.jpg','https://www.youtube.com/watch?v=UR4Pxgnm-GA',NULL),(20,'The Clone Wars','animation, science fiction, action, adventure',22,19,7,2008,8.3,'Anakin Skywalker, Ahsoka Tano, Obi-Wan Kenobi and the Jedi Knights fight in the Clone Wars, taking them to many new planets and introducing new players. The series spans the time between \'Star Wars Episode II: Attack of the Clones\' and \'Star Wars Episode III: Revenge of the Sith.\'','../../assets/S20.jpg','https://www.youtube.com/watch?v=RI7WyhWZkzk',NULL),(21,'Fringe','science fiction, crime',50,20,5,2008,9,'An F.B.I. agent is forced to work with an institutionalized scientist and his son in order to rationalize a brewing storm of unexplained phenomena.','../../assets/S21.jpg','https://www.youtube.com/watch?v=29bSzbqZ3xE',NULL);
/*!40000 ALTER TABLE `series` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-21 22:28:39
