/*
  Warnings:

  - Added the required column `telefono` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "soccerPlayerType" TEXT,
    "profilePicture" TEXT,
    "whatsapp" TEXT,
    "telefono" TEXT NOT NULL
);
INSERT INTO "new_User" ("city", "createdAt", "description", "id", "name", "profilePicture", "soccerPlayerType", "state", "updatedAt", "whatsapp") SELECT "city", "createdAt", "description", "id", "name", "profilePicture", "soccerPlayerType", "state", "updatedAt", "whatsapp" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
