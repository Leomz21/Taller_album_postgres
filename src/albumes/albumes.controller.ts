import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AlbumesService } from './albumes.service.js';
import { CreateAlbumDto } from './dto/create-album.dto.js';
import { UpdateAlbumDto } from './dto/update-album.dto.js';

@Controller('albumes')
export class AlbumesController {
  constructor(private readonly albumesService: AlbumesService) {}

  @Get()
  findAll() {
    return this.albumesService.findAll();
  }

  @Get(':id/fotos')
  findFotos(@Param('id', ParseIntPipe) id: number) {
    return this.albumesService.findFotos(id);
  }

  @Post() // 201 Created por defecto
  create(@Body() dto: CreateAlbumDto) {
    return this.albumesService.create(dto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateAlbumDto) {
    return this.albumesService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.albumesService.remove(id);
  }
}