/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Temperatures` table. All the data in the column will be lost.
  - Added the required column `day` to the `Temperatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hour` to the `Temperatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `Temperatures` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Temperatures` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Temperatures" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "temperature" REAL NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "hour" INTEGER NOT NULL,
    "year" INTEGER NOT NULL
);
INSERT INTO "new_Temperatures" ("id", "temperature") SELECT "id", "temperature" FROM "Temperatures";
DROP TABLE "Temperatures";
ALTER TABLE "new_Temperatures" RENAME TO "Temperatures";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
