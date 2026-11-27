import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del álbum es obligatorio' })
  @MaxLength(80)
  nombre: string;
}