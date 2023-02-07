/*
  Warnings:

  - The primary key for the `Summary` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Summary" DROP CONSTRAINT "Summary_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Summary_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Summary_id_seq";
