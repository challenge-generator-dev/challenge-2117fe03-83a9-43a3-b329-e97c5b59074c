import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class Product {
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    constructor(id: string, name: string, price: number, description: string, category: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
    }

    static fromDTO(dto: CreateProductDTO | UpdateProductDTO): Product {
        const id = 'id' in dto && dto.id ? dto.id : '';
        return new Product(
            id,
            dto.name || '',
            dto.price || 0,
            dto.description || '',
            dto.category || ''
        );
    }

    toResponseDTO(): ProductResponseDTO {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            category: this.category
        };
    }
}

export type CreateProductDTO = {
    name: string;
    price: number;
    description: string;
    category: string;
};

export type UpdateProductDTO = {
    id?: string;
    name?: string;
    price?: number;
    description?: string;
    category?: string;
};

export type ProductResponseDTO = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
};