/*
  Warnings:

  - Made the column `wsp` on table `User` required. This step will fail if there are existing NULL values in that column.

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
    "wsp" TEXT NOT NULL
);
INSERT INTO "new_User" ("city", "createdAt", "description", "id", "name", "profilePicture", "soccerPlayerType", "state", "updatedAt", "wsp") SELECT "city", "createdAt", "description", "id", "name", "profilePicture", "soccerPlayerType", "state", "updatedAt", "wsp" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
