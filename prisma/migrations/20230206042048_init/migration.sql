/*
  Warnings:

  - A unique constraint covering the columns `[website]` on the table `Summary` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Summary_website_key" ON "Summary"("website");
