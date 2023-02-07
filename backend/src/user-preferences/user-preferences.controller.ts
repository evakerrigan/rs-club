import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { UserPreferencesService } from './user-preferences.service';
import { UpdateUserPreferenceDto } from './dto/update-user-preference.dto';

@Controller('preferences')
export class UserPreferencesController {
  constructor(
    private readonly userPreferencesService: UserPreferencesService,
  ) {}

  @Post()
  create() {
    return this.userPreferencesService.create();
  }

  @Get()
  findAll() {
    return this.userPreferencesService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserPreferenceDto: UpdateUserPreferenceDto,
  ) {
    return this.userPreferencesService.update(id, updateUserPreferenceDto);
  }
}
