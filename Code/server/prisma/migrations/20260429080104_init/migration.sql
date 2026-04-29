-- CreateEnum
CREATE TYPE "AuthProvider" AS ENUM ('LOCAL', 'GOOGLE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "darkMode" BOOLEAN NOT NULL DEFAULT false,
    "readReciepts" BOOLEAN NOT NULL DEFAULT true,
    "onlineStatus" BOOLEAN NOT NULL DEFAULT true,
    "groupAdd" BOOLEAN NOT NULL DEFAULT true,
    "isUsername" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT,
    "googleId" TEXT,
    "provider" "AuthProvider" NOT NULL DEFAULT 'LOCAL',
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");
