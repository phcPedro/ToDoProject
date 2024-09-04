import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //config base do Swagger
  const config = new DocumentBuilder()
  .setTitle('To-Do List API')
  .setDescription('API para gerenciar tarefas')
  .setVersion('1.0')
  .addTag('tasks')
  .addBearerAuth() 
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
