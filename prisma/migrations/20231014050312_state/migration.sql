-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT,
    "description" TEXT NOT NULL,
    "soccerPlayerType" TEXT,
    "profilePicture" TEXT
);
INSERT INTO "new_User" ("city", "createdAt", "description", "id", "name", "profilePicture", "soccerPlayerType", "state", "updatedAt", "whatsapp") SELECT "city", "createdAt", "description", "id", "name", "profilePicture", "soccerPlayerType", "state", "updatedAt", "whatsapp" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
