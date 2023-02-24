import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, length, validate, validateOrReject } from 'class-validator';

import { AccesType, Category } from '../models/category.model';

export interface ICreatedCategoryDto extends Omit<Category, 'id'> {};

export class CreatedCategoryDto implements ICreatedCategoryDto {

  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccesType)
  acces?: AccesType | undefined;
}

(async() => {

  try {
    const dto = new CreatedCategoryDto();
    dto.name = 'plastics';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }

})();
