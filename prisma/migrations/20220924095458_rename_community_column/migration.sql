/*
  Warnings:

  - You are about to drop the column `commuityName` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `commuityName` on the `Worker` table. All the data in the column will be lost.
  - Added the required column `communityName` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_commuityName_fkey";

-- DropForeignKey
ALTER TABLE "Worker" DROP CONSTRAINT "Worker_commuityName_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "commuityName",
ADD COLUMN     "communityName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Worker" DROP COLUMN "commuityName",
ADD COLUMN     "communityName" TEXT NOT NULL DEFAULT '天堂湖';

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_communityName_fkey" FOREIGN KEY ("communityName") REFERENCES "Community"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_communityName_fkey" FOREIGN KEY ("communityName") REFERENCES "Community"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
