/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitulosdeTrabajoService } from './TitulosdeTrabajo.service';

describe('Service: TitulosdeTrabajo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitulosdeTrabajoService]
    });
  });

  it('should ...', inject([TitulosdeTrabajoService], (service: TitulosdeTrabajoService) => {
    expect(service).toBeTruthy();
  }));
});
