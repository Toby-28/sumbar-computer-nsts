-- CreateTable
CREATE TABLE "banner_big" (
    "id" SERIAL NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255),

    CONSTRAINT "big_banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "banner_small" (
    "id" SERIAL NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,
    "link" VARCHAR(255),

    CONSTRAINT "small_banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "brands" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "logo_url" VARCHAR(255) NOT NULL,

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carts" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "products" JSON[],

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(45) NOT NULL,
    "link" VARCHAR(255),
    "data" JSON[],

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "part_number" VARCHAR(100) NOT NULL,
    "image_urls" VARCHAR(255)[],
    "amount" INTEGER NOT NULL DEFAULT 1,
    "price" DOUBLE PRECISION NOT NULL,
    "brand_id" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" VARCHAR(255),
    "name" VARCHAR(45) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "brandname" ON "brands"("name");

-- CreateIndex
CREATE UNIQUE INDEX "title" ON "category"("title");

-- CreateIndex
CREATE UNIQUE INDEX "productname" ON "products"("name");

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "username" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "brandname" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
