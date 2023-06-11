-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Temperatures" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "temperature" REAL NOT NULL,
    "createdAt" TEXT NOT NULL
);
INSERT INTO "new_Temperatures" ("createdAt", "id", "temperature") SELECT "createdAt", "id", "temperature" FROM "Temperatures";
DROP TABLE "Temperatures";
ALTER TABLE "new_Temperatures" RENAME TO "Temperatures";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
