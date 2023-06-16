-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Temperatures" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "temperature" REAL NOT NULL,
    "day" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "year" TEXT NOT NULL
);
INSERT INTO "new_Temperatures" ("day", "hour", "id", "month", "temperature", "year") SELECT "day", "hour", "id", "month", "temperature", "year" FROM "Temperatures";
DROP TABLE "Temperatures";
ALTER TABLE "new_Temperatures" RENAME TO "Temperatures";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
