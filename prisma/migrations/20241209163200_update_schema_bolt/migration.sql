/*
  Warnings:

  - The primary key for the `Accessory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `stock` on the `Accessory` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Accessory` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - The primary key for the `Bike` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `Bike` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Bike` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Bike` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - The primary key for the `Tour` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `price` on the `Tour` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(10,2)`.
  - You are about to drop the `Rental` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TourParticipants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `accounts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sessions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verification_tokens` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Accessory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Accessory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Accessory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Accessory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Accessory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Bike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Bike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Bike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Bike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Bike` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `size` on the `Bike` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `difficulty` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distance` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxPeople` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BikeType" AS ENUM ('KIDS_20', 'KIDS_24', 'DELUXE_7', 'ELECTRIC_POWER_1');

-- CreateEnum
CREATE TYPE "BikeSize" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- CreateEnum
CREATE TYPE "AccessoryType" AS ENUM ('HELMET', 'BASKET', 'PHONE_HOLDER', 'BABY_SEAT', 'CHILD_SEAT', 'PANNIER');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MODERATE', 'DIFFICULT');

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_accessoryId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_bikeId_fkey";

-- DropForeignKey
ALTER TABLE "Rental" DROP CONSTRAINT "Rental_userId_fkey";

-- DropForeignKey
ALTER TABLE "_TourParticipants" DROP CONSTRAINT "_TourParticipants_A_fkey";

-- DropForeignKey
ALTER TABLE "_TourParticipants" DROP CONSTRAINT "_TourParticipants_B_fkey";

-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_user_id_fkey";

-- AlterTable
ALTER TABLE "Accessory" DROP CONSTRAINT "Accessory_pkey",
DROP COLUMN "stock",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "type" "AccessoryType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2),
ADD CONSTRAINT "Accessory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Accessory_id_seq";

-- AlterTable
ALTER TABLE "Bike" DROP CONSTRAINT "Bike_pkey",
DROP COLUMN "category",
DROP COLUMN "stock",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "type" "BikeType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "size",
ADD COLUMN     "size" "BikeSize" NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2),
ADD CONSTRAINT "Bike_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Bike_id_seq";

-- AlterTable
ALTER TABLE "Tour" DROP CONSTRAINT "Tour_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "difficulty" "Difficulty" NOT NULL,
ADD COLUMN     "distance" INTEGER NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "maxPeople" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2),
ADD CONSTRAINT "Tour_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tour_id_seq";

-- DropTable
DROP TABLE "Rental";

-- DropTable
DROP TABLE "_TourParticipants";

-- DropTable
DROP TABLE "accounts";

-- DropTable
DROP TABLE "sessions";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "verification_tokens";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tourId" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "totalPrice" DECIMAL(10,2) NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BikeBooking" (
    "id" TEXT NOT NULL,
    "bikeId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "BikeBooking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingAccessory" (
    "id" TEXT NOT NULL,
    "accessoryId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "BookingAccessory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "BikeBooking_bikeId_bookingId_key" ON "BikeBooking"("bikeId", "bookingId");

-- CreateIndex
CREATE UNIQUE INDEX "BookingAccessory_accessoryId_bookingId_key" ON "BookingAccessory"("accessoryId", "bookingId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BikeBooking" ADD CONSTRAINT "BikeBooking_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BikeBooking" ADD CONSTRAINT "BikeBooking_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingAccessory" ADD CONSTRAINT "BookingAccessory_accessoryId_fkey" FOREIGN KEY ("accessoryId") REFERENCES "Accessory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingAccessory" ADD CONSTRAINT "BookingAccessory_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE CASCADE ON UPDATE CASCADE;
