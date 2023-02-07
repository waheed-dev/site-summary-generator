/*
  Warnings:

  - You are about to drop the column `website` on the `Summary` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[url]` on the table `Summary` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `url` to the `Summary` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Summary_website_key";

-- AlterTable
ALTER TABLE "Summary" DROP COLUMN "website",
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Summary_url_key" ON "Summary"("url");
