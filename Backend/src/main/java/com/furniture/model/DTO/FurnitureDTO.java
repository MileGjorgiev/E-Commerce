package com.furniture.model.DTO;

import com.furniture.model.enumeration.Category;
import lombok.Data;

@Data
public class FurnitureDTO {

    private String name;
    private String description;
    private Long price;
    private String image;
    private int quantityInStock;
    private Category category;
    private String furnitureColor;
    public FurnitureDTO() {
    }

    public FurnitureDTO(String name, String description, Long price, String image, int quantityInStock, Category category, String furnitureColor) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.quantityInStock = quantityInStock;
        this.category = category;
        this.furnitureColor = furnitureColor;
    }
}
