import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    enableDebugMessages: true
  }))

  const config = new DocumentBuilder()
    .setTitle('Sumbar Computer')
    .setDescription('Предлагает широкий выбор персональных компьютеров')
    .setVersion('1.0')
    .addTag('E-shopping')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(AppModule.PORT);
  console.log(`Приложение работают на ${await app.getUrl()}`)
}
bootstrap();
