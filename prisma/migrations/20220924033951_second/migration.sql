/*
  Warnings:

  - You are about to drop the column `commuityId` on the `Review` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Community` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `commuityName` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commuityName` to the `Worker` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_commuityId_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "commuityId",
ADD COLUMN     "commuityName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Worker" ADD COLUMN     "commuityName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Community_name_key" ON "Community"("name");

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_commuityName_fkey" FOREIGN KEY ("commuityName") REFERENCES "Community"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_commuityName_fkey" FOREIGN KEY ("commuityName") REFERENCES "Community"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
