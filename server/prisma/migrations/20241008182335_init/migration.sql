/*
  Warnings:

  - You are about to drop the column `untiPrice` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `unitPrice` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "untiPrice",
ADD COLUMN     "unitPrice" DOUBLE PRECISION NOT NULL;
