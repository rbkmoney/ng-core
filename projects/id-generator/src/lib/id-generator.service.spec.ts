import { IdGeneratorService } from './id-generator.service';
import {TestBed} from "@angular/core/testing";

describe('IdGeneratorService', () => {
  let service: IdGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IdGeneratorService
      ]
    });
    service = TestBed.inject(IdGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateUUID', () => {
    it('should generate uuid', () => {
      expect(service.uuid()).toBeTruthy();
    });

    it('new generated uuid should be not like it was before', () => {
      expect(service.uuid()).not.toBe(service.uuid());
    });
  });

  describe('generateShortUUID', () => {
    it('should generate short uuid', () => {
      expect(service.shortUuid()).toBeTruthy();
    });

    it('new generated short uuid should be not like it was before', () => {
      expect(service.shortUuid()).not.toBe(service.shortUuid());
    });
  });
});
