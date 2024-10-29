/*
  Warnings:

  - You are about to drop the `SalesSumary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SalesSumary";

-- CreateTable
CREATE TABLE "SalesSummary" (
    "id" TEXT NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "changePercentage" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SalesSummary_pkey" PRIMARY KEY ("id")
);
