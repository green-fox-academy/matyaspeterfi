-- MySQL dump 10.13  Distrib 8.0.18, for osx10.14 (x86_64)
--
-- Host: localhost    Database: reddit
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL,
  `score` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (2,'TEST POST 1','www.reddit.com','2019-11-04 10:58:12',5),(3,'TEST POST 2','www.reddit.com','2019-11-04 10:58:38',7),(4,'TEST POST 3','www.reddit.com','2019-11-04 10:58:48',9),(5,'TEST POST 4','www.reddit.com','2019-11-04 10:59:01',14),(6,'TEST POST 3','www.reddit.com','2019-11-04 12:06:25',9),(7,'TestTitle','www.reddit.com','2019-11-04 12:08:35',9),(8,'TestTitle','www.reddit.com','2019-11-04 12:08:51',9),(9,'TestTitle','www.reddit.com','2019-11-04 12:09:24',9),(10,'TestTitle','www.reddit.com','2019-11-04 12:09:34',9),(11,'Crockford','www.reddit.com','2019-11-04 12:10:05',9),(12,'Crockford','Crockford','2019-11-04 12:12:06',9),(13,'Crockford','Crockford','2019-11-04 12:12:14',9),(14,'Crockford','Crockford','2019-11-04 12:12:27',9),(15,'Crockford','Crockford','2019-11-04 12:13:38',9),(16,'Crockford','http://9gag.com','2019-11-04 12:14:01',9),(17,'Crockford','http://9gag.com','2019-11-04 12:14:29',1),(18,'Crockford','http://9gag.com','2019-11-04 12:16:31',1),(19,'Arse','http://feck.com','2019-11-06 16:52:08',1),(20,'Arse','http://feck.com','2019-11-06 16:54:15',1),(21,'Arse','http://feck.com','2019-11-06 17:06:58',1),(22,'Arse','http://feck.com','2019-11-06 17:07:16',1),(23,'Arse','http://feck.com','2019-11-06 17:08:05',1),(24,'Arse','http://feck.com','2019-11-06 17:09:11',1),(25,'Arse','http://feck.com','2019-11-06 17:09:54',1),(26,'Arse','http://feck.com','2019-11-06 17:10:32',1),(27,'Arse','http://feck.com','2019-11-06 17:10:59',1),(28,'Arse','http://feck.com','2019-11-06 17:12:27',1),(29,'Arse','http://feck.com','2019-11-06 17:13:25',1),(30,'Arse','http://feck.com','2019-11-06 17:13:37',1),(31,'Arse','http://feck.com','2019-11-06 17:13:56',1),(32,'Arse','http://feck.com','2019-11-06 17:14:09',1),(33,'Arse','http://feck.com','2019-11-06 17:15:22',1),(34,'Arse','http://feck.com','2019-11-06 17:15:30',3);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-08 12:02:09
