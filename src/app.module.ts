import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllModules } from './modules/all.module';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AllModules, ConfigModule.forRoot({ isGlobal: true }), PrismaModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule {
  static PORT: number

  constructor(private readonly configService: ConfigService) {
    AppModule.PORT = this.configService.get('BACKEND_PORT')
  }
}
