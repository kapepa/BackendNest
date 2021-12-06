"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Example Backend')
        .setDescription('nestjs, mysql full app description REST API')
        .setVersion('1.0.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/doc', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    await app.listen(process.env.PORT, () => console.log(`server run is port ${process.env.PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map