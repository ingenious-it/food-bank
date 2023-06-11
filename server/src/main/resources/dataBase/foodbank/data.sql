-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: foodbank
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `admin_user`
--

DROP TABLE IF EXISTS `admin_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin_user` (
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_user`
--

LOCK TABLES `admin_user` WRITE;
/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data` (
  `C1` text,
  `C2` text,
  `C3` text,
  `C4` text,
  `C5` text,
  `C6` text,
  `C7` text,
  `C8` text,
  `C9` text,
  `C10` text,
  `C11` text,
  `C12` text,
  `C13` text,
  `C14` text,
  `C15` text,
  `C16` text,
  `C17` text,
  `C18` text,
  `C19` text,
  `C20` text,
  `C21` text,
  `C22` text,
  `C23` text,
  `C24` text,
  `C25` text,
  `C26` text,
  `C27` text,
  `C28` text,
  `C29` text,
  `C30` text,
  `C31` text,
  `C32` text,
  `C33` text,
  `C34` int DEFAULT NULL,
  `C35` text,
  `C36` text,
  `C37` text,
  `C38` text,
  `C39` int DEFAULT NULL,
  `C40` text,
  `C41` text,
  `C42` text,
  `C43` text,
  `C44` int DEFAULT NULL,
  `C45` text,
  `C46` text,
  `C47` text,
  `C48` text,
  `C49` int DEFAULT NULL,
  `C50` text,
  `C51` text,
  `C52` text,
  `C53` text,
  `C54` int DEFAULT NULL,
  `C55` text,
  `C56` text,
  `C57` text,
  `C58` text,
  `C59` int DEFAULT NULL,
  `C60` text,
  `C61` text,
  `C62` text,
  `C63` text,
  `C64` int DEFAULT NULL,
  `C65` text,
  `C66` text,
  `C67` text,
  `C68` text,
  `C69` int DEFAULT NULL,
  `C70` text,
  `C71` text,
  `C72` text,
  `C73` text,
  `C74` int DEFAULT NULL,
  `C75` text,
  `C76` text,
  `C77` text,
  `C78` text,
  `C79` int DEFAULT NULL,
  `C80` text,
  `C81` text,
  `C82` text,
  `C83` text,
  `C84` int DEFAULT NULL,
  `C85` text,
  `C86` text,
  `C87` text,
  `C88` text,
  `C89` int DEFAULT NULL,
  `C90` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_supplier_details`
--

DROP TABLE IF EXISTS `data_supplier_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_supplier_details` (
  `data_supplier_id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` int NOT NULL,
  PRIMARY KEY (`data_supplier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_supplier_details`
--

LOCK TABLES `data_supplier_details` WRITE;
/*!40000 ALTER TABLE `data_supplier_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_supplier_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_supplier_details_seq`
--

DROP TABLE IF EXISTS `data_supplier_details_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_supplier_details_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_supplier_details_seq`
--

LOCK TABLES `data_supplier_details_seq` WRITE;
/*!40000 ALTER TABLE `data_supplier_details_seq` DISABLE KEYS */;
INSERT INTO `data_supplier_details_seq` VALUES (1);
/*!40000 ALTER TABLE `data_supplier_details_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery` (
  `did` int NOT NULL,
  `delivery_date` datetime(6) DEFAULT NULL,
  `victim_nic` varchar(255) DEFAULT NULL,
  `is_completed` bit(1) DEFAULT NULL,
  PRIMARY KEY (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_person details`
--

DROP TABLE IF EXISTS `delivery_person details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_person details` (
  `delivery_person_id` int NOT NULL,
  `delivery_person_name` varchar(255) DEFAULT NULL,
  `did` int DEFAULT NULL,
  PRIMARY KEY (`delivery_person_id`),
  KEY `FKtifbdvia7i0t4si62s5hvu83k` (`did`),
  CONSTRAINT `FKtifbdvia7i0t4si62s5hvu83k` FOREIGN KEY (`did`) REFERENCES `delivery` (`did`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_person details`
--

LOCK TABLES `delivery_person details` WRITE;
/*!40000 ALTER TABLE `delivery_person details` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_person details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_person details_seq`
--

DROP TABLE IF EXISTS `delivery_person details_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_person details_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_person details_seq`
--

LOCK TABLES `delivery_person details_seq` WRITE;
/*!40000 ALTER TABLE `delivery_person details_seq` DISABLE KEYS */;
INSERT INTO `delivery_person details_seq` VALUES (1);
/*!40000 ALTER TABLE `delivery_person details_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_seq`
--

DROP TABLE IF EXISTS `delivery_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_seq`
--

LOCK TABLES `delivery_seq` WRITE;
/*!40000 ALTER TABLE `delivery_seq` DISABLE KEYS */;
INSERT INTO `delivery_seq` VALUES (1);
/*!40000 ALTER TABLE `delivery_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_donation`
--

DROP TABLE IF EXISTS `food_donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_donation` (
  `donationid` int NOT NULL,
  `donation_address` varchar(255) DEFAULT NULL,
  `donation_date` datetime(6) DEFAULT NULL,
  `nearest_location` varchar(255) DEFAULT NULL,
  `selected_option` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`donationid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_donation`
--

LOCK TABLES `food_donation` WRITE;
/*!40000 ALTER TABLE `food_donation` DISABLE KEYS */;
/*!40000 ALTER TABLE `food_donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_donation_seq`
--

DROP TABLE IF EXISTS `food_donation_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_donation_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_donation_seq`
--

LOCK TABLES `food_donation_seq` WRITE;
/*!40000 ALTER TABLE `food_donation_seq` DISABLE KEYS */;
INSERT INTO `food_donation_seq` VALUES (1);
/*!40000 ALTER TABLE `food_donation_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_in_package_type`
--

DROP TABLE IF EXISTS `food_in_package_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_in_package_type` (
  `quantity_available` int NOT NULL,
  `id` int NOT NULL,
  `typeid` int NOT NULL,
  PRIMARY KEY (`id`,`typeid`),
  KEY `FKbg17y940unixkpou9ivey80cb` (`typeid`),
  CONSTRAINT `FK68w2voi9dq3m1k0ji6u1miucf` FOREIGN KEY (`id`) REFERENCES `food_item` (`id`),
  CONSTRAINT `FKbg17y940unixkpou9ivey80cb` FOREIGN KEY (`typeid`) REFERENCES `package_type` (`typeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_in_package_type`
--

LOCK TABLES `food_in_package_type` WRITE;
/*!40000 ALTER TABLE `food_in_package_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `food_in_package_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_item`
--

DROP TABLE IF EXISTS `food_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_item` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_item`
--

LOCK TABLES `food_item` WRITE;
/*!40000 ALTER TABLE `food_item` DISABLE KEYS */;
INSERT INTO `food_item` VALUES (1,'Rice',23),(2,'Dhal',12),(3,'Cooking Oil',20),(4,'Dry Foods',4),(5,'Sugar',3),(6,'Flour',6),(7,'Milk Powder',76),(8,'Biscuits',30);
/*!40000 ALTER TABLE `food_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_item_donation`
--

DROP TABLE IF EXISTS `food_item_donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_item_donation` (
  `donated_quantity` int NOT NULL,
  `id` int NOT NULL,
  `donationid` int NOT NULL,
  PRIMARY KEY (`donationid`,`id`),
  KEY `FKtko9cronjvicfd89x1x8tgxe9` (`id`),
  CONSTRAINT `FKp5ado370lg1nvbqn81aljbpqr` FOREIGN KEY (`donationid`) REFERENCES `food_donation` (`donationid`),
  CONSTRAINT `FKtko9cronjvicfd89x1x8tgxe9` FOREIGN KEY (`id`) REFERENCES `food_item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_item_donation`
--

LOCK TABLES `food_item_donation` WRITE;
/*!40000 ALTER TABLE `food_item_donation` DISABLE KEYS */;
/*!40000 ALTER TABLE `food_item_donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_item_seq`
--

DROP TABLE IF EXISTS `food_item_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_item_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_item_seq`
--

LOCK TABLES `food_item_seq` WRITE;
/*!40000 ALTER TABLE `food_item_seq` DISABLE KEYS */;
INSERT INTO `food_item_seq` VALUES (101);
/*!40000 ALTER TABLE `food_item_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issued_food_package`
--

DROP TABLE IF EXISTS `issued_food_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issued_food_package` (
  `issuedid` int NOT NULL,
  `issued_date` datetime(6) DEFAULT NULL,
  `issued_quantity` int NOT NULL,
  `package_type_name` varchar(255) DEFAULT NULL,
  `typeid` int DEFAULT NULL,
  PRIMARY KEY (`issuedid`),
  KEY `FK15jr9xcheuvhm92lbf1e8oxd5` (`typeid`),
  CONSTRAINT `FK15jr9xcheuvhm92lbf1e8oxd5` FOREIGN KEY (`typeid`) REFERENCES `package_type` (`typeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issued_food_package`
--

LOCK TABLES `issued_food_package` WRITE;
/*!40000 ALTER TABLE `issued_food_package` DISABLE KEYS */;
INSERT INTO `issued_food_package` VALUES (1,'2023-06-09 05:30:00.000000',6,'Type 1',101),(2,'2023-06-09 05:30:00.000000',7,'Type 2',102),(3,'2023-06-09 05:30:00.000000',16,'Type 3',103),(4,'2023-06-10 05:30:00.000000',4,'Type 1',101),(5,'2023-06-10 05:30:00.000000',5,'Type 2',102),(6,'2023-06-10 05:30:00.000000',17,'Type 3',103),(52,'2023-06-11 05:30:00.000000',6,'Type 1',101),(53,'2023-06-11 05:30:00.000000',7,'Type 2',102),(54,'2023-06-11 05:30:00.000000',19,'Type 3',103),(55,'2023-06-16 05:30:00.000000',6,'Type 1',101),(56,'2023-06-16 05:30:00.000000',7,'Type 2',102),(57,'2023-06-16 05:30:00.000000',2,'Type 3',103);
/*!40000 ALTER TABLE `issued_food_package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issued_food_package_seq`
--

DROP TABLE IF EXISTS `issued_food_package_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issued_food_package_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issued_food_package_seq`
--

LOCK TABLES `issued_food_package_seq` WRITE;
/*!40000 ALTER TABLE `issued_food_package_seq` DISABLE KEYS */;
INSERT INTO `issued_food_package_seq` VALUES (151);
/*!40000 ALTER TABLE `issued_food_package_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `money_donation`
--

DROP TABLE IF EXISTS `money_donation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `money_donation` (
  `donationid` varchar(255) NOT NULL,
  `date_and_time` varchar(255) DEFAULT NULL,
  `donation_amount` bigint NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`donationid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `money_donation`
--

LOCK TABLES `money_donation` WRITE;
/*!40000 ALTER TABLE `money_donation` DISABLE KEYS */;
/*!40000 ALTER TABLE `money_donation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_type`
--

DROP TABLE IF EXISTS `package_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_type` (
  `typeid` int NOT NULL,
  `quantity` int NOT NULL,
  `type_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_type`
--

LOCK TABLES `package_type` WRITE;
/*!40000 ALTER TABLE `package_type` DISABLE KEYS */;
INSERT INTO `package_type` VALUES (101,55,'Type 1'),(102,2,'Type 2'),(103,1,'Type 3');
/*!40000 ALTER TABLE `package_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_type_details`
--

DROP TABLE IF EXISTS `package_type_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_type_details` (
  `packageid` int NOT NULL,
  `package_type` varchar(255) DEFAULT NULL,
  `requested_quantity` int NOT NULL,
  PRIMARY KEY (`packageid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_type_details`
--

LOCK TABLES `package_type_details` WRITE;
/*!40000 ALTER TABLE `package_type_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_type_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_type_details_seq`
--

DROP TABLE IF EXISTS `package_type_details_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_type_details_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_type_details_seq`
--

LOCK TABLES `package_type_details_seq` WRITE;
/*!40000 ALTER TABLE `package_type_details_seq` DISABLE KEYS */;
INSERT INTO `package_type_details_seq` VALUES (1);
/*!40000 ALTER TABLE `package_type_details_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_type_seq`
--

DROP TABLE IF EXISTS `package_type_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_type_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_type_seq`
--

LOCK TABLES `package_type_seq` WRITE;
/*!40000 ALTER TABLE `package_type_seq` DISABLE KEYS */;
INSERT INTO `package_type_seq` VALUES (1);
/*!40000 ALTER TABLE `package_type_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packed_food_package`
--

DROP TABLE IF EXISTS `packed_food_package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packed_food_package` (
  `packedid` int NOT NULL,
  `package_type_name` varchar(255) DEFAULT NULL,
  `packed_date` datetime(6) DEFAULT NULL,
  `packed_quantity` int NOT NULL,
  `typeid` int DEFAULT NULL,
  PRIMARY KEY (`packedid`),
  KEY `FKgudphoeohprrobcff3wsmxgut` (`typeid`),
  CONSTRAINT `FKgudphoeohprrobcff3wsmxgut` FOREIGN KEY (`typeid`) REFERENCES `package_type` (`typeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packed_food_package`
--

LOCK TABLES `packed_food_package` WRITE;
/*!40000 ALTER TABLE `packed_food_package` DISABLE KEYS */;
INSERT INTO `packed_food_package` VALUES (52,'Type 1','2023-06-10 05:30:00.000000',5,101),(53,'Type 2','2023-06-10 05:30:00.000000',3,102),(54,'Type 3','2023-06-10 05:30:00.000000',1,103),(55,'Type 1','2023-06-16 05:30:00.000000',1,101),(56,'Type 2','2023-06-16 05:30:00.000000',1,102),(57,'Type 3','2023-06-16 05:30:00.000000',1,103),(102,'Type 1','2023-06-10 05:30:00.000000',3,101),(103,'Type 2','2023-06-10 05:30:00.000000',2,102),(104,'Type 3','2023-06-10 05:30:00.000000',3,103),(152,'Type 1','2023-06-10 05:30:00.000000',4,101),(153,'Type 2','2023-06-10 05:30:00.000000',3,102),(154,'Type 3','2023-06-10 05:30:00.000000',3,103),(155,'Type 1','2023-06-10 05:30:00.000000',3,101),(156,'Type 2','2023-06-10 05:30:00.000000',2,102),(157,'Type 3','2023-06-10 05:30:00.000000',3,103),(158,'Type 1','2023-06-17 05:30:00.000000',3,101),(159,'Type 2','2023-06-17 05:30:00.000000',2,102),(160,'Type 3','2023-06-17 05:30:00.000000',1,103),(202,'Type 1','2023-06-10 05:30:00.000000',3,101),(203,'Type 2','2023-06-10 05:30:00.000000',2,102),(204,'Type 3','2023-06-10 05:30:00.000000',2,103),(205,'Type 1','2023-06-15 05:30:00.000000',4,101),(206,'Type 2','2023-06-15 05:30:00.000000',4,102),(207,'Type 3','2023-06-15 05:30:00.000000',9,103);
/*!40000 ALTER TABLE `packed_food_package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `packed_food_package_seq`
--

DROP TABLE IF EXISTS `packed_food_package_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packed_food_package_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `packed_food_package_seq`
--

LOCK TABLES `packed_food_package_seq` WRITE;
/*!40000 ALTER TABLE `packed_food_package_seq` DISABLE KEYS */;
INSERT INTO `packed_food_package_seq` VALUES (301);
/*!40000 ALTER TABLE `packed_food_package_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registered_user`
--

DROP TABLE IF EXISTS `registered_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registered_user` (
  `id` int NOT NULL,
  `contact_number` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `donator_flag` bit(1) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `data_supplier_points` double NOT NULL,
  `donater_points` double NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_user`
--

LOCK TABLES `registered_user` WRITE;
/*!40000 ALTER TABLE `registered_user` DISABLE KEYS */;
INSERT INTO `registered_user` VALUES (1,1234567890,'johndoe@example.com','John','Doe','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','johndoe',NULL,NULL,0,0,NULL),(8,782343256,'amalshalinda1999@gmail.com','Amal','Shalinda','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','Amal99',NULL,NULL,0,0,NULL),(10,711727355,'milanka01@gmail.com','milanka','tharangana','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','mila00',NULL,NULL,0,0,NULL),(12,912635664,'kjskjsxb@gmail.com','gvx','ihxhj','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','User',NULL,NULL,0,0,NULL),(102,786756432,'USer@gmail.com','User1','User2','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','Testuser',NULL,NULL,0,0,NULL),(502,1234567890,'johndoe@example.com','John','Doe','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','johndoe',NULL,NULL,0,0,NULL),(503,1234567890,'johndoe@example.com','John','Doe','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','johndoe',NULL,NULL,0,0,NULL),(504,1234567890,'johndoe@example.com','Nishoban','Doe','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','johndoe',NULL,NULL,3,0,NULL),(505,786756432,'Tharee@gmail.com','Thareejan','Pakiyaraj','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','Tharee',NULL,NULL,4,0,NULL),(506,766666666,'pavi@wso2.com','Pavitharan','varun','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','pavi',NULL,NULL,2,0,NULL),(552,785645342,'wert@gmail.com','Amal','Dissanayake','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','test',NULL,NULL,0,0,NULL),(553,786756432,'User@gmail.com','Testuser','Testuser2','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','User1',NULL,NULL,0,0,NULL),(602,757283480,'thareejan@gmail.com','Thareejan','Pakkiyarajah','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','thareejan',NULL,NULL,0,0,'/Both'),(652,763737373,'nuska@gmail.com','Nuska','Fayik','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','nuskaf',NULL,NULL,1,0,'Both'),(702,782222222,'kiru@gmail.com','Kirushanthan','Ravichandran','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','kiru22',NULL,NULL,1,0,'Donator'),(752,23,'gyufufr@gmail.com','vdsfv','hguyhfu','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','kiru22s',NULL,NULL,0,0,'Donator'),(802,765645333,'ttpd@gmail.com','Tharushni','Thathya','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','username',NULL,NULL,0,0,'Both'),(809,786655444,'abcd@gmail.com','kamal','perera','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','username2',NULL,NULL,0,0,'Both'),(812,912623344,'abcdd@gmail.com','Malkanthi','soyza','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','username3',NULL,NULL,0,0,'Both'),(815,765644333,'asde@gmail.com','upeksha','chamalka','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','username4',NULL,NULL,0,0,'Both'),(852,141256355,'af@gmail.com','milanka','thra','$2a$10$stFAKsAuN53RgVdeZXOVXeOksb2UpH.twKneWX1j2I9g.PU0tyCzC','fdzxgvhbjln',NULL,NULL,0,0,'');
/*!40000 ALTER TABLE `registered_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registered_user_seq`
--

DROP TABLE IF EXISTS `registered_user_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registered_user_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_user_seq`
--

LOCK TABLES `registered_user_seq` WRITE;
/*!40000 ALTER TABLE `registered_user_seq` DISABLE KEYS */;
INSERT INTO `registered_user_seq` VALUES (951);
/*!40000 ALTER TABLE `registered_user_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `victim_details`
--

DROP TABLE IF EXISTS `victim_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `victim_details` (
  `id` bigint NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `is_verified` bit(1) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `nic` varchar(255) DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `is_delivered` bit(1) DEFAULT NULL,
  `is_rejected` bit(1) DEFAULT NULL,
  `package_type` varchar(255) DEFAULT NULL,
  `is_accepted` bit(1) DEFAULT NULL,
  `is_delivery_selected` bit(1) DEFAULT NULL,
  `donater_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4jqdhilaypmyj4eghy916bohx` (`donater_id`),
  CONSTRAINT `FK4jqdhilaypmyj4eghy916bohx` FOREIGN KEY (`donater_id`) REFERENCES `registered_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `victim_details`
--

LOCK TABLES `victim_details` WRITE;
/*!40000 ALTER TABLE `victim_details` DISABLE KEYS */;
INSERT INTO `victim_details` VALUES (1,'Woerden','Alphazap','Aloïs',_binary '','Wolledge','01H2K169RBGDV1APNFGEZ9Y76G','43','735-143-3519','Northridge',_binary '',_binary '','text/plain',_binary '',_binary '\0',504),(2,'Heka','Stim','Clélia',_binary '','MacTeague','01H2K169JQZX935MNH0P6W8EH0','5','558-360-0121','Trailsway',_binary '',_binary '\0','application/x-msexcel',_binary '',_binary '',505),(3,'Yangshufang','Asoka','Léonore',_binary '','Brokenbrow','01H2K169A5FAZT7ASHM7V6BK6G','71','173-719-2448','Delaware',_binary '\0',_binary '','video/avi',_binary '',_binary '',506),(4,'Tyringe','Greenlam','Méryl',_binary '','MacCarter','01H2K169A35Y57017YCV0Y4CRA','69','874-309-6340','Charing Cross',_binary '',_binary '\0','image/jpeg',_binary '\0',_binary '',552),(5,'Santo Amaro da Imperatriz','Y-find','Zoé',_binary '','Mingaye','01H2K169BKHVFM084JRRXVPE8P','29','137-409-8161','Pepper Wood',_binary '\0',_binary '\0','application/msword',_binary '',_binary '',553),(6,'Trunovskoye','Wrapsafe','Intéressant',_binary '','Dickie','01H2K169C6E35GR7VP7FT3A8D9','85','915-983-8287','Blue Bill Park',_binary '\0',_binary '\0','application/x-mspowerpoint',_binary '\0',_binary '\0',602),(7,'San Martín de los Andes','Y-find','Judicaël',_binary '','Abelson','01H2K169F9SMVERHX0MXATQ3W6','43','392-710-3149','Crownhardt',_binary '\0',_binary '','video/mpeg',_binary '',_binary '',652),(8,'Fusagasuga','Vagram','Almérinda',_binary '','Danilchenko','01H2K169GRZJ3X9M5CXHZQH8F7','62','112-689-4277','Blaine',_binary '',_binary '','audio/x-mpeg-3',_binary '\0',_binary '',702),(9,'Andapa','Zamit','Dù',_binary '','Goundry','01H2K169ERAX7XDF7JGWGJS6FR','80','943-613-7054','Magdeline',_binary '',_binary '\0','image/x-tiff',_binary '',_binary '\0',752),(10,'Quţūr','Quo Lux','Ruì',_binary '','Cuppitt','01H2K169HN0QCE61WEBX5GWFVX','39','420-314-6115','Heath',_binary '\0',_binary '','application/msword',_binary '',_binary '',504),(11,'Rashaant','Asoka','Cécile',_binary '','Calloway','01H2K169G95CDBW12E0WJYT272','25','698-145-9106','Summer Ridge',_binary '',_binary '\0','image/jpeg',_binary '',_binary '',505),(12,'Brwinów','Stronghold','Mà',_binary '','Shimwall','01H2K169BZW2F6XT1N4K16FF3M','58','513-722-5169','7th',_binary '',_binary '','image/x-tiff',_binary '\0',_binary '\0',506),(13,'Jabal os Saraj','Fixflex','Fèi',_binary '','Hantusch','01H2K169AH6ZCD1Q64N86C8QEP','18','936-451-8766','Warrior',_binary '',_binary '','application/vnd.ms-excel',_binary '',_binary '',552),(14,'Pomerode','Tempsoft','Andrée',_binary '','Zylberdik','01H2K16A5HP5TFBZMKJFW4TJ3H','37','527-257-4555','Summerview',_binary '',_binary '','application/x-excel',_binary '\0',_binary '',553),(15,'Novaya Tavolzhanka','Overhold','Aimée',_binary '','Gehrts','01H2K169CB9D4HRJG7J4J0ZZKQ','36','356-376-2264','Mifflin',_binary '',_binary '\0','audio/x-mpeg-3',_binary '',_binary '',602),(16,'Chahār Burj','Treeflex','Tán',_binary '','Chessell','01H2K169AKCYXPEEM4VD2H9P92','17','876-602-6163','West',_binary '',_binary '','application/x-mspowerpoint',_binary '',_binary '',652),(17,'Thio','Latlux','Gaétane',_binary '','Lind','01H2K169K0YJ1W586R3R3FW8SP','88','563-630-8084','Stuart',_binary '\0',_binary '\0','video/quicktime',_binary '',_binary '\0',702),(18,'Phunphin','Alphazap','Audréanne',_binary '','Moyse','01H2K169M59R2HDP0HS7CEJK4M','1','153-633-4439','Maryland',_binary '\0',_binary '','application/x-excel',_binary '',_binary '\0',752),(19,'Shuizhai','Alphazap','Maïly',_binary '','Falvey','01H2K169QQ6TGSRWVSWFNHE9RS','82','723-325-8617','Lindbergh',_binary '',_binary '\0','video/x-mpeg',_binary '',_binary '',504),(20,'Petukhovo','Cardguard','Yénora',_binary '','Poulston','01H2K169BHCKSYZ0D09SKYT395','26','522-117-3890','Killdeer',_binary '\0',_binary '\0','application/mspowerpoint',_binary '\0',_binary '\0',505),(21,'Belozërsk','Temp','Gaëlle',_binary '','Stenning','01H2K169E33EQEY2R3Z8MD6WA7','96','817-841-4818','Westend',_binary '\0',_binary '\0','video/mpeg',_binary '',_binary '\0',506),(22,'Strizhi','Stim','Torbjörn',_binary '','Kingsbury','01H2K169C0JNP03GVBPKPVZZMC','51','114-496-5968','Lerdahl',_binary '',_binary '','application/x-excel',_binary '\0',_binary '\0',552),(23,'Makamba','Mat Lam Tam','Mélina',_binary '','MacGhee','01H2K169A7VPRF0Y2TBQMBKJN2','99','986-734-7237','Nelson',_binary '\0',_binary '','application/x-troff-msvideo',_binary '',_binary '',553),(24,'Norak','Greenlam','Marie-noël',_binary '','McClelland','01H2K169BQVE13TN7PQ6H3MN6F','61','829-128-1725','Farwell',_binary '\0',_binary '\0','application/msword',_binary '\0',_binary '',602),(25,'Fuliang','Zamit','Véronique',_binary '','Spellessy','01H2K169CHJ44A7R673GZTD435','78','883-420-4125','Maywood',_binary '',_binary '','image/tiff',_binary '\0',_binary '',652),(26,'Kotanopan','Prodder','Maïwenn',_binary '','Caherny','01H2K169GEEBN12H0H3TV1S2B8','45','506-480-7561','Forest Run',_binary '\0',_binary '\0','video/x-msvideo',_binary '\0',_binary '\0',702),(27,'Estela','Opela','Gérald',_binary '','Keuneke','01H2K169HWEGWHGB1FGHEBMHTA','77','877-408-0528','Veith',_binary '\0',_binary '\0','application/excel',_binary '',_binary '\0',752),(28,'Pontes','Y-Solowarm','Styrbjörn',_binary '','Hanhardt','01H2K169E0425CPKF241PX0P2N','89','774-150-6827','Sutteridge',_binary '\0',_binary '','video/avi',_binary '\0',_binary '\0',504),(29,'Varnávas','Tin','Táng',_binary '','Ottiwill','01H2K169HQ4J2BB7BPWZAC9PK3','20','267-560-9465','Fairview',_binary '',_binary '','application/x-troff-msvideo',_binary '\0',_binary '\0',505),(30,'Sakata','Wrapsafe','Personnalisée',_binary '','Starzaker','01H2K169C27QB5SMD0S4MDSKEH','3','760-603-1282','Sunbrook',_binary '',_binary '','video/x-mpeg',_binary '\0',_binary '\0',506),(31,'Rennes','Y-find','Nuó',_binary '','Aime','01H2K169GXX09KAJPMVZKN2H8G','68','260-863-9944','Nobel',_binary '\0',_binary '','text/plain',_binary '\0',_binary '\0',552),(32,'Shadrinsk','Cardify','Gaétane',_binary '','Matysik','01H2K1699ZMGAHMX4WY7VEQ2FT','18','516-306-0556','Quincy',_binary '',_binary '\0','application/excel',_binary '',_binary '',553),(33,'Bernardo Larroudé','Namfix','Frédérique',_binary '','Linfitt','01H2K169EJ17YG08S8DZ1339FG','91','221-433-9768','1st',_binary '\0',_binary '','image/gif',_binary '\0',_binary '\0',602),(34,'Huangchuan','Veribet','Méline',_binary '','Megainey','01H2K169EPBYJVPT7Q618X7M90','19','992-266-2589','Pine View',_binary '',_binary '\0','application/x-mspowerpoint',_binary '\0',_binary '',652),(35,'Summerland','Konklab','Nuó',_binary '','Gronno','01H2K169DDYJ56Q454M9AXV64T','69','365-436-5829','Vermont',_binary '\0',_binary '\0','video/x-msvideo',_binary '\0',_binary '\0',702),(36,'Krasnogvardeyets','Aerified','Miléna',_binary '','Jorat','01H2K169MHVS96XJFPE702WMFC','40','737-809-5351','Graceland',_binary '\0',_binary '','image/x-tiff',_binary '',_binary '',752),(37,'Ban Bueng','Stim','Thérèsa',_binary '','Pearch','01H2K169DJ2XJDNNFJ4KQBHJ44','73','789-212-5671','Mcbride',_binary '',_binary '\0','video/mpeg',_binary '',_binary '',504),(38,'Mempawah','Solarbreeze','Géraldine',_binary '','Northwood','01H2K1699XJXT59EMYMH6B189J','73','543-923-8727','Village',_binary '',_binary '\0','image/pjpeg',_binary '',_binary '\0',505),(39,'Khānaqāh','It','Gaïa',_binary '\0','Cahani','01H2K169FBGBCBXA89Q7R3KB8G','65','579-622-0108','Fulton',_binary '\0',_binary '','application/msword',_binary '',_binary '',506),(40,'Jiangchi','Home Ing','Gaëlle',_binary '','Laughtisse','01H2K169P4EYS9SZHA8282G7NP','33','329-465-7702','6th',_binary '',_binary '\0','video/x-msvideo',_binary '\0',_binary '\0',552),(41,'Quán Hàu','Namfix','Mélina',_binary '','Boshard','01H2K169NC1WRV96APB27VQ8D8','57','659-295-7203','Starling',_binary '',_binary '','application/vnd.ms-powerpoint',_binary '\0',_binary '\0',553),(42,'Vällingby','Toughjoyfax','Dà',_binary '\0','MacParlan','01H2K169ASNDH45X1GA58FME3R','43','440-221-0312','Thierer',_binary '\0',_binary '\0','application/x-troff-msvideo',_binary '\0',_binary '\0',602),(43,'Nancun','Cookley','Amélie',_binary '','Bruyett','01H2K169BA869S3G30FSW894B0','16','265-704-7638','Gulseth',_binary '',_binary '','image/tiff',_binary '\0',_binary '\0',652),(44,'Aveiras de Cima','Rank','Cléa',_binary '\0','Dukesbury','01H2K169D7X4M6GVGHR3BQFH04','49','706-143-8258','Oxford',_binary '',_binary '','video/x-msvideo',_binary '',_binary '\0',702),(45,'Champaign','Span','Vénus',_binary '','Deverell','01H2K169AA3VDM493G5E36NYS0','43','217-724-7959','Towne',_binary '',_binary '','text/plain',_binary '\0',_binary '',752),(46,'Paris La Défense','Bitchip','Eléa',_binary '','Heinish','01H2K169MZBPTPBY1C8XEKPV2J','6','645-861-1054','Charing Cross',_binary '\0',_binary '','application/x-troff-msvideo',_binary '',_binary '\0',504),(47,'Zubūbah','Regrant','Maïlys',_binary '\0','Daunay','01H2K169JBA3ADV5H7HNQ8TFKT','34','333-500-7309','Gale',_binary '\0',_binary '\0','text/plain',_binary '',_binary '\0',505),(48,'Ndofane','Tampflex','Noémie',_binary '\0','Lenoir','01H2K169EH5KSD6HM69AX92N5C','49','219-907-8260','South',_binary '',_binary '','video/quicktime',_binary '',_binary '\0',506),(49,'Viçosa','Home Ing','Mélissandre',_binary '\0','MacKenney','01H2K169JN2TQCDWT0FQ27M5JW','7','205-461-0594','Hollow Ridge',_binary '\0',_binary '','image/gif',_binary '\0',_binary '\0',552),(50,'Haugesund','It','Pélagie',_binary '','Drennan','01H2K169KAA244B9SB0E5F8WHD','1','468-154-4271','Red Cloud',_binary '\0',_binary '\0','application/x-msexcel',_binary '',_binary '\0',553),(51,'Barrouallie','It','Maëline',_binary '\0','Bettaney','01H2K1699VPXQJW2VMF7S6PGK7','1','312-283-9353','Rusk',_binary '\0',_binary '','application/excel',_binary '\0',_binary '',602),(52,'Catarman','It','Aí',_binary '\0','Mycroft','01H2K169CPDDVNJRPCG319GNRC','71','925-959-7078','Knutson',_binary '',_binary '','application/mspowerpoint',_binary '',_binary '',652),(53,'Lewolen','Quo Lux','Crééz',_binary '','Hairsine','01H2K169CDDMAN5ZB9SVD3J6T0','17','207-962-0301','Sheridan',_binary '\0',_binary '','text/plain',_binary '',_binary '',702),(54,'Shangxian','Zaam-Dox','Marie-noël',_binary '','Riedel','01H2K169BFPCK0D6PX49YJY49Y','84','461-401-2456','Hollow Ridge',_binary '',_binary '','image/tiff',_binary '',_binary '\0',752),(55,'Farasān','Andalax','Rébecca',_binary '\0','Jillions','01H2K169HJT9FD1WDP83NM56HG','82','332-833-6976','Golf',_binary '\0',_binary '','application/msword',_binary '\0',_binary '',504),(56,'Sobue','Opela','Félicie',_binary '','Shrawley','01H2K169CF1WD9XE5EZ6K3X66Z','27','710-478-1189','Loftsgordon',_binary '\0',_binary '','image/gif',_binary '',_binary '\0',505),(57,'Mardā','Zontrax','Maëlyss',_binary '','Gazzard','01H2K169B8W0MWJ25QWARCDH0R','2','556-426-9446','Golf Course',_binary '',_binary '','application/x-msexcel',_binary '\0',_binary '',506),(58,'Norrköping','Mat Lam Tam','Rébecca',_binary '','Snoddy','01H2K169J2KMZ67TZQ6F71EFND','23','848-706-4169','Nelson',_binary '',_binary '','image/x-tiff',_binary '\0',_binary '',552),(59,'Franco da Rocha','Alpha','Clémentine',_binary '\0','Akrigg','01H2K169HCEZEDHKQVE7AXGBZN','13','703-614-7943','Forest Dale',_binary '',_binary '\0','application/excel',_binary '',_binary '',553),(60,'Halong','Tres-Zap','Gwenaëlle',_binary '\0','Woolager','01H2K169B4N10SKZN77QW4BH7Y','60','600-638-6900','Lawn',_binary '',_binary '','application/pdf',_binary '',_binary '',602),(61,'Nancy','Zamit','Renée',_binary '','Fernier','01H2K169BB3SM18MEBJY7KRZZQ','6','822-899-0271','Burning Wood',_binary '',_binary '','application/x-excel',_binary '\0',_binary '\0',652),(62,'Bolilao','Span','Michèle',_binary '','Rendle','01H2K169JH040EEQ5TT0Z1VCGM','46','995-542-9790','Darwin',_binary '',_binary '','video/msvideo',_binary '',_binary '',702),(63,'Ivanovo','Stronghold','Andrée',_binary '','Horsell','01H2K169DB1625XEK9Y5EBXQ4X','14','297-433-4123','Golf',_binary '',_binary '','image/pjpeg',_binary '\0',_binary '\0',752),(64,'Dublin','Andalax','Mélys',_binary '\0','Harnott','01H2K169HAE1DKXZS3QD8EGDZS','48','606-224-7415','Cascade',_binary '',_binary '\0','video/x-mpeg',_binary '\0',_binary '',504),(65,'Montgomery','Otcom','Noëlla',_binary '\0','Harrold','01H2K169EYD23V214CX507QDNK','7','334-506-4163','Florence',_binary '\0',_binary '\0','application/excel',_binary '\0',_binary '\0',505),(66,'Saint Petersburg','Treeflex','Cécile',_binary '','Kalkhoven','01H2K169C4T2AJRSAV8MS05D9A','86','984-267-7515','Rieder',_binary '\0',_binary '\0','application/x-msexcel',_binary '',_binary '\0',506),(67,'San Agustín Acasaguastlán','Overhold','Erwéi',_binary '','Beagan','01H2K169AQ7YEWEF7X28N034EQ','46','325-815-9029','North',_binary '\0',_binary '','application/x-troff-msvideo',_binary '\0',_binary '\0',552),(68,'Darovskoy','Prodder','Nuó',_binary '\0','Shann','01H2K169DYBFA6P4J4N2WMGHK5','33','959-664-6650','Morrow',_binary '\0',_binary '','application/mspowerpoint',_binary '\0',_binary '',553),(69,'Jamshoro','Lotlux','Lauréna',_binary '\0','Curwood','01H2K169ACR5QHJH2J1YS47CPZ','87','880-588-1745','Carberry',_binary '\0',_binary '\0','application/mspowerpoint',_binary '',_binary '\0',602),(70,'Ängelholm','Veribet','Léandre',_binary '','Lytlle','01H2K1698RT75WJD0K3KY1Q8EH','96','965-713-7730','Ronald Regan',_binary '\0',_binary '','audio/mpeg3',_binary '',_binary '',652),(71,'Lupane','Zathin','Adèle',_binary '\0','Harbisher','01H2K169AEDRS827MVKJ984A2G','54','138-738-8370','Butterfield',_binary '\0',_binary '\0','image/x-tiff',_binary '',_binary '',702),(72,'Yangxu','Gembucket','Mén',_binary '\0','Chopping','01H2K169J6ZD22KVPRBNMQ4BA1','28','426-229-1864','Armistice',_binary '',_binary '\0','application/x-troff-msvideo',_binary '\0',_binary '',752),(73,'Bolo','Voltsillam','Mélia',_binary '','Kingaby','01H2K169D6DFP5NNDC7EEKCSHK','3','857-170-6543','Clemons',_binary '\0',_binary '\0','video/quicktime',_binary '',_binary '\0',504),(74,'Радовиш','Konklux','Renée',_binary '','Alen','01H2K169AY1ZG1WXBCP3EJWYYF','63','292-945-4656','Crescent Oaks',_binary '',_binary '','application/pdf',_binary '\0',_binary '',505),(75,'Mlimba','Tresom','Crééz',_binary '','Carnachen','01H2K169AG9E8AJ7TQ3VKWM39E','44','655-635-9416','Golf',_binary '\0',_binary '\0','application/pdf',_binary '\0',_binary '',506),(76,'Kuala Lumpur','Temp','Örjan',_binary '\0','Petticrow','01H2K169JEMM2N1D377MGQZ24N','56','707-572-3792','Ohio',_binary '',_binary '','audio/x-mpeg-3',_binary '\0',_binary '\0',552),(77,'Palmasola','Home Ing','Loïs',_binary '\0','Shinton','01H2K169A14V5QXK55M2S5HJTP','8','902-892-0503','Buena Vista',_binary '\0',_binary '\0','audio/mpeg3',_binary '\0',_binary '\0',553),(78,'Palestina','Bytecard','Mélia',_binary '\0','Whissell','01H2K169B6F4VQZERKSM5GBZSE','34','765-615-2811','Forest Run',_binary '\0',_binary '\0','video/x-msvideo',_binary '\0',_binary '\0',602),(79,'Qārah','Aerified','Félicie',_binary '\0','Dillestone','01H2K169C91VRE0PHRWQN9F0YB','2','972-488-1247','Nelson',_binary '',_binary '','video/msvideo',_binary '\0',_binary '',652),(80,'Yanghe','Redhold','Cinéma',_binary '','Maior','01H2K169KSWW2RHAPVZZJVXSYV','54','876-420-2655','Merchant',_binary '\0',_binary '','application/x-mspowerpoint',_binary '',_binary '',702),(81,'Jiaokou','Zaam-Dox','Cinéma',_binary '\0','Ruston','01H2K169A9W6V02PVP59A4CHRH','80','910-650-6679','Pine View',_binary '\0',_binary '\0','video/x-mpeg',_binary '\0',_binary '\0',752),(82,'Suvorov','Zathin','Amélie',_binary '','Beagin','01H2K169CMFFKC6F07GEWGZS6H','41','395-574-3987','Starling',_binary '',_binary '','image/gif',_binary '',_binary '\0',504),(83,'Gaosheng','Veribet','Gaïa',_binary '','Boother','01H2K169D40ZVFTSWS9KJG4F46','60','671-732-4983','Debs',_binary '',_binary '\0','audio/mpeg3',_binary '',_binary '',505),(84,'Heqing','Stronghold','Marie-thérèse',_binary '','Linsey','01H2K169K4KASPQTZ68RW41T41','78','661-902-7857','Johnson',_binary '',_binary '\0','image/pjpeg',_binary '',_binary '\0',506),(85,'El Tambo','Tin','Audréanne',_binary '\0','Bissill','01H2K169NS57FR84C41WADRMN0','95','816-184-8375','Anderson',_binary '',_binary '\0','application/powerpoint',_binary '',_binary '',552),(86,'Duang','Prodder','Ruò',_binary '','Cutler','01H2K169X8CR7BFTR15WMHVFQM','33','108-656-7905','Granby',_binary '\0',_binary '','image/gif',_binary '\0',_binary '',553),(87,'Mattawa','Overhold','Clélia',_binary '\0','Grunnill','01H2K169EDZ2J8P0MF1B71TDVF','43','477-313-7029','Twin Pines',_binary '',_binary '','image/tiff',_binary '\0',_binary '',602),(88,'Eldoret','Konklux','Örjan',_binary '\0','Snellman','01H2K169CKCXS12SPWB8HY7CXB','37','915-956-6909','Oakridge',_binary '',_binary '\0','application/x-mspowerpoint',_binary '\0',_binary '\0',652),(89,'Itabuna','Job','Mårten',_binary '','Murtimer','01H2K169E797XAJPAB9897FZFT','52','551-765-9005','Clarendon',_binary '',_binary '\0','application/x-troff-msvideo',_binary '',_binary '',702),(90,'Skalánion','Konklux','Maëly',_binary '','Bronot','01H2K169BX6KTX0642FAB88SNY','68','222-512-0765','Brentwood',_binary '\0',_binary '\0','application/mspowerpoint',_binary '\0',_binary '',752),(91,'Kiambu','Vagram','Loïs',_binary '\0','Edgeson','01H2K169JASYKDR5AJ9N9JQ9BK','6','193-273-0060','Burrows',_binary '\0',_binary '','image/tiff',_binary '\0',_binary '\0',504),(92,'Gaozhou','Ronstring','Andréanne',_binary '\0','Wondraschek','01H2K169CYGC59FSVH0GA6Y35T','92','425-197-1592','Meadow Valley',_binary '\0',_binary '\0','application/x-mspowerpoint',_binary '\0',_binary '',505),(93,'Vargem Grande','Redhold','Gwenaëlle',_binary '','Pottberry','01H2K169BDWM1SJXYPEPX8ZBK6','41','844-743-3070','Washington',_binary '',_binary '\0','image/jpeg',_binary '\0',_binary '\0',506),(94,'Kunvald','Pannier','Eléa',_binary '\0','Tompsett','01H2K169QCEZKQ5HKXBEY7R9HN','87','556-204-2662','Sage',_binary '\0',_binary '','image/gif',_binary '',_binary '\0',552),(95,'Kryvyy Rih','Veribet','Audréanne',_binary '','Bussell','01H2K169DRJNYSNG1SVM7CE0NZ','39','836-502-5402','Mayfield',_binary '\0',_binary '','text/plain',_binary '',_binary '\0',553),(96,'Moganshan','Regrant','Thérèse',_binary '\0','Merricks','01H2K169CTGQR6VRTBM2DBHGQQ','79','733-127-1138','David',_binary '',_binary '\0','image/pjpeg',_binary '',_binary '',602),(97,'Folques','Flowdesk','Françoise',_binary '\0','Irdale','01H2K169BNBJV4522ACV19HTGV','61','773-120-4357','Farmco',_binary '',_binary '\0','video/x-msvideo',_binary '\0',_binary '',652),(98,'Djibouti','Voltsillam','Gérald',_binary '\0','Houndesome','01H2K169HE1DQFZ558J04HX8G3','2','632-623-4427','Nevada',_binary '',_binary '\0','application/x-mspowerpoint',_binary '\0',_binary '',702),(99,'Novoul’yanovsk','Stim','Léane',_binary '\0','Garling','01H2K169NM9BE7AC8G6EERH6AT','45','935-908-2414','Tennessee',_binary '',_binary '','image/x-tiff',_binary '\0',_binary '\0',752),(100,'Longwood','Opela','Gérald',_binary '\0','Pol','01H2K169F38T8P188M6AYFPAXE','88','637-174-6367','Debra',_binary '\0',_binary '\0','text/plain',_binary '\0',_binary '',NULL);
/*!40000 ALTER TABLE `victim_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `victim_details_seq`
--

DROP TABLE IF EXISTS `victim_details_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `victim_details_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `victim_details_seq`
--

LOCK TABLES `victim_details_seq` WRITE;
/*!40000 ALTER TABLE `victim_details_seq` DISABLE KEYS */;
INSERT INTO `victim_details_seq` VALUES (1);
/*!40000 ALTER TABLE `victim_details_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-10 22:23:27
