-- CreateEnum
CREATE TYPE "TypeOfBusiness" AS ENUM ('RENT', 'SELL', 'SEASON');

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price_sell" DOUBLE PRECISION,
    "price_rent" DOUBLE PRECISION,
    "price_season" DOUBLE PRECISION,
    "iptu" DOUBLE PRECISION,
    "condominium" DOUBLE PRECISION,
    "typeOfBusiness" "TypeOfBusiness" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "street" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "propertyID" INTEGER NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Characteristics" (
    "id" SERIAL NOT NULL,
    "rooms" INTEGER NOT NULL DEFAULT 0,
    "car" INTEGER NOT NULL DEFAULT 0,
    "bathrooms" INTEGER NOT NULL DEFAULT 0,
    "suites" INTEGER NOT NULL DEFAULT 0,
    "kitchens" INTEGER NOT NULL DEFAULT 0,
    "total_area" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "private_area" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "infrastructure" TEXT[],
    "propertyID" INTEGER NOT NULL,

    CONSTRAINT "Characteristics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Characteristics" ADD CONSTRAINT "Characteristics_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
