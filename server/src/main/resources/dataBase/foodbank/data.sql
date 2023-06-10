-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: foodbank
-- ------------------------------------------------------
-- Server version	8.0.32

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
INSERT INTO `admin_user` VALUES ('123456','$2a$10$GfvH/14PHZo2CFCBLCZxsOgG6TXX7H2ki0I98LUfx5lBNje.LzbLu','Packing Section'),('123456345','$2a$10$4f.DjbXVtwNYFKh..Cdps.bcCjfos/ACNhX6xRPhNU8cJ8cphWijS','Packing Section'),('abc','gdhe','jkg'),('Adam_eve','$2a$10$PPY7zM2K5ifJCnmYHREipe5D.UyIAuT9biSzdTdC9cC1.QIOtTLvC','Ware house'),('Amals','$2a$10$CSRBgoyRVfb17xLeVt0CZeDQfGBUyphJCXYyK/zE9IWnHyZpEmWH2','Admin'),('Amalsj','$2a$10$ECa7dnxjYHTM6r9J27uhTuuczLhUamtXV6k4VlF0OIaVcaZL7hRP6','Ware house'),('bDn','jkh','uy'),('bn','jkh','uy'),('bnkmnh','iytyut','bjhty'),('Encrypted','$2a$10$jPKOpXiyyqrdQhkhp.U0Ruj4Ssz2mjrU0yoqFTazPzCgDVkvScUPS','Admin'),('ghjg','hjg','hjgg'),('Johndoe','$2a$10$lQQaDtQ0IQsU5o.4znFTzub9/oNMImSkhVH0aMIUBfcdS5hTpU/tq','Delivery Section'),('Milanka','qwerty','Admin'),('Nishoban','$2a$10$q.o9Ds9V/c5nLjACIjMjHOAqjY0fJOFIewSH9ZuzatzDj0mJiSKqC','Delivery Section'),('TestUser','$2a$10$8l9qmib8ilCDyxP6MaLAJeGy897DGkoXyupdnJ8yFyecqYfnBSYUm','Admin'),('Thareejan','hjkdsgc','Admin'),('vhjfut','kuyiuy','yutyutr');
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
/*!40000 ALTER TABLE `food_item` ENABLE KEYS */;
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
INSERT INTO `food_item_seq` VALUES (1);
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
  `package_type` varchar(255) DEFAULT NULL,
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
INSERT INTO `issued_food_package_seq` VALUES (1);
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
  PRIMARY KEY (`donationid`),
  KEY `FK6nf17qwactk3ps5714dkn0spq` (`user_id`),
  CONSTRAINT `FK6nf17qwactk3ps5714dkn0spq` FOREIGN KEY (`user_id`) REFERENCES `registered_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `money_donation`
--

LOCK TABLES `money_donation` WRITE;
/*!40000 ALTER TABLE `money_donation` DISABLE KEYS */;
INSERT INTO `money_donation` VALUES ('12805642PJ619423P','2023-06-08T07:04:58.003Z',1000,NULL),('34G77442DC349240U','2023-06-08T07:06:55.594Z',10,NULL),('9XV489327M793445L','2023-06-09T14:32:04.857Z',1000,NULL);
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
  `package_type` varchar(255) DEFAULT NULL,
  `packed_date` datetime(6) DEFAULT NULL,
  `packed_quantity` int NOT NULL,
  `package_type_name` varchar(255) DEFAULT NULL,
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
INSERT INTO `packed_food_package_seq` VALUES (1);
/*!40000 ALTER TABLE `packed_food_package_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registered_user`
--

DROP TABLE IF EXISTS `registered_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registered_user` (
  `user_id` varchar(255) NOT NULL,
  `donator_flag` bit(1) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `points` bigint NOT NULL,
  `id` int NOT NULL,
  `contact_number` varchar(255) DEFAULT NULL,
  `data_supplier_points` double NOT NULL,
  `donater_points` double NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_user`
--

LOCK TABLES `registered_user` WRITE;
/*!40000 ALTER TABLE `registered_user` DISABLE KEYS */;
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
INSERT INTO `registered_user_seq` VALUES (1);
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
  `last_name` varchar(255) DEFAULT NULL,
  `nic` varchar(255) DEFAULT NULL,
  `no` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `is_delivered` bit(1) DEFAULT NULL,
  `is_rejected` bit(1) DEFAULT NULL,
  `is_verified` bit(1) DEFAULT NULL,
  `package_type` varchar(255) DEFAULT NULL,
  `is_accepted` bit(1) DEFAULT NULL,
  `is_delivery_selected` bit(1) DEFAULT NULL,
  `donater_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `victim_details`
--

LOCK TABLES `victim_details` WRITE;
/*!40000 ALTER TABLE `victim_details` DISABLE KEYS */;
INSERT INTO `victim_details` VALUES (1,'hgbj','ghjkkhj','Thareejan','Pakkiyarajah','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(5,'hgbj','ghjkkhj','ghfjfgh','fgjhfgh','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(6,'hgbj','ghjkkhj','ghfjfgh','fgjhfgh','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(7,'hgbj','ghjkkhj','ghfjfgh','fgjhfgh','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(8,'hgbj','ghjkkhj','ghfjfgh','fgjhfgh','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(9,'hgbj','ghjkkhj','ghfjfgh','fgjhfgh','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(12,'hgbj','ghjkkhj','ghfjfgh','fgjhfgh','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(24,'hgbj','ghjkkhj','ghfjfgh','fgjhfgh','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(111,'hgbj','ghjkkhj','ghfjfgh','fgjhfgh','ghff','ghffgh','gfhghf','ghffh',_binary '\0',_binary '',_binary '',NULL,NULL,NULL,NULL),(122,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
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
INSERT INTO `victim_details_seq` VALUES (51);
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

-- Dump completed on 2023-06-10 17:41:08
