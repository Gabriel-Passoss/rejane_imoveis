/*
  Warnings:

  - Added the required column `property_type` to the `Characteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Characteristics" ADD COLUMN     "property_type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "createdBy" TEXT NOT NULL;
