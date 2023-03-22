/*
  Warnings:

  - Added the required column `characteristicsId` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Characteristics" DROP CONSTRAINT "Characteristics_propertyID_fkey";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "characteristicsId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_characteristicsId_fkey" FOREIGN KEY ("characteristicsId") REFERENCES "Characteristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
