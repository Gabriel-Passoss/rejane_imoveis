/*
  Warnings:

  - You are about to drop the column `characteristicsId` on the `Property` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[propertyID]` on the table `Characteristics` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Property" DROP CONSTRAINT "Property_characteristicsId_fkey";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "characteristicsId";

-- CreateIndex
CREATE UNIQUE INDEX "Characteristics_propertyID_key" ON "Characteristics"("propertyID");

-- AddForeignKey
ALTER TABLE "Characteristics" ADD CONSTRAINT "Characteristics_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
