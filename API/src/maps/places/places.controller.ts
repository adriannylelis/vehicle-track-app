import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private readonly PlacesService: PlacesService) {}

  @Get()
  findPlaces(@Query('text') text: string) {
    return this.PlacesService.findPlaces(text);
  }
}
