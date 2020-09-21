-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: localhost    Database: films
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
-- Table structure for table `film`
--

DROP TABLE IF EXISTS `film`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `film` (
  `idfilm` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `duration` int DEFAULT NULL,
  `genre` varchar(45) DEFAULT NULL,
  `summary` tinytext,
  `rating` float DEFAULT NULL,
  `urlimg` varchar(45) DEFAULT NULL,
  `urltrailer` varchar(45) DEFAULT NULL,
  `reviews` mediumtext,
  `year` int DEFAULT '0',
  `director` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idfilm`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `film`
--

LOCK TABLES `film` WRITE;
/*!40000 ALTER TABLE `film` DISABLE KEYS */;
INSERT INTO `film` VALUES (0,'The Godfather',175,'drama, crime','The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',9.8,'../../assets/F0.jpg','https://www.youtube.com/watch?v=5DO-nDW43Ik',NULL,1972,'Francis Ford Coppola'),(1,'The Shawshank Redemption',142,'drama, mystery, crime','Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',9,'../../assets/F1.jpg','https://www.youtube.com/watch?v=NmzuHjWmXOc',NULL,1994,'Frank Darabont'),(2,'Casablanca',102,'romance, drama, war','A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.',9.9,'../../assets/F2.jpg','https://www.youtube.com/watch?v=S9ID5DHsX8g',NULL,1942,'Michael Curtiz'),(3,'Citizen Kane',119,'drama, mystery','Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; \'Rosebud\'.',10,'../../assets/F3.jpg','https://www.youtube.com/watch?v=8dxh3lwdOFw',NULL,1941,'Orson Welles'),(4,'One Flew Over The Cuckoo\'s Nest',133,'drama, comedy','A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.',9.4,'../../assets/F4.jpg','https://www.youtube.com/watch?v=7Q4suWxAt30',NULL,1975,'Milos Forman'),(5,'Psycho',109,'horror, mystery','A Phoenix secretary embezzles $40,000 from her employer\'s client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.',9.6,'../../assets/F5.jpg','https://www.youtube.com/watch?v=j7HXvTWfvhk',NULL,1960,'Alfred Hitchcock'),(6,'Star Wars: Episode IV',121,'science fiction, fantasy, adventure','Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',9.2,'../../assets/F6.jpg','https://www.youtube.com/watch?v=L-_xHEv0l-w',NULL,1977,'George Lucas'),(7,'2001: A Space Odyssey',149,'science fiction, adventure, drama','After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.',9.2,'../../assets/F7.jpg','https://www.youtube.com/watch?v=Z2UWOeBcsJI',NULL,1968,'Stanley Kubrick'),(8,'The Lord Of The Rings',145,'action, adventure, drama, fantasy','A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',9.1,'../../assets/F8.jpg','https://www.youtube.com/watch?v=cKEGZ-CvWHk',NULL,2001,'Peter Jackson'),(9,'Saving Private Ryan',169,'war, drama','Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',9.3,'../../assets/F9.jpg','https://www.youtube.com/watch?v=9CiW_DgxCnQ',NULL,1998,'Steven Spielberg'),(10,'Raiders Of The Lost Ark',115,'action, adventure','In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler’s Nazis can obtain its awesome powers.',9.5,'../../assets/F10.jpg','https://www.youtube.com/watch?v=XkkzKHCx154',NULL,1981,'Steven Spielberg'),(11,'The Dark Knight',150,'action, crime, drama','When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',9.4,'../../assets/F11.jpg','https://www.youtube.com/watch?v=EXeTwQWrcwY',NULL,2008,'Christopher Nolan'),(12,'Slumdog Millionaire',120,'drama, romance','A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of \"Who Wants to be a Millionaire?\".',9.1,'../../assets/F12.jpg','https://www.youtube.com/watch?v=vI-lAIY2Iok',NULL,2008,'Daanny Boyle and Loveleen Swarup'),(13,'Blood Diamond',143,'adventure, drama','A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.',8,'../../assets/F13.jpg','https://www.youtube.com/watch?v=r0iDAjXWU4Q',NULL,2006,'Edward Zwick'),(14,'How To Train Your Dragon',98,'animation, action, adventure','A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.',9.9,'../../assets/F14.jpg','https://www.youtube.com/watch?v=GfBHLVtbG6U',NULL,2010,'Dean DeBlois and Chris Sanders'),(15,'The Incredibles',115,'animation, action, adventure','A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.',9.7,'../../assets/F15.jpg','https://www.youtube.com/watch?v=-UaGUdNJdRQ',NULL,2004,'Brad Bird'),(16,'Inglorious Basterds',153,'war, action, comedy','In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner\'s vengeful plans for the same.',8.9,'../../assets/F16.jpg','https://www.youtube.com/watch?v=c9AXOq4an3Y',NULL,2009,'Quentin Tarantino'),(17,'A Star Is Born',136,'romance, drama','A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.',9,'../../assets/F17.jpg','https://www.youtube.com/watch?v=cAht08yu5fM',NULL,2018,'Bradley Cooper'),(18,'Requiem For A Dream',102,'drama','The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.',7.9,'../../assets/F18.jpg','https://www.youtube.com/watch?v=QBwzN4v1vA0',NULL,2000,'Darren Aronofsky'),(19,'Kill Bill: Vol. 1',111,'action, crime, mystery','After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',8.5,'../../assets/F19.jpg','https://www.youtube.com/watch?v=7kSuas6mRpk',NULL,2003,'Quentin Tarantino');
/*!40000 ALTER TABLE `film` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-21 22:28:23
