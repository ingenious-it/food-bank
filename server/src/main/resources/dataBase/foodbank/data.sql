-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: foodbank
-- ------------------------------------------------------
-- Server version	8.0.28

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
INSERT INTO `registered_user` VALUES (1,1234567890,'johndoe@example.com','John','Doe','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','johndoe',NULL,NULL,0,0,NULL),(8,782343256,'amalshalinda1999@gmail.com','Amal','Shalinda','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','Amal99',NULL,NULL,0,0,NULL),(10,711727355,'milanka01@gmail.com','milanka','tharangana','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','mila00',NULL,NULL,0,0,NULL),(12,912635664,'kjskjsxb@gmail.com','gvx','ihxhj','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','User',NULL,NULL,0,0,NULL),(102,786756432,'USer@gmail.com','User1','User2','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','Testuser',NULL,NULL,0,0,NULL),(502,1234567890,'johndoe@example.com','John','Doe','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','johndoe',NULL,NULL,0,0,NULL),(503,1234567890,'johndoe@example.com','John','Doe','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','johndoe',NULL,NULL,0,0,NULL),(504,1234567890,'johndoe@example.com','Nishoban','Doe','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','johndoe',NULL,NULL,0,0,NULL),(505,786756432,'Tharee@gmail.com','Thareejan','Pakiyaraj','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','Tharee',NULL,NULL,0,0,NULL),(506,766666666,'pavi@wso2.com','Pavitharan','varun','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','pavi',NULL,NULL,0,0,NULL),(552,785645342,'wert@gmail.com','Amal','Dissanayake','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','test',NULL,NULL,0,0,NULL),(553,786756432,'User@gmail.com','Testuser','Testuser2','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','User1',NULL,NULL,0,0,NULL),(602,757283480,'thareejan@gmail.com','Thareejan','Pakkiyarajah','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','thareejan',NULL,NULL,0,0,'/Both'),(652,763737373,'nuska@gmail.com','Nuska','Fayik','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','nuskaf',NULL,NULL,0,0,'Both'),(702,782222222,'kiru@gmail.com','Kirushanthan','Ravichandran','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','kiru22',NULL,NULL,0,0,'Donator'),(752,23,'gyufufr@gmail.com','vdsfv','hguyhfu','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','kiru22s',NULL,NULL,0,0,'Donator'),(802,765645333,'ttpd@gmail.com','Tharushni','Thathya','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','username',NULL,NULL,0,0,'Both'),(809,786655444,'abcd@gmail.com','kamal','perera','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','username2',NULL,NULL,0,0,'Both'),(812,912623344,'abcdd@gmail.com','Malkanthi','soyza','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','username3',NULL,NULL,0,0,'Both'),(815,765644333,'asde@gmail.com','upeksha','chamalka','$2a$10$XFGED6b6ZeGufgwdd2vxkex3dawtjxiV40oBVqpFTaj80c7UJ9bIW','username4',NULL,NULL,0,0,'Both'),(852,141256355,'af@gmail.com','milanka','thra','$2a$10$stFAKsAuN53RgVdeZXOVXeOksb2UpH.twKneWX1j2I9g.PU0tyCzC','fdzxgvhbjln',NULL,NULL,0,0,'');
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

-- Dump completed on 2023-06-10 20:17:16
