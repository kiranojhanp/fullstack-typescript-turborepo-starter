import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getPeople', () => {
    it('should return list of people', async () => {
      const appController = app.get(AppController);
      expect(Array.isArray(await appController.getPeople())).toBe(true);
      expect((await appController.getPeople()).length).toBeGreaterThan(0);
    });
  });
});
