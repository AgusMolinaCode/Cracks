/*
  Warnings:

  - You are about to drop the column `state` on the `User` table. All the data in the column will be lost.
  - Added the required column `clerkId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "soccerPlayerType" TEXT,
    "profilePicture" TEXT
);
INSERT INTO "new_User" ("city", "createdAt", "description", "id", "name", "profilePicture", "soccerPlayerType", "updatedAt", "whatsapp") SELECT "city", "createdAt", "description", "id", "name", "profilePicture", "soccerPlayerType", "updatedAt", "whatsapp" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
