-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "utime" TIMESTAMP(3) NOT NULL,
    "ctime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sfzh" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "permission" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Worker" (
    "id" SERIAL NOT NULL,
    "utime" TIMESTAMP(3) NOT NULL,
    "ctime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sfzh" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" SERIAL NOT NULL,
    "utime" TIMESTAMP(3) NOT NULL,
    "ctime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "org" TEXT DEFAULT '',

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "ctime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "star" INTEGER NOT NULL DEFAULT 0,
    "workerId" INTEGER NOT NULL,
    "commuityId" INTEGER NOT NULL,
    "note" TEXT DEFAULT '',

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_sfzh_key" ON "User"("sfzh");

-- CreateIndex
CREATE UNIQUE INDEX "Worker_sfzh_key" ON "Worker"("sfzh");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_commuityId_fkey" FOREIGN KEY ("commuityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
