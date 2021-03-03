/*
 Navicat Premium Data Transfer

 Source Server         : xiaoxi
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : 47.115.114.3:3306
 Source Schema         : shop

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 03/03/2021 23:39:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `subtitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `link` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for handle_post
-- ----------------------------
DROP TABLE IF EXISTS `handle_post`;
CREATE TABLE `handle_post`  (
  `id` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `pids` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for photo
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo`  (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `source_src` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `thumb` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `video` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `source_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `like_num` int(10) UNSIGNED DEFAULT NULL,
  `pubdate_str` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `adddate` datetime(0) DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `top` int(11) DEFAULT 0,
  `status` int(11) DEFAULT 0,
  `topdate` datetime(0) DEFAULT NULL,
  `pubdate` datetime(0) DEFAULT NULL,
  `update` datetime(0) DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `thumbWidth` int(11) DEFAULT NULL,
  `thumbHeight` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for shop
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `brand` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `proxy_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `proxy_price` decimal(10, 2) DEFAULT NULL,
  `add_time` datetime(0) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES (1, '宽松情侣卫衣DB9408', 200.00, 'NIKE', NULL, '宽松情侣卫衣', 100.00, '2021-02-28 10:26:50', 0);

-- ----------------------------
-- Table structure for shop_attr
-- ----------------------------
DROP TABLE IF EXISTS `shop_attr`;
CREATE TABLE `shop_attr`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `sid` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop_attr
-- ----------------------------
INSERT INTO `shop_attr` VALUES (13, 1, '9408-S 绿色', '12');
INSERT INTO `shop_attr` VALUES (14, 1, '9408-M 绿色', '27');
INSERT INTO `shop_attr` VALUES (15, 1, '9408-L 绿色', '12');

-- ----------------------------
-- Table structure for shop_photo
-- ----------------------------
DROP TABLE IF EXISTS `shop_photo`;
CREATE TABLE `shop_photo`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `sid` int(11) NOT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shop_photo
-- ----------------------------
INSERT INTO `shop_photo` VALUES (21, 1, '/upload/2021-02-28/1614479140457_3882.jpg', NULL);
INSERT INTO `shop_photo` VALUES (22, 1, '/upload/2021-02-28/1614479140513_2648.jpg', NULL);
INSERT INTO `shop_photo` VALUES (23, 1, '/upload/2021-02-28/1614479141132_6122.jpg', NULL);
INSERT INTO `shop_photo` VALUES (24, 1, '/upload/2021-02-28/1614479141820_8610.jpg', NULL);
INSERT INTO `shop_photo` VALUES (25, 1, '/upload/2021-02-28/1614479142236_1824.jpg', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` int(11) DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `isupdate` int(11) DEFAULT 0,
  `last_updated` datetime(0) DEFAULT NULL,
  `top` int(11) DEFAULT 0,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (2, 'tz', 'e58a0061e63f26a275d22e89434cac74', NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, 'admin');
INSERT INTO `user` VALUES (3, 'tz2', 'e58a0061e63f26a275d22e89434cac74', NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, 'other');

-- ----------------------------
-- Table structure for web
-- ----------------------------
DROP TABLE IF EXISTS `web`;
CREATE TABLE `web`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `note` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `column` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of web
-- ----------------------------
INSERT INTO `web` VALUES (1, 'title', 'Nike Shop', 'String', '网站标题', 'web');
INSERT INTO `web` VALUES (2, 'logo', '/upload/2021-03-03/1614783104884_1511.ico', 'Image', '', 'web');
INSERT INTO `web` VALUES (3, 'recordnumber', '101010101', 'String', '备案号', 'web');

SET FOREIGN_KEY_CHECKS = 1;
