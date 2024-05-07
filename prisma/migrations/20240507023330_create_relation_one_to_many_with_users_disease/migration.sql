-- CreateTable
CREATE TABLE "Disease" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "patientAge" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Disease" ADD CONSTRAINT "Disease_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
